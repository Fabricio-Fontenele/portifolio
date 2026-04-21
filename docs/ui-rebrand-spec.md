# Portfolio Rebrand Spec

## Context

- Keep the cosmic atmosphere (stars + meteors) as core identity.
- Preserve the existing sections: Navbar, Hero, About, Experience, Projects, Contact, Footer.
- Upgrade to Next.js 15 + Tailwind CSS 4 + GSAP + Lucide.
- Replace generic visuals with a more premium, editorial, product-focused UI.

## Product Direction

### Visual Concept

- **Theme**: Midnight editorial interface with aurora accents and glass surfaces.
- **Mood**: Professional, confident, modern, intentional.
- **Differentiator**: Combination of cosmic depth (stars/meteors) + clean editorial cards and typography hierarchy.

### Design Pillars

1. **Clarity first**: stronger information hierarchy and less decorative noise.
2. **Cosmic identity**: stars and meteors remain, but integrated as subtle depth layers.
3. **Premium surfaces**: restrained borders, frosted cards, controlled shadow system.
4. **Meaningful motion**: section reveals, staggered entrances, and smooth parallax accents via GSAP.

## Information Architecture

1. Hero: positioning statement + CTA + marquee stack.
2. About: short narrative + capability cards.
3. Experience: timeline-like progression with concise impact statements.
4. Projects: side-by-side cards with strong title/stack/action hierarchy.
5. Contact: clear split between direct channels and structured message form.
6. Footer: compact navigation and strong personal signature.

## Technical Architecture

### Framework Migration

- Migrate from Vite + React Router to **Next.js 15 App Router**.
- Add `app/layout.jsx`, `app/page.jsx`, and `app/globals.css`.
- Keep `src/components` and `src/hooks` structure.

### Styling

- Continue with **Tailwind CSS 4** using CSS variables and utilities.
- Refine global tokens for background, surfaces, borders, text contrast, and accent hues.
- Introduce reusable utility classes for section wrappers, cards, and emphasis labels.

### Motion

- Use **GSAP + ScrollTrigger** for:
  - Hero entrance choreography.
  - Progressive reveal of section blocks.
  - Subtle stagger animations for cards and list items.

### Accessibility and UX

- Keep high contrast text on glass surfaces.
- Respect reduced motion preferences in GSAP hook.
- Keep semantic sections and usable keyboard/tab interactions.

## Implementation Tasks

1. Setup Next.js 15 runtime, scripts, and aliases.
2. Move entrypoint to App Router and wire global styles.
3. Build GSAP reveal hook and wire into key sections.
4. Redesign Navbar and Hero with premium layout language.
5. Redesign About and Experience cards/timeline.
6. Redesign Projects into larger side-by-side cards (non-generic).
7. Refine Contact section for professional lead capture.
8. Polish Footer and global visual rhythm.
9. Run lint/build validation and fix regressions.
