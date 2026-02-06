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
  <section class="relative bg-bg py-12 text-text-primary sm:py-16">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-60 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-20"
        style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-4xl px-6">
      <h2 class="text-center text-xl font-semibold text-text-primary sm:text-2xl" data-aos="fade-up" data-aos-duration="1000">
        {{ titleParts.before }}
        <span v-if="titleParts.emphasis" class="text-red-400">{{ titleParts.emphasis }}</span>
        <span v-if="titleParts.after">{{ titleParts.after }}</span>
      </h2>

      <UCard
        :ui="{ body: 'p-6 sm:p-8' }"
        class="mt-8 border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 shadow-soft"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="150"
      >
        <div class="grid gap-4 sm:grid-cols-2">
          <div
            v-for="(item, index) in privacyPage.neverDo.items"
            :key="item + index"
            class="flex items-start gap-3 text-sm text-text-secondary"
          >
            <span class="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 ring-1 ring-red-500/30">
              <UIcon name="i-lucide-x" class="h-3.5 w-3.5 text-red-400" />
            </span>
            <span>{{ item }}</span>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
