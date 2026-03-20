# Agency Website — Technical Stack Reference

> This document defines the full technical stack, implementation rules, and best practices for the agency website. Use it as a reference throughout development.

---

## Core Framework

**Next.js 14+ with App Router**

- Use **App Router** exclusively — not Pages Router
- Pages that don't require dynamic data must be **statically generated (SSG)** at build time using `generateStaticParams`
- Use **Server-Side Rendering (SSR)** only where truly needed: real-time data, personalized content
- API routes live in `app/api/` and handle form submissions, dynamic queries, and any server-side logic
- All 301 redirects are managed in `middleware.ts` — never in server config files

```ts
// middleware.ts example
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const redirects: Record<string, string> = {
  '/old-page': '/new-page',
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  if (redirects[path]) {
    return NextResponse.redirect(new URL(redirects[path], request.url), 301)
  }
}
```

---

## Styling

**Tailwind CSS**

- Utility-first, zero runtime CSS overhead
- No CSS-in-JS libraries with runtime cost (avoid `styled-components`, `emotion`)
- Use **CSS Modules** for component-specific overrides where Tailwind is insufficient
- Maintain a consistent design token system in `tailwind.config.ts`:
  - Define brand colors, font sizes, border radius, and spacing as named tokens
  - Never use arbitrary values `[...]` for brand-critical properties — keep them in config

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: {
        linen: '#F5F0EB',      // cotton/linen ruffle
        charcoal: '#2D2D2D',   // primary dark
        accent: '#YOUR_CTA',   // single accent color for CTAs only
      }
    },
    borderRadius: {
      card: '16px',
      footer: '24px',
    }
  }
}
```

---

## Fonts

**next/font (local)**

- Download all font files and store them locally on the server
- Import and configure via `next/font/local` — zero external font request at runtime
- Declare fonts at the root layout level and pass as CSS variables

```ts
// app/layout.tsx
import localFont from 'next/font/local'

const primaryFont = localFont({
  src: '../public/fonts/YourFont.woff2',
  variable: '--font-primary',
  display: 'swap',
})
```

- Use `font-display: swap` to prevent invisible text during load
- Subset fonts to the character sets you actually use (Latin, Romanian diacritics)

---

## Images

**next/image**

- Use for every image on the site — no exceptions
- Automatically serves WebP/AVIF, handles lazy loading, and prevents CLS
- Above-the-fold images (hero, first visible section): always add `priority` prop
- Below-the-fold images: default lazy loading applies automatically

```tsx
// Hero image — above the fold
<Image src="/hero.jpg" alt="..." width={1200} height={600} priority />

// Content image — lazy loaded
<Image src="/case-study.jpg" alt="..." width={800} height={400} />
```

- Store all images in `/public/images/` organized by section
- Never use raw `<img>` tags

---

## Animation Stack

### Framer Motion
Used for: component-level animations, page transitions, scroll-triggered reveals, hover effects

```tsx
// Scroll reveal example
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
>
  {children}
</motion.div>
```

- Always respect `prefers-reduced-motion`:

```tsx
import { useReducedMotion } from 'framer-motion'
const shouldReduce = useReducedMotion()
```

### GSAP + ScrollTrigger
Used for: complex sequences, timeline animations, horizontal scroll sections, text effects

```tsx
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// Parallax example
gsap.to('.hero-bg', {
  yPercent: -20,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  }
})
```

- Clean up ScrollTrigger instances in `useEffect` return to prevent memory leaks
- Use GSAP for anything requiring a sequenced timeline; use Framer Motion for component-bound animations

### Lenis (Smooth Scroll)
Used for: replacing native scroll with a smooth, momentum-based experience

```tsx
// app/providers/SmoothScroll.tsx
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  return <>{children}</>
}
```

---

## Animation Rules (Non-Negotiable)

1. **Only animate `transform` and `opacity`** — never `width`, `height`, `top`, `left`, `margin`
2. Add `will-change: transform` only on elements that are actively animating — not globally
3. All animations must be tested on low-end Android mobile
4. Every animated element must have a non-animated fallback for `prefers-reduced-motion`

---

## Engagement Gimmicks (Production-Ready)

### Magnetic Button
CTA button attracts the cursor when nearby. Applied only to the primary CTA.

```tsx
const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  e.currentTarget.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
}
const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.currentTarget.style.transform = 'translate(0, 0)'
}
```

### Custom Cursor
Replace the default cursor with a small circle that follows with a lag (lerp). Transforms on hover over interactive elements.

- Implement as a global `<Cursor />` component mounted in root layout
- Use `requestAnimationFrame` + lerp for smooth lag effect
- Disable on touch devices with a `pointer: coarse` media query check

### Text Scramble / Decrypt Effect
Headline letters cycle through random characters before settling on the final text. Applied to the hero H1 on page load.

### Counter Animation
Numbers count from 0 to their value when scrolled into viewport. Use `IntersectionObserver` + `requestAnimationFrame`.

```tsx
// Trigger when element enters viewport
const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) animateCounter(0, targetValue, 1500)
}, { threshold: 0.5 })
```

### Horizontal Scroll Section
Case studies or services scroll horizontally while the user scrolls vertically. Implemented with GSAP ScrollTrigger `pin` + `scrub`.

### Noise Texture Overlay
Adds grain/noise over flat background sections for depth. Zero JavaScript — pure CSS:

```css
.noise::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/textures/noise.png');
  opacity: 0.04;
  pointer-events: none;
}
```

### Dynamic Title Tag (Re-engagement)
When user switches tabs, document title changes to draw them back:

```tsx
useEffect(() => {
  const handleVisibilityChange = () => {
    document.title = document.hidden
      ? '👋 Still thinking? Come back.'
      : 'Your Agency — Original Title'
  }
  document.addEventListener('visibilitychange', handleVisibilityChange)
  return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
}, [])
```

### Dynamic CTA Text Based on Time
CTA button label changes based on visitor's local time:

```tsx
const getCtaLabel = () => {
  const hour = new Date().getHours()
  return hour >= 9 && hour < 17
    ? 'Request a Proposal Now'
    : 'Request a Proposal for Tomorrow'
}
```

### Dark Mode with Auto-Detect + User Override
- Detect hour at first load: if `hour >= 20 || hour < 6`, apply dark mode by default
- If user manually toggles, persist their preference in `localStorage`
- Apply class on `<html>` element, style with Tailwind's `dark:` variant

```tsx
useEffect(() => {
  const saved = localStorage.getItem('theme')
  if (saved) {
    document.documentElement.classList.toggle('dark', saved === 'dark')
  } else {
    const hour = new Date().getHours()
    const prefersDark = hour >= 20 || hour < 6
    document.documentElement.classList.toggle('dark', prefersDark)
  }
}, [])
```

### Exit Intent Popup
Conditions before triggering:
1. User has been on page for **at least 60 seconds**
2. Cursor moves toward top of screen at speed (exit intent)
3. Has not already triggered in this session (`sessionStorage` flag)

Single field only: email. Offer: free audit in 24h.

---

## SEO Technical Setup

### Metadata API (App Router)
Define metadata per page and per layout. Never use `next/head` manually.

```ts
// app/services/google-ads/page.tsx
export const metadata = {
  title: 'Google Ads Management | Agency Name',
  description: '...',
  alternates: { canonical: 'https://yourdomain.ro/services/google-ads/' },
  openGraph: { title: '...', description: '...', images: ['/og/google-ads.jpg'] },
}
```

### Structured Data (JSON-LD)
Create a reusable `<JsonLd>` component:

```tsx
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
```

Implement on every relevant page:
- `LocalBusiness` — homepage
- `Service` — each service page
- `FAQPage` — FAQ sections
- `BreadcrumbList` — all interior pages
- `Review` — testimonial pages (with client consent)
- `VideoObject` — any pages with embedded video

### Sitemap
Use `next-sitemap` package. Configure separate sitemaps for services, blog, and case studies.

```js
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://yourdomain.ro',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/services/google-ads'),
  ],
}
```

### Performance Checklist
- [ ] `preconnect` and `dns-prefetch` for any third-party domains in `<head>`
- [ ] Hero image uses `priority` prop on `next/image`
- [ ] No render-blocking scripts — all third-party scripts use `next/script` with `strategy="lazyOnload"` or `"afterInteractive"`
- [ ] Run `@next/bundle-analyzer` before launch — eliminate any large unused dependencies
- [ ] Inline critical CSS (handled automatically by Tailwind + Next.js build)
- [ ] All pages score 90+ on Lighthouse mobile before launch

---

## CDN & Caching (Cloudflare)

- Proxy all traffic through Cloudflare (free tier is sufficient)
- Set **Cache Rules**:
  - Cache everything: `/`, `/services/*`, `/about/`, `/case-studies/*`
  - Bypass cache: `/api/*`, `/contact/`, any URL with query params
- Enable **Cloudflare Minify** for HTML, CSS, JS
- Enable **Brotli compression**
- Use **Cloudflare Web Analytics** as a lightweight, privacy-friendly alternative to GA (optional)

---

## Analytics & CRO Monitoring

**Microsoft Clarity** (free) — install immediately on current site for heatmaps and session recordings before building the new one. Informs every design decision.

**GA4** — configure custom events:
- `scroll_depth` at 50% and 90%
- `cta_click` on every CTA button (with label as parameter)
- `form_start` and `form_abandon`
- `time_on_page` milestone at 2 minutes
- `exit_intent_shown` and `exit_intent_converted`

---

## Project Structure

```
/app
  /layout.tsx              ← root layout, fonts, providers, cursor, smooth scroll
  /page.tsx                ← homepage
  /services
    /google-ads/page.tsx
    /seo/page.tsx
    /web-development/page.tsx
  /case-studies
    /page.tsx
    /[slug]/page.tsx
  /how-we-work/page.tsx
  /pricing/page.tsx
  /contact/page.tsx
  /api
    /contact/route.ts

/components
  /ui                      ← buttons, inputs, cards (generic)
  /sections                ← homepage sections, service page blocks
  /layout                  ← header, footer, navigation
  /animations              ← reusable Framer Motion variants
  /seo                     ← JsonLd, Metadata helpers

/public
  /fonts
  /images
  /textures                ← noise.png etc.
  /og                      ← Open Graph images per page

/lib
  /schema.ts               ← structured data generators
  /analytics.ts            ← GA4 event helpers
  /theme.ts                ← dark mode logic
```

---

## Key Rules Summary

| Topic | Rule |
|---|---|
| Routing | App Router only |
| Static vs Dynamic | SSG by default, SSR only when necessary |
| CSS | Tailwind only, no runtime CSS-in-JS |
| Fonts | Local via next/font, never external at runtime |
| Images | next/image always, `priority` above the fold |
| Animations | transform + opacity only, test on mobile |
| Redirects | middleware.ts, not server config |
| Structured Data | JSON-LD via reusable component |
| Dark Mode | localStorage, auto-detect by hour |
| Analytics | GA4 + Microsoft Clarity |
