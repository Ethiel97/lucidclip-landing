<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {privacyPage} = landingContent
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
      <UCard
        :ui="{ body: 'p-6 sm:p-8' }"
        class="border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 shadow-soft"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="flex items-start gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-surface2/80 ring-1 ring-border-subtle/60">
            <Icon name="lucide:alert-triangle" class="h-4 w-4 text-primary" />
          </div>
          <div>
            <h3 class="text-sm font-semibold text-text-primary">
              {{ privacyPage.disclaimer.title }}
            </h3>
            <p class="mt-3 text-xs leading-relaxed text-text-secondary">
              {{ privacyPage.disclaimer.body }}
            </p>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
