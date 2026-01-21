import {createCheckoutAdapter} from "~/server/features/checkout";

export default defineEventHandler(async (event) => {
  const payload = await readBody(event);
  const adapter = createCheckoutAdapter();
  return adapter.getCustomerPortal(payload);
})
