<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import FeatureCard from '~/sections/features/FeatureCard.vue'

const {pricing} = landingContent
</script>

<template>
  <section class="relative border-t border-white/5 bg-bg py-20 sm:py-24">
    <div class="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        :eyebrow="pricing.highlights.eyebrow"
        :title="pricing.highlights.headline"
        :subtitle="pricing.highlights.subheadline"
      />

      <div
        class="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <FeatureCard
          v-for="(item, index) in pricing.highlights.items"
          :key="item.title + index"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>
