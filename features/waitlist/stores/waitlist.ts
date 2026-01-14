import {defineStore} from 'pinia'

interface WaitlistState {
  email: string
  status: 'idle' | 'loading' | 'success' | 'error'
  errorMessage: string
}

export const useWaitlistStore = defineStore('waitlist', {
  state: (): WaitlistState => ({
    email: '',
    status: 'idle',
    errorMessage: ''
  }),

  actions: {
    async submit(email: string) {
      // Prevent duplicate submissions
      if (this.status === 'loading') {
        return
      }

      this.status = 'loading'
      this.errorMessage = ''

      try {
        const {data, error} = await $fetch<{ ok: boolean; message?: string }>('/api/waitlist', {
          method: 'POST',
          body: {email}
        })

        if (error) {
          throw new Error(error.message || 'Failed to join waitlist')
        }

        if (!data?.ok) {
          throw new Error(data?.message || 'Failed to join waitlist')
        }

        this.email = email
        this.status = 'success'

        // Show success toast
        const toast = useToast()
        toast.add({
          title: 'Success!',
          description: "You've been added to the waitlist.",
          color: 'success'
        })
      } catch (err) {
        this.status = 'error'
        this.errorMessage = err instanceof Error ? err.message : 'Something went wrong'

        // Show error toast
        const toast = useToast()
        toast.add({
          title: 'Error',
          description: this.errorMessage,
          color: 'warning'
        })
      }
    },

    reset() {
      this.email = ''
      this.status = 'idle'
      this.errorMessage = ''
    }
  }
})
