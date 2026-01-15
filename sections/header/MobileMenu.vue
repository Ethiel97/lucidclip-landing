<script setup lang="ts">
import {landingContent} from '#shared/content/landing'

const {nav} = landingContent

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const close = () => emit('close')

const handleNavClick = (href: string) => {
  close()
  if (href.startsWith('#')) {
    document.querySelector(href)?.scrollIntoView({behavior: 'smooth', block: 'start'})
  }
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close()
}

/** Keep overlay mounted during leave animation */
const isMounted = ref(false)

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) isMounted.value = true
    if (import.meta.client) document.body.style.overflow = isOpen ? 'hidden' : ''
  },
  {immediate: true}
)

onMounted(() => {
  if (import.meta.client) window.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
  if (import.meta.client) window.removeEventListener('keydown', onKeydown)
  if (import.meta.client) document.body.style.overflow = ''
})

const onAfterLeave = () => {
  isMounted.value = false
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isMounted" class="fixed inset-0 z-60" aria-modal="true" role="dialog">
      <!-- Backdrop stays until after-leave -->
      <div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]" @click="close"/>

      <Transition name="slide-right" appear @after-leave="onAfterLeave">
        <aside
          v-if="open"
          class="
            absolute right-0 top-0 h-full w-[86%] max-w-90
            bg-surface border-l border-border-subtle/60
            shadow-[0_20px_80px_rgba(0,0,0,.6)]
          "
        >
          <div class="flex items-center justify-between border-b border-border-subtle/50 p-4">
            <div class="flex items-center gap-3">
              <div
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-surface2/80 ring-1 ring-border-subtle/60">
                <NuxtImg format="webp" densities="1x 2x"
                         src="/images/logo.png"
                         alt="LucidClip Logo" class="h-5 w-5"/>
              </div>
              <span class="text-lg font-semibold text-text-primary">{{ nav.logo }}</span>
            </div>

            <button
              class="rounded-pill p-2 text-text-secondary hover:text-text-primary hover:bg-surface2/60 transition"
              @click="close"
              aria-label="Close menu"
            >
              <Icon name="lucide:x" class="h-5 w-5"/>
            </button>
          </div>

          <nav class="p-4">
            <a
              v-for="link in nav.links"
              :key="link.href"
              :href="link.href"
              class="block rounded-xl px-4 py-3 text-base text-text-secondary hover:bg-surface2/60 hover:text-text-primary transition"
              @click.prevent="handleNavClick(link.href)"
            >
              {{ link.label }}
            </a>
          </nav>

          <div class="mt-auto border-t border-border-subtle/50 p-4">
            <button
              class="w-full rounded-pill bg-primary px-6 py-3 font-semibold text-white hover:opacity-95 transition"
              data-tally-open="VLPL6y"
              data-tally-align-left="1"
              data-tally-overlay="1"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="heart-beat"
              data-tally-form-events-forwarding="1"
              @click="close"
            >
              {{ nav.cta }}
            </button>

            <p class="mt-3 text-center text-xs text-text-muted">
              Priority invites for early users
            </p>
          </div>
        </aside>
      </Transition>
    </div>
  </Teleport>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 280ms cubic-bezier(.2, .8, .2, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
