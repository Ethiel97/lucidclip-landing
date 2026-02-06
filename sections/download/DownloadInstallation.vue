<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {download} = landingContent
</script>

<template>
  <section class="relative bg-bg py-16 text-text-primary sm:py-20">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-52 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-25"
        style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-4xl px-6">
      <div class="text-center" data-aos="fade-up" data-aos-duration="1000">
        <h2 class="text-2xl font-semibold text-text-primary sm:text-3xl">
          {{ download.installation.title }}
        </h2>
      </div>

      <UCard
        :ui="{ body: 'p-6 sm:p-8' }"
        class="mt-10 border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 shadow-soft"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="150"
      >
        <div class="space-y-6">
          <div
            v-for="(step, index) in download.installation.steps"
            :key="step.title"
            class="flex gap-4"
            :class="index === 0 ? '' : 'pt-6 border-t border-border-subtle/40'"
          >
            <div
              class="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-surface2/80 text-xs font-semibold text-text-secondary ring-1 ring-border-subtle/60"
            >
              {{ index + 1 }}
            </div>
            <div>
              <h3 class="text-sm font-semibold text-text-primary">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-text-secondary">
                <span>{{ step.description }}</span>
                <span
                  v-if="step.shortcut"
                  class="ml-2 inline-flex items-center rounded-md bg-surface2/80 px-2 py-1 font-mono text-xs font-extrabold text-text-primary ring-1 ring-border-subtle/60"
                >
                  {{ step.shortcut }}
                </span>
                <span v-if="step.suffix" class="ml-2">
                  {{ step.suffix }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
