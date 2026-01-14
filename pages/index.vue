<script setup lang="ts">
// SEO Meta
import HeroSection from "~/sections/hero/HeroSection.vue";
import FeaturesGrid from "~/sections/features/FeaturesGrid.vue";
import ProSection from "~/sections/pro/ProSection.vue";
import SecuritySection from "~/sections/privacy/PrivacySection.vue";

definePageMeta({
  layout: 'main-layout'
})

useHead({
  title: 'LucidClip - Your Clipboard, Supercharged',
  meta: [
    {
      name: 'description',
      content: 'LucidClip is the intelligent clipboard manager that remembers everything you copy. Search, organize, and sync your clipboard history across all your devices.'
    },
    {
      property: 'og:title',
      content: 'LucidClip - Your Clipboard, Supercharged'
    },
    {
      property: 'og:description',
      content: 'LucidClip is the intelligent clipboard manager that remembers everything you copy. Search, organize, and sync your clipboard history across all your devices.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>

<template>
  <!--    <HeaderBar/>-->

  <main>
    <HeroSection/>
    <ProblemSolutionSection/>
    <FeaturesGrid/>
    <ProSection/>
    <SecuritySection/>
    <WaitlistSection/>
  </main>


</template>
