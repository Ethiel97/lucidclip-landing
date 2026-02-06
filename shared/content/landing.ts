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

export interface PricingCta {
  label: string
  href: string
  variant?: 'primary' | 'soft'
  helper?: string
}

export interface PricingPlan {
  name: string
  price: string
  cadence: string
  description: string
  features: string[]
  badge?: string
  cta: PricingCta
}

export interface PricingFaqItem {
  question: string
  answer: string
}

export interface PricingContent {
  hero: {
    badge: string
    headline: { primary: string; secondary: string }
    subheadline: string
    cta: {
      primary: string
      secondary: string
    }
    note: string
  }
  plans: {
    headline: string
    subheadline: string
    items: PricingPlan[]
    footnote: string
  }
  highlights: {
    headline: string
    subheadline: string
    items: CardModel[]
  }
  faq: {
    headline: string
    subheadline: string
    items: PricingFaqItem[]
  }
}

export interface DownloadPlatformCta {
  label: string
  href?: string
  disabled?: boolean
}

export interface DownloadPlatformCard {
  id: 'macos' | 'windows'
  title: string
  subtitle: string
  description?: string
  bullets?: string[]
  icon: string
  cta: DownloadPlatformCta
  footnote?: string
  helper?: string
}

export interface DownloadRequirementGroup {
  title: string
  items: string[]
}

export interface DownloadInstallStep {
  title: string
  description: string
  shortcut?: string
  suffix?: string
}

export interface DownloadContent {
  hero: {
    title: string
    subheadline: string
  }
  platforms: {
    items: DownloadPlatformCard[]
  }
  requirements: {
    title: string
    items: DownloadRequirementGroup[]
  }
  installation: {
    title: string
    steps: DownloadInstallStep[]
  }
}

export type ComparisonValue = 'yes' | 'no'

export interface ComparisonColumn {
  label: string
  sublabel?: string
}

export interface ComparisonRow {
  title: string
  description: string
  values: ComparisonValue[]
}

export interface ComparisonContent {
  headline: string
  subheadline: string
  columns: ComparisonColumn[]
  rows: ComparisonRow[]
  footnote: string
  cta: {
    label: string
    href: string
  }
}

export interface PrivacyPageContent {
  hero: {
    badge: string
    title: string
    subheadline: string
  }
  protection: {
    title: string
    items: CardModel[]
  }
  localFirst: {
    title: string
    body: string[]
    highlight: string
  }
  appExclusions: {
    title: string
    body: string[]
    listTitle: string
    listItems: string[]
  }
  neverDo: {
    title: string
    items: string[]
  }
  disclaimer: {
    title: string
    body: string
  }
}

export interface AboutStoryContent {
  title: string
  paragraphs: string[]
}

export interface AboutFlutterContent {
  title: string
  paragraphs: string[]
  listTitle: string
  listItems: string[]
}

export interface AboutContent {
  hero: {
    title: string
    subheadline: string
  }
  story: AboutStoryContent
  philosophy: {
    title: string
    items: CardModel[]
  }
  builtWithFlutter: AboutFlutterContent
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

  pricing: PricingContent
  download: DownloadContent
  comparison: ComparisonContent
  privacyPage: PrivacyPageContent
  aboutPage: AboutContent
}

export const landingContent: LandingContent = {
  nav: {
    logo: 'LucidClip',
    links: [
      {label: 'Home', href: '/'},
      {label: 'Pricing', href: '/pricing'},
      {label: 'Download', href: '/download'},
      {label: 'Privacy', href: '/privacy'},
      {label: 'About', href: '/about'}
    ],
    cta: 'Get LucidClip'
  },
  hero: {
    headline: {primary: 'Your Clipboard,', secondary: 'Supercharged'},
    subheadline:
      'A native desktop clipboard manager that turns every copy into an organized, searchable working memory, fast, quiet, and built for focus.',
    cta: {
      primary: 'Get LucidClip',
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
      label: 'Upgrade to Pro',
      helper: 'Download LucidClip to unlock Pro features'
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
  footer: {
    tagline: 'An intelligent clipboard manager built for developers, creators, and power users who demand control and clarity.',
    links: [
      {
        title: 'Product',
        items: [
          {label: 'Download', href: '/download'},
          {label: 'Pricing', href: '/pricing'},
          {label: 'Privacy', href: '/privacy'}
        ]
      },
      {
        title: 'Company',
        items: [
          {label: 'Privacy', href: '/privacy'},
          {label: 'About', href: '/about'},
          // {label: 'Terms', href: '/terms'},
          {label: 'Contact', href: 'mailto:support@lucidclip.app'}
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
  },
  pricing: {
    hero: {
      badge: 'Pricing',
      headline: {
        primary: 'Simple pricing',
        secondary: 'for serious workflows'
      },
      subheadline: 'Start free, stay local-first, and upgrade when you need automation, exclusions, and sync.',
      cta: {
        primary: 'Download for macOS',
        secondary: 'Compare plans'
      },
      note: 'Cancel anytime. No long-term contracts.'
    },
    plans: {
      headline: 'Choose the plan that fits your flow',
      subheadline: 'Every plan includes fast search, app-aware context, and privacy-first defaults.',
      items: [
        {
          name: 'Free',
          price: '$0',
          cadence: 'forever',
          description: 'All the essentials to replace your default clipboard.',
          features: [
            'Limited clipboard history',
            'Instant search and filters',
            'App-aware context',
            'Local-only storage'
          ],
          cta: {
            label: 'Download LucidClip',
            href: '/download',
            variant: 'soft',
            helper: 'macOS download available now'
          }
        },
        {
          name: 'Pro',
          price: '$6',
          cadence: 'per month',
          description: 'Advanced control, exclusions, and sync for power users.',
          features: [
            'Everything in Free, plus:',
            'App exclusions and privacy zones',
            'Pinned clips and tags',
            'Sync across devices',
            'Automation rules'
          ],
          badge: 'Most popular',
          cta: {
            label: 'Download LucidClip',
            href: '/download',
            variant: 'primary',
            helper: 'Unlock advanced controls and sync'
          }
        }
      ],
      footnote: 'Annual billing and student discounts are coming soon.'
    },
    highlights: {
      headline: 'Everything stays fast and private',
      subheadline: 'Local-first architecture means your clipboard data is always yours.',
      items: [
        {
          icon: 'lucide:hard-drive',
          title: 'Local by default',
          description: 'Your clipboard history stays on your device unless you enable sync.'
        },
        {
          icon: 'lucide:lock',
          title: 'Zero tracking',
          description: 'No ads, no analytics, no hidden data collection.'
        },
        {
          icon: 'lucide:zap',
          title: 'Built for speed',
          description: 'Instant search and clean UI so you can stay in flow.'
        }
      ]
    },
    faq: {
      headline: 'Pricing FAQ',
      subheadline: 'Answers to the questions we hear most.',
      items: [
        {
          question: 'Is LucidClip free to start?',
          answer: 'Yes. Free is available forever with core history and search.'
        },
        {
          question: 'What platforms are supported?',
          answer: 'LucidClip launches on macOS first, with Windows support in development.'
        },
        {
          question: 'Can I cancel Pro anytime?',
          answer: 'Absolutely. You can cancel from your account at any time.'
        },
        {
          question: 'Is there a team plan?',
          answer: 'Not at the moment. We are focused on Free and Pro for launch.'
        }
      ]
    }
  },
  download: {
    hero: {
      title: 'Download LucidClip',
      subheadline: 'Get started with your intelligent clipboard manager. Available for macOS, with Windows support coming soon.'
    },
    platforms: {
      items: [
        {
          id: 'macos',
          title: 'macOS',
          subtitle: 'macOS 12.0 or later',
          icon: 'lucide:apple',
          bullets: [
            'Native macOS performance',
            'Universal app (Intel & Apple Silicon)',
            'Keyboard shortcuts & menu bar access',
            '~50MB download size'
          ],
          cta: {
            label: 'Download for macOS',
            href: 'https://downloads.updates.com/macos/LucidClip-latest.dmg'
          },
          footnote: 'Version 1.0.0 • Released January 2026'
        },
        {
          id: 'windows',
          title: 'Windows',
          subtitle: 'Coming soon',
          icon: 'lucide:monitor',
          description:
            "We're working hard on bringing LucidClip to Windows. Native Windows support is in active development and will be available soon.",
          cta: {
            label: 'Coming Soon',
            disabled: false
          },
          helper: 'Notify me when available →'
        }
      ]
    },
    requirements: {
      title: 'System Requirements',
      items: [
        {
          title: 'macOS',
          items: [
            'macOS 12.0 (Monterey) or later',
            '50 MB available storage space',
            'Internet connection for initial download',
            'Recommended: 8GB RAM'
          ]
        },
        {
          title: 'Windows (Coming Soon)',
          items: [
            'Windows 10 or later',
            '50 MB available storage space',
            'Internet connection for initial download',
            'Recommended: 8GB RAM'
          ]
        }
      ]
    },
    installation: {
      title: 'Quick Installation',
      steps: [
        {
          title: 'Download the app',
          description: 'Click the download button above to get the latest version for your platform.'
        },
        {
          title: 'Open the installer',
          description: 'Double-click the downloaded file and drag LucidClip to your Applications folder.'
        },
        {
          title: 'Grant permissions',
          description: 'Allow LucidClip to access your clipboard and accessibility when prompted. This is required for the app to function.'
        },
        {
          title: "You're ready!",
          description: 'Press',
          shortcut: '⌘/Ctrl + Shift + L',
          suffix: 'to open your clipboard history.'
        }
      ]
    }
  },
  comparison: {
    headline: 'Built for clipboard-first workflows',
    subheadline:
      'LucidClip is purpose-built for managing your working memory. Unlike general productivity tools, we focus solely on clipboard excellence.',
    columns: [
      {label: 'Feature'},
      {label: 'LucidClip', sublabel: 'Clipboard-centric'},
      {label: 'Raycast'},
      {label: 'Alfred'}
    ],
    rows: [
      {
        title: 'Clipboard History',
        description: 'Unlimited retention with exclusions',
        values: ['yes', 'yes', 'yes']
      },
      {
        title: 'App-Level Exclusions',
        description: 'Block specific apps from clipboard history',
        values: ['yes', 'no', 'no']
      },
      {
        title: 'Retention Control',
        description: 'Custom retention rules per item type',
        values: ['yes', 'no', 'no']
      },
      {
        title: 'Pin Important Items',
        description: 'Never lose critical clipboard entries',
        values: ['yes', 'yes', 'yes']
      },
      {
        title: 'Configurable Incognito Mode',
        description: 'Temporarily disable tracking with fine-grained controls',
        values: ['yes', 'no', 'no']
      },
      {
        title: 'Local-First Privacy',
        description: '100% local storage, zero cloud sync by default',
        values: ['yes', 'yes', 'yes']
      },
      {
        title: 'Advanced Search',
        description: 'Fuzzy search, filters, and fast navigation',
        values: ['yes', 'yes', 'yes']
      },
      {
        title: 'Code Snippet Intelligence',
        description: 'Automatic language detection and formatted previews',
        values: ['yes', 'no', 'no']
      },
      {
        title: 'Clipboard as Working Memory',
        description: 'Designed for long-term reuse, not just recall',
        values: ['yes', 'no', 'no']
      }
    ],
    footnote:
      'Your clipboard is not temporary. It is your working memory.',
    cta: {
      label: 'Download LucidClip',
      href: '/download'
    }
  },
  privacyPage: {
    hero: {
      badge: 'Privacy-First Design',
      title: 'Your clipboard, your data, your device.',
      subheadline: 'LucidClip is built on a simple principle: clipboard data is sensitive, and it should never leave your device without your explicit permission.'
    },
    protection: {
      title: 'How we protect your privacy',
      items: [
        {
          icon: 'lucide:shield',
          title: '100% Local-First',
          description: 'All clipboard data stays on your device. We never see, access, or transmit your clipboard history to any server.'
        },
        {
          icon: 'lucide:eye-off',
          title: 'App Exclusions',
          description: 'Exclude sensitive apps like password managers, banking apps, or any application from clipboard history entirely.'
        },
        {
          icon: 'lucide:clock',
          title: 'Retention Control',
          description: 'Set custom retention periods. Delete clipboard data automatically after 1 day, 7 days, 30 days, or never.'
        },
        {
          icon: 'lucide:ban',
          title: 'Zero Tracking',
          description: "No analytics. No crash reporting. No telemetry. We don't track how you use LucidClip or what you copy."
        }
      ]
    },
    localFirst: {
      title: 'What does \"local-first\" mean?',
      body: [
        'Every feature in LucidClip works entirely on your device.',
        "Your clipboard history is stored in a local database on your Mac. When you search, filter, or organize items, all processing happens on your device. No data is sent to our servers because we don't have your clipboard data.",
        "Even optional features like sync (coming soon) will use end-to-end encryption, meaning we can't read your clipboard data even if we wanted to."
      ],
      highlight: 'Your clipboard is yours. Period.'
    },
    appExclusions: {
      title: 'App Exclusions',
      body: [
        'Block specific apps from ever touching your clipboard history.',
        'Copied a password from 1Password? Copied sensitive banking details? With app exclusions (Pro feature), you can tell LucidClip to ignore clipboard events from specific applications entirely.',
        "When an excluded app is active, LucidClip won't monitor or save anything. It's like the app doesn't exist."
      ],
      listTitle: 'Common apps to exclude:',
      listItems: [
        'Password managers (1Password, LastPass, Bitwarden)',
        'Banking & finance apps',
        'Healthcare applications',
        'Any app handling sensitive data'
      ]
    },
    neverDo: {
      title: 'What we never do',
      items: [
        'Upload your clipboard to the cloud',
        'Share data with third parties',
        'Track your usage patterns',
        'Require account creation or login',
        'Access your clipboard without permission',
        'Sell your data or show ads',
        'Store personally identifiable information',
        'Phone home or check for updates without permission'
      ]
    },
    disclaimer: {
      title: 'Important Disclaimer',
      body: "LucidClip is not designed to collect Personally Identifiable Information (PII) or secure sensitive data. While we take privacy seriously and implement app exclusions and local-first architecture, LucidClip is a productivity tool, not a security tool. Do not rely on LucidClip as your only line of defense for sensitive information. Always use dedicated password managers, encrypted vaults, and follow security best practices for handling confidential data."
    }
  },
  aboutPage: {
    hero: {
      title: 'Built for people who live in the flow.',
      subheadline: "LucidClip was born from a simple frustration: existing clipboard managers weren't built for clipboard-first workflows."
    },
    story: {
      title: 'The Story',
      paragraphs: [
        "As developers and power users, we realized something fundamental: the clipboard isn't just a utility - it's working memory. When you're deep in flow state, your clipboard history becomes an extension of your thought process.",
        'But existing tools treated the clipboard as an afterthought. They were launcher apps with clipboard features bolted on, or productivity suites trying to do everything. None of them asked: what if we built a tool solely focused on clipboard excellence?',
        "LucidClip is the answer to that question. It's not trying to be your launcher, your window manager, or your everything-app. It's a specialist tool, designed by people who need clipboard history to work flawlessly, every single time."
      ]
    },
    philosophy: {
      title: 'Our Philosophy',
      items: [
        {
          icon: 'lucide:target',
          title: 'Do one thing well',
          description: "We're not building a productivity suite. We're building the best clipboard manager, period. Every feature serves that singular goal."
        },
        {
          icon: 'lucide:shield',
          title: 'Privacy by default',
          description: "Your clipboard data is sensitive. Local-first architecture isn't a feature - it's a requirement. We'll never compromise on privacy."
        },
        {
          icon: 'lucide:code-2',
          title: 'Built by engineers',
          description: "LucidClip is built with Flutter, giving us true native performance on macOS. No Electron bloat. No web wrappers. Just fast, native code."
        },
        {
          icon: 'lucide:sparkles',
          title: 'Tools should disappear',
          description: 'The best tools get out of your way. LucidClip lives in your menu bar, appears with a keystroke, and disappears when you are done.'
        }
      ]
    },
    builtWithFlutter: {
      title: 'Built with Flutter',
      paragraphs: [
        "LucidClip is built with Flutter, Google's UI framework. This gives us the best of both worlds: native macOS performance with the ability to ship cross-platform in the future.",
        "Flutter compiles to native code, so LucidClip feels like a true Mac app. No web views, no Electron bloat, no compromises. Just fast, responsive UI that respects your system resources."
      ],
      listTitle: 'Key technologies:',
      listItems: [
        'Flutter for native UI',
        'SQLite for local database',
        'macOS native APIs for clipboard monitoring',
        'No external dependencies or cloud services'
      ]
    }
  }

}
