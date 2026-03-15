import {Polar} from "@polar-sh/sdk";
import {validateEvent} from "@polar-sh/sdk/webhooks";
import {createError, getHeaders, H3Event, readRawBody,} from "h3";
import type {SupabaseClient} from "@supabase/supabase-js";
import {serverSupabaseClient, serverSupabaseServiceRole,} from "#supabase/server";

import type {CheckoutAdapter} from "~/server/features/checkout";
import type {WebhookAdapter} from "~/server/utils/webhook";
import type {CustomerPortalPayload} from "./checkout.adapter";

export type PolarServer = "sandbox" | "production";

type NormalizedSubscription = {
  id: string | null;
  status: string | null;
  checkoutId: string | null;
  customerId: string | null;
  customerEmail: string | null;
  externalId: string | null;
  productId: string | null;
  currentPeriodStart: string | null;
  currentPeriodEnd: string | null;
  cancelAtPeriodEnd: boolean | null;
  metadata: Record<string, any>;
};

type NormalizedOrder = {
  id: string | null;
  status: string | null;
  checkoutId: string | null;
  customerId: string | null;
  customerEmail: string | null;
  externalId: string | null;
  productId: string | null;
  productPriceType: string | null;
  metadata: Record<string, any>;
};

export class PolarCheckoutAdapter
  implements CheckoutAdapter, WebhookAdapter {
  private readonly polar: Polar;

  constructor(
    private readonly config: {
      accessToken: string;
      server: PolarServer;
      defaultSuccessUrl: string;
      defaultReturnUrl: string;
      polarWebhookSecret: string;
      lifetimeProductId: string;
    }
  ) {
    this.polar = new Polar({
      accessToken: config.accessToken,
      server: config.server,
    });
  }

  async handle(payload: any, event: H3Event) {
    try {
      const checkout = await this.polar.checkouts.create({
        products: [payload.productId],
        successUrl: this.config.defaultSuccessUrl,
        customerEmail: payload.customerEmail,
        metadata: payload.metadata,
      });

      const supabase = await serverSupabaseClient(event);

      //@ts-ignore - Supabase types are outdated and don't recognize upsert with onConflict
      const {error} = await supabase.from("checkout_sessions").upsert(
        {
          polar_checkout_id: checkout.id,
          user_id: payload.metadata?.supabaseUserId,
          email: payload.customerEmail,
        },
        {
          onConflict: "polar_checkout_id",
        }
      );

      if (error) throw error;

      return {
        success: true,
        data: {
          checkoutId: checkout.id,
          checkoutUrl: checkout.url,
          expiresAt: checkout.expiresAt,
        },
      };
    } catch (error: any) {
      console.error("Failed to create Polar checkout session:", error);

      return {
        success: false,
        error: error.message || "Internal error",
      };
    }
  }

  async getCustomerPortal(payload: CustomerPortalPayload) {
    try {
      const response = await this.polar.customers.list({
        email: payload.customerEmail,
      });

      const customer = response.result.items.find(
        (item) => item.email === payload.customerEmail
      );

      if (!customer) {
        throw new Error("Customer not found");
      }

      const session = await this.polar.customerSessions.create({
        customerId: customer.id,
      });

      return {
        success: true,
        data: {
          url: session.customerPortalUrl,
          expiresAt: session.expiresAt,
        },
      };
    } catch (error: any) {
      console.error("Failed to create customer portal session:", error);

      return {
        success: false,
        error: error.message || "Internal error",
      };
    }
  }

  async handleWebhook(event: H3Event) {
    try {
      const supabase = serverSupabaseServiceRole(event);
      const rawBody = await readRawBody(event);
      const headers = getHeaders(event);

      if (!rawBody) {
        throw createError({statusCode: 400, message: "No body"});
      }

      const polarEvent = validateEvent(
        rawBody,
        //@ts-ignore
        headers,
        this.config.polarWebhookSecret
      ) as { type: string; data: any };

      const eventId = String(headers["webhook-id"] ?? crypto.randomUUID());
      const eventType = polarEvent.type;

      const isDuplicate = await this.insertWebhookEvent(
        supabase,
        eventId,
        eventType,
        polarEvent
      );

      if (isDuplicate) {
        return {ok: true, deduped: true};
      }

      switch (eventType) {
        case "subscription.created":
        case "subscription.updated":
        case "subscription.active":
        case "subscription.canceled":
        case "subscription.past_due":
        case "subscription.revoked":
          return await this.handleSubscriptionEvent(
            supabase,
            eventId,
            polarEvent.data
          );

        case "order.paid":
          return await this.handleOrderPaid(
            supabase,
            eventId,
            polarEvent.data
          );

        case "order.refunded":
          return await this.handleOrderRefunded(
            supabase,
            eventId,
            polarEvent.data
          );

        default:
          await this.markProcessed(supabase, eventId);
          return {ok: true, ignored: true};
      }
    } catch (error: any) {
      console.error("Webhook Error:", error);

      return {
        ok: false,
        error: error.message || "Internal Error",
      };
    }
  }

  private async handleSubscriptionEvent(
    supabase: SupabaseClient,
    eventId: string,
    rawSubscription: any
  ) {
    const subscription = this.normalizeSubscription(rawSubscription);

    const userId = await this.resolveUserId(supabase, {
      metadata: subscription.metadata,
      externalId: subscription.externalId,
      checkoutId: subscription.checkoutId,
      email: subscription.customerEmail,
    });

    if (!userId) {
      await this.markProcessed(supabase, eventId);
      return {ok: true, mapped: false};
    }

    if (subscription.customerId) {
      await supabase.from("polar_customers").upsert(
        {
          user_id: userId,
          polar_customer_id: subscription.customerId,
          email: subscription.customerEmail,
        },
        {onConflict: "user_id"}
      );
    }

    await supabase.from("polar_subscriptions").upsert(
      {
        user_id: userId,
        polar_subscription_id: subscription.id,
        polar_customer_id: subscription.customerId,
        status: subscription.status,
        plan_id: subscription.productId,
        current_period_start: subscription.currentPeriodStart,
        current_period_end: subscription.currentPeriodEnd,
        cancel_at_period_end: subscription.cancelAtPeriodEnd,
        metadata: subscription.metadata,
      },
      {onConflict: "polar_subscription_id"}
    );

    const now = new Date();
    const periodEnd = subscription.currentPeriodEnd
      ? new Date(subscription.currentPeriodEnd)
      : null;

    const isPro =
      ["active", "trialing", "past_due"].includes(subscription.status ?? "") ||
      (subscription.status === "canceled" && !!periodEnd && periodEnd > now);

    await supabase.from("entitlements").upsert(
      {
        user_id: userId,
        pro: isPro,
        status: subscription.status,
        valid_until: subscription.currentPeriodEnd,
        source: "polar",
      },
      {onConflict: "user_id"}
    );

    await this.markProcessed(supabase, eventId);

    return {
      ok: true,
      user_id: userId,
      status: subscription.status,
    };
  }

  private async handleOrderPaid(
    supabase: SupabaseClient,
    eventId: string,
    rawOrder: any
  ) {
    const order = this.normalizeOrder(rawOrder);

    const isLifetime =
      order.productPriceType === "one_time" &&
      order.productId === this.config.lifetimeProductId;

    if (!isLifetime) {
      await this.markProcessed(supabase, eventId);
      return {ok: true, ignored: true};
    }

    const userId = await this.resolveUserId(supabase, {
      metadata: order.metadata,
      externalId: order.externalId,
      checkoutId: order.checkoutId,
      email: order.customerEmail,
    });

    if (!userId) {
      await this.markProcessed(supabase, eventId);
      return {ok: true, mapped: false};
    }

    await supabase.from("entitlements").upsert(
      {
        user_id: userId,
        pro: true,
        status: "lifetime",
        valid_until: null,
        source: "polar",
      },
      {onConflict: "user_id"}
    );

    await this.markProcessed(supabase, eventId);

    return {
      ok: true,
      user_id: userId,
      status: order.status,
    };
  }

  private async handleOrderRefunded(
    supabase: SupabaseClient,
    eventId: string,
    rawOrder: any
  ) {
    const order = this.normalizeOrder(rawOrder);

    const isLifetime =
      order.productPriceType === "one_time" &&
      order.productId === this.config.lifetimeProductId;

    if (!isLifetime) {
      await this.markProcessed(supabase, eventId);
      return {ok: true, ignored: true};
    }

    const userId = await this.resolveUserId(supabase, {
      metadata: order.metadata,
      externalId: order.externalId,
      checkoutId: order.checkoutId,
      email: order.customerEmail,
    });

    if (!userId) {
      await this.markProcessed(supabase, eventId);
      return {ok: true, mapped: false};
    }

    const {data} = await supabase
      .from("entitlements")
      .select("status")
      .eq("user_id", userId)
      .maybeSingle();

    if (data?.status === "lifetime") {
      await supabase.from("entitlements").upsert(
        {
          user_id: userId,
          pro: false,
          status: "inactive",
          valid_until: new Date().toISOString(),
          source: "polar",
        },
        {onConflict: "user_id"}
      );
    }

    await this.markProcessed(supabase, eventId);

    return {
      ok: true,
      user_id: userId,
      status: order.status,
    };
  }

  private normalizeSubscription(subscription: any): NormalizedSubscription {
    return {
      id: subscription?.id ?? null,
      status: subscription?.status ?? null,
      checkoutId: subscription?.checkoutId ?? subscription?.checkout_id ?? null,
      customerId: subscription?.customerId ?? subscription?.customer_id ?? null,
      customerEmail: subscription?.customer?.email ?? null,
      externalId:
        subscription?.customer?.externalId ??
        subscription?.customer?.external_id ??
        null,
      productId:
        subscription?.productId ??
        subscription?.product_id ??
        subscription?.product?.id ??
        null,
      currentPeriodStart:
        subscription?.currentPeriodStart ??
        subscription?.current_period_start ??
        null,
      currentPeriodEnd:
        subscription?.currentPeriodEnd ??
        subscription?.current_period_end ??
        null,
      cancelAtPeriodEnd:
        subscription?.cancelAtPeriodEnd ??
        subscription?.cancel_at_period_end ??
        null,
      metadata: subscription?.metadata ?? {},
    };
  }

  private normalizeOrder(order: any): NormalizedOrder {
    return {
      id: order?.id ?? null,
      status: order?.status ?? null,
      checkoutId: order?.checkoutId ?? order?.checkout_id ?? null,
      customerId: order?.customerId ?? order?.customer_id ?? null,
      customerEmail: order?.customer?.email ?? null,
      externalId: order?.customer?.externalId ?? order?.customer?.external_id ?? null,
      productId: order?.productId ?? order?.product_id ?? order?.product?.id ?? null,
      productPriceType:
        order?.productPrice?.type ?? order?.product_price?.type ?? null,
      metadata: order?.metadata ?? {},
    };
  }

  private async resolveUserId(
    supabase: SupabaseClient,
    payload: {
      metadata?: Record<string, any>;
      externalId?: string | null;
      checkoutId?: string | null;
      email?: string | null;
    }
  ): Promise<string | null> {
    if (payload.metadata?.supabaseUserId) {
      return payload.metadata.supabaseUserId;
    }

    if (payload.externalId) {
      return payload.externalId;
    }

    if (payload.checkoutId) {
      const {data} = await supabase
        .from("checkout_sessions")
        .select("user_id")
        .eq("polar_checkout_id", payload.checkoutId)
        .maybeSingle();

      if (data?.user_id) return data.user_id;
    }

    if (payload.email) {
      const {data} = await supabase
        .from("polar_customers")
        .select("user_id")
        .eq("email", payload.email)
        .maybeSingle();

      if (data?.user_id) return data.user_id;
    }

    return null;
  }

  private async insertWebhookEvent(
    supabase: SupabaseClient,
    eventId: string,
    eventType: string,
    payload: any
  ): Promise<boolean> {
    const {error} = await supabase.from("webhook_events").insert({
      provider: "polar",
      event_id: eventId,
      event_type: eventType,
      payload,
    });

    if (!error) return false;

    const message = error.message?.toLowerCase() ?? "";
    if (message.includes("duplicate") || message.includes("unique")) {
      return true;
    }

    throw error;
  }

  private async markProcessed(supabase: SupabaseClient, eventId: string) {
    await supabase
      .from("webhook_events")
      .update({
        processed_at: new Date().toISOString(),
      })
      .eq("event_id", eventId);
  }
}
