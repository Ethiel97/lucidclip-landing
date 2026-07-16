<script setup lang="ts">
import type {CardModel} from "#shared/content/landing";

interface Props {
  item: CardModel
}

defineProps<Props>()
</script>

<template>
  <article
    class="group relative rounded-card border border-white/[0.06] bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/25 hover:bg-surface/70 sm:p-7"
  >
    <!-- Icon -->
    <div
      class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary/10 ring-1 ring-primary/20 transition-colors duration-300 group-hover:bg-primary/15"
    >
      <UIcon :name="item.icon" class="h-[18px] w-[18px] text-primary"/>
    </div>

    <!-- Content -->
    <h3 class="mt-4 text-[15px] font-semibold text-text-primary sm:text-base">
      {{ item.title }}
    </h3>
    <p class="mt-2 text-sm leading-relaxed text-text-secondary">
      {{ item.description }}
    </p>
  </article>
</template>
