<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {aboutPage} = landingContent
</script>

<template>
  <section class="relative border-t border-white/5 bg-bg py-16 text-text-primary sm:py-20">
    <div class="relative mx-auto max-w-4xl px-6">
      <!-- distinctive panel, same language as the home Pro panel -->
      <div
        class="relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-surface/50 p-7 sm:p-10"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent"/>
        <div
          class="pointer-events-none absolute -top-32 left-1/2 h-56 w-[28rem] -translate-x-1/2 rounded-full blur-3xl"
          style="background: radial-gradient(closest-side, rgba(97,95,255,.12), transparent 70%);"
        />

        <div class="relative">
          <h2 class="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {{ aboutPage.builtWithFlutter.title }}
          </h2>

          <div class="mt-5 space-y-4 text-[15px] leading-relaxed text-text-secondary">
            <p v-for="paragraph in aboutPage.builtWithFlutter.paragraphs" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>

          <div class="mt-8 border-t border-white/5 pt-6">
            <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-muted">
              {{ aboutPage.builtWithFlutter.listTitle.replace(':', '') }}
            </p>
            <ul class="mt-4 grid gap-3 sm:grid-cols-2">
              <li
                v-for="item in aboutPage.builtWithFlutter.listItems"
                :key="item"
                class="flex items-start gap-2.5 text-sm text-text-secondary"
              >
                <UIcon name="i-lucide-check" class="mt-0.5 h-4 w-4 shrink-0 text-primary"/>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
