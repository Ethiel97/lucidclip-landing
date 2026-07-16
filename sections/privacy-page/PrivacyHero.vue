<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {privacyPage} = landingContent
</script>

<template>
  <PageHero
    :eyebrow="privacyPage.hero.badge"
    :title="privacyPage.hero.title"
    :subtitle="privacyPage.hero.subheadline"
  />
</template>
