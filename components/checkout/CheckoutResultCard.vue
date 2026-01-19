<!-- components/checkout/CheckoutResultCard.vue -->
<script setup lang="ts">
type Tone = 'success' | 'error'

type Action = {
  label: string
  href?: string
  onClick?: () => void
  icon?: string
  trailingIcon?: string
  variant?: 'primary' | 'secondary'
}

const props = withDefaults(
  defineProps<{
    tone: Tone
    title: string
    subtitle?: string
    message?: string
    primaryAction: Action
    secondaryAction?: Action
    footerNote?: string
    // AOS tuning (optional)
    aosCard?: string
    aosIcon?: string
    aosTitle?: string
    aosSubtitle?: string
    aosMessage?: string
    aosActions?: string
    aosFooter?: string
  }>(),
  {
    subtitle: '',
    message: '',
    footerNote: '',
    aosCard: 'fade-up',
    aosIcon: 'zoom-in',
    aosTitle: 'fade-up',
    aosSubtitle: 'fade-up',
    aosMessage: 'fade',
    aosActions: 'fade-up',
    aosFooter: 'fade',
  }
)

const toneIcon = computed(() => (props.tone === 'success' ? 'lucide:check' : 'lucide:x'))

const iconWrapperClass = computed(() => {
  if (props.tone === 'success') {
    return 'bg-primary/10 text-primary'
  }
  return 'bg-surface2 text-text-secondary'
})

const handleAction = (a: Action) => {
  if (a.onClick) return a.onClick()
  if (a.href) return navigateTo(a.href)
}
</script>

<template>
  <div
    class="relative overflow-hidden rounded-lg border border-border-subtle bg-surface p-12 shadow-[0_40px_120px_rgba(0,0,0,.65)]"
    :data-aos="aosCard"
    data-aos-duration="600"
    data-aos-easing="ease-out-cubic"
  >
    <!-- icon -->
    <div class="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full ring-1 ring-border-subtle/40"
         :class="iconWrapperClass"
         :data-aos="aosIcon"
         data-aos-delay="200"
         data-aos-duration="500"
         data-aos-easing="ease-out-back"
    >
      <!-- inner glow -->
      <div class="pointer-events-none absolute h-16 w-16 rounded-full blur-xl bg-primary-500/20"
           v-if="tone === 'success'"
      />
      <Icon :name="toneIcon" class="relative z-10 h-8 w-8"/>
    </div>

    <!-- title -->
    <h1
      class="mb-4 text-center text-4xl font-bold tracking-[-0.02em] text-text-primary"
      :data-aos="aosTitle"
      data-aos-delay="300"
      data-aos-duration="500"
      data-aos-easing="ease-out-cubic"
    >
      {{ title }}
    </h1>

    <!-- subtitle -->
    <p
      v-if="subtitle"
      class="mb-6 text-center text-xl text-text-secondary"
      :data-aos="aosSubtitle"
      data-aos-delay="400"
      data-aos-duration="500"
      data-aos-easing="ease-out-cubic"
    >
      {{ subtitle }}
    </p>

    <!-- message -->
    <p
      v-if="message"
      class="mx-auto mb-10 max-w-md text-center text-sm leading-relaxed text-text-muted"
      :data-aos="aosMessage"
      data-aos-delay="500"
      data-aos-duration="500"
      data-aos-easing="ease-out-cubic"
    >
      {{ message }}
    </p>

    <!-- actions -->
    <div
      class="flex flex-col gap-3"
      :data-aos="aosActions"
      data-aos-delay="600"
      data-aos-duration="500"
      data-aos-easing="ease-out-cubic"
    >
      <UButton
        size="xl"
        color="primary"
        class="group w-full rounded-pill py-4 text-base font-semibold justify-center"
        :icon="primaryAction.icon"
        :trailing-icon="primaryAction.trailingIcon ?? 'lucide:external-link'"
        @click="handleAction(primaryAction)"
      >
        {{ primaryAction.label }}
      </UButton>

      <UButton
        v-if="secondaryAction"
        size="xl"
        color="neutral"
        variant="soft"
        class="w-full rounded-pill justify-center py-4 text-base font-medium text-text-secondary hover:text-text-primary"
        :icon="secondaryAction.icon ?? 'lucide:arrow-left'"
        @click="handleAction(secondaryAction)"
      >
        {{ secondaryAction.label }}
      </UButton>
    </div>

    <!-- footer -->
    <p
      v-if="footerNote"
      class="mt-6 text-center text-xs text-text-muted"
      :data-aos="aosFooter"
      data-aos-delay="700"
      data-aos-duration="500"
      data-aos-easing="ease-out-cubic"
    >
      {{ footerNote }}
    </p>

    <!-- subtle bottom glow -->
    <div
      class="pointer-events-none absolute -bottom-20 left-1/2 h-32 w-3/4 -translate-x-1/2 blur-[60px] bg-primary-500/10"
    />
  </div>
</template>
