---
layout: single
title: Advanced & Tips
description: Accessibility, performance, and authoring tips to keep pages clean and fast.
permalink: /docs/advanced/
paginate: 8
seo: true
---

## Accessibility

- Prefer semantic HTML (`<details>`, `<dialog>`, `<nav>`, `<main>`).
- Keep focus states visible. Components ship with `:focus-visible` outlines.
- Tabs support Arrow/Home/End keys (see `assets/js/ui.js`).
- Provide `aria-label` on icon‑only buttons.

## Performance

- Keep third‑party scripts minimal. Font Awesome is preloaded with `onload` swap.
- Defer heavy interactions. Most modules are CSS‑first.
- Use `reveal` animations sparingly and honor reduced motion.

## Authoring

- Place new pages in `_pages/` with front matter:

```yaml
---
layout: single
title: My Page
description: One‑liner
permalink: /my-page/
seo: true
---
```

- Embed components inline with HTML snippets.
- Use `include reference.html` and `include cite.html` for references.

## Deploy

- Build: `bundle exec jekyll build`
- Serve: `bundle exec jekyll serve`
- GitHub Pages: Use `github-pages` gem already in `Gemfile`.

