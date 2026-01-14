<script setup lang="ts">
import ProblemSolutionCard from './ProblemSolutionCard.vue'
import {landingContent} from "#shared/content/landing";

const {problemSolution} = landingContent
</script>

<template>
  <section class="relative bg-bg text-textPrimary">
    <!-- Background glow -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute left-1/2 -top-65 h-225 w-225 -translate-x-1/2 rounded-full blur-3xl opacity-40"
        style="background: radial-gradient(circle, rgba(97,95,255,.18), transparent 60%);"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/0 to-black/35"/>
    </div>

    <div class="relative mx-auto max-w-6xl px-6 py-28 lg:py-36">
      <div class="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-12">
        <ProblemSolutionCard
          data-aos="fade-up"
          data-aos-duration="1000"
          :data-aos-delay="index * 200"
          v-for="(card, index) in problemSolution.items"
          :key="card.title"
          :model="card"
        />
      </div>
    </div>
  </section>
</template>
