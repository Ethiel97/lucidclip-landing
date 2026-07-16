<script setup lang="ts">
import ProBadge from '~/sections/pro/ProBadge.vue'
import {landingContent} from '#shared/content/landing'

const {pro} = landingContent
</script>

<template>
  <section id="pro" class="relative border-t border-white/5 bg-bg py-20 text-text-primary sm:py-24">
    <div class="relative mx-auto max-w-6xl px-6">
      <!-- Panel -->
      <div
        class="relative mx-auto max-w-5xl overflow-hidden rounded-[20px] border border-white/[0.08] bg-surface/50"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <!-- top gradient hairline -->
        <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"/>
        <!-- inner ambient glow -->
        <div
          class="pointer-events-none absolute -top-40 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-3xl"
          style="background: radial-gradient(closest-side, rgba(97,95,255,.14), transparent 70%);"
        />
        <!-- watermark -->
        <span
          class="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[10rem] font-bold leading-none tracking-tighter text-white/[0.02]"
          aria-hidden="true"
        >
          PRO
        </span>

        <div class="relative grid gap-12 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-12 lg:py-14">
          <!-- Left: header + CTA -->
          <div class="flex flex-col items-start">
            <ProBadge :label="pro.badge"/>

            <h2 class="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {{ pro.headline }}
            </h2>

            <p class="mt-4 text-base leading-relaxed text-text-secondary text-pretty sm:text-lg">
              {{ pro.subheadline }}
            </p>

            <div class="mt-8 lg:mt-auto lg:pt-8">
              <UButton
                color="primary"
                size="xl"
                class="rounded-pill px-7 py-3.5 font-medium text-text-primary shadow-glow"
                icon="i-lucide-arrow-right"
                trailing
                to="/download"
              >
                {{ pro.cta.label }}
              </UButton>
              <p class="mt-3 text-sm text-text-muted">
                {{ pro.cta.helper }}
              </p>
            </div>
          </div>

          <!-- Right: compact feature list -->
          <ul class="grid content-center gap-x-8 gap-y-7 sm:grid-cols-2">
            <li v-for="item in pro.items" :key="item.title" class="flex gap-3.5">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary/10 ring-1 ring-primary/20">
                <UIcon :name="item.icon" class="h-4 w-4 text-primary"/>
              </span>
              <div>
                <h3 class="text-[15px] font-semibold text-text-primary">{{ item.title }}</h3>
                <p class="mt-1 text-sm leading-relaxed text-text-secondary">{{ item.description }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
