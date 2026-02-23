<script setup lang="ts">
definePageMeta({layout: 'main-layout'})

useSeoMeta({
  title: 'Terms of Service — LucidClip',
  description: 'Read the LucidClip terms of service.',
  ogTitle: 'Terms of Service — LucidClip',
  ogDescription: 'Read the LucidClip terms of service.',
  ogType: 'website'
})
</script>

<template>
  <main class="w-full">
    <section class="relative overflow-hidden bg-bg pb-16 pt-28 text-text-primary sm:pb-20 sm:pt-32">
      <div class="pointer-events-none absolute inset-0">
        <div
          class="absolute left-1/2 -top-40 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-35"
          style="background: radial-gradient(circle, rgba(97,95,255,.2), transparent 60%);"
        />
        <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/30"/>
      </div>

      <div class="relative mx-auto max-w-4xl px-6 text-center">
        <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-duration="1000">
          Terms of Service
        </h1>
        <p
          class="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="150"
        >
          These terms outline the rules and guidelines for using LucidClip.
        </p>
      </div>
    </section>

    <section class="relative bg-bg py-12 text-text-primary sm:py-16">
      <div class="pointer-events-none absolute inset-0">
        <div
          class="absolute left-1/2 -top-60 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style="background: radial-gradient(circle, rgba(97,95,255,.12), transparent 60%);"
        />
        <div class="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35"/>
      </div>

      <div class="relative mx-auto max-w-4xl px-6">
        <UCard
          :ui="{ body: 'p-6 sm:p-8' }"
          class="border border-border-subtle/60 bg-linear-to-b from-surface/80 to-surface2/60 shadow-soft"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="space-y-4 text-sm leading-relaxed text-text-secondary">
            <p>
              By using LucidClip, you agree to comply with applicable laws and use the software responsibly. You are
              responsible for the security of your device and any data stored locally.
            </p>
            <p>
              LucidClip is provided "as is" without warranties of any kind. We are not liable for any damages arising
              from the use or inability to use the product.
            </p>
            <p>
              For support or questions about these terms, contact
              <a class="text-primary hover:underline" href="mailto:support@lucidclip.app">support@lucidclip.app</a>.
            </p>
          </div>
        </UCard>
      </div>
    </section>
  </main>
</template>
