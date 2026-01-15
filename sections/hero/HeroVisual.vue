<template>
  <div class="relative mx-auto w-full max-w-160 ">
    <!-- glow behind the window -->
    <div
      class="pointer-events-none absolute -inset-10 rounded-[28px] blur-3xl opacity-60"
      style="background: radial-gradient(circle at 40% 30%, rgba(97,95,255,.35), transparent 60%);"
    />

    <!-- window container -->
    <div class="relative rounded-card bg-surface/0 ">
      <div
        class="overflow-hidden rounded-card bg-surface/5 border border-border-subtle/5 hover:scale-[1.02] duration-300 transition-transform">
        <NuxtImg
          src="/images/hero.webp"
          alt="LucidClip preview"
          width="2224"
          height="1624"
          class="h-auto w-full object-cover"
          format="avif"
          loading="lazy"
          fetchpriority="high"
          preload
          placeholder="blur"
        />
      </div>
    </div>
  </div>
</template>
