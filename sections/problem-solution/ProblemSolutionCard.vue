<script setup lang="ts">
import type {ProblemSolutionItem} from "#shared/content/landing";


const props = defineProps<{ model: ProblemSolutionItem }>()

const badgeStyles = computed(() => {
  /* if (props.model.badge.variant === 'problem') {
     return {
       wrap: 'bg-rose-500/15 ring-1 ring-rose-500/25',
       text: 'text-rose-300',
       //TODO: x icon is not rendering, need to fix
       icon: 'i-lucide-x text-rose-300',
     }
   }*/
  return {
    wrap: `bg-${props.model.color}/15 ring-1 ring-${props.model.color}/25`,
    text: `text-${props.model.color}`,
    icon: `i-${props.model.icon}`,
  }
})

const emphasisClass = computed(() => {
  return props.model.closingLine.emphasis === 'primary'
    ? 'text-primary'
    : `text-text-${props.model.closingLine.emphasis} italic`
})
</script>

<template>
  <div class="rounded-card border border-border-subtle bg-surface/55 shadow-soft hover:bg-surface/75 transition-colors">
    <div class="p-10">
      <!-- Badge -->
      <div
        class="inline-flex items-center gap-2 rounded-pill px-3 py-1 text-xs font-medium"
        :class="badgeStyles.wrap"
      >
        <UIcon :name="badgeStyles.icon" class="h-4 w-4" :class="badgeStyles.text"/>
        <span :class="badgeStyles.text">{{ model.label }}</span>
      </div>

      <!-- Title -->
      <h3 class="mt-6 text-2xl font-semibold tracking-tight">
        {{ model.title }}
      </h3>

      <!-- Content -->
      <div class="mt-6 space-y-4 text-sm md:text-base leading-relaxed text-text-secondary">
        <p v-for="line in model.description" :key="line">
          {{ line }}
        </p>
      </div>

      <!-- Emphasis -->
      <p
        v-if="model.closingLine"
        class="mt-6 text-base leading-relaxed"
        :class="emphasisClass"
      >
        {{ model.closingLine.text }}
      </p>
    </div>
  </div>
</template>
