<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {aboutPage} = landingContent
</script>

<template>
  <section class="relative bg-bg py-12 text-text-primary sm:py-16">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-60 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-20"
        style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-5xl px-6">
      <h2 class="text-center text-xl font-semibold text-text-primary sm:text-2xl" data-aos="fade-up" data-aos-duration="1000">
        {{ aboutPage.philosophy.title }}
      </h2>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <article
          v-for="(item, index) in aboutPage.philosophy.items"
          :key="item.title"
          class="flex items-start gap-4 rounded-card border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 p-5 shadow-soft"
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 150"
        >
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-surface2/80 ring-1 ring-border-subtle/60">
            <Icon :name="item.icon" class="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 class="text-sm font-semibold text-text-primary">
              {{ item.title }}
            </h3>
            <p class="mt-2 text-xs leading-relaxed text-text-secondary">
              {{ item.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
