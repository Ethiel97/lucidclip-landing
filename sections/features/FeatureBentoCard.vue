<script setup lang="ts">
import type {CardModel} from "#shared/content/landing";

const props = defineProps<{ item: CardModel }>()

const isPro = computed(() => props.item.title.includes('(Pro)'))
const title = computed(() => props.item.title.replace(' (Pro)', ''))
</script>

<template>
  <article
    class="group relative flex flex-col overflow-hidden rounded-card border border-white/[0.06] bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/25 hover:bg-surface/70"
  >
    <!-- micro visual -->
    <div class="pointer-events-none mb-6 select-none" aria-hidden="true">
      <!-- Smart Search -->
      <template v-if="item.visual === 'search'">
        <div class="flex items-center gap-2 rounded-[10px] border border-white/10 bg-bg/80 px-3 py-2">
          <UIcon name="i-lucide-search" class="h-3.5 w-3.5 shrink-0 text-text-muted"/>
          <span class="text-xs text-text-primary">stripe api</span>
          <span class="h-3.5 w-px animate-pulse bg-primary"/>
          <span class="kbd ml-auto">⌘K</span>
        </div>
        <div class="mt-2 space-y-1.5">
          <div class="flex items-center gap-2.5 rounded-lg border border-primary/20 bg-primary/[0.06] px-3 py-2">
            <UIcon name="i-lucide-key-round" class="h-3.5 w-3.5 shrink-0 text-text-muted"/>
            <span class="truncate text-xs text-text-secondary">
              <span class="rounded-[3px] bg-primary/25 px-0.5 text-primary-200">STRIPE_API</span>_KEY=sk_live_…
            </span>
            <span class="ml-auto shrink-0 text-[10px] text-text-muted">2m</span>
          </div>
          <div class="flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
            <UIcon name="i-lucide-link" class="h-3.5 w-3.5 shrink-0 text-text-muted"/>
            <span class="truncate text-xs text-text-secondary">
              docs.<span class="rounded-[3px] bg-primary/25 px-0.5 text-primary-200">stripe</span>.com/<span class="rounded-[3px] bg-primary/25 px-0.5 text-primary-200">api</span>/charges
            </span>
            <span class="ml-auto shrink-0 text-[10px] text-text-muted">1h</span>
          </div>
        </div>
      </template>

      <!-- Persistent History -->
      <template v-else-if="item.visual === 'history'">
        <div class="space-y-1.5 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
          <div class="flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
            <UIcon name="i-lucide-code" class="h-3.5 w-3.5 shrink-0 text-text-muted"/>
            <span class="truncate text-xs text-text-secondary">const token = await auth()…</span>
            <span class="ml-auto shrink-0 text-[10px] text-text-muted">now</span>
          </div>
          <div class="flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
            <UIcon name="i-lucide-link" class="h-3.5 w-3.5 shrink-0 text-text-muted"/>
            <span class="truncate text-xs text-text-secondary">linear.app/team/issue/LC-142</span>
            <span class="ml-auto shrink-0 text-[10px] text-text-muted">3h</span>
          </div>
          <div class="flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
            <UIcon name="i-lucide-text" class="h-3.5 w-3.5 shrink-0 text-text-muted"/>
            <span class="truncate text-xs text-text-secondary">Meeting notes — Q3 roadmap…</span>
            <span class="ml-auto shrink-0 text-[10px] text-text-muted">2d</span>
          </div>
        </div>
      </template>

      <!-- App Exclusions -->
      <template v-else-if="item.visual === 'exclusions'">
        <div class="flex items-center gap-2.5">
          <span class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03]">
            <UIcon name="i-lucide-key-round" class="h-4 w-4 text-text-muted"/>
          </span>
          <span class="relative flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03] opacity-50">
            <UIcon name="i-lucide-landmark" class="h-4 w-4 text-text-muted"/>
            <span class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-surface2 ring-1 ring-white/10">
              <UIcon name="i-lucide-ban" class="h-2.5 w-2.5 text-red-400"/>
            </span>
          </span>
          <span class="relative flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03] opacity-50">
            <UIcon name="i-lucide-heart-pulse" class="h-4 w-4 text-text-muted"/>
            <span class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-surface2 ring-1 ring-white/10">
              <UIcon name="i-lucide-ban" class="h-2.5 w-2.5 text-red-400"/>
            </span>
          </span>
          <span class="ml-1 rounded-pill border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-text-muted">
            2 apps excluded
          </span>
        </div>
      </template>

      <!-- Clipboard AI -->
      <template v-else-if="item.visual === 'ai'">
        <div class="truncate rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-xs italic text-text-secondary">
          “La simplicité est la sophistication suprême.”
        </div>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span class="inline-flex items-center gap-1 rounded-pill border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-text-secondary">
            <UIcon name="i-lucide-sparkles" class="h-3 w-3"/> Explain
          </span>
          <span class="inline-flex items-center rounded-pill border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-text-secondary">
            Summarize
          </span>
          <span class="inline-flex items-center rounded-pill border border-primary/40 bg-primary/15 px-2.5 py-1 text-[11px] font-medium text-primary-200">
            Translate
          </span>
        </div>
        <div class="mt-2 flex items-start gap-2 rounded-lg border border-primary/20 bg-primary/[0.06] px-3 py-2 text-xs text-text-secondary">
          <UIcon name="i-lucide-corner-down-right" class="mt-px h-3 w-3 shrink-0 text-primary"/>
          <span class="truncate">“Simplicity is the ultimate sophistication.”</span>
        </div>
      </template>

      <!-- App-Aware Context -->
      <template v-else-if="item.visual === 'context'">
        <div class="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5">
          <p class="truncate text-xs text-text-secondary">const apiKey = process.env.STRIPE_KEY</p>
          <div class="mt-2 flex items-center gap-1.5 text-[10px] text-text-muted">
            <span class="inline-flex items-center gap-1 rounded-[5px] border border-white/10 bg-white/[0.03] px-1.5 py-0.5">
              <UIcon name="i-lucide-terminal" class="h-2.5 w-2.5"/> VS Code
            </span>
            <span>·</span>
            <span>copied 2m ago</span>
          </div>
        </div>
      </template>

      <!-- Sync -->
      <template v-else-if="item.visual === 'sync'">
        <div class="flex items-center px-1 py-1.5">
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03]">
            <UIcon name="i-lucide-laptop" class="h-4 w-4 text-text-secondary"/>
          </span>
          <span class="relative mx-3 h-px flex-1 bg-linear-to-r from-white/5 via-primary/50 to-white/5">
            <span class="absolute left-1/2 top-1/2 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/30 bg-surface">
              <UIcon name="i-lucide-lock" class="h-2.5 w-2.5 text-primary"/>
            </span>
          </span>
          <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03]">
            <UIcon name="i-lucide-smartphone" class="h-4 w-4 text-text-secondary"/>
          </span>
        </div>
        <p class="mt-1.5 text-center text-[10px] text-text-muted">End-to-end encrypted</p>
      </template>

      <!-- fallback: icon chip -->
      <template v-else>
        <div class="flex h-10 w-10 items-center justify-center rounded-[10px] bg-primary/10 ring-1 ring-primary/20">
          <UIcon :name="item.icon" class="h-[18px] w-[18px] text-primary"/>
        </div>
      </template>
    </div>

    <!-- copy -->
    <div class="mt-auto">
      <h3 class="flex items-center gap-2 text-[15px] font-semibold text-text-primary">
        {{ title }}
        <span
          v-if="isPro"
          class="rounded-pill bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary ring-1 ring-primary/25"
        >
          Pro
        </span>
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-text-secondary">
        {{ item.description }}
      </p>
    </div>
  </article>
</template>
