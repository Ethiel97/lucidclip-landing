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
  <section class="relative bg-bg py-12 text-text-primary sm:py-16">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-52 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-30"
        style="background: radial-gradient(circle, rgba(97,95,255,.14), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-5xl px-6">
      <div class="grid gap-6 md:grid-cols-2">
        <UCard
          v-for="(platform, index) in download.platforms.items"
          :key="platform.id"
          :ui="{ body: 'p-7 sm:p-8' }"
          class="border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 shadow-soft"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 150"
        >
          <div class="flex h-full flex-col">
            <div class="flex items-start gap-3">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-surface2/80 ring-1 ring-border-subtle/60"
              >
                <Icon :name="platform.icon" class="h-5 w-5 text-primary"/>
              </div>
              <div>
                <h3 class="text-base font-semibold text-text-primary">
                  {{ platform.title }}
                </h3>
                <p class="mt-1 text-xs text-text-muted">
                  {{ platform.subtitle }}
                </p>
              </div>
            </div>

            <p v-if="platform.description" class="mt-5 text-sm leading-relaxed text-text-secondary">
              {{ platform.description }}
            </p>

            <ul v-if="platform.bullets" class="mt-5 space-y-3">
              <li
                v-for="(bullet, bulletIndex) in platform.bullets"
                :key="bullet + bulletIndex"
                class="flex items-start gap-3 text-sm text-text-secondary"
              >
                <span
                  class="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/30"
                >
                  <UIcon name="i-lucide-check" class="h-3.5 w-3.5 text-primary"/>
                </span>
                <span>{{ bullet }}</span>
              </li>
            </ul>

            <div class="mt-auto pt-6">
              <UButton
                size="lg"
                :color="platform.cta.disabled ? 'neutral' : 'primary'"
                class="w-full rounded-pill py-3 font-semibold justify-center text-white"
                :disabled="platform.cta.disabled"
                :href="platform.cta.href"
                :target="platform.cta.href ? '_blank' : undefined"
                :rel="platform.cta.href ? 'noopener' : undefined"
                :variant="platform.cta.disabled ? 'soft' : 'solid'"
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
          </div>
        </UCard>
      </div>
    </div>
  </section>
</template>
