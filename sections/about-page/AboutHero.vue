<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {aboutPage} = landingContent
</script>

<template>
  <section class="relative overflow-hidden bg-bg pb-16 pt-28 text-text-primary sm:pb-20 sm:pt-32">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-40 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-35"
        style="background: radial-gradient(circle, rgba(97,95,255,.2), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/30"/>
    </div>

    <div class="relative mx-auto max-w-4xl px-6 text-center">
      <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-duration="1000">
        {{ aboutPage.hero.title }}
      </h1>
      <p
        class="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="150"
      >
        {{ aboutPage.hero.subheadline }}
      </p>
    </div>
  </section>
</template>
