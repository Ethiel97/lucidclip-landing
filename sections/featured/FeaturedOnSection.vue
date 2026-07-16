<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {featuredOn} = landingContent
</script>

<template>
  <section class="relative bg-bg py-14 text-text-primary">
    <div class="relative mx-auto max-w-5xl px-6">
      <div class="flex items-center gap-6" data-aos="fade-up" data-aos-duration="600">
        <span class="h-px flex-1 bg-linear-to-r from-transparent to-border-subtle"/>
        <h2 class="shrink-0 text-[11px] font-semibold uppercase tracking-[0.3em] text-text-muted">
          {{ featuredOn.title }}
        </h2>
        <span class="h-px flex-1 bg-linear-to-l from-transparent to-border-subtle"/>
      </div>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        <a
          v-for="item in featuredOn.items"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noreferrer"
          class="opacity-50 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
        >
          <img
            :src="item.image.src"
            :alt="item.image.alt"
            :width="item.image.width"
            :height="item.image.height"
            class="h-11 w-auto"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
</template>
