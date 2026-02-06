<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {pricing} = landingContent
</script>

<template>
  <section class="relative bg-bg py-24 sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-65 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-25"
        style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-3xl text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 class="text-3xl font-semibold tracking-tight text-text-primary sm:text-5xl">
          {{ pricing.faq.headline }}
        </h2>
        <p class="mt-4 text-sm text-text-secondary sm:text-lg">
          {{ pricing.faq.subheadline }}
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <UCard
          v-for="(item, index) in pricing.faq.items"
          :key="item.question"
          :ui="{ body: 'p-6 sm:p-7' }"
          class="border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 shadow-soft"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 150"
        >
          <h3 class="text-base font-semibold text-text-primary">
            {{ item.question }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-text-secondary">
            {{ item.answer }}
          </p>
        </UCard>
      </div>
    </div>
  </section>
</template>
