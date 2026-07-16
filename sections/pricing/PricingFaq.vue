<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {pricing} = landingContent
</script>

<template>
  <section class="relative border-t border-white/5 bg-bg py-20 sm:py-24">
    <div class="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        :eyebrow="pricing.faq.eyebrow"
        :title="pricing.faq.headline"
        :subtitle="pricing.faq.subheadline"
      />

      <!-- single divided panel reads calmer than a grid of cards -->
      <div
        class="mx-auto mt-12 max-w-3xl divide-y divide-white/5 rounded-card border border-white/[0.06] bg-surface/40"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div
          v-for="item in pricing.faq.items"
          :key="item.question"
          class="p-6 sm:p-7"
        >
          <h3 class="flex items-start gap-3 text-[15px] font-semibold text-text-primary">
            <UIcon name="i-lucide-message-circle-question" class="mt-0.5 h-4 w-4 shrink-0 text-primary"/>
            {{ item.question }}
          </h3>
          <p class="mt-2 pl-7 text-sm leading-relaxed text-text-secondary">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
