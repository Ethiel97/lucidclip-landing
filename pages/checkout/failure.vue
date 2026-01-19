<!-- pages/checkout/cancel.vue -->
<script setup lang="ts">
import CheckoutResultCard from '~/components/checkout/CheckoutResultCard.vue'
import {useSeoMeta} from "#imports";
import {landingContent} from "#shared/content/landing";

definePageMeta({layout: 'main-layout'})

useSeoMeta({
  title: 'Checkout canceled — LucidClip',
  description: 'No payment was made. You can try again anytime.',
})

const {open} = useOpenLucidClip()
const failure = landingContent.checkout.failure
const tryAgain = () => open('cancel',)

const back = () => navigateTo('/')
</script>

<template>

  <CheckoutResultShell>
    <CheckoutResultCard
      tone="error"
      :title="failure.title"
      :subtitle="failure.subtitle"
      :message="failure.message"
      :footer-note="failure.footerNote"
      :primary-action="{
      label: failure.primaryCtaLabel,
      trailingIcon: 'lucide:arrow-right',
      onClick: tryAgain,
    }"
      :secondary-action="{
      label: failure.secondaryCtaLabel,
      icon: 'lucide:external-link',
      onClick: back,
    }"
      aos-card="fade-up"
      aos-icon="zoom-in"
      aos-title="fade-up"
      aos-subtitle="fade-up"
      aos-message="fade-up"
      aos-actions="fade-up"
      aos-footer="fade"
    />
  </CheckoutResultShell>
</template>
