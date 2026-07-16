<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {privacyPage} = landingContent

const titleParts = computed(() => {
  const title = privacyPage.neverDo.title
  const match = title.toLowerCase().indexOf('never')
  if (match === -1) {
    return {before: title, emphasis: '', after: ''}
  }
  return {
    before: title.slice(0, match),
    emphasis: title.slice(match, match + 5),
    after: title.slice(match + 5)
  }
})
</script>

<template>
  <section class="relative border-t border-white/5 bg-bg py-14 text-text-primary sm:py-16">
    <div class="relative mx-auto max-w-3xl px-6" data-aos="fade-up" data-aos-duration="600">
      <h2 class="text-center font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {{ titleParts.before }}
        <span v-if="titleParts.emphasis" class="text-red-400">{{ titleParts.emphasis }}</span>
        <span v-if="titleParts.after">{{ titleParts.after }}</span>
      </h2>

      <div class="mt-10 grid gap-x-8 gap-y-4 rounded-card border border-white/[0.06] bg-surface/40 p-7 sm:grid-cols-2 sm:p-8">
        <div
          v-for="item in privacyPage.neverDo.items"
          :key="item"
          class="flex items-start gap-2.5 text-sm text-text-secondary"
        >
          <UIcon name="i-lucide-x" class="mt-0.5 h-4 w-4 shrink-0 text-red-400/80"/>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
