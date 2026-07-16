<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {aboutPage} = landingContent
</script>

<template>
  <PageHero
    :eyebrow="aboutPage.hero.eyebrow"
    :title="aboutPage.hero.title"
    :subtitle="aboutPage.hero.subheadline"
  />
</template>
