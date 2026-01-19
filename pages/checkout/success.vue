<!-- pages/checkout/success.vue -->
<script setup lang="ts">
import CheckoutResultCard from '~/components/checkout/CheckoutResultCard.vue'
import {landingContent} from "#shared/content/landing";

definePageMeta({layout: 'main-layout'})

useSeoMeta({
  title: 'Subscription activated — LucidClip',
  description: 'Your subscription is active. Open LucidClip to continue.',
})


const success = landingContent.checkout.success
const route = useRoute()
const {open} = useOpenLucidClip()

const token = computed(() => {
  const v = route.query.customer_session_token
  return typeof v === 'string' ? v : ''
})

const openApp = () => open('upgrade/success', token.value ? {customer_session_token: token.value} : undefined)
</script>

<template>

  <CheckoutResultShell>
    <CheckoutResultCard
      tone="success"
      :title="success.title"
      :subtitle="success.subtitle"
      :message="success.message"
      :primary-action="{
      label: success.primaryCtaLabel,
      trailingIcon: 'lucide:external-link',
      onClick: openApp
    }"
      :secondary-action="{
      label: success.secondaryCtaLabel,
      icon: 'lucide:arrow-left',
      href: '/'
    }"
      footer-note="You can close this page once the app opens."
      aos-card="fade-up"
      aos-icon="zoom-in"
      aos-title="fade-up"
      aos-subtitle="fade-up"
      aos-message="fade"
      aos-actions="fade-up"
      aos-footer="fade"
    />
  </CheckoutResultShell>
  />
</template>
