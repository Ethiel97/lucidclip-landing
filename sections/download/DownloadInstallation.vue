<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {download} = landingContent
</script>

<template>
  <section class="relative border-t border-white/5 bg-bg py-16 text-text-primary sm:py-20">
    <div class="relative mx-auto max-w-3xl px-6">
      <SectionHeader :title="download.installation.title"/>

      <!-- numbered timeline -->
      <ol
        class="mt-12 rounded-card border border-white/[0.06] bg-surface/40 p-6 sm:p-8"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <li
          v-for="(step, index) in download.installation.steps"
          :key="step.title"
          class="relative flex gap-4"
          :class="index === download.installation.steps.length - 1 ? '' : 'pb-8'"
        >
          <div class="flex flex-col items-center">
            <span
              class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary ring-1 ring-primary/25"
            >
              {{ index + 1 }}
            </span>
            <span
              v-if="index !== download.installation.steps.length - 1"
              class="mt-2 w-px flex-1 bg-linear-to-b from-primary/25 to-white/5"
            />
          </div>
          <div class="pt-0.5">
            <h3 class="text-sm font-semibold text-text-primary">
              {{ step.title }}
            </h3>
            <p class="mt-1.5 text-sm leading-relaxed text-text-secondary">
              <span>{{ step.description }}</span>
              <span v-if="step.shortcut" class="kbd mx-1.5 align-middle">{{ step.shortcut }}</span>
              <span v-if="step.suffix">{{ step.suffix }}</span>
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
