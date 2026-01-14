<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import FeatureCard from '~/sections/features/FeatureCard.vue'

const {features} = landingContent
</script>

<template>
  <section id="features" class="relative bg-bg py-28 sm:py-32">
    <!-- subtle background glow like the design -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-65 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-35"
        style="background: radial-gradient(circle, rgba(97,95,255,.14), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 class="text-3xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          {{ features.headline }}
        </h2>
        <p class="mt-4 text-sm text-text-secondary sm:text-lg">
          {{ features.subheadline }}
        </p>
      </div>

      <!-- Grid -->
      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <FeatureCard
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 200"
          v-for="(feature, index) in features.items"
          :key="feature.title + index"
          :item="feature"
        />
      </div>
    </div>
  </section>
</template>
