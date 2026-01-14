// In-memory storage for waitlist emails
// TODO: Replace with actual database in production
const waitlistEmails = new Set<string>()

export interface WaitlistRepository {
  addEmail: (email: string) => Promise<void>
  hasEmail: (email: string) => Promise<boolean>
  getCount: () => Promise<number>
}

export const createWaitlistRepository = (): WaitlistRepository => {
  return {
    async addEmail(email: string): Promise<void> {
      const normalizedEmail = email.toLowerCase().trim()
      waitlistEmails.add(normalizedEmail)
    },

    async hasEmail(email: string): Promise<boolean> {
      const normalizedEmail = email.toLowerCase().trim()
      return waitlistEmails.has(normalizedEmail)
    },

    async getCount(): Promise<number> {
      return waitlistEmails.size
    }
  }
}
