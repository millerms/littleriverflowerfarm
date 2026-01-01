---
layout: single
title: Getting Started
description: Quick start guide for this Minimal Mistakes template — install, run, and understand the structure.
permalink: /docs/getting-started/
paginate: 4
seo: true
---

Welcome. This template layers modern, theme‑aware UI components on top of Minimal Mistakes, with a clean structure and good defaults.

## Prerequisites

- Ruby 3.x and Bundler installed
- Node (optional) if you plan to extend JS/formatting

## Install & Run

```bash
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000

## Project Structure

- `_config.yml`: Site and theme settings; footer scripts; defaults.
- `_pages/`: Content pages (home, docs, examples). Add your pages here.
- `_includes/`: Reusable partials (head, footer, scripts, reference include).
- `_sass/custom/`: SCSS partials for custom UI modules.
- `assets/css/`:
  - `main.scss`: Theme skin loader (default skin).
  - `theme.css`: Light/dark palettes (link, text, background tokens).
  - `custom.scss`: Imports all custom partials; compiles to `custom.css`.
- `assets/js/`:
  - `reveal.js`: IntersectionObserver reveals.
  - `tactile.js`: Click ripple helper for buttons.
  - `ui.js`: Modal helper and keyboard‑enhanced tabs.
  - `refs.js`: PubMed metadata fetch + copy citation.

## Styling Overview

- Global CSS is linked in `_includes/head.html`:
  - `assets/css/main.css` (theme)
  - `assets/css/theme.css` (palettes)
  - `assets/css/custom.css` (your components)
- No per‑page `css: custom` default to avoid duplicate loads.

## Try the Demos

- Home page showcases buttons, cards, accordion, tabs, tooltips, CTA, chips, alerts, progress, skeleton, modal, and references.
- Use these modules directly in Markdown with inline HTML snippets.

