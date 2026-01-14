<script setup lang="ts">
import type {CardModel} from "#shared/content/landing";

interface Props {
  item: CardModel
}

const props = defineProps<Props>()

const color = computed(() => {
    const color = props.item.color || 'primary';
    return `text-${color}`;
  }
);

const bgColor = computed(() => {
    const color = props.item.color || 'primary';
    return `bg-${color}/10 ring-${color}/50 group-hover:bg-${color}/30`;
  }
);
</script>

<template>
  <article
    class="
      group relative overflow-hidden rounded-card
      border border-border-subtle/60
      bg-linear-to-b from-surface/80 to-surface2/60
      p-7 sm:p-8
      shadow-soft
      transition-all duration-300
      hover:-translate-y-0.5 hover:border-border-subtle/80
    "
  >
    <!-- subtle top glow -->
    <div
      class="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-60"
      style="background: radial-gradient(circle, rgba(97,95,255,.22), transparent 60%);"
    />

    <!-- Icon -->
    <div class="relative">
      <div
        class="
          flex h-11 w-11 items-center justify-center
          rounded-xl ring-1
          transition-colors duration-300" :class="bgColor"
      >
        <Icon :name="item.icon" class="h-5 w-5 " :class="color"/>
      </div>
    </div>

    <!-- Content -->
    <div class="mt-5">
      <h3 class="text-[15px] font-semibold text-text-primary sm:text-base">
        {{ item.title }}
      </h3>
      <p class="mt-3 text-sm leading-relaxed text-text-secondary/90">
        {{ item.description }}
      </p>
    </div>
  </article>
</template>
