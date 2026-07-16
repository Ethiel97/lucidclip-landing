<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
}>(), {
  eyebrow: undefined,
  subtitle: undefined
})
</script>

<template>
  <section class="relative overflow-hidden bg-bg pb-14 pt-28 text-text-primary sm:pb-16 sm:pt-32">
    <!-- same ambient treatment as the home hero, scaled down -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_60%_65%_at_50%_0%,black_15%,transparent_100%)]"
      />
      <div
        class="absolute -top-56 left-1/2 h-[30rem] w-[48rem] -translate-x-1/2 rounded-full blur-3xl"
        style="background: radial-gradient(closest-side, rgba(97,95,255,.24), transparent 70%);"
      />
    </div>

    <div class="relative mx-auto max-w-4xl px-6 text-center" data-aos="fade-up" data-aos-duration="600">
      <p
        v-if="eyebrow"
        class="flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary"
      >
        <span class="h-px w-6 bg-primary/40"/>
        <span>{{ eyebrow }}</span>
        <span class="h-px w-6 bg-primary/40"/>
      </p>

      <h1 class="mt-5 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {{ title }}
      </h1>

      <p
        v-if="subtitle"
        class="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary text-pretty sm:text-lg"
      >
        {{ subtitle }}
      </p>

      <slot/>
    </div>
  </section>
</template>
