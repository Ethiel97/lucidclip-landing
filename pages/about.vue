<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import AboutHero from '~/sections/about-page/AboutHero.vue'
import AboutStory from '~/sections/about-page/AboutStory.vue'
import AboutPhilosophy from '~/sections/about-page/AboutPhilosophy.vue'
import AboutFlutter from '~/sections/about-page/AboutFlutter.vue'

definePageMeta({layout: 'main-layout'})

const {aboutPage} = landingContent

useSeoMeta({
  title: 'About — LucidClip',
  description: aboutPage.hero.subheadline,
  ogTitle: 'About — LucidClip',
  ogDescription: aboutPage.hero.subheadline,
  ogType: 'website'
})
</script>

<template>
  <main class="w-full">
    <AboutHero/>
    <AboutStory/>
    <AboutPhilosophy/>
    <AboutFlutter/>
  </main>
</template>
