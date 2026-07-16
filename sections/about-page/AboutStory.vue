<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {aboutPage} = landingContent
</script>

<template>
  <section class="relative bg-bg py-12 text-text-primary sm:py-14">
    <!-- editorial prose instead of a boxed card -->
    <div class="relative mx-auto max-w-3xl px-6" data-aos="fade-up" data-aos-duration="600">
      <p class="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
        <span class="h-px w-6 bg-primary/40"/>
        {{ aboutPage.story.title }}
      </p>

      <div class="mt-6 space-y-5">
        <p
          v-for="(paragraph, index) in aboutPage.story.paragraphs"
          :key="paragraph"
          class="leading-relaxed text-pretty"
          :class="index === 0 ? 'text-lg text-text-primary/90 sm:text-xl' : 'text-[15px] text-text-secondary'"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>
