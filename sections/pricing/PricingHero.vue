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
  <PageHero
    :eyebrow="pricing.hero.badge"
    :title="`${pricing.hero.headline.primary} ${pricing.hero.headline.secondary}`"
    :subtitle="pricing.hero.subheadline"
  >
    <div class="mt-8 flex flex-wrap justify-center gap-3">
      <UButton
        size="xl"
        color="primary"
        class="rounded-pill px-6 py-3 font-medium text-text-primary shadow-glow"
        icon="i-lucide-arrow-right"
        trailing
        to="/download"
      >
        {{ pricing.hero.cta.primary }}
      </UButton>

      <UButton
        size="xl"
        variant="soft"
        class="rounded-pill bg-surface2/80 px-6 py-3 text-text-primary ring-1 ring-border-subtle/60 hover:bg-surface2"
        icon="i-lucide-chevron-down"
        @click="handleCompareClick"
      >
        {{ pricing.hero.cta.secondary }}
      </UButton>
    </div>

    <p class="mt-6 text-xs text-text-muted">
      {{ pricing.hero.note }}
    </p>
  </PageHero>
</template>
