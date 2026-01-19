import { PolarCheckoutAdapter } from '~/server/features/checkout'
import { useRuntimeConfig } from '#imports'

export const createWebhookAdapter = (): WebhookAdapter => {

  const {
    polarCheckoutSuccessUrl,
    polarServer,
    polarAccessToken,
    polarReturnUrl,
    polarWebhookSecret
  } = useRuntimeConfig()

  return new PolarCheckoutAdapter({
    accessToken: polarAccessToken,
    server: polarServer as 'sandbox' | 'production',
    polarWebhookSecret,
    defaultSuccessUrl: polarCheckoutSuccessUrl,
    defaultReturnUrl: polarReturnUrl
  })
}
