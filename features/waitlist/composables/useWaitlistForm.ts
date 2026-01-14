import { useWaitlistStore } from '../stores/waitlist'
import { useEmailValidation } from './useEmailValidation'

export function useWaitlistForm() {
  const store = useWaitlistStore()
  const { validateEmail } = useEmailValidation()

  const email = ref('')
  const validationError = ref('')

  const isLoading = computed(() => store.status === 'loading')
  const isSuccess = computed(() => store.status === 'success')
  const isError = computed(() => store.status === 'error')

  const handleSubmit = async () => {
    // Clear previous validation error
    validationError.value = ''

    // Validate email
    const validation = validateEmail(email.value)
    if (!validation.valid) {
      validationError.value = validation.error || 'Invalid email'
      return
    }

    // Submit to store
    await store.submit(email.value)

    // Clear email field on success
    if (store.status === 'success') {
      email.value = ''
    }
  }

  const reset = () => {
    email.value = ''
    validationError.value = ''
    store.reset()
  }

  return {
    email,
    validationError,
    isLoading,
    isSuccess,
    isError,
    handleSubmit,
    reset
  }
}
