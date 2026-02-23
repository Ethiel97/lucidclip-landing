<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {featuredOn} = landingContent
</script>

<template>
  <section class="relative bg-bg py-12 text-text-primary sm:py-16">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-56 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-25"
        style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-5xl px-6">
      <h2 class="text-center text-xs font-semibold uppercase tracking-[0.3em] text-text-muted" data-aos="fade-up" data-aos-duration="1000">
        {{ featuredOn.title }}
      </h2>

      <div class="mt-8 flex flex-wrap items-center justify-center gap-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
        <a
          v-for="item in featuredOn.items"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noreferrer"
          class="flex items-center justify-center rounded-xl border border-border-subtle/60 bg-surface/70 px-4 py-3 shadow-soft transition hover:-translate-y-0.5 hover:border-border-subtle/80"
        >
          <img
            :src="item.image.src"
            :alt="item.image.alt"
            :width="item.image.width"
            :height="item.image.height"
            class="h-12 w-auto"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
</template>
