```toml
[memory]
filetype = "productContext"
priority = "high"
```

# Product Context

- Audience: Visitors to a personal/portfolio site (readers on mobile/desktop).
- Tone: Calm, grounded, helpful; clear guidance without hype.
- Primary Tasks: Read pages/posts, navigate via header/nav, discover metadata.

## UX Principles
- Keep pages scannable: headings, short paragraphs, lists.
- Respect dark/light preferences; ensure contrast and focus styles.
- Provide meaningful alt text and captions where helpful.
- Avoid JS-only interactions; ensure keyboard and no-JS paths.

## Information Architecture
- Global navigation from `_data/navigation.yml`.
- Key pages in `_pages/` (e.g., `home.md`, `temp.md`).
- Reusable elements in `_includes/` (head, footer, scripts).

## Content Rules
- Each page has title, description, permalink; `seo: true` when public.
- Prefer `{% include figure.html %}` for images with `alt`.
- Avoid long walls of text; break sections logically.

