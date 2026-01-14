<script setup lang="ts">

defineProps({
  items: {
    type: Array as () => string[],
    required: true
  }
})
</script>

<template>
  <ul class="space-y-3">
    <li v-for="(bullet, index) in items" data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="index * 100"
        :key="index" class="flex items-center gap-3 text-sm text-text-secondary">
      <span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
        <UIcon name="i-lucide-check" class="h-3.5 w-3.5 text-primary"/>
      </span>
      <span>{{ bullet }}</span>
    </li>
  </ul>
</template>
