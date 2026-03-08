# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun dev` — start dev server (localhost:4321)
- `bun build` — production build to `dist/`
- `bun preview` — preview production build locally

## Architecture

Personal website for Shivani Garg Patel built with Astro (static site, no JS frameworks). Four pages, component-driven with scoped CSS.

**Layout flow:** Pages (`src/pages/`) → `BaseLayout.astro` (fonts, head, Header/Footer) → page-specific sections using shared components.

**Styling:** "Modern Institutional" design system defined as CSS custom properties in `src/styles/global.css`. All colors use `--color-*` tokens, fonts use `--font-heading` (DM Serif Display) and `--font-body` (DM Sans). Components use Astro scoped `<style>` blocks. No CSS preprocessors.

**Key patterns:**
- Section headings use optional `label` prop for uppercase overline text
- Cards/grids use hairline borders (no shadows, no rounded corners)
- Buttons: no border-radius, uppercase, letter-spaced

## GitHub Pages Deployment

Deployed to `saadiq.github.io/shivanigp.com` via GitHub Actions (`.github/workflows/deploy.yml`). The Astro config sets `base: '/shivanigp.com/'`.

**All internal links and asset paths must use `import.meta.env.BASE_URL`** to work under the subpath. Example: `href={`${import.meta.env.BASE_URL}about/`}`. This applies to navigation hrefs, images in `public/`, and the favicon.
