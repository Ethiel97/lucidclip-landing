<script setup lang="ts">
import {landingContent} from '#shared/content/landing'
import PrivacyProtectionCard from '~/sections/privacy-page/PrivacyProtectionCard.vue'

const {privacyPage} = landingContent
</script>

<template>
  <section class="relative bg-bg py-12 text-text-primary sm:py-14">
    <div class="relative mx-auto max-w-5xl px-6">
      <SectionHeader :title="privacyPage.protection.title"/>

      <div class="mt-12 grid gap-4 md:grid-cols-2" data-aos="fade-up" data-aos-duration="600">
        <PrivacyProtectionCard
          v-for="item in privacyPage.protection.items"
          :key="item.title"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>
