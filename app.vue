<script setup>
useHead({
  meta: [
    {name: 'viewport', content: 'width=device-width, initial-scale=1'}
  ],
  link: [
    {rel: 'icon', href: '/favicon.ico'}
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'LucidClip — Privacy-First Clipboard Manager'
const description = 'LucidClip is a native clipboard manager designed for developers and power users who care about privacy, speed, and reliability.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/images/hero.png',
  twitterImage: '/images/hero.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>
