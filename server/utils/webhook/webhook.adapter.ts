import {H3Event} from 'h3';

export interface WebhookAdapter {
  handleWebhook(event: H3Event): Promise<unknown> | unknown
}
