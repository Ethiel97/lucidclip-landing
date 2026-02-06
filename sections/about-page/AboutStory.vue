<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {aboutPage} = landingContent
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
        <h2 class="text-base font-semibold text-text-primary">
          {{ aboutPage.story.title }}
        </h2>
        <div class="mt-4 space-y-4 text-sm leading-relaxed text-text-secondary">
          <p v-for="(paragraph, index) in aboutPage.story.paragraphs" :key="paragraph + index">
            {{ paragraph }}
          </p>
        </div>
      </UCard>
    </div>
  </section>
</template>
