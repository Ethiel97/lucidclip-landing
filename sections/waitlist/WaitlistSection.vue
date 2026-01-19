<script setup lang="ts">
import {landingContent} from "#shared/content/landing";

const {waitlist} = landingContent
</script>

<template>
  <section id="waitlist" class="py-16 sm:py-24 bg-bg bg-glow">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto">
        <WaitlistForm />
      </div>
    </div>
  </section>
</template>
