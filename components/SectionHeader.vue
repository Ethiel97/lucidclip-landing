<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}>(), {
  eyebrow: undefined,
  subtitle: undefined,
  align: 'center'
})
</script>

<template>
  <div
    data-aos="fade-up"
    data-aos-duration="600"
    :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'"
  >
    <p
      v-if="eyebrow"
      class="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary"
      :class="align === 'center' ? 'justify-center' : ''"
    >
      <span class="h-px w-6 bg-primary/40"/>
      <span>{{ eyebrow }}</span>
      <span v-if="align === 'center'" class="h-px w-6 bg-primary/40"/>
    </p>

    <h2 class="mt-4 font-display text-3xl font-semibold tracking-tight text-text-primary text-balance sm:text-4xl">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="mt-4 text-base leading-relaxed text-text-secondary text-pretty sm:text-lg">
      {{ subtitle }}
    </p>
  </div>
</template>
