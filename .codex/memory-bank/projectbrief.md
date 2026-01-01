```toml
[memory]
filetype = "projectBrief"
priority = "high"
```

# Project Brief

- Purpose: A clean, accessible, and fast Minimal Mistakes Jekyll site template with sensible SEO, a11y, and theming defaults.
- Scope: Configure theme, metadata, navigation, and assets; add dark theme skin; include measured JS enhancements; keep content and includes tidy.
- Outcomes: Easy to extend, strong lighthouse scores, consistent authoring patterns.

## Goals
- Accessibility: Meet WCAG AA basics; semantic HTML; keyboard support.
- Performance: Optimize CSS/JS loading; minimize blocking; lazy-load media.
- SEO: Unique titles/descriptions; canonical URLs; Open Graph/Twitter.
- Theming: Light/dark support using Minimal Mistakes patterns.
- Maintainability: Clear structure; conventional commits; memory bank updates.

## Non‑Negotiables
- Do not commit secrets; use env vars and `.env.example`.
- Preserve Liquid and theme conventions; avoid unnecessary overrides.
- Keep diffs small and focused; document decisions in memory bank.

## Success Criteria
- Local `jekyll serve` runs cleanly; site renders without console errors.
- Lighthouse a11y/perf SEO scores are strong on key pages.
- Content structure and includes are predictable and documented.

