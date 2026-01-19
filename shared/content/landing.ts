export interface CardModel {
  icon: string,
  title: string,
  description: string,
  color?: string,
}

export type ProblemSolutionTone = 'problem' | 'solution';

export interface ProblemSolutionItem extends Omit<CardModel, 'description'> {
  label: string,
  tone: ProblemSolutionTone
  description: string[]
  closingLine: {
    text: string,
    emphasis?: 'muted' | 'primary'
  }
}


export interface LandingContent {
  nav: {
    logo: string
    links: Array<{ label: string; href: string }>
    cta: string
  }
  hero: {
    headline: {
      primary: string,
      secondary: string
    },
    subheadline: string
    cta: {
      primary: string
      secondary: string
    }
    trustBullets: string[]
  },
  productPreview: {
    badge?: string,
    headline: { primary: string, secondary: string },
    description: string,
    bullets: string[],
    footnote: string,
    media: {
      src: string,
      alt: string
      caption?: string
    }

  },

  problemSolution: {
    items: Array<ProblemSolutionItem>,
    headline: string,
    subheadline: string,
  },
  features: {
    headline: string
    subheadline: string
    items: Array<CardModel>,
  }
  pro: {
    badge: string,
    headline: string,
    subheadline: string,
    items: Array<CardModel>,
    cta: {
      label: string,
      helper: string
    }

  },
  privacy: {
    headline: string
    subheadline: string
    features: Array<CardModel>
  },

  waitlist: {
    headline: string
    subheadline: string
    placeholder: string
    cta: string
    successTitle: string
    successMessage: string
  }
  footer: {
    tagline: string
    links: Array<{
      title: string
      items: Array<{ label: string; href: string }>
    }>
    social: Array<{
      icon: string
      href: string
      label: string
    }>
    copyright: string
  }

  checkout: {
    success: {
      title: string
      subtitle: string
      message: string
      primaryCtaLabel: string
      secondaryCtaLabel: string
      footerNote: string
    }

    failure: {
      title: string
      subtitle: string
      message: string
      primaryCtaLabel: string
      secondaryCtaLabel: string
      footerNote: string
    }
  }

}

export const landingContent: LandingContent = {
  nav: {
    logo: 'LucidClip',
    links: [
      {label: 'Features', href: '#features'},
      {label: 'Preview', href: '#privacy-preview'},
      {label: 'Pro', href: '#pro'},
      {label: 'Privacy', href: '#privacy'}
    ],
    cta: 'Join the Waitlist'
  },
  hero: {
    headline: {primary: 'Your Clipboard,', secondary: 'Supercharged'},
    subheadline:
      'A native desktop clipboard manager that turns every copy into an organized, searchable working memory, fast, quiet, and built for focus.',
    cta: {
      primary: 'Join the Waitlist now',
      secondary: 'See it in action'
    },
    trustBullets: [
      'Local-first, privacy-minded',
      'Native desktop app (macOS, Windows)',
      'Instant search, zero friction'
    ]
  },

  problemSolution: {
    headline: 'Why most clipboards fall short',
    subheadline: 'And what LucidClip does differently.',
    items: [
      {
        label: 'The Problem',
        tone: 'problem',
        icon: 'lucide:x',
        title: 'A clipboard that works against you',
        color: 'error',
        description: [
          'macOS and Windows come with a basic clipboard.',
          'It remembers almost nothing and gives you zero control.',
          'What you copy is constantly overwritten, often without warning.',
          'Third-party clipboard managers help, but rarely go far enough.',
          'They lack fine-grained control, context awareness, and real privacy guarantees.'
        ],
        closingLine: {
          text: 'You waste time, lose data, and trust tools that were never designed for power users.',
          emphasis: 'muted'
        }
      },
      {
        label: 'The Solution',
        tone: 'solution',
        icon: 'lucide:sparkles',
        title: 'A true system-level working memory',
        color: 'primary',
        description: [
          'LucidClip runs natively on your desktop, no browser hacks, no limitations.',
          'It captures everything you copy and organizes it by context.',
          'You decide what gets stored, what gets excluded, and what stays local.',
          'Fast, predictable, and privacy-first by design.'
        ],
        closingLine: {
          text: 'Your clipboard finally works for you—not the other way around.',
          emphasis: 'primary'
        }
      }
    ]
  },

  productPreview: {
    headline: {
      primary: 'Exclude what should',
      secondary: 'never be copied'
    },
    badge: 'Privacy by design',
    description: "LucidClip runs locally on your desktop, giving you complete control over what gets tracked. Exclude password managers, private browsers, or any sensitive app with a single click.",
    bullets: [
      'Choose which apps to exclude',
      'System-level privacy control',
      'Runs entirely on your machine',
    ],
    media: {
      src: '/images/app-exclusion.gif',
      alt: 'LucidClip app exclusion workflow',
      caption: 'System-level control, built for privacy'
    },
    footnote: "Local-first architecture means your clipboard data never leaves your machine unless you choose to sync."
  },

  features: {
    headline: 'Features that get out of your way',
    subheadline: 'Everything designed to be invisible until you need it.',
    items: [
      {
        icon: 'lucide:clock',
        title: 'Persistent History',
        description:
          'Never lose a copied item. Everything is saved and ready when you need it.'
      },
      {
        icon: 'lucide:search',
        title: 'Smart Search',
        description:
          'Find any clip instantly with intelligent search and filtering.'
      },
      {
        icon: 'lucide:layers',
        title: 'App-Aware Context',
        description:
          'Automatically detects the source app. Know where each clip came from.'
      },
      {
        icon: 'lucide:pin',
        title: 'Pin & Organize (Pro)',
        description:
          'Pin important clips and organize them with tags for quick access.'
      },
      {
        icon: 'lucide:shield',
        title: 'App Exclusions (Pro)',
        description:
          'Exclude sensitive apps like password managers from history. Privacy-first.'
      },
      {
        icon: 'lucide:cloud',
        title: 'Sync (Pro)',
        description:
          'Keep your clipboard history synced across all your devices.'
      }
    ],


  },

  pro: {
    badge: 'PRO',
    headline: 'Power features for serious workflows',
    subheadline:
      'LucidClip Pro adds privacy controls, automation, and sync—designed for people who demand more from their tools.',
    items: [
      {
        icon: 'lucide:shield',
        title: 'App Exclusions',
        description:
          'Exclude sensitive apps from clipboard history.'
      },
      {
        icon: 'lucide:zap',
        title: 'Advanced Rules',
        description:
          'Custom automation and smart organization.'
      },
      {
        icon: 'lucide:cloud',
        title: 'Sync Across Devices',
        description:
          'Access your clipboard on all your Macs.'
      }
    ],
    cta: {
      label: 'Get early Pro access',
      helper: 'Priority invites for Pro waitlist members'
    }
  },


  privacy: {
    headline: 'Privacy-first, always',
    subheadline: "Your clipboard is personal. LucidClip is built with privacy at its core.",
    features: [
      {
        icon: 'lucide:hard-drive',
        title: 'Local-first by default',
        description: 'Your clipboard data stays on your machine. No cloud uploads unless you choose Pro sync.',
        color: 'success'
      },
      {
        icon: 'lucide:lock',
        title: 'You control what is stored',
        description: 'Choose exactly what gets saved. Set retention policies and clear history anytime.',
        color: 'success'
      },
      {
        icon: 'lucide:eye-off',
        title: 'Exclude sensitive apps (Pro)',
        description: 'Automatically exclude password managers, private windows, or any app you specify.',
        color: 'success'
      }
    ]
  },
  waitlist: {
    headline: 'Ready to upgrade?',
    subheadline: 'Join the waiting list for early access to LucidClip',
    placeholder: 'Enter your email',
    cta: 'Join Waitlist',
    successTitle: "You're on the list!",
    successMessage: "We'll send you an email when LucidClip is ready to download."
  },
  footer: {
    tagline: 'An intelligent clipboard manager built for developers, creators, and power users who demand control and clarity.',
    links: [
      {
        title: 'Product',
        items: [
          {label: 'Features', href: '#features'},
          {label: 'Preview', href: '#privacy-preview'},
          {label: 'Pro', href: '#pro'},
          {label: 'Privacy', href: '#privacy'}
        ]
      },
      {
        title: 'Company',
        items: [
          {label: 'Privacy', href: '/privacy'},
          {label: 'Terms', href: '/terms'},
          {label: 'Contact', href: '/contact'}
        ]
      },
    ],
    social: [
      {icon: 'simple-icons:x', href: 'https://x.com/lucidclip', label: 'X (Twitter)'},
      {icon: 'simple-icons:github', href: 'https://github.com/lucidclip', label: 'GitHub'}
    ],
    copyright: `© ${new Date().getFullYear()} LucidClip. All rights reserved.`
  },
  checkout: {
    success: {
      title: 'Subscription activated 🎉',
      subtitle: 'You now have full access to LucidClip Pro.',
      message: 'A confirmation email will be sent to you shortly with your subscription details.',
      primaryCtaLabel: 'Open LucidClip',
      secondaryCtaLabel: 'Back to website',
      footerNote: 'You can close this page once the app opens.'
    },

    failure: {
      title: 'Checkout canceled',
      subtitle: 'No payment was made.',
      message: 'To try again, return to LucidClip and restart the upgrade flow.',
      primaryCtaLabel: 'Return to LucidClip',
      secondaryCtaLabel: 'Back to website',
      footerNote: 'You can close this page once the app opens.'
    }
  }

}
