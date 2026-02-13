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
  title: 'LucidClip - Your Clipboard, Supercharged',
  meta: [
    {
      name: 'description',
      content: 'A native desktop clipboard manager that turns every copy into an organized, searchable working memory, fast, quiet and built for focus'
    },
    {
      property: 'og:title',
      content: 'LucidClip - Your Clipboard, Supercharged'
    },
    {
      property: 'og:description',
      content: 'A native desktop clipboard manager that turns every copy into an organized, searchable working memory, fast, quiet and built for focus'
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
