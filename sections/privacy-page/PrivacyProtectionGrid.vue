<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import PrivacyProtectionCard from '~/sections/privacy-page/PrivacyProtectionCard.vue'

const {privacyPage} = landingContent
</script>

<template>
  <section class="relative bg-bg py-12 text-text-primary sm:py-16">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-56 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-25"
        style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-5xl px-6">
      <h2 class="text-center text-xl font-semibold text-text-primary sm:text-2xl" data-aos="fade-up" data-aos-duration="1000">
        {{ privacyPage.protection.title }}
      </h2>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <PrivacyProtectionCard
          v-for="(item, index) in privacyPage.protection.items"
          :key="item.title"
          :item="item"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 150"
        />
      </div>
    </div>
  </section>
</template>
