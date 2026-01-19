import {Polar} from "@polar-sh/sdk";
import {H3Event} from "h3";
import type {CheckoutAdapter} from "~/server/features/checkout";
import { serverSupabaseClient } from "#supabase/server";

export type polarServer = 'sandbox' | 'production'

export class PolarCheckoutAdapter implements CheckoutAdapter {
  private readonly _polar: Polar;

  constructor(
    private readonly config: {
      accessToken: string
      server: polarServer,
      defaultSuccessUrl: string
      defaultReturnUrl: string,
    }
  ) {
    this._polar = new Polar({
      accessToken: this.config.accessToken,
      server: this.config.server,
    });
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
}
