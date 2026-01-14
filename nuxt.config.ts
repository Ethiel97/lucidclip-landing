// https://nuxt.com/docs/api/configuration/nuxt-config
import {defineNuxtConfig} from 'nuxt/config'

export default defineNuxtConfig({
  aos: {
    disable: 'mobile',
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
      script: [
        {
          src: 'https://tally.so/widgets/embed.js',
          async: true,
          type: 'text/javascript',
        }
      ]
    },
  },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image', '@nuxt/scripts', '@pinia/nuxt', '@nuxtjs/seo', 'nuxt-aos'],

  components: {
    dirs: [
      '~/components',
      '~/features/waitlist/components',
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

  routeRules: {
    '/': {prerender: true}
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
