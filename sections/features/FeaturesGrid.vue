<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import FeatureBentoCard from '~/sections/features/FeatureBentoCard.vue'

const {features} = landingContent

// bento spans on a 6-column grid, keyed by visual
const spanFor = (visual?: string) => {
  switch (visual) {
    case 'search':
    case 'ai':
      return 'sm:col-span-2 lg:col-span-4'
    case 'context':
    case 'sync':
      return 'lg:col-span-3'
    default:
      return 'lg:col-span-2'
  }
}
</script>

<template>
  <section id="features" class="relative border-t border-white/5 bg-bg py-20 sm:py-24">
    <div class="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        :eyebrow="features.eyebrow"
        :title="features.headline"
        :subtitle="features.subheadline"
      />

      <!-- Bento grid -->
      <div
        class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <FeatureBentoCard
          v-for="feature in features.items"
          :key="feature.title"
          :item="feature"
          :class="spanFor(feature.visual)"
        />
      </div>
    </div>
  </section>
</template>
