<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import FeatureCard from '~/sections/features/FeatureCard.vue'

const {privacy} = landingContent
</script>

<template>
  <section id="privacy" class="relative border-t border-white/5 bg-bg py-20 sm:py-24">
    <div class="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        :eyebrow="privacy.eyebrow"
        :title="privacy.headline"
        :subtitle="privacy.subheadline"
      />

      <div
        class="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <FeatureCard
          v-for="feature in privacy.features"
          :key="feature.title"
          :item="feature"
        />
      </div>
    </div>
  </section>
</template>
