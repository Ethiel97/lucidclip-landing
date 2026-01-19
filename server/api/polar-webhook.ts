import {createWebhookAdapter} from "~/server/utils/webhook";

export default defineEventHandler(async (event) => {

  const adapter = createWebhookAdapter()

  return adapter.handleWebhook(event)
})
