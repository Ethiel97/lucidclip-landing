<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {download} = landingContent

const iconFor = (title: string) => (
  title.toLowerCase().includes('mac') ? 'i-lucide-apple' : 'i-lucide-monitor'
)
</script>

<template>
  <section class="relative border-t border-white/5 bg-bg py-16 text-text-primary sm:py-20">
    <div class="relative mx-auto max-w-5xl px-6">
      <SectionHeader :title="download.requirements.title"/>

      <div class="mt-10 grid gap-4 md:grid-cols-2" data-aos="fade-up" data-aos-duration="600">
        <div
          v-for="group in download.requirements.items"
          :key="group.title"
          class="rounded-card border border-white/[0.06] bg-surface/40 p-6 sm:p-7"
        >
          <h3 class="flex items-center gap-2.5 text-sm font-semibold text-text-primary">
            <UIcon :name="iconFor(group.title)" class="h-4 w-4 text-primary"/>
            {{ group.title }}
          </h3>
          <ul class="mt-5 space-y-3">
            <li
              v-for="(item, itemIndex) in group.items"
              :key="item + itemIndex"
              class="flex items-start gap-2.5 text-sm text-text-secondary"
            >
              <span class="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary/60"/>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
