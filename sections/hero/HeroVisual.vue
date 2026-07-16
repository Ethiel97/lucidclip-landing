<template>
  <div class="relative mx-auto w-full max-w-4xl">
    <!-- glow behind the window -->
    <div
      class="pointer-events-none absolute -inset-x-16 top-8 bottom-8 rounded-[40px] blur-3xl opacity-50"
      style="background: radial-gradient(closest-side, rgba(97,95,255,.3), transparent 70%);"
    />

    <!-- window frame -->
    <div class="relative rounded-2xl border border-white/10 bg-surface/70 p-1.5 shadow-premium backdrop-blur-sm sm:p-2">
      <!-- chrome bar -->
      <div class="flex items-center px-3 py-2 sm:py-2.5">
        <div class="flex items-center gap-1.5">
          <span class="h-2.5 w-2.5 rounded-full bg-white/10"/>
          <span class="h-2.5 w-2.5 rounded-full bg-white/10"/>
          <span class="h-2.5 w-2.5 rounded-full bg-white/10"/>
        </div>
        <span class="absolute left-1/2 -translate-x-1/2 text-[11px] font-medium tracking-wide text-text-muted">
          LucidClip
        </span>
        <span class="kbd ml-auto hidden sm:inline-flex">⌘⇧V</span>
      </div>

      <div class="overflow-hidden rounded-[10px] border border-white/[0.06] bg-bg">
        <NuxtImg
          src="/images/main-hero.webp"
          alt="LucidClip clipboard history window"
          width="2424"
          height="1624"
          class="h-auto w-full object-cover"
          format="webp"
          fetchpriority="high"
          preload
        />
      </div>
    </div>

    <!-- sink into the page -->
    <div class="pointer-events-none absolute -inset-x-8 -bottom-1 h-32 bg-linear-to-t from-bg via-bg/70 to-transparent"/>
  </div>
</template>
