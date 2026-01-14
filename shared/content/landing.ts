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
  }
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
}

export const landingContent: LandingContent = {
  nav: {
    logo: 'LucidClip',
    links: [
      {label: 'Features', href: '#features'},
      {label: 'Pro', href: '#pro'},
      {label: 'Privacy', href: '#privacy'}
    ],
    cta: 'Join the Waitlist'
  },
  hero: {
    headline: {
      primary: 'Your Clipboard,',
      secondary: 'Supercharged'
    },
    subheadline: 'LucidClip turns every copy into an organized, searchable working memory—fast, quiet, and built for focus.',
    cta: {
      primary: 'Join the Waitlist now',
      secondary: 'See it in action'
    },
    trustBullets: [
      'Local-first, privacy-minded',
      'Built for developers & power users',
      'Instant search, zero friction'
    ]
  },

  problemSolution: {
    headline: 'Why most clipboards fail',
    subheadline: 'And how LucidClip fixes it.',
    items: [
      {
        label: 'The Problem',
        tone: 'problem',
        icon: 'lucide:x',
        title: 'Losing what you just copied',
        color: 'error',
        description: [
          'You copy something important.',
          "Five seconds later, it's gone.",
          "Replaced by a random URL you didn't need.",
          'You lose hours every week to this chaos.'
        ],
        closingLine: {
          text: 'You lose hours every week to this chaos',
          emphasis: 'muted'
        },
      },
      {
        label: 'The Solution',
        tone: 'solution',
        icon: 'lucide:sparkles',
        title: 'An intelligent working memory',
        color: 'primary',
        description: [
          'LucidClip remembers everything you copy.',
          'Organized by context. Accessible in milliseconds.',
          'Code stays with code. Links with links.',
          'Your clipboard finally works for you.'
        ],
        closingLine: {
          text: 'Your clipboard finally works for you',
          emphasis: 'primary'
        }
      }
    ]
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
          {label: 'Pro', href: '#pro'},
          {label: 'Privacy', href: '#privacy'},
          // {label: 'Pricing', href: '#pricing'}
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
  }
}
