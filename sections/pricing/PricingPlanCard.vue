<script setup lang="ts">
import type {PricingPlan} from '#shared/content/landing'

const props = defineProps<{ plan: PricingPlan }>()
const emit = defineEmits<{ (e: 'cta', href: string): void }>()

const isPopular = computed(() => !!props.plan.badge)

// entries ending with ':' are group labels ("Everything in Free, plus:"), not features
const isLabel = (feature: string) => feature.endsWith(':')

const handleCta = () => emit('cta', props.plan.cta.href)
</script>

<template>
  <!-- popular plan gets the brand gradient border, others stay quiet -->
  <div
    class="h-full rounded-card p-px"
    :class="isPopular
      ? 'bg-linear-to-b from-primary/50 via-primary/15 to-transparent'
      : 'bg-white/[0.06]'"
  >
    <article
      class="relative flex h-full flex-col overflow-hidden rounded-[13px] p-7 sm:p-8"
      :class="isPopular ? 'bg-[#0a0b15]' : 'bg-surface/60'"
    >
      <div
        v-if="isPopular"
        class="pointer-events-none absolute -top-20 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full blur-3xl"
        style="background: radial-gradient(closest-side, rgba(97,95,255,.2), transparent 70%);"
      />

      <div class="relative">
        <div class="flex items-start justify-between gap-4">
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
            {{ plan.name }}
          </p>
          <span
            v-if="plan.badge"
            class="rounded-pill bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary ring-1 ring-primary/25"
          >
            {{ plan.badge }}
          </span>
        </div>

        <div class="mt-4 flex items-end gap-2">
          <span class="font-display text-4xl font-semibold tracking-tight text-text-primary">{{ plan.price }}</span>
          <span class="pb-1 text-sm text-text-muted">{{ plan.cadence }}</span>
        </div>

        <p class="mt-3 text-sm leading-relaxed text-text-secondary">
          {{ plan.description }}
        </p>

        <div class="mt-6 border-t border-white/5 pt-6">
          <ul class="space-y-3">
            <li
              v-for="(feature, index) in plan.features"
              :key="feature + index"
              class="flex items-start gap-2.5 text-sm"
              :class="isLabel(feature) ? 'text-xs font-medium uppercase tracking-wider text-text-muted' : 'text-text-secondary'"
            >
              <UIcon
                v-if="!isLabel(feature)"
                name="i-lucide-check"
                class="mt-0.5 h-4 w-4 shrink-0 text-primary"
              />
              <span>{{ isLabel(feature) ? feature.slice(0, -1) : feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="relative mt-auto pt-8">
        <UButton
          size="lg"
          :color="plan.cta.variant === 'primary' ? 'primary' : 'neutral'"
          :variant="plan.cta.variant === 'primary' ? 'solid' : 'soft'"
          class="w-full justify-center rounded-pill py-3 font-medium transition-all duration-200"
          :class="plan.cta.variant === 'primary'
            ? 'text-text-primary shadow-glow'
            : 'bg-white/[0.04] text-text-primary ring-1 ring-white/10 hover:ring-primary/40'"
          @click="handleCta"
        >
          {{ plan.cta.label }}
        </UButton>

        <p v-if="plan.cta.helper" class="mt-3 text-center text-xs text-text-muted">
          {{ plan.cta.helper }}
        </p>
      </div>
    </article>
  </div>
</template>
