<script setup lang="ts">
import ProblemSolutionCard from './ProblemSolutionCard.vue'
import {landingContent} from "#shared/content/landing";

const {problemSolution} = landingContent
</script>

<template>
  <section class="relative border-t border-white/5 bg-bg text-text-primary">
    <div class="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-28">
      <SectionHeader
        :eyebrow="problemSolution.eyebrow"
        :title="problemSolution.headline"
        :subtitle="problemSolution.subheadline"
      />

      <div class="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
        <ProblemSolutionCard
          v-for="(card, index) in problemSolution.items"
          :key="card.title"
          data-aos="fade-up"
          data-aos-duration="600"
          :data-aos-delay="index * 100"
          :model="card"
        />
      </div>
    </div>
  </section>
</template>
