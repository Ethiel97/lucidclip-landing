import {createWaitlistRepository} from "../features/waitlist/waitlist.repo";

const repo = createWaitlistRepository()

export default defineEventHandler(async (event) => {
  try {
    // Parse request body
    const body = await readBody(event)
    const email = body?.email

    // Validate email presence
    if (!email || typeof email !== 'string') {
      return {
        ok: false,
        message: 'Email is required'
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        ok: false,
        message: 'Invalid email format'
      }
    }

    // Normalize email
    const normalizedEmail = email.toLowerCase().trim()

    // Check if email already exists
    const exists = await repo.hasEmail(normalizedEmail)
    if (exists) {
      return {
        ok: false,
        message: 'This email is already on the waitlist'
      }
    }

    // Add email to waitlist
    await repo.addEmail(normalizedEmail)

    // Log success (in production, you might want to send to analytics/email service)
    console.log(`New waitlist signup: ${normalizedEmail}`)

    return {
      ok: true
    }
  } catch (error) {
    console.error('Waitlist API error:', error)

    return {
      ok: false,
      message: 'An error occurred. Please try again later.'
    }
  }
})
