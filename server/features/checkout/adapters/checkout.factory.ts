import {type CheckoutAdapter, PolarCheckoutAdapter} from "~/server/features/checkout";


export const createCheckoutAdapter = (): CheckoutAdapter => {

  const {polarCheckoutSuccessUrl, polarServer, polarAccessToken, polarReturnUrl} = useRuntimeConfig()

  return new PolarCheckoutAdapter({
    accessToken: polarAccessToken,
    server: polarServer,
    defaultSuccessUrl: polarCheckoutSuccessUrl,
    defaultReturnUrl: polarReturnUrl
  })
}
