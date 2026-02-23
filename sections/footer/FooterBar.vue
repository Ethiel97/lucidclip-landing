<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import {useScrollToSection} from '#shared/composables/useScrollToSection'

const {footer} = landingContent
const route = useRoute()
const {scrollToSection} = useScrollToSection()

const handleFooterLinkClick = async (href: string) => {
  if (href.startsWith('#')) {
    if (route.path !== '/') {
      await navigateTo(`/${href}`)
      return
    }
    scrollToSection(href)
    return
  }
  if (href.startsWith('mailto:')) {
    window.location.href = href
    return
  }
  await navigateTo(href)
}
</script>

<template>
  <footer class="relative bg-bg text-text-primary">
    <!-- subtle bottom wash -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
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

              <NuxtImg format="webp" densities="1x 2x"
                       src="/images/logo.png"
                       alt="LucidClip Logo" class="h-5 w-5"/>
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
            class="min-w-0 sm:min-w-45"
          >
            <h3 class="text-smd font-semibold text-text-primary">
              {{ group.title }}
            </h3>

            <ul class="mt-4 space-y-3">
              <li v-for="link in group.items" :key="link.href">
                <a
                  :href="link.href"
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
      <div class="mt-12 border-t border-border-subtle/60"/>

      <div class="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
        <!-- Social -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a
            v-for="item in footer.social"
            :key="item.href"
            :href="item.href"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center gap-2 rounded-pill border border-border-subtle/60 bg-surface/70 px-3 py-2 text-xs text-text-secondary transition hover:-translate-y-0.5 hover:text-text-primary"
            :aria-label="item.label"
          >
            <Icon :name="item.icon" class="h-4 w-4"/>
            <span class="hidden sm:inline">{{ item.label }}</span>
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-center text-sm text-textMuted">
          {{ footer.copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>
