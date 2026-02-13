<script setup lang="ts">
import type {PricingPlan} from '#shared/content/landing'

const props = defineProps<{ plan: PricingPlan }>()
const emit = defineEmits<{ (e: 'cta', href: string): void }>()

const isPopular = computed(() => !!props.plan.badge)

const cardClass = computed(() => (
  isPopular.value
    ? 'border-primary/40 shadow-premium'
    : 'border-border-subtle/60 shadow-soft'
))

const buttonColor = computed(() => (
  props.plan.cta.variant === 'primary' ? 'primary' : 'neutral'
))

const buttonVariant = computed(() => (
  props.plan.cta.variant === 'primary' ? 'solid' : 'soft'
))

const handleCta = () => emit('cta', props.plan.cta.href)
</script>

<template>
  <UCard
    :ui="{ body: 'p-7 sm:p-8' }"
    class="relative overflow-hidden rounded-card border bg-linear-to-b from-surface/80 to-surface2/60"
    :class="cardClass"
  >
    <div
      v-if="isPopular"
      class="pointer-events-none absolute -top-16 right-6 h-32 w-32 rounded-full blur-3xl opacity-60"
      style="background: radial-gradient(circle, rgba(97,95,255,.3), transparent 65%);"
    />

    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
          {{ plan.name }}
        </p>
        <div class="mt-4 flex items-end gap-2">
          <span class="text-3xl font-semibold text-text-primary sm:text-4xl">{{ plan.price }}</span>
          <span class="pb-1 text-sm text-text-secondary">{{ plan.cadence }}</span>
        </div>
      </div>

      <UBadge
        v-if="plan.badge"
        color="primary"
        variant="soft"
        class="rounded-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]"
      >
        {{ plan.badge }}
      </UBadge>
    </div>

    <p class="mt-4 text-sm leading-relaxed text-text-secondary">
      {{ plan.description }}
    </p>

    <ul class="mt-6 space-y-3">
      <li
        v-for="(feature, index) in plan.features"
        :key="feature + index"
        class="flex items-start gap-3 text-sm text-text-secondary"
      >
        <span class="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
          <UIcon name="i-lucide-check" class="h-3.5 w-3.5 text-emerald-400" />
        </span>
        <span>{{ feature }}</span>
      </li>
    </ul>

    <UButton
      size="lg"
      :color="buttonColor"
      :variant="buttonVariant"
      class="mt-8 w-full rounded-pill py-3 font-semibold justify-center text-white"
      @click="handleCta"
    >
      {{ plan.cta.label }}
    </UButton>

    <p v-if="plan.cta.helper" class="mt-3 text-center text-xs text-text-muted">
      {{ plan.cta.helper }}
    </p>
  </UCard>
</template>
