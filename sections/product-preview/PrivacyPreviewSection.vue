<script setup lang="ts">
import {landingContent} from "#shared/content/landing";

const {productPreview} = landingContent
</script>

<template>
  <section id="privacy-preview" class="relative border-t border-white/5 bg-bg py-20 text-text-primary sm:py-24">
    <div class="relative mx-auto max-w-6xl px-6">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Left -->
        <div data-aos="fade-up" data-aos-duration="600">
          <!-- eyebrow badge -->
          <div
            v-if="productPreview.badge"
            class="inline-flex items-center gap-2 rounded-pill bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20"
          >
            <UIcon name="i-lucide-shield" class="h-3.5 w-3.5"/>
            <span>{{ productPreview.badge }}</span>
          </div>

          <!-- headline -->
          <h2 class="mt-6 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {{ productPreview.headline.primary }}
            <span class="text-text-muted">{{ productPreview.headline.secondary }}</span>
          </h2>

          <!-- description -->
          <p class="mt-5 max-w-xl text-base leading-relaxed text-text-secondary text-pretty sm:text-lg">
            {{ productPreview.description }}
          </p>

          <!-- bullets -->
          <ul class="mt-8 space-y-3.5">
            <li
              v-for="b in productPreview.bullets"
              :key="b"
              class="flex items-start gap-3 text-[15px] text-text-secondary"
            >
              <span class="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/25">
                <UIcon name="i-lucide-check" class="h-3 w-3 text-primary"/>
              </span>
              <span>{{ b }}</span>
            </li>
          </ul>

          <!-- footnote -->
          <p class="mt-8 flex items-center gap-2 text-sm text-text-muted">
            <UIcon name="i-lucide-hard-drive" class="h-4 w-4"/>
            {{ productPreview.footnote }}
          </p>
        </div>

        <!-- Right (preview) -->
        <div class="relative" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <!-- glow -->
          <div
            class="pointer-events-none absolute -inset-8 rounded-[28px] blur-3xl opacity-40"
            style="background: radial-gradient(closest-side, rgba(97,95,255,.25), transparent 70%);"
          />
          <!-- window frame -->
          <div class="relative rounded-2xl border border-white/10 bg-surface/70 p-1.5 shadow-premium">
            <div class="flex items-center px-3 py-2">
              <div class="flex items-center gap-1.5">
                <span class="h-2.5 w-2.5 rounded-full bg-white/10"/>
                <span class="h-2.5 w-2.5 rounded-full bg-white/10"/>
                <span class="h-2.5 w-2.5 rounded-full bg-white/10"/>
              </div>
              <span class="ml-auto text-[11px] font-medium text-text-muted">Settings · Exclusions</span>
            </div>
            <div class="overflow-hidden rounded-[10px] border border-white/[0.06] bg-bg">
              <NuxtImg
                :src="productPreview.media.src"
                :alt="productPreview.media.alt"
                class="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <p v-if="productPreview.media.caption" class="mt-4 text-center text-sm text-text-muted">
            {{ productPreview.media.caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
