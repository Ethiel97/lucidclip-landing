<script setup lang="ts">
import TrustBullets from "~/sections/hero/TrustBullets.vue";
import {landingContent} from "#shared/content/landing";

const {hero} = landingContent

const scrollToSection = (section: string) => {
  const element = document.querySelector(`#${section}`)
  element?.scrollIntoView({behavior: 'smooth'})
}
</script>

<template>
  <section class="relative overflow-hidden bg-bg text-text-primary">
    <!-- background glow -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-40 left-1/2  -translate-x-1/2 rounded-full blur-3xl"
           style="background: radial-gradient(circle, rgba(97,95,255,.35), transparent 65%);"/>
      <div class="absolute -bottom-56 left-1/3 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-70"
           style="background: radial-gradient(circle, rgba(97,95,255,.22), transparent 60%);"/>
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/30"/>
    </div>

    <div class="relative mx-auto max-w-7xl px-12 md:px-4 py-20 lg:py-40">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <!-- Left -->
        <div class="flex flex-col items-center lg:items-start">
          <h1 class="text-4xl md:text-6xl leading-[1.02] tracking-tight font-semibold lg:text-6xl xl:text-7xl">
            <span class="block">{{ hero.headline.primary }}</span>
            <span class="block text-text-secondary">{{ hero.headline.secondary }}.</span>
          </h1>

          <p class="mt-6 max-w-xl  leading-relaxed text-text-secondary text-sm lg:text-xl text-center lg:text-left">
            {{ hero.subheadline }}
          </p>

          <div class="mt-10 flex flex-wrap justify-center items-center gap-3">
            <UButton
              data-tally-open="VLPL6y" data-tally-align-left="1" data-tally-overlay="1" data-tally-emoji-text="👋"
              data-tally-emoji-animation="heart-beat" data-tally-form-events-forwarding="1"
              size="xl"
              color="primary"
              class="rounded-pill px-6 py-3 font-medium text-text-primary"
              icon="i-lucide-arrow-right"
              trailing
            >
              {{ hero.cta.primary }}
            </UButton>

            <UButton
              size="xl"
              variant="soft"
              class="rounded-pill bg-surface2/80 text-text-primary ring-1 ring-border-subtle/60 px-6 py-3"
              icon="i-lucide-play"
              @click="scrollToSection('privacy-preview')"
            >
              {{ hero.cta.secondary }}
            </UButton>
          </div>

          <TrustBullets class="mt-8" :items="hero.trustBullets"/>
        </div>

        <!-- Right -->
        <HeroVisual/>
      </div>
    </div>
  </section>
</template>
