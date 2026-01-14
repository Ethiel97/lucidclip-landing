<script setup lang="ts">
import {useWaitlistForm} from '../composables/useWaitlistForm'
import {landingContent} from "#shared/content/landing";

const {waitlist} = landingContent
const {isSuccess} = useWaitlistForm()
</script>

<template>
  <section id="waitlist" class="py-16 sm:py-24 bg-bg bg-glow">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto">
        <WaitlistSuccess v-if="isSuccess"/>
        <WaitlistForm v-else/>
      </div>
    </div>
  </section>
</template>
