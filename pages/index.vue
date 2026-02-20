<script setup lang="ts">
// SEO Meta
import HeroSection from "~/sections/hero/HeroSection.vue";
import FeaturesGrid from "~/sections/features/FeaturesGrid.vue";
import ProSection from "~/sections/pro/ProSection.vue";
import SecuritySection from "~/sections/privacy/PrivacySection.vue";
import PrivacyPreviewSection from "~/sections/product-preview/PrivacyPreviewSection.vue";
import ComparisonSection from "~/sections/comparison/ComparisonSection.vue";

definePageMeta({
  layout: 'main-layout'
})

useHead({
  title: 'LucidClip, Privacy-first clipboard manager that runs entirely locally',
  meta: [
    {
      name: 'description',
      content: 'LucidClip is a native clipboard manager designed for developers and power users who care about privacy, speed, and reliability.'
    },
    {
      property: 'og:title',
      content: 'LucidClip, Privacy-first clipboard manager that runs entirely locally'
    },
    {
      property: 'og:description',
      content: 'LucidClip is a native clipboard manager designed for developers and power users who care about privacy, speed, and reliability.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<template>
  <main class="w-full">
    <HeroSection/>
    <ProblemSolutionSection/>
    <PrivacyPreviewSection/>
    <FeaturesGrid/>
    <ComparisonSection/>
    <ProSection/>
    <SecuritySection/>
  </main>


</template>
