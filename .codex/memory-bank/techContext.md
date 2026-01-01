```toml
[memory]
filetype = "techContext"
priority = "high"
```

# Tech Context

## Stack
- Jekyll `~> 3.10` with Minimal Mistakes theme.
- Gems: `github-pages`, `jekyll-include-cache`, `minimal-mistakes-jekyll`.
- Structure: `_config.yml`, `_data/`, `_includes/`, `_layouts/`, `_pages/`, `assets/`.
- Assets: CSS/SCSS in `assets/css/` (e.g., `theme.css`, `custom.css`); JS in `assets/js/` (`reveal.js`, `tactile.js`).

## Local Dev
- Install: `bundle install`
- Serve: `bundle exec jekyll serve`
- Node (optional) for linting/formatting per `package.json`.

## Conventions
- Keep Liquid syntax intact; use theme’s includes and variables.
- Defer/async non-critical JS; avoid global leakage.
- Respect theme spacing/typography; keep SCSS nesting shallow.

## Tools & Artifacts
- `lighthouse-a11y.json`: audit reference for accessibility improvements.
- `robots.txt`: ensure correct indexing policy for environment.
