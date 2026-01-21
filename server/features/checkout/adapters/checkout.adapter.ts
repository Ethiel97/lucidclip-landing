import type {H3Event} from 'h3'
import type {ApiResponse} from "~/server/utils";

export interface CheckoutConfig {
  productId: string,
  customerEmail: string,
  successUrl?: string,
  returnUrl?: string,
  metadata?: Record<string, any>
}

export interface CustomerPortalPayload {
  customerEmail: string,
}


export interface CustomerPortalConfig {
  url: string,
}


export interface CheckoutAdapter {
  handle(payload: CheckoutConfig, event: H3Event): Promise<ApiResponse<any>> | ApiResponse<any>,

  getCustomerPortal(payload: CustomerPortalPayload): Promise<ApiResponse<any>> | ApiResponse<any>,
}
