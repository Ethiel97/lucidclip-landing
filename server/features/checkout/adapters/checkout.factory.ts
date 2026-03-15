import {type CheckoutAdapter, PolarCheckoutAdapter} from "~/server/features/checkout";


export const createCheckoutAdapter = (): CheckoutAdapter => {

  const {
    polarCheckoutSuccessUrl,
    polarServer,
    polarAccessToken,
    polarReturnUrl,
    polarWebhookSecret,
    lifetimeProductId,
  } = useRuntimeConfig()

  return new PolarCheckoutAdapter({
    accessToken: polarAccessToken,
    server: polarServer as 'sandbox' | 'production',
    polarWebhookSecret,
    defaultSuccessUrl: polarCheckoutSuccessUrl,
    defaultReturnUrl: polarReturnUrl,
    lifetimeProductId: 'lifetime',
  })
}
