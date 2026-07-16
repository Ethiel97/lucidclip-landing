<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {download} = landingContent
</script>

<template>
  <PageHero
    :eyebrow="download.hero.eyebrow"
    :title="download.hero.title"
    :subtitle="download.hero.subheadline"
  />
</template>
