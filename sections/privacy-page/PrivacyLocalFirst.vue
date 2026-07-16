<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {privacyPage} = landingContent
</script>

<template>
  <section class="relative border-t border-white/5 bg-bg py-14 text-text-primary sm:py-16">
    <div class="relative mx-auto max-w-3xl px-6" data-aos="fade-up" data-aos-duration="600">
      <h2 class="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight">
        <span class="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary/10 ring-1 ring-primary/20">
          <UIcon name="i-lucide-hard-drive" class="h-4 w-4 text-primary"/>
        </span>
        {{ privacyPage.localFirst.title }}
      </h2>

      <div class="mt-6 space-y-4 text-[15px] leading-relaxed text-text-secondary">
        <p v-for="paragraph in privacyPage.localFirst.body" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <p class="mt-6 border-l-2 border-primary pl-4 text-[15px] font-medium leading-relaxed text-text-primary">
        {{ privacyPage.localFirst.highlight }}
      </p>
    </div>
  </section>
</template>
