<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import {useScrollToSection} from '#shared/composables/useScrollToSection'
import PricingPlanCard from '~/sections/pricing/PricingPlanCard.vue'

const {pricing} = landingContent
const {scrollToSection} = useScrollToSection()

const handleCta = async (href: string) => {
  if (href.startsWith('#')) {
    scrollToSection(href)
    return
  }
  await navigateTo(href)
}
</script>

<template>
  <section id="plans" class="relative bg-bg py-24 text-text-primary sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-65 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style="background: radial-gradient(circle, rgba(97,95,255,.14), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-3xl text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <h2 class="text-3xl font-semibold tracking-tight sm:text-5xl">
          {{ pricing.plans.headline }}
        </h2>
        <p class="mt-4 text-sm text-text-secondary sm:text-lg">
          {{ pricing.plans.subheadline }}
        </p>
      </div>

      <div class="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
        <PricingPlanCard
          v-for="(plan, index) in pricing.plans.items"
          :key="plan.name"
          :plan="plan"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 200"
          @cta="handleCta"
        />
      </div>

      <p class="mt-10 text-center text-xs text-text-muted">
        {{ pricing.plans.footnote }}
      </p>
    </div>
  </section>
</template>
