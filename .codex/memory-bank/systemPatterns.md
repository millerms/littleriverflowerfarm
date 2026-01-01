```toml
[memory]
filetype = "systemPatterns"
priority = "high"
```

# System Patterns

## Architecture
- Content: Markdown with YAML front matter in `_pages/` and posts if added.
- Templates: `_layouts/*` and `_includes/*` drive structure and metadata.
- Data: `_data/navigation.yml` for menus; other data files as needed.
- Assets: SCSS compiled via Jekyll; JS loaded in `_includes/scripts.html`.

## Theming
- Base theme: Minimal Mistakes; site styles via `assets/css/theme.css` and `assets/css/custom.css`.
- Prefer CSS variables when possible; avoid `!important`.
- Test both light/dark modes for contrast and legibility.

## Stylesheet Loading
- Global: `_includes/head.html` includes `assets/css/main.css`, `assets/css/theme.css`,
  and `assets/css/custom.css`.
- Page-level: Optional `page.css` front matter includes `assets/css/<name>.css`
  only when specified. No default `css: custom` to avoid duplication.

## CSS Organization
- Custom styles live in `_sass/custom/` partials and are composed by
  `assets/css/custom.scss` into the built `assets/css/custom.css`.
- Modules: tokens, glass surfaces, masthead tweaks, reveal animations,
  ripple effect, theme toggle, and footer nav helpers.

## SEO & Meta
- Set unique `<title>` and `meta description` per page.
- Use canonical URLs and Open Graph/Twitter tags (see `_includes/head.html`).

## Performance
- Defer/async non-critical JS; lazy-load images.
- Keep third-party scripts minimal; measure with Lighthouse.

## Accessibility
- Semantic HTML structure via layouts.
- Keyboard navigation and focus visibility for interactive elements.
- Alt text for images; ARIA only when necessary.
