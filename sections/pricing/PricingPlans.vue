<script setup lang="ts">
import type {PricingPlan} from '#shared/content/landing'
import {landingContent} from '#shared/content/landing'
import {useScrollToSection} from '#shared/composables/useScrollToSection'
import PricingPlanCard from '~/sections/pricing/PricingPlanCard.vue'

const {pricing} = landingContent
const {scrollToSection} = useScrollToSection()
const billingCycle = ref<'monthly' | 'annual'>('monthly')

const plansByName = computed(() => {
  const map = new Map<string, PricingPlan>()
  pricing.plans.items.forEach((plan) => map.set(plan.name, plan))
  return map
})

const visiblePlans = computed<PricingPlan[]>(() => {
  const free = plansByName.value.get('Free')
  const proMonthly = plansByName.value.get('Pro')
  const proAnnual = plansByName.value.get('Pro Annual')
  const lifetime = plansByName.value.get('Lifetime')

  const pro = billingCycle.value === 'annual' ? proAnnual : proMonthly

  return [free, pro, lifetime].filter((plan): plan is PricingPlan => !!plan)
})

const handleCta = async (href: string) => {
  if (href.startsWith('#')) {
    scrollToSection(href)
    return
  }
  await navigateTo(href)
}
</script>

<template>
  <section id="plans" class="relative border-t border-white/5 bg-bg py-20 text-text-primary sm:py-24">
    <div class="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        :eyebrow="pricing.plans.eyebrow"
        :title="pricing.plans.headline"
        :subtitle="pricing.plans.subheadline"
      />

      <!-- billing toggle -->
      <div class="mt-8 flex justify-center">
        <div class="flex items-center gap-1 rounded-pill border border-white/10 bg-surface/60 p-1">
          <button
            type="button"
            class="rounded-pill px-5 py-2 text-sm font-medium transition-colors"
            :class="billingCycle === 'monthly'
              ? 'bg-primary text-text-primary'
              : 'text-text-secondary hover:text-text-primary'"
            @click="billingCycle = 'monthly'"
          >
            Monthly
          </button>
          <button
            type="button"
            class="flex items-center gap-2 rounded-pill px-5 py-2 text-sm font-medium transition-colors"
            :class="billingCycle === 'annual'
              ? 'bg-primary text-text-primary'
              : 'text-text-secondary hover:text-text-primary'"
            @click="billingCycle = 'annual'"
          >
            Yearly
            <span
              class="rounded-pill px-1.5 py-0.5 text-[10px] font-semibold"
              :class="billingCycle === 'annual' ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary'"
            >
              −21%
            </span>
          </button>
        </div>
      </div>

      <div
        class="mt-10 grid gap-4 lg:grid-cols-3"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <PricingPlanCard
          v-for="plan in visiblePlans"
          :key="plan.name"
          :plan="plan"
          @cta="handleCta"
        />
      </div>

      <p class="mt-10 text-center text-xs text-text-muted">
        {{ pricing.plans.footnote }}
      </p>
    </div>
  </section>
</template>
