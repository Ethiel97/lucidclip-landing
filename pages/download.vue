<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import DownloadHero from '~/sections/download/DownloadHero.vue'
import DownloadPlatforms from '~/sections/download/DownloadPlatforms.vue'
import DownloadRequirements from '~/sections/download/DownloadRequirements.vue'
import DownloadInstallation from '~/sections/download/DownloadInstallation.vue'

definePageMeta({layout: 'main-layout'})

const {download} = landingContent

useSeoMeta({
  title: 'Download — LucidClip',
  description: download.hero.subheadline,
  ogTitle: 'Download — LucidClip',
  ogDescription: download.hero.subheadline,
  ogType: 'website'
})
</script>

<template>
  <main class="w-full">
    <DownloadHero/>
    <DownloadPlatforms/>
    <DownloadRequirements/>
    <DownloadInstallation/>
  </main>
</template>
