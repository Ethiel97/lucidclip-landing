<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import {useScrollToSection} from '#shared/composables/useScrollToSection'
import MobileMenu from "~/sections/header/MobileMenu.vue";

const {nav} = landingContent

const mobileMenuOpen = ref(false)
const route = useRoute()
const {scrollToSection} = useScrollToSection()

const handleNavClick = async (href: string) => {
  mobileMenuOpen.value = false
  if (href.startsWith('#')) {
    if (route.path !== '/') {
      await navigateTo(`/${href}`)
      return
    }
    scrollToSection(href)
    return
  }
  await navigateTo(href)
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
}

const isActiveLink = (href: string) => {

  const route = useRoute();
  return route.path === href;

}
</script>

<template>
  <header
    class="
      fixed top-0 left-0 right-0 z-50
      border-b border-white/[0.06]
      bg-bg/70 backdrop-blur-xl
    "
  >
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
        <nav class="hidden md:flex items-center gap-9">
          <a
            v-for="link in nav.links"
            :key="link.href"
            :href="link.href"
            class="relative text-sm transition-colors hover:text-text-primary"
            :class="isActiveLink(link.href) ? 'font-medium text-text-primary' : 'text-text-secondary'"
            @click.prevent="handleNavClick(link.href)"
          >
            {{ link.label }}
            <span
              v-if="isActiveLink(link.href)"
              class="absolute -bottom-2 left-1/2 h-0.5 w-0.5 -translate-x-1/2 rounded-full bg-primary"
            />
          </a>
        </nav>

        <!-- CTA Button (desktop) -->
        <div class="hidden md:flex items-center">
          <UButton
            color="primary"
            size="lg"
            class="rounded-pill px-6 py-3 font-semibold text-text-primary"
            to="/download"
          >
            {{ nav.cta }}
          </UButton>
        </div>

        <!-- Mobile CTA + Menu -->
        <div class="flex items-center gap-3 md:hidden">
          <UButton
            color="primary"
            size="lg"
            class="rounded-pill text-xs md:text-base md:px-6 md:py-3 font-semibold text-text-primary"
            to="/download"
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
