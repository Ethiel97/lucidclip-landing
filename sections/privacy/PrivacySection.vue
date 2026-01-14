<script setup lang="ts">
import { landingContent } from '#shared/content/landing'
import FeatureCard from '~/sections/features/FeatureCard.vue'

const { privacy } = landingContent
</script>

<template>
  <section id="privacy" class="relative bg-bg py-24 sm:py-28">
    <!-- Background wash -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-65 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35" />
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <!-- Header -->
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          {{ privacy.headline }}
        </h2>
        <p class="mt-4 text-sm text-text-secondary sm:text-lg">
          {{ privacy.subheadline }}
        </p>
      </div>

      <!-- Cards -->
      <div class="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3 lg:gap-8">
        <FeatureCard
          v-for="(feature, index) in privacy.features"
          :key="index"
          :item="feature"
        />
      </div>
    </div>
  </section>
</template>
