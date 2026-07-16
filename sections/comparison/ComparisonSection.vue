<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {comparison} = landingContent
</script>

<template>
  <section id="comparison" class="relative border-t border-white/5 bg-bg py-20 text-text-primary sm:py-24">
    <div class="relative mx-auto max-w-6xl px-6">
      <SectionHeader
        :eyebrow="comparison.eyebrow"
        :title="comparison.headline"
        :subtitle="comparison.subheadline"
      />

      <div
        class="mt-14 overflow-hidden rounded-card border border-white/[0.08] bg-surface/40"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div class="overflow-x-auto">
          <div class="min-w-[640px] sm:min-w-[720px]">
            <!-- header row -->
            <div class="grid grid-cols-[1.6fr_repeat(3,1fr)] border-b border-white/[0.08]">
              <div class="px-6 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                {{ comparison.columns[0]?.label }}
              </div>
              <div class="border-x border-primary/15 bg-primary/[0.06] px-4 py-5 text-center">
                <div class="text-xs font-semibold uppercase tracking-[0.18em] text-text-primary">
                  {{ comparison.columns[1]?.label }}
                </div>
                <div v-if="comparison.columns[1]?.sublabel" class="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-primary">
                  {{ comparison.columns[1]?.sublabel }}
                </div>
              </div>
              <div class="px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                {{ comparison.columns[2]?.label }}
              </div>
              <div class="px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                {{ comparison.columns[3]?.label }}
              </div>
            </div>

            <!-- rows -->
            <div
              v-for="(row, index) in comparison.rows"
              :key="row.title"
              class="grid grid-cols-[1.6fr_repeat(3,1fr)]"
              :class="index === 0 ? '' : 'border-t border-white/5'"
            >
              <div class="px-6 py-4">
                <p class="text-sm font-medium text-text-primary">{{ row.title }}</p>
                <p class="mt-0.5 text-xs text-text-muted">{{ row.description }}</p>
              </div>
              <div
                v-for="(value, valueIndex) in row.values"
                :key="row.title + valueIndex"
                class="flex items-center justify-center px-4"
                :class="valueIndex === 0 ? 'border-x border-primary/15 bg-primary/[0.06]' : ''"
              >
                <UIcon
                  v-if="value === 'yes'"
                  name="i-lucide-check"
                  class="h-4.5 w-4.5"
                  :class="valueIndex === 0 ? 'text-primary' : 'text-text-secondary'"
                />
                <UIcon
                  v-else
                  name="i-lucide-minus"
                  class="h-4 w-4 text-text-muted/50"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-white/[0.08] px-6 py-8 text-center">
          <p class="text-sm text-text-muted">{{ comparison.footnote }}</p>
          <UButton
            size="lg"
            color="primary"
            class="mt-4 rounded-pill px-6 py-3 font-medium text-white"
            icon="i-lucide-arrow-right"
            trailing
            :to="comparison.cta.href"
          >
            {{ comparison.cta.label }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
