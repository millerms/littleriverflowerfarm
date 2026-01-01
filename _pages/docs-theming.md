---
layout: single
title: Theming
description: Customize palettes, tokens, and component styles with a clean, modular SCSS setup.
permalink: /docs/theming/
paginate: 7
seo: true
---

Theme colors live in `assets/css/theme.css` and define tokens like `--c-bg`, `--c-text`, `--c-link`, `--c-link-hover`, etc. Components consume these tokens.

## Light/Dark Palettes

- Light tokens on `:root, :root[data-theme='light']`
- Dark tokens on `:root[data-theme='dark']` and system dark preference fallback.

Change `--c-link` and `--c-link-hover` to rebrand the primary color.

## Custom SCSS Organization

Custom modules are in `_sass/custom/` and imported via `assets/css/custom.scss`:

- `_tokens.scss`: CSS variables (glass, reveal, motion)
- `_masthead.scss`: header glass and readability tweaks
- `_buttons.scss`: modern buttons with ripple and sheen
- `_cards.scss`, `_accordion.scss`, `_tabs.scss`, `_tooltip.scss`, `_cta.scss`
- `_chips.scss`, `_alerts.scss`, `_progress.scss`, `_skeleton.scss`, `_modal.scss`
- `_quote.scss`, `_refs.scss`

Add your module under `_sass/custom/` and import it in `assets/css/custom.scss`.

## JS Helpers

- `reveal.js`: Adds `is-revealed` class on scroll.
- `tactile.js`: Adds `.ripple` effects on button clicks.
- `ui.js`: Modal open/close + keyboard tabs.
- `refs.js`: PubMed metadata and copy citation.

All loaded from `_config.yml` `footer_scripts`.

