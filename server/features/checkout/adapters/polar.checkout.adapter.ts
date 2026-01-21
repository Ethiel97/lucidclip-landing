import {Polar} from "@polar-sh/sdk";
import {H3Event} from "h3";
import type {CheckoutAdapter} from "~/server/features/checkout";
import {serverSupabaseClient, serverSupabaseServiceRole} from "#supabase/server";
import type {WebhookAdapter} from "~/server/utils/webhook";
import {validateEvent} from "@polar-sh/sdk/webhooks";
import type {SupabaseClient} from "@supabase/supabase-js";
import {CustomerPortalPayload} from "./checkout.adapter";

export type polarServer = 'sandbox' | 'production'

//TODO: add logger for observability

export class PolarCheckoutAdapter implements CheckoutAdapter, WebhookAdapter {
  private readonly _polar: Polar;

  constructor(
    private readonly config: {
      accessToken: string
      server: polarServer,
      defaultSuccessUrl: string
      defaultReturnUrl: string,
      polarWebhookSecret: string
    }
  ) {
    this._polar = new Polar({
      accessToken: this.config.accessToken,
      server: this.config.server,
    });
  }

  async getCustomerPortal(payload: CustomerPortalPayload) {

    try {
      const response = await this._polar.customers.list({
        email: payload.customerEmail,
      });

      const customers = response.result.items;

      if (customers.length === 0) {
        throw new Error("Customer not found");
      }

      const portalSession = await this._polar.customerSessions.create({
        customerId: customers[0].id,
      });

      return {
        success: true,
        data: {
          url: portalSession.customerPortalUrl,
          expiresAt: portalSession.expiresAt,
        }
      }
    } catch (e: any) {
      console.error("Failed to create customer portal session:", e);
      return {
        success: false,
        error: e.message || "Internal error"
      }
    }

  }


  async handle(payload: any, event: H3Event) {
    try {
      const checkout = await this._polar.checkouts.create({
        products: [payload.productId],
        successUrl: this.config.defaultSuccessUrl,
        customerEmail: payload.customerEmail,
        metadata: payload.metadata,
      });

      const supabase = await serverSupabaseClient(event);

      // @ts-ignore
      const {error} = await supabase
        .from('checkout_sessions')
        .upsert({
          polar_checkout_id: checkout.id,
          user_id: payload.metadata.supabaseUserId,
          email: payload.customerEmail,
        }, {
          onConflict: "polar_checkout_id"
        });

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
        error: error.message || "Internal error"
      }
    }
  }


  async handleWebhook(event: H3Event) {
    try {
      const supabase = serverSupabaseServiceRole(event);
      const rawBody = await readRawBody(event);
      const headers = getHeaders(event);


      if (!rawBody) throw createError({statusCode: 400, message: "No body"});

      // 1. Verify Signature
      let polarEvent: any;
      try {
        // @ts-ignore
        polarEvent = validateEvent(rawBody, headers, this.config.polarWebhookSecret);
      } catch (err) {
        console.error("Webhook Verification Failed", err);
        throw createError({statusCode: 401, message: "Invalid Signature"});
      }

      console.log("1- Received Polar webhook event:", polarEvent.type);

      const eventId = headers["webhook-id"] as string;
      const eventType = polarEvent.type;

      // 2. Idempotency Check
      //@ts-ignore
      const {error: evErr} = await supabase.from("webhook_events").insert({
        provider: "polar",
        event_id: eventId,
        event_type: eventType,
        payload: polarEvent,
      });

      console.log("2- Logged webhook event:", {eventId, eventType, evErr});

      if (evErr?.message.toLowerCase().includes("duplicate")) {
        return {ok: true, deduped: true};
      }

      console.log("2- Inserted webhook event:", {eventId, eventType, evErr});

      // 3. Filter Subscription Events
      const subscriptionEvents = [
        "subscription.created", // Often sent with active
        "subscription.updated",
        "subscription.active",
        "subscription.canceled",
        "subscription.past_due",
        "subscription.revoked"
      ];


      console.log("3- Processing event type:", eventType);

      if (!subscriptionEvents.includes(eventType)) {

        console.log("Ignoring non-subscription event:", eventType);
        await this.markProcessed(supabase, eventId);
        return {ok: true, ignored: true};
      }
      console.log("subscriptionEvent", polarEvent)

      const subscription = polarEvent.data;
      const customer = subscription.customer;

      // 4. Resolve User ID
      let userId = await this.resolveUserId(supabase, subscription);

      console.log("userId", userId)

      if (!userId) {
        await this.markProcessed(supabase, eventId);
        return {ok: true, mapped: false};
      }

      // 5. Sync Subscription Data & Entitlements
      await this.syncSubscription(supabase, userId, subscription);
      await this.syncEntitlements(supabase, userId, subscription);

      await this.markProcessed(supabase, eventId);

      return {ok: true, user_id: userId, status: subscription.status};
    } catch (error) {
      console.error("Webhook Error:", error);
      // @ts-ignore
      return {ok: false, error: error.message || "Internal Error"};
    }
  }

  private async resolveUserId(supabase: SupabaseClient, sub: any): Promise<string | null> {

    console.log("Resolving user ID for subscription:", sub.id);
    // Priority 1: Metadata
    if (sub.metadata?.supabaseUserId) return sub.metadata.supabaseUserId;
    if (sub.customer?.externalId) return sub.customer.externalId;

    // Priority 2: Checkout Session Mapping
    if (sub.checkoutId) {
      const {data} = await supabase
        .from("checkout_sessions")
        .select("user_id")
        .eq("polar_checkout_id", sub.checkoutId)
        .maybeSingle();
      if (data?.user_id) return data.user_id;
    }

    // Priority 3: Email Mapping
    if (sub.customer?.email) {
      const {data} = await supabase
        .from("polar_customers")
        .select("user_id")
        .eq("email", sub.customer.email)
        .maybeSingle();
      return data?.user_id ?? null;
    }

    return null;
  }

  private async syncSubscription(supabase: SupabaseClient, userId: string, subscription: any) {
    // Sync Customer
    if (subscription.customerId) {
      console.log("Syncing Polar Customer:", subscription.customerId)
      await supabase.from("polar_customers").upsert({
        user_id: userId,
        polar_customer_id: subscription.customerId,
        email: subscription.customer?.email,
      }, {onConflict: "user_id"});
    }

    console.log("Syncing Polar Subscription:", subscription.id)
    // Sync Subscription
    await supabase.from("polar_subscriptions").upsert({
      user_id: userId,
      polar_subscription_id: subscription.id,
      polar_customer_id: subscription.customerId,
      status: subscription.status,
      plan_id: subscription.productId,
      current_period_start: subscription.currentPeriodStart,
      current_period_end: subscription.currentPeriodEnd,
      cancel_at_period_end: subscription.cancelAtPeriodEnd,
      metadata: subscription.metadata ?? {},
    }, {onConflict: "polar_subscription_id"});
  }

  private async syncEntitlements(supabase: SupabaseClient, userId: string, subscription: any) {
    const now = new Date();
    const periodEnd = subscription.currentPeriodEnd ? new Date(subscription.currentPeriodEnd) : null;

    // Logic: Pro if active/past_due, or if canceled but period hasn't ended yet
    const isPro = ["active", "past_due"].includes(subscription.status) ||
      (subscription.status === "canceled" && periodEnd && periodEnd > now);

    console.log("Syncing Entitlements for user:", userId, "isPro:", isPro);
    await supabase.from("entitlements").upsert({
      user_id: userId,
      pro: isPro,
      status: subscription.status,
      valid_until: subscription.currentPeriodEnd,
      source: "polar",
    }, {onConflict: "user_id"});
  }

  private async markProcessed(supabase: SupabaseClient, eventId: string) {
    return supabase
      .from("webhook_events")
      .update({processed_at: new Date().toISOString()})
      .eq("event_id", eventId);
  }


}
