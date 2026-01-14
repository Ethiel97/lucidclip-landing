<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import MobileMenu from "~/sections/header/MobileMenu.vue";

const {nav} = landingContent

const mobileMenuOpen = ref(false)

const handleNavClick = (href: string) => {
  mobileMenuOpen.value = false
  if (href.startsWith('#')) {
    const el = document.querySelector(href)
    el?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
}

const openMobileMenu = () => {
  mobileMenuOpen.value = true;
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
}
</script>

<template>
  <header
    class="
      fixed top-0 left-0 right-0 z-50
      border-b border-border-subtle/50
      bg-bg/70 backdrop-blur-xl
    "
  >
    <!-- subtle top glow like the capture -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-28 h-64 w-225 -translate-x-1/2 blur-3xl opacity-30"
        style="background: radial-gradient(circle, rgba(97,95,255,.18), transparent 60%);"
      />
    </div>

    <div class="relative mx-auto max-w-6xl px-6">
      <div class="flex h-18 items-center justify-between">
        <!-- Logo -->
        <a
          href="#"
          class="flex items-center gap-3"
          @click.prevent="handleNavClick('#')"
        >
          <div
            class="
              flex h-10 w-10 items-center justify-center
              rounded-xl
              bg-surface2/80 ring-1 ring-border-subtle/60
            "
          >
            <NuxtImg format="webp" densities="1x 2x"
                     src="/images/logo.png"
                     alt="LucidClip Logo" class="h-5 w-5"/>
          </div>
          <span class="text-lg font-semibold text-text-primary">
            {{ nav.logo }}
          </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-10">
          <a
            v-for="link in nav.links"
            :key="link.href"
            :href="link.href"
            class="text-sm text-text-secondary hover:text-text-primary transition-colors"
            @click.prevent="handleNavClick(link.href)"
          >
            {{ link.label }}
          </a>
        </nav>

        <!-- CTA Button (desktop) -->
        <div class="hidden md:flex items-center">
          <UButton
            data-tally-open="VLPL6y" data-tally-align-left="1" data-tally-overlay="1" data-tally-emoji-text="👋"
            data-tally-emoji-animation="heart-beat" data-tally-form-events-forwarding="1"
            color="primary"
            size="lg"
            class="rounded-pill px-6 py-3 font-semibold text-text-primary"
          >
            {{ nav.cta }}
          </UButton>
        </div>

        <!-- Mobile CTA + Menu -->
        <div class="flex items-center gap-3 md:hidden">
          <UButton
            color="primary"
            size="lg"
            class="rounded-pill md:px-6 md:py-3 font-semibold text-text-primary"
            data-tally-open="VLPL6y" data-tally-align-left="1" data-tally-overlay="1" data-tally-emoji-text="👋"
            data-tally-emoji-animation="heart-beat" data-tally-form-events-forwarding="1"
          >
            {{ nav.cta }}
          </UButton>

          <UButton
            icon="lucide:menu"
            color="neutral"
            variant="ghost"
            size="sm"
            class="rounded-pill"
            @click="mobileMenuOpen = true"
          />
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <MobileMenu :open="mobileMenuOpen" @close="closeMobileMenu"/>
  </header>
</template>
