import {createCheckoutAdapter} from "~/server/features/checkout";

export default defineEventHandler(async (event) => {

  const adapter = createCheckoutAdapter()

  const body = await readBody(event);

  return adapter.handle(body, event)
})
