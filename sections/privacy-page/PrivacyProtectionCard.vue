<script setup lang="ts">
import type {CardModel} from '#shared/content/landing'

const props = defineProps<{ item: CardModel }>()
</script>

<template>
  <article
    class="group flex h-full items-start gap-4 rounded-card border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 p-5 shadow-soft"
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
</template>
