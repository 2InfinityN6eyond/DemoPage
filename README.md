[Github Demo Page](https://2infinityn6eyond.github.io/DemoPage/en/)


# LogK Homepage Demo

Astro-based multilingual startup homepage for **LogK**, a product that helps users choose, delegate across, compare, and verify answers from multiple AI models.

This repository is designed to stay simple enough for a small team, while remaining clean and extensible as the homepage grows.

## What This Project Is

- A static Astro site suitable for GitHub Pages
- A bilingual marketing site with `en` and `ko` routes
- A design system with light and dark themes
- A homepage and product page built from reusable page components
- A foundation for an embedded `product-preview` app that can later replace static screenshots

## Core Principles

These are the architectural rules that keep the project manageable:

1. **Routes stay thin.**
   Route files should mostly load a dictionary and render a page component.
2. **Marketing copy lives in dictionaries.**
   English and Korean text should stay under `src/i18n/messages/`.
3. **Page sections live in page components.**
   Large page composition belongs in `src/components/pages/`.
4. **Shared chrome stays shared.**
   Header, footer, theme toggle, locale switcher, and global client-side behavior live in shared components.
5. **Static assets are explicit.**
   Screenshots and decorative images live in `public/assets/`.
6. **Product previews stay bounded.**
   Future interactive product visuals should live behind a clear `product-preview` boundary instead of being scattered through homepage components.

## Tech Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Site framework | Astro 5 | Static output, simple routing, strong fit for GitHub Pages |
| Styling | Global CSS | Fast to iterate for a landing page and easy to deploy |
| Language support | Astro i18n + typed dictionaries | Clean locale routing and controlled copy structure |
| Interactivity | Small client script in `ClientInit.astro` | Keeps the site mostly static while enabling polished motion |
| Product visuals | Static assets now, future `product-preview` app later | Keeps the homepage fast while leaving room for an interactive embedded preview |

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run local development server

```bash
npm run dev
```

Default Astro dev URL:

```text
http://localhost:4321
```

### 3. Build the static site

```bash
npm run build
```

### 4. Preview the built output

```bash
npm run preview
```

### 5. Type-check and Astro-check the project

```bash
npm run check
```

## Environment Variables

The site is configured in [`astro.config.mjs`](./astro.config.mjs).

| Variable | Purpose | Example |
| --- | --- | --- |
| `SITE_URL` | Canonical production site URL | `https://logk.ai` |
| `BASE_PATH` | Subpath for GitHub Pages project deployments | `/PAGE_DEMO` |

### Example: local build with GitHub Pages-style base path

```bash
SITE_URL=https://username.github.io BASE_PATH=/PAGE_DEMO npm run build
```

## Project Map

```text
.
├── astro.config.mjs
├── package.json
├── product-preview/
│   ├── package.json                 # React/Vite embedded preview package
│   ├── src/
│   │   ├── components/              # preview-only UI pieces
│   │   ├── demo-data/               # local product scenarios
│   │   ├── state/                   # local preview state
│   │   ├── styles/                  # namespaced preview CSS
│   │   └── main.tsx                 # mounts into [data-product-preview]
│   └── vite.config.ts               # builds into public/product-preview/
├── public/
│   ├── assets/                     # screenshots and decorative static assets
│   └── product-preview/            # generated preview build artifacts
├── src/
│   ├── components/
│   │   ├── ClientInit.astro        # global client-side interactions
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── LanguageSwitcher.astro
│   │   ├── ThemeToggle.astro
│   │   ├── mockups/                # Astro-rendered visual mockups
│   │   └── pages/                  # page-level composition components
│   ├── i18n/
│   │   ├── messages/               # locale dictionaries
│   │   └── schema.ts               # typed dictionary contract
│   ├── layouts/
│   │   └── BaseLayout.astro        # fonts, metadata, transitions, theme bootstrap
│   ├── pages/
│   │   ├── index.astro             # locale redirect entry
│   │   ├── en/                     # English routes
│   │   └── ko/                     # Korean routes
│   ├── styles/
│   │   └── global.css              # global visual system and page styles
│   ├── utils/
│   │   └── i18n.ts                 # locale helpers
│   └── content.config.ts           # currently empty; no content collections active
└── README.md
```

## Architecture Overview

```mermaid
flowchart LR
    Browser["Browser Request"] --> Route["Astro Route<br/>src/pages/..."]
    Route --> Layout["BaseLayout.astro"]
    Route --> Page["Page Component<br/>src/components/pages/..."]

    Layout --> Client["ClientInit.astro<br/>theme, reveal, tilt, tabs, counters"]
    Layout --> GlobalCSS["src/styles/global.css"]

    Page --> Shared["Shared UI<br/>Header, Footer, ThemeToggle, LanguageSwitcher"]
    Page --> Dict["Locale Dictionary<br/>src/i18n/messages/en.ts<br/>src/i18n/messages/ko.ts"]
    Page --> Assets["Static Assets<br/>public/assets/*"]
    Page --> Preview["Embedded Product Preview<br/>public/product-preview/*"]
    Preview --> PreviewSource["React/Vite Source<br/>product-preview/src/*"]

    Dict --> Schema["Typed Contract<br/>src/i18n/schema.ts"]
```

### Why This Matters

- You can change marketing copy without touching layout logic.
- You can redesign sections without changing route structure.
- You can replace screenshots without touching Astro internals.
- You can keep visual-only experimentation outside the main app tree.

## Route Structure

The project intentionally keeps route files minimal.

```mermaid
flowchart TD
    Root["/"] --> Redirect["src/pages/index.astro<br/>redirect by browser language"]
    Redirect --> EN["/en/"]
    Redirect --> KO["/ko/"]

    EN --> ENHome["/en/<br/>src/pages/en/index.astro"]
    EN --> ENProduct["/en/product/<br/>src/pages/en/product.astro"]
    EN --> ENMockups["/en/mockups/<br/>src/pages/en/mockups/index.astro"]

    KO --> KOHome["/ko/<br/>src/pages/ko/index.astro"]
    KO --> KOProduct["/ko/product/<br/>src/pages/ko/product.astro"]
    KO --> KOMockups["/ko/mockups/<br/>src/pages/ko/mockups/index.astro"]
```

### Route Rule

If you add a new page, keep the route file small:

1. choose locale
2. load dictionary
3. render `BaseLayout`
4. render one page component

That pattern is already used by the current localized pages.

## Page Rendering Flow

```mermaid
sequenceDiagram
    participant User as User
    participant Route as Astro Route
    participant Dict as Locale Dictionary
    participant Page as Page Component
    participant Layout as BaseLayout
    participant Client as ClientInit

    User->>Route: Request /en/ or /ko/
    Route->>Dict: Load matching dictionary
    Route->>Page: Pass locale + dictionary
    Route->>Layout: Pass title + description + locale
    Layout-->>User: Send static HTML + CSS + assets
    Client-->>User: Enhance with theme, reveal, showcase tabs, tilt, counters
```

## Responsibility Guide

When you want to change something, use this map:

```mermaid
flowchart TD
    Start["I want to change something"] --> Copy{"Is it mostly text?"}
    Copy -- Yes --> Dict["Edit src/i18n/messages/*.ts"]
    Copy -- No --> Visual{"Is it a shared shell element?"}
    Visual -- Yes --> Shared["Edit shared components<br/>Header / Footer / ThemeToggle / LanguageSwitcher"]
    Visual -- No --> Page{"Is it page-specific?"}
    Page -- Yes --> PageComp["Edit src/components/pages/*"]
    Page -- No --> Behavior{"Is it global interactive behavior?"}
    Behavior -- Yes --> Client["Edit src/components/ClientInit.astro"]
    Behavior -- No --> Asset{"Is it an image or screenshot?"}
    Asset -- Yes --> Assets["Replace or add files in public/assets/"]
    Asset -- No --> Preview{"Is it an embedded product preview?"}
    Preview -- Yes --> ProductPreview["Add or edit product-preview/"]
    Preview -- No --> Config["Check astro.config.mjs or utils"]
```

## Directory Details

### `src/pages/`

Purpose: file-based routing.

Current rule:

- Keep these files thin.
- Do not put large UI markup here unless it is a tiny one-off route.
- Prefer page components under `src/components/pages/`.

### `src/components/pages/`

Purpose: page composition.

This is where large sections of the homepage and product page belong.

Examples:

- `HomePage.astro`
- `ProductPage.astro`
- `MockupsPage.astro`

This directory is the right place when you are building a new page or heavily redesigning an existing one.

### `src/components/`

Purpose: shared UI and site-wide behavior.

Examples:

- `Header.astro`
- `Footer.astro`
- `ThemeToggle.astro`
- `LanguageSwitcher.astro`
- `ClientInit.astro`

If a component appears across multiple pages, it belongs here rather than under `components/pages/`.

### `src/components/mockups/`

Purpose: Astro-rendered illustration/mockup components used inside the site itself.

These components are part of the Astro app and should remain lightweight. If product visuals grow into a stateful, responsive demo surface, move that work into a dedicated `product-preview/` app boundary instead of expanding these components indefinitely.

### `product-preview/`

Purpose: responsive React/Vite product preview embedded into the homepage hero.

This package owns:

- local demo data for providers, models, privacy findings, traces, and answers
- app chrome copy for the embedded preview shell
- scenario data for homepage feature states such as routing, cost planning, privacy, synthesis, and audit trace
- preview-only React state and interactions
- model selection, run mode, cost estimate, privacy masking, trace, and comparison UI
- namespaced CSS under the `lpv-` prefix
- a Vite library build that emits stable files into `public/product-preview/`

The Astro homepage mounts it through a single DOM entrypoint:

```html
<div data-product-preview data-locale="en" data-feature="model-router"></div>
```

The homepage feature tabs stay in Astro and dispatch `logk-preview:set-feature`. The tab labels and explanatory copy live in the typed i18n dictionaries. The React preview listens for that event and swaps to the matching scenario. This keeps the marketing layout static while allowing the embedded product surface to become richer over time.

The homepage should not import React internals directly. Keep this boundary stable so the preview can later grow into multiple screens without turning the marketing site into the product app.

### `src/i18n/`

Purpose: locale management.

- `schema.ts` defines the typed contract for dictionaries.
- `messages/en.ts` and `messages/ko.ts` provide actual localized content.
- `messages/index.ts` resolves the correct dictionary for a locale.

This is one of the most important maintainability boundaries in the project.

### `src/layouts/`

Purpose: HTML shell, metadata, fonts, transitions, and global bootstrapping.

`BaseLayout.astro` is responsible for:

- `<html lang="...">`
- `<title>` and meta description
- canonical URL generation
- font loading
- Astro client router for smooth page transitions
- initial theme bootstrap before paint

### `src/utils/`

Purpose: small pure helpers.

Currently:

- `i18n.ts` handles locale helpers and localized path generation

Keep this directory for logic that should not live inside a component.

### `src/styles/`

Purpose: site-wide styling.

Current state:

- `global.css` contains the design system, section styles, responsive behavior, and theme variants.

Guideline:

- Keep tokens and shared utilities near the top.
- Keep section-level styles grouped by feature.
- If the site grows significantly, split this file into partials such as:
  - `tokens.css`
  - `layout.css`
  - `home.css`
  - `product.css`
  - `mockups.css`

That split is not required yet, but it is the next clean refactor if the stylesheet gets substantially larger.

### `public/assets/`

Purpose: immutable static assets served directly.

Examples:

- screenshot captures
- background graphics
- SVG accents

Use this directory for final assets that the Astro site should ship directly.

## Multilingual Structure

The project uses locale-prefixed routes and typed dictionaries.

```mermaid
flowchart LR
    Schema["src/i18n/schema.ts"] --> EN["src/i18n/messages/en.ts"]
    Schema --> KO["src/i18n/messages/ko.ts"]
    EN --> ENRoutes["src/pages/en/*"]
    KO --> KORoutes["src/pages/ko/*"]
    Utils["src/utils/i18n.ts"] --> ENRoutes
    Utils --> KORoutes
```

### Add a New Language

If you later add a third locale such as Japanese:

1. Add the locale in `astro.config.mjs`
2. Add it to `src/i18n/schema.ts`
3. Create `src/i18n/messages/<locale>.ts`
4. Register it in `src/i18n/messages/index.ts`
5. Add localized route files under `src/pages/<locale>/`
6. Update language option arrays in page components if you keep the current pattern

### Important Note

The current implementation keeps `languageOptions` arrays inside page components. That is acceptable for two languages and a small site.

If the number of locales or pages grows, move locale switcher option generation into a shared helper so each page does not define those arrays manually.

## Theme and Motion System

Global behavior lives in `src/components/ClientInit.astro`.

Current responsibilities:

- dark/light theme persistence with `localStorage`
- scroll progress indicator
- sticky header state
- showcase tab cycling
- hero tilt interaction
- reveal-on-scroll animation
- animated counters
- mobile menu open/close behavior

Guideline:

- Put only site-wide enhancements here.
- If a behavior belongs to one section only and becomes complex, extract it into a dedicated client island or script.

## Product Visual Workflow

The homepage hero now uses the embedded `product-preview` app. Static screenshots remain useful for deeper product sections and fallback material.

### Current hero path: embedded `product-preview`

1. Edit preview UI under `product-preview/src/`
2. Run `npm run build:preview` to emit static files into `public/product-preview/`
3. Astro mounts the preview in `HomePage.astro`
4. The preview reads `data-locale` so it can render English or Korean copy
5. The homepage feature tabs dispatch `logk-preview:set-feature` to switch preview scenarios

Useful commands:

```bash
npm run build:preview
npm run check:preview
npm run dev:preview
```

`public/product-preview/` is generated output and is ignored by git. The root `npm run build` command rebuilds it before Astro builds the static site.

### Screenshot path: use captured assets

1. Create or capture a screen image
2. Save it into `public/assets/`
3. Reference it from Astro page components

This is the current approach for:

- `workspace_screenshot.png`
- `pricing_screenshot.png`

This keeps the homepage fast and static while allowing the product preview to evolve with the real product UI.

## GitHub Pages Deployment

This site is already configured for static output.

For GitHub Pages, the main thing to get right is the base path.

### Recommended deployment model

- Personal domain or root site:
  - `SITE_URL=https://your-domain.com`
  - no `BASE_PATH`
- Project Pages URL such as `https://username.github.io/PAGE_DEMO/`:
  - `SITE_URL=https://username.github.io`
  - `BASE_PATH=/PAGE_DEMO`

### Example build command

```bash
SITE_URL=https://username.github.io BASE_PATH=/PAGE_DEMO npm run build
```

### Why the base path matters

All route generation and static asset references need to respect the GitHub Pages subpath. This repository already handles that through Astro config and `import.meta.env.BASE_URL`.

## How to Add a New Page Cleanly

Example: adding an `/about/` page.

1. Create a page component such as `src/components/pages/AboutPage.astro`
2. Add `src/pages/en/about.astro`
3. Add `src/pages/ko/about.astro`
4. Add any new localized strings to both dictionaries
5. Add navigation links only if the page should appear in the main menu

Keep the route wrappers small. The page component should hold the real page markup.

## How to Change Homepage Content Cleanly

### Change text

Edit:

- `src/i18n/messages/en.ts`
- `src/i18n/messages/ko.ts`

### Change layout or section order

Edit:

- `src/components/pages/HomePage.astro`

### Change theme, spacing, card styles, or responsive rules

Edit:

- `src/styles/global.css`

### Change shared navigation or top-level controls

Edit:

- `src/components/Header.astro`
- `src/components/LanguageSwitcher.astro`
- `src/components/ThemeToggle.astro`

## Maintainability Checklist

Before adding a feature, check the following:

- Does this belong in a page component rather than a route file?
- Is this text localized in both languages?
- Is this a shared concern or only one page’s concern?
- Is this a static asset or a generated mockup?
- Is this behavior site-wide enough to belong in `ClientInit.astro`?
- Will this change still work under a GitHub Pages base path?

## Current Tradeoffs

The project is clean and workable now, but these are the next likely refactors if complexity grows:

1. Split `global.css` into multiple files
2. Centralize language option generation
3. Extract large interactive sections if they outgrow `ClientInit.astro`
4. Add a content collection only if a real news/blog system returns
5. Introduce a small `src/config/` layer if site metadata and navigation become more dynamic

## Recommended Working Style

For future edits, use this order:

1. Update dictionary content
2. Update page composition
3. Update shared components only if needed
4. Update styling
5. Update `product-preview/` only when the embedded product surface changes
6. Run `npm run check`
7. Run `npm run build`

That keeps content, structure, and visual changes easy to reason about.

## Summary

This repository is intentionally organized around a few strong boundaries:

- routes
- page composition
- shared UI
- localization
- static assets
- product preview boundary

If you preserve those boundaries, the project will stay understandable even as the homepage, product page, and mockup library grow.
