<script setup lang="ts">
interface Props {
  label: string
}

defineProps<Props>()
</script>

<template>
  <div class="inline-flex items-center gap-2 rounded-pill bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20">
    <Icon name="lucide:crown" class="h-4 w-4" />
    <span>{{ label }}</span>
  </div>
</template>
