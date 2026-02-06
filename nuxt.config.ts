// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  aos: {
    disable: 'mobile',
  },
  imports: {
    dirs: [
      '~/composables/'
    ]
  },
  ogImage: {
    zeroRuntime: true,
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
      routes: ['/']
    }
  },
  site: {
    url: 'https://lucidclip.app',
    name: 'LucidClip',
    description: 'Your clipboard, supercharged. Modern desktop clipboard manager with a focus on privacy and security.',
  },
  app: {
    head: {
      script: []
    },
  },
  plugins: [
    // '~/plugins/pinia.client.ts',
    // '~/plugins/pinia-ssr-fix.server.ts'
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/scripts',
    '@pinia/nuxt',
    '@nuxtjs/seo',
    'nuxt-aos',
    '@polar-sh/nuxt',
    '@nuxtjs/supabase'
  ],

  components: {
    dirs: [
      '~/components',
      '~/sections/'
    ], // This is where your feature components are located
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: [
        'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'error', 'neutral'
      ]
    }
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_PUBLISHABLE_KEY,
    redirect: false,
    secretKey: process.env.SUPABASE_SECRET_KEY
  },

  routeRules: {
    '/': {prerender: true}
  },

  runtimeConfig: {
      polarAccessToken: process.env.POLAR_ACCESS_TOKEN,
      polarServer: process.env.POLAR_SERVER || 'sandbox',
      polarCheckoutSuccessUrl: process.env.POLAR_SUCCESS_URL,
      polarReturnUrl: process.env.POLAR_RETURN_URL,
    polarWebhookSecret: process.env.POLAR_WEBHOOK_SECRET,
  },

  compatibilityDate: '2025-01-15',

  vite: {
    server: {
      allowedHosts: [
        '.ngrok-free.app',
        'lucidclip.app'
      ],
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
