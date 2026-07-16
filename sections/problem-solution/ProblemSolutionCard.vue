<script setup lang="ts">
import type {ProblemSolutionItem} from "#shared/content/landing";

const props = defineProps<{ model: ProblemSolutionItem }>()

const isSolution = computed(() => props.model.tone === 'solution')

const styles = computed(() => (
  isSolution.value
    ? {
        badge: 'bg-primary/10 text-primary ring-1 ring-primary/25',
        marker: 'i-lucide-check',
        markerColor: 'text-primary',
        closing: 'text-primary'
      }
    : {
        badge: 'bg-white/[0.04] text-text-secondary ring-1 ring-white/10',
        marker: 'i-lucide-x',
        markerColor: 'text-red-400/70',
        closing: 'italic text-text-muted'
      }
))
</script>

<template>
  <!-- solution card gets a brand gradient border; problem card stays quiet -->
  <div
    class="rounded-card p-px"
    :class="isSolution
      ? 'bg-linear-to-b from-primary/40 via-primary/10 to-transparent'
      : 'bg-white/[0.06]'"
  >
    <div
      class="relative h-full overflow-hidden rounded-[13px] p-8 sm:p-9"
      :class="isSolution ? 'bg-[#0a0b15]' : 'bg-surface/60'"
    >
      <!-- inner glow, solution only -->
      <div
        v-if="isSolution"
        class="pointer-events-none absolute -top-24 left-1/2 h-48 w-80 -translate-x-1/2 rounded-full blur-3xl"
        style="background: radial-gradient(closest-side, rgba(97,95,255,.18), transparent 70%);"
      />

      <div class="relative">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 rounded-pill px-3 py-1 text-xs font-medium" :class="styles.badge">
          <UIcon :name="`i-${model.icon}`" class="h-3.5 w-3.5"/>
          <span>{{ model.label }}</span>
        </div>

        <!-- Title -->
        <h3 class="mt-6 font-display text-xl font-semibold tracking-tight sm:text-2xl">
          {{ model.title }}
        </h3>

        <!-- Content -->
        <ul class="mt-6 space-y-3.5">
          <li
            v-for="line in model.description"
            :key="line"
            class="flex items-start gap-3 text-sm leading-relaxed text-text-secondary sm:text-[15px]"
          >
            <UIcon :name="styles.marker" class="mt-0.5 h-4 w-4 shrink-0" :class="styles.markerColor"/>
            <span>{{ line }}</span>
          </li>
        </ul>

        <!-- Emphasis -->
        <p
          v-if="model.closingLine"
          class="mt-7 border-t border-white/5 pt-5 text-[15px] leading-relaxed"
          :class="styles.closing"
        >
          {{ model.closingLine.text }}
        </p>
      </div>
    </div>
  </div>
</template>
