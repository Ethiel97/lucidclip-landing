<script setup lang="ts">
import HeroVisual from "~/sections/hero/HeroVisual.vue";
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
    <!-- single ambient background: dot grid fading out + one brand glow -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black_20%,transparent_100%)]"
      />
      <div
        class="absolute -top-64 left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full blur-3xl"
        style="background: radial-gradient(closest-side, rgba(97,95,255,.28), transparent 70%);"
      />
    </div>

    <div class="relative mx-auto max-w-6xl px-6 pt-24 sm:pt-28 lg:pt-32">
      <div class="mx-auto flex max-w-4xl flex-col items-center text-center"
           data-aos="fade-up" data-aos-duration="600">
        <!-- announcement chip -->
        <NuxtLink
          to="/download"
          class="group inline-flex items-center gap-2 rounded-pill border border-border-subtle/80 bg-surface/60 py-1.5 pl-3 pr-2.5 text-xs text-text-secondary backdrop-blur transition-colors hover:border-primary/40 hover:text-text-primary"
        >
          <span class="relative flex h-1.5 w-1.5">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60"/>
            <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"/>
          </span>
          {{ hero.announcement }}
          <UIcon name="i-lucide-chevron-right" class="h-3.5 w-3.5 text-text-muted transition-transform group-hover:translate-x-0.5"/>
        </NuxtLink>

        <!-- headline -->
        <h1 class="mt-8 font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
          <span class="block text-balance">{{ hero.headline.primary }}</span>
          <span class="block text-gradient-brand pb-1">{{ hero.headline.secondary }}</span>
        </h1>

        <!-- subheadline -->
        <p class="mt-6 max-w-xl text-base leading-relaxed text-text-secondary text-pretty sm:text-lg">
          {{ hero.subheadline }}
        </p>

        <!-- CTAs -->
        <div class="mt-9 flex flex-wrap items-center justify-center gap-3">
          <UButton
            size="xl"
            color="primary"
            class="rounded-pill px-6 py-3 font-medium text-text-primary shadow-glow"
            icon="i-lucide-arrow-right"
            trailing
            to="/download"
          >
            {{ hero.cta.primary }}
          </UButton>

          <UButton
            size="xl"
            variant="soft"
            class="rounded-pill bg-surface2/80 px-6 py-3 text-text-primary ring-1 ring-border-subtle/60 hover:bg-surface2"
            icon="i-lucide-play"
            @click="scrollToSection('privacy-preview')"
          >
            {{ hero.cta.secondary }}
          </UButton>
        </div>

        <TrustBullets class="mt-8" :items="hero.trustBullets"/>
      </div>

      <!-- product -->
      <HeroVisual class="mt-14 sm:mt-16" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100"/>
    </div>
  </section>
</template>
