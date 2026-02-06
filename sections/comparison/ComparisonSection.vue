<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {comparison} = landingContent

const iconForValue = (value: 'yes' | 'no') => (
  value === 'yes' ? 'i-lucide-check' : 'i-lucide-x'
)

const iconClassForValue = (value: 'yes' | 'no') => (
  value === 'yes' ? 'text-primary' : 'text-text-muted'
)
</script>

<template>
  <section id="comparison" class="relative bg-bg py-20 text-text-primary sm:py-24">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-60 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style="background: radial-gradient(circle, rgba(97,95,255,.14), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-3xl text-center" data-aos="fade-up" data-aos-duration="1000">
        <h2 class="text-3xl font-semibold tracking-tight sm:text-5xl">
          {{ comparison.headline }}
        </h2>
        <p class="mt-4 text-sm text-text-secondary sm:text-lg">
          {{ comparison.subheadline }}
        </p>
      </div>

      <div class="mt-12 overflow-hidden rounded-[18px] border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 shadow-soft">
        <div class="overflow-x-auto">
          <div class="min-w-[720px]">
            <div class="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-4 border-b border-border-subtle/50 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
              <div>{{ comparison.columns[0]?.label }}</div>
              <div class="text-center">
                <div class="text-text-primary">{{ comparison.columns[1]?.label }}</div>
                <div v-if="comparison.columns[1]?.sublabel" class="mt-1 text-[10px] text-primary">
                  {{ comparison.columns[1]?.sublabel }}
                </div>
              </div>
              <div class="text-center">{{ comparison.columns[2]?.label }}</div>
              <div class="text-center">{{ comparison.columns[3]?.label }}</div>
            </div>

            <div
              v-for="(row, index) in comparison.rows"
              :key="row.title"
              class="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-4 px-6 py-4"
              :class="index === 0 ? '' : 'border-t border-border-subtle/40'"
            >
              <div>
                <p class="text-sm font-semibold text-text-primary">{{ row.title }}</p>
                <p class="mt-1 text-xs text-text-muted">{{ row.description }}</p>
              </div>
              <div
                v-for="(value, valueIndex) in row.values"
                :key="row.title + valueIndex"
                class="flex items-center justify-center"
              >
                <span class="flex h-7 w-7 items-center justify-center rounded-full bg-surface2/80 ring-1 ring-border-subtle/60">
                  <UIcon :name="iconForValue(value)" class="h-4 w-4" :class="iconClassForValue(value)" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-border-subtle/50 px-6 py-6 text-center">
          <p class="text-xs text-text-muted">{{ comparison.footnote }}</p>
          <UButton
            size="lg"
            color="primary"
            class="mt-4 rounded-pill px-6 py-3 font-semibold text-white"
            :to="comparison.cta.href"
          >
            {{ comparison.cta.label }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
