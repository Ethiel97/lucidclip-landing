<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import PricingHero from '~/sections/pricing/PricingHero.vue'
import PricingPlans from '~/sections/pricing/PricingPlans.vue'
import PricingHighlights from '~/sections/pricing/PricingHighlights.vue'
import PricingFaq from '~/sections/pricing/PricingFaq.vue'

definePageMeta({layout: 'main-layout'})

const {pricing} = landingContent

useSeoMeta({
  title: 'Pricing — LucidClip',
  description: pricing.hero.subheadline,
  ogTitle: 'Pricing — LucidClip',
  ogDescription: pricing.hero.subheadline,
  ogType: 'website'
})
</script>

<template>
  <main class="w-full">
    <PricingHero/>
    <PricingPlans/>
    <PricingHighlights/>
    <PricingFaq/>
  </main>
</template>
