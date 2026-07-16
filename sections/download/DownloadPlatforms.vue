<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {download} = landingContent


const {data: macosRelease} = await useFetch("/api/releases/macos", {
  server: true,
  default: () => null,
});

// only day month year
const macosReleaseDate = macosRelease.value?.pubDate
  ? new Date(macosRelease.value.pubDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  : null;

const macFootnote =
  macosRelease.value?.version
    ? `Version ${macosRelease.value.version} . Released on ${macosReleaseDate}`
    : "Latest version";

landingContent.download.platforms.items = landingContent.download.platforms.items.map((platform) => {
  if (platform.id === "macos") {
    return {
      ...platform,
      cta: {
        ...platform.cta,
      },
      footnote: macFootnote,
    };
  }
  return platform;
})
</script>

<template>
  <section class="relative bg-bg py-10 text-text-primary sm:py-12">
    <div class="relative mx-auto max-w-5xl px-6">
      <div class="grid gap-4 md:grid-cols-2" data-aos="fade-up" data-aos-duration="600">
        <article
          v-for="platform in download.platforms.items"
          :key="platform.id"
          class="group relative flex flex-col rounded-card border border-white/[0.06] bg-surface/50 p-7 transition-colors duration-300 hover:border-primary/25 sm:p-8"
        >
          <div class="flex items-start gap-3.5">
            <div class="flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary/10 ring-1 ring-primary/20">
              <UIcon :name="platform.icon" class="h-5 w-5 text-primary"/>
            </div>
            <div>
              <h3 class="text-base font-semibold text-text-primary">
                {{ platform.title }}
              </h3>
              <p class="mt-0.5 text-xs text-text-muted">
                {{ platform.subtitle }}
              </p>
            </div>
          </div>

          <p v-if="platform.description" class="mt-5 text-sm leading-relaxed text-text-secondary">
            {{ platform.description }}
          </p>

          <ul v-if="platform.bullets" class="mt-6 space-y-3">
            <li
              v-for="(bullet, bulletIndex) in platform.bullets"
              :key="bullet + bulletIndex"
              class="flex items-start gap-2.5 text-sm text-text-secondary"
            >
              <UIcon name="i-lucide-check" class="mt-0.5 h-4 w-4 shrink-0 text-primary"/>
              <span>{{ bullet }}</span>
            </li>
          </ul>

          <div class="mt-auto pt-7">
            <UButton
              size="lg"
              :color="platform.cta.disabled ? 'neutral' : 'primary'"
              class="w-full justify-center rounded-pill py-3 font-medium text-white"
              :class="platform.cta.disabled ? '' : 'shadow-glow'"
              :disabled="platform.cta.disabled"
              :href="platform.cta.href"
              :target="platform.cta.href ? '_blank' : undefined"
              :rel="platform.cta.href ? 'noreferrer' : undefined"
              :variant="platform.cta.disabled ? 'soft' : 'solid'"
              icon="i-lucide-download"
            >
              {{ platform.cta.label }}
            </UButton>

            <p v-if="platform.footnote" class="mt-3 text-center text-xs text-text-muted">
              {{ platform.footnote }}
            </p>
            <p v-if="platform.helper" class="mt-3 text-center text-xs text-text-muted">
              {{ platform.helper }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
