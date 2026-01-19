import type {H3Event} from 'h3'

export interface CheckoutConfig {
  productId: string,
  customerEmail: string,
  successUrl?: string,
  returnUrl?: string,
  metadata?: Record<string, any>
}


export interface CheckoutAdapter {
  handle(payload: CheckoutConfig, event: H3Event): Promise<unknown> | unknown
}
