<script setup lang="ts">
import { landingContent } from '#shared/content/landing'

const { footer } = landingContent

const handleFooterLinkClick = (href: string) => {
  if (href.startsWith('#')) {
    const el = document.querySelector(href)
    el?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }}
</script>

<template>
  <footer class="relative bg-bg text-text-primary">
    <!-- subtle bottom wash -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35" />
    </div>

    <div class="relative mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-20">
      <!-- Top content -->
      <div class="grid gap-10 lg:grid-cols-3 lg:gap-14">
        <!-- Brand -->
        <div class="lg:pr-10">
          <div class="flex items-center gap-3">
            <div
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-surface2 ring-1 ring-border-subtle/60"
            >
              <Icon name="lucide:clipboard" class="h-5 w-5 text-primary" />
            </div>

            <span class="text-lg font-semibold">LucidClip</span>
          </div>

          <p class="mt-5 max-w-md text-md leading-relaxed text-text-secondary">
            {{ footer.tagline }}
          </p>
        </div>

        <!-- Link groups -->
        <div class="grid gap-10 sm:grid-cols-2 lg:col-span-2 lg:justify-items-end">
          <div
            v-for="group in footer.links"
            :key="group.title"
            class="min-w-45"
          >
            <h3 class="text-smd font-semibold text-text-primary">
              {{ group.title }}
            </h3>

            <ul class="mt-4 space-y-3">
              <li v-for="link in group.items" :key="link.href">
                <a
                  @click.prevent="handleFooterLinkClick(link.href)"
                  class="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="mt-12 border-t border-border-subtle/60" />

      <!-- Copyright -->
      <p class="mt-8 text-center text-sm text-textMuted">
        {{ footer.copyright }}
      </p>
    </div>
  </footer>
</template>
