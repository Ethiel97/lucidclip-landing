<script setup lang="ts">
defineProps({
  items: {
    type: Array as () => string[],
    required: true
  }
})
</script>

<template>
  <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
    <li
      v-for="bullet in items"
      :key="bullet"
      class="flex items-center gap-2 text-sm text-text-secondary"
    >
      <UIcon name="i-lucide-check" class="h-4 w-4 text-primary"/>
      <span>{{ bullet }}</span>
    </li>
  </ul>
</template>
