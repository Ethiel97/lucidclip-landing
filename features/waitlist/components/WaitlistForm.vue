<script setup lang="ts">
import {useWaitlistForm} from '../composables/useWaitlistForm'
import {landingContent} from "#shared/content/landing";

const {waitlist} = landingContent
const {email, validationError, isLoading, handleSubmit} = useWaitlistForm()

const onSubmit = async (e: Event) => {
  e.preventDefault()
  await handleSubmit()
}
</script>

<template>
  <div class="text-center flex flex-col items-center">
    <!-- Header -->
    <h2 class="text-3xl sm:text-6xl font-bold text-text-primary">
      {{ waitlist.headline }}
    </h2>
    <p class="mt-4 text-lg text-text-secondary">
      {{ waitlist.subheadline }}
    </p>

    <UButton
      data-tally-open="VLPL6y" data-tally-align-left="1" data-tally-overlay="1" data-tally-emoji-text="👋"
      data-tally-emoji-animation="heart-beat" data-tally-form-events-forwarding="1"
      type="submit"
      :label="waitlist.cta"
      color="primary"
      class="text-white w-fit my-4 px-8 py-3 rounded-pill"
      size="xl"
    />


    <!-- Form -->
    <!--
        <form @submit="onSubmit" class="mt-8 max-w-md mx-auto">
          <div class="flex flex-col sm:flex-row gap-3">
            <div class="flex-1">
              <UInput
                v-model="email"
                type="email"
                :placeholder="waitlist.placeholder"
                size="lg"
                :disabled="isLoading"
                :error="!!validationError"
                autocomplete="email"
              />
              <p v-if="validationError" class="mt-2 text-sm text-red-500 text-left">
                {{ validationError }}
              </p>
            </div>

            <UButton
              type="submit"
              :label="waitlist.cta"
              color="primary"
              class="text-text-primary"
              size="xl"
              :loading="isLoading"
              :disabled="isLoading || !email"
            />
          </div>
        </form>
    -->

    <!-- Privacy note -->
    <p class="mt-4 text-xs text-textMuted">
      We respect your privacy. Unsubscribe at any time.
    </p>
  </div>
</template>
