<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {privacyPage} = landingContent
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

    <div class="relative mx-auto max-w-4xl px-6">
      <UCard
        :ui="{ body: 'p-6 sm:p-8' }"
        class="border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 shadow-soft"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="flex items-start gap-4">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-surface2/80 ring-1 ring-border-subtle/60">
            <Icon name="lucide:eye-off" class="h-5 w-5 text-primary" />
          </div>
          <div class="flex-1">
            <h3 class="text-base font-semibold text-text-primary">
              {{ privacyPage.appExclusions.title }}
            </h3>
            <div class="mt-4 space-y-4 text-sm leading-relaxed text-text-secondary">
              <p v-for="(paragraph, index) in privacyPage.appExclusions.body" :key="paragraph + index">
                {{ paragraph }}
              </p>
            </div>

            <div class="mt-6 rounded-xl border border-border-subtle/60 bg-surface/70 p-4">
              <p class="text-xs font-semibold text-text-primary">
                {{ privacyPage.appExclusions.listTitle }}
              </p>
              <ul class="mt-3 space-y-2">
                <li
                  v-for="(item, index) in privacyPage.appExclusions.listItems"
                  :key="item + index"
                  class="flex items-start gap-2 text-xs text-text-secondary"
                >
                  <span class="mt-1 h-1.5 w-1.5 rounded-full bg-text-secondary" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
