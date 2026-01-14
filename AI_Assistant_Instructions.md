You are a senior Nuxt 3 engineer. Implement the LucidClip landing page in Nuxt 3 (TypeScript) using Tailwind CSS, Nuxt UI, and Pinia. Prioritize maintainability and avoid over-architecture.

## Hard rules
- Use Nuxt UI components as the foundation (Button, Input, Card, Badge, Modal, Toast, etc.).
- Use Pinia ONLY for true features that have state/side effects (e.g., waitlist). Do not create stores for static sections.
- Keep static sections under /sections (presentational).
- Put business logic in composables, not in components.
- Centralize all marketing copy in /shared/content/landing.ts (no scattered strings).
- No cross-feature store imports.

## Theme (must match LucidClip app)
Implement design tokens once and reuse:
Colors:
- bg #050509, sidebar #060710, surface #101118, surface2 #151620
- borderSubtle #202131
- primary #615FFF, primarySoft #7C6FFF
- textPrimary #FFFFFF, textSecondary #B4B5C4, textMuted #7D7E8D
  Radii:
- cards 14px, pills 999px
  Borders: subtle 1px strokes using borderSubtle (50–70% opacity)
  Shadows: minimal, soft, premium

- Define tokens in tailwind.config.ts
- Override Nuxt UI theme in app.config.ts (primary color, radius, button/input/card variants)
- Avoid duplicating tokens across multiple files.

## Hero asset
Use /public/images/hero.png as the hero visual (mandatory).
- Floating window effect, subtle vignette, purple glow using primary color.
- No replacement mockups.

## Folder structure (follow exactly)
- Static sections: /sections/*
  header, hero, features, pro, security, footer
- True feature with state: /features/waitlist/*
- Shared: /shared/* (content, composables, ui wrappers only if needed)

## Required sections/components
/sections/header: HeaderBar.vue, MobileMenu.vue
/sections/hero: HeroSection.vue, HeroVisual.vue, TrustBullets.vue
/sections/features: FeaturesGrid.vue, FeatureCard.vue
/sections/pro: ProSection.vue, ProBadge.vue
/sections/security: SecuritySection.vue
/sections/footer: FooterBar.vue

/features/waitlist:
- Pinia store: email, status (idle|loading|success|error), errorMessage, submit()
- composables: useWaitlistForm (orchestrates validation + store), useEmailValidation
- components: WaitlistSection, WaitlistForm, WaitlistSuccess

/shared/content/landing.ts:
- export a typed object containing headlines, subheadlines, nav links, feature list, pro bullets, security copy, CTA copy.

## Waitlist API
Create server/api/waitlist.post.ts:
- Validate email
- Use a tiny repository abstraction in features/waitlist/server/waitlist.repo.ts (in-memory for now)
- Return { ok: true } on success, { ok:false, message } on errors
  Client store calls via $fetch, prevents duplicate submits while loading, shows Nuxt UI toast.

## Page composition
pages/index.vue assembles:
<HeaderBar />
<HeroSection />
<FeaturesGrid />
<ProSection />
<SecuritySection />
<WaitlistSection />
<FooterBar />

Add smooth scrolling to section anchors via a shared composable useScrollToSection.
(Optional) implement scrollspy via useScrollSpy if needed.

## Quality constraints
- TypeScript everywhere, no any
- defineProps/withDefaults typed, defineEmits typed
- keep components small and reusable
- no business logic inside templates
- output: file tree + code for each file (configs included)

Now generate the full codebase structure and the key files.
