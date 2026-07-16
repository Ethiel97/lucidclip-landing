<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {privacyPage} = landingContent
</script>

<template>
  <section class="relative bg-bg py-14 text-text-primary sm:py-16">
    <div class="relative mx-auto max-w-3xl px-6" data-aos="fade-up" data-aos-duration="600">
      <div class="flex items-start gap-4 rounded-card border border-amber-400/15 bg-amber-400/[0.04] p-6 sm:p-7">
        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-amber-400/10 ring-1 ring-amber-400/25">
          <UIcon name="i-lucide-triangle-alert" class="h-4 w-4 text-amber-400"/>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-text-primary">
            {{ privacyPage.disclaimer.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-text-secondary">
            {{ privacyPage.disclaimer.body }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
