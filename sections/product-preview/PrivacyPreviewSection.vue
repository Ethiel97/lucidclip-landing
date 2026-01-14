<script setup lang="ts">
import {landingContent} from "#shared/content/landing";

const {productPreview} = landingContent
</script>

<template>
  <section id="privacy-preview" class="relative bg-bg py-24 sm:py-28 text-text-primary">
    <!-- background wash -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-70 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <!-- Left -->
        <div>
          <!-- badge -->
          <div
            v-if="productPreview.badge"
            class="inline-flex items-center gap-2 rounded-pill px-3 py-1 text-xs font-semibold
                   bg-primary/10 text-primary ring-1 ring-primary/20"
          >
            <UIcon name="i-lucide-shield" class="h-4 w-4"/>
            <span>{{ productPreview.badge }}</span>
          </div>

          <!-- headline -->
          <h2 class="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span class="block">{{ productPreview.headline.primary }}</span>
            <span class="block text-text-secondary">{{ productPreview.headline.secondary }}</span>
          </h2>

          <!-- description -->
          <p class="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
            {{ productPreview.description }}
          </p>

          <!-- bullets -->
          <ul class="mt-10 space-y-4">
            <li v-for="b in productPreview.bullets" :key="b"
                class="flex items-start gap-3 text-base text-text-secondary">
              <span
                class="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/25">
                <UIcon name="i-lucide-check" class="h-3.5 w-3.5 text-emerald-400"/>
              </span>
              <span>{{ b }}</span>
            </li>
          </ul>

          <!-- footnote -->
          <p class="mt-10 max-w-xl text-sm italic leading-relaxed text-textMuted">
            {{ productPreview.footnote }}
          </p>
        </div>

        <!-- Right (preview) -->
        <div class="relative">
          <!-- glow -->
          <div
            class="pointer-events-none absolute -inset-10 rounded-[28px] blur-3xl opacity-60"
            style="background: radial-gradient(circle at 40% 30%, rgba(97,95,255,.22), transparent 60%);"
          />
          <!-- frame -->
          <div
            class="relative overflow-hidden rounded-[22px]
                   border border-border-subtle/60
                   bg-linear-to-b from-surface/60 to-surface2/50
                   p-3 shadow-soft"
          >
            <div class="overflow-hidden rounded-[18px] border border-border-subtle/40 bg-surface">
              <NuxtImg :src="productPreview.media.src" :alt="productPreview.media.alt"

                       class="h-auto w-full object-cover"/>
            </div>
          </div>

          <p v-if="productPreview.media.caption" class="mt-5 text-center text-sm text-textMuted">
            {{ productPreview.media.caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
