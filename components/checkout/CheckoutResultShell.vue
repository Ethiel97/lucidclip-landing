<!-- components/checkout/CheckoutResultShell.vue -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    maxWidthClass?: string
  }>(),
  {maxWidthClass: 'max-w-[560px]'}
)
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-bg px-6 py-12">
    <!-- centered glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] bg-primary-800/10"
    />

    <div class="relative z-10 mx-auto flex min-h-screen items-center justify-center">
      <div class="w-full" :class="maxWidthClass">
        <slot/>
      </div>
    </div>
  </div>
</template>
