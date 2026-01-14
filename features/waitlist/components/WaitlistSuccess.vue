<script setup lang="ts">
import { useWaitlistForm } from '../composables/useWaitlistForm'
import {landingContent} from "#shared/content/landing";

const { waitlist } = landingContent
const { reset } = useWaitlistForm()
</script>

<template>
  <div class="text-center">
    <!-- Success Icon -->
    <div class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20 mb-6">
      <Icon name="lucide:check-circle" class="h-8 w-8 text-primary" />
    </div>

    <!-- Message -->
    <h2 class="text-3xl sm:text-4xl font-bold text-textPrimary">
      {{ waitlist.successTitle }}
    </h2>
    <p class="mt-4 text-lg text-textSecondary">
      {{ waitlist.successMessage }}
    </p>

    <!-- Reset button -->
    <UButton
      label="Submit Another Email"
      color="neutral"
      variant="outline"
      size="lg"
      class="mt-8"
      @click="reset"
    />
  </div>
</template>
