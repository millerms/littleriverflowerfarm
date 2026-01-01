```toml
[memory]
filetype = "activeContext"
priority = "high"
```

# Active Context

## Current Focus
- Initialize Memory Bank and point Codex config to repo-local guidance.
- Verify head/footer/scripts includes align with SEO and a11y patterns.
- Ensure dark theme styles load correctly and maintain contrast.

## Recent Changes
- Added Memory Bank core files under `.codex/memory-bank/`.
- Planning to reference repo-local `memory-bank.md` guidance in `.codex/config.toml`.
- Removed unused `assets/css/skin-dark.scss` (not referenced in head or config).
- Chose single CSS include source: keep global `<link>`s in `_includes/head.html`.
  Removed `css: "custom"` from `_config.yml` defaults (pages/posts) to avoid
  duplicate `custom.css` loads.
- Refactored `assets/css/custom.css` into `assets/css/custom.scss` with modular
  partials in `_sass/custom/` (`_tokens.scss`, `_glass.scss`, `_masthead.scss`,
  `_reveal.scss`, `_ripple.scss`, `_theme-toggle.scss`, `_footer.scss`). Output
  path remains `/assets/css/custom.css`.
- Added rich UI modules (buttons, cards, accordion, tabs, tooltips, CTA, chips,
  alerts, progress, skeleton, modal), PubMed refs + inline citations, and docs
  pages under `/docs/*`. Created `.codex/agents/template-docs-agent.md`.

## Next Steps
- Audit `_includes/head.html` meta tags for completeness (title, description, OG/Twitter, canonical).
- Confirm `_data/navigation.yml` reflects desired IA; check ARIA labeling.
- Review `assets/js/reveal.js` and `assets/js/tactile.js` for defer/async and a11y.
- Run Lighthouse a11y and note follow-ups into `progress.md`.

## Decisions & Preferences
- Keep overrides minimal; prefer theme-supported hooks.
- Use conventional commits and document non-obvious choices here.
