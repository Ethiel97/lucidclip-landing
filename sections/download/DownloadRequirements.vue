<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {download} = landingContent
</script>

<template>
  <section class="relative bg-bg py-16 text-text-primary sm:py-20">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-52 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-25"
        style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-5xl px-6">
      <div class="text-center" data-aos="fade-up" data-aos-duration="1000">
        <h2 class="text-2xl font-semibold text-text-primary sm:text-3xl">
          {{ download.requirements.title }}
        </h2>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <UCard
          v-for="(group, index) in download.requirements.items"
          :key="group.title"
          :ui="{ body: 'p-6 sm:p-7' }"
          class="border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 shadow-soft"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 150"
        >
          <h3 class="text-sm font-semibold text-text-primary">
            {{ group.title }}
          </h3>
          <ul class="mt-4 space-y-3">
            <li
              v-for="(item, itemIndex) in group.items"
              :key="item + itemIndex"
              class="flex items-start gap-3 text-sm text-text-secondary"
            >
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-text-secondary" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </UCard>
      </div>
    </div>
  </section>
</template>
