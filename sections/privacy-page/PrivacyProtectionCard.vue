<script setup lang="ts">
import type {CardModel} from '#shared/content/landing'

defineProps<{ item: CardModel }>()
</script>

<template>
  <article
    class="group flex h-full items-start gap-4 rounded-card border border-white/[0.06] bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/25 hover:bg-surface/70"
  >
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-primary/10 ring-1 ring-primary/20">
      <UIcon :name="item.icon" class="h-[18px] w-[18px] text-primary"/>
    </div>
    <div>
      <h3 class="text-[15px] font-semibold text-text-primary">
        {{ item.title }}
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-text-secondary">
        {{ item.description }}
      </p>
    </div>
  </article>
</template>
