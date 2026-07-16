<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {privacyPage} = landingContent
</script>

<template>
  <section class="relative border-t border-white/5 bg-bg py-14 text-text-primary sm:py-16">
    <div class="relative mx-auto max-w-3xl px-6" data-aos="fade-up" data-aos-duration="600">
      <h2 class="flex items-center gap-3 font-display text-2xl font-semibold tracking-tight">
        <span class="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary/10 ring-1 ring-primary/20">
          <UIcon name="i-lucide-eye-off" class="h-4 w-4 text-primary"/>
        </span>
        {{ privacyPage.appExclusions.title }}
      </h2>

      <div class="mt-6 space-y-4 text-[15px] leading-relaxed text-text-secondary">
        <p v-for="paragraph in privacyPage.appExclusions.body" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>

      <div class="mt-7 rounded-card border border-white/[0.06] bg-surface/40 p-6">
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
          {{ privacyPage.appExclusions.listTitle.replace(':', '') }}
        </p>
        <ul class="mt-4 grid gap-3 sm:grid-cols-2">
          <li
            v-for="item in privacyPage.appExclusions.listItems"
            :key="item"
            class="flex items-start gap-2.5 text-sm text-text-secondary"
          >
            <UIcon name="i-lucide-ban" class="mt-0.5 h-4 w-4 shrink-0 text-primary"/>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
