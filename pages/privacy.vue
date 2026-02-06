<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import PrivacyHero from '~/sections/privacy-page/PrivacyHero.vue'
import PrivacyProtectionGrid from '~/sections/privacy-page/PrivacyProtectionGrid.vue'
import PrivacyLocalFirst from '~/sections/privacy-page/PrivacyLocalFirst.vue'
import PrivacyAppExclusions from '~/sections/privacy-page/PrivacyAppExclusions.vue'
import PrivacyNeverDo from '~/sections/privacy-page/PrivacyNeverDo.vue'
import PrivacyDisclaimer from '~/sections/privacy-page/PrivacyDisclaimer.vue'

definePageMeta({layout: 'main-layout'})

const {privacyPage} = landingContent

useSeoMeta({
  title: 'Privacy — LucidClip',
  description: privacyPage.hero.subheadline,
  ogTitle: 'Privacy — LucidClip',
  ogDescription: privacyPage.hero.subheadline,
  ogType: 'website'
})
</script>

<template>
  <main class="w-full">
    <PrivacyHero/>
    <PrivacyProtectionGrid/>
    <PrivacyLocalFirst/>
    <PrivacyAppExclusions/>
    <PrivacyNeverDo/>
    <PrivacyDisclaimer/>
  </main>
</template>
