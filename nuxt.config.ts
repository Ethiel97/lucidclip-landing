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
    description: 'LucidClip is a native clipboard manager designed for developers and power users who care about privacy, speed, and reliability.',
  },
  app: {
    head: {
      __dangerouslyDisableSanitizersByTagID: {
        'linkedin-partner-id': ['innerHTML'],
        'linkedin-insight-init': ['innerHTML'],
        'linkedin-noscript': ['innerHTML']
      },
      script: [
        {
          src: 'https://tally.so/widgets/embed.js',
          async: true,
          type: 'text/javascript',
        }
        ,
        {
          id: 'linkedin-partner-id',
          innerHTML: `_linkedin_partner_id = "8735226";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);`
        },
        {
          id: 'linkedin-insight-init',
          innerHTML: `(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);`
        }
      ],
      noscript: [
        {
          id: 'linkedin-noscript',
          innerHTML: '<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=8735226&fmt=gif" />'
        }
      ]
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
