<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import {useScrollToSection} from '#shared/composables/useScrollToSection'

const {pricing} = landingContent
const {scrollToSection} = useScrollToSection()

const handleCompareClick = () => {
  scrollToSection('plans')
}
</script>

<template>
  <section class="relative overflow-hidden bg-bg pb-20 pt-28 text-text-primary sm:pb-24 sm:pt-32">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-40 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-45"
        style="background: radial-gradient(circle, rgba(97,95,255,.2), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-5xl px-6 text-center">
      <UBadge
        color="primary"
        variant="soft"
        class="rounded-pill px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]"
      >
        {{ pricing.hero.badge }}
      </UBadge>

      <h1 class="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
        <span class="block">{{ pricing.hero.headline.primary }}</span>
        <span class="block text-text-secondary">{{ pricing.hero.headline.secondary }}</span>
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-lg">
        {{ pricing.hero.subheadline }}
      </p>

      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <UButton
          size="xl"
          color="primary"
          class="rounded-pill px-7 py-3 font-semibold text-text-primary"
          to="/download"
        >
          {{ pricing.hero.cta.primary }}
        </UButton>

        <UButton
          size="xl"
          variant="soft"
          class="rounded-pill bg-surface2/80 px-7 py-3 text-text-primary ring-1 ring-border-subtle/60"
          icon="i-lucide-chevron-down"
          @click="handleCompareClick"
        >
          {{ pricing.hero.cta.secondary }}
        </UButton>
      </div>

      <p class="mt-6 text-xs text-text-muted">
        {{ pricing.hero.note }}
      </p>
    </div>
  </section>
</template>
