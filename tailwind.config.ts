import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,vue,ts}',
    './sections/**/*.{js,vue,ts}',
    './features/**/*.{js,vue,ts}',
    './shared/**/*.{js,vue,ts}',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050509',
        sidebar: '#060710',
        surface: '#101118',
        surface2: '#151620',
        borderSubtle: '#202131',
        primary: '#615FFF',
        primarySoft: '#7C6FFF',
        textPrimary: '#FFFFFF',
        textSecondary: '#B4B5C4',
        textMuted: '#7D7E8D',
      },
      borderRadius: {
        card: '14px',
        pill: '999px'
      },
      boxShadow: {
        premium: '0 8px 32px rgba(97, 95, 255, 0.12), 0 2px 8px rgba(0, 0, 0, 0.4)',
        soft: '0 10px 30px rgba(0,0,0,.35)',
        glow: '0 0 40px rgba(97, 95, 255, 0.3)'
      },
      backgroundImage: {
        glow: 'radial-gradient(600px circle at 30% 20%, rgba(97,95,255,.25), transparent 60%)',
      },
    }
  },
  plugins: []
} satisfies Config
