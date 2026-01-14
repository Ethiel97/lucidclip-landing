<script setup lang="ts">
import ProBadge from '~/sections/pro/ProBadge.vue'
import {landingContent} from '#shared/content/landing'
import FeatureCard from "~/sections/features/FeatureCard.vue";

const {pro} = landingContent

const scrollToWaitlist = () => {
  const element = document.querySelector('#waitlist')
  element?.scrollIntoView({behavior: 'smooth'})
}
</script>

<template>
  <section id="pro" class="relative bg-bg py-24 sm:py-28 text-text-primary">
    <!-- subtle background like the design -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-65 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-35"
        style="background: radial-gradient(circle, rgba(97,95,255,.14), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <!-- Outer panel -->
      <div
        class="
          mx-auto max-w-5xl overflow-hidden rounded-[22px]
          border border-border-subtle/60
          bg-linear-to-b from-surface/70 to-surface2/60
          shadow-soft
        "
      >
        <div class="px-8 py-12 sm:px-12 sm:py-14">
          <!-- Header -->
          <div class="max-w-2xl">
            <ProBadge :label="pro.badge" class="mb-5"/>

            <h2 class="text-3xl font-semibold tracking-tight sm:text-5xl">
              {{ pro.headline }}
            </h2>

            <p class="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {{ pro.subheadline }}
            </p>
          </div>

          <!-- PRO cards -->
          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <FeatureCard
              v-for="(item, index) in pro.items"
              :key="index"
              :item="item"
            />
          </div>

          <!-- CTA -->
          <div class="mt-12 flex flex-col items-center justify-center gap-3">
            <UButton
              color="primary"
              size="xl"
              class="rounded-pill px-8 py-4 font-semibold text-text-primary"
              @click="scrollToWaitlist"
            >
              {{ pro.cta.label }}
            </UButton>

            <p class="text-sm text-textMuted">
              {{ pro.cta.helper }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
