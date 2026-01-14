export function useEmailValidation() {
  const validateEmail = (email: string): { valid: boolean; error?: string } => {
    if (!email) {
      return {valid: false, error: 'Email is required'}
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {valid: false, error: 'Please enter a valid email address'}
    }

    // Additional validation rules
    if (email.length > 254) {
      return {valid: false, error: 'Email is too long'}
    }

    const [localPart, domain] = email.split('@')
    // @ts-ignore
    if (localPart.length > 64) {
      return {valid: false, error: 'Email local part is too long'}
    }

    // @ts-ignore
    if (domain.split('.').some(part => part.length > 63)) {
      return {valid: false, error: 'Email domain is invalid'}
    }

    return {valid: true}
  }

  return {
    validateEmail
  }
}
