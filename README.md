
# Minimal Mistakes Jekyll Template

A clean starter built on the
[Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) Jekyll theme.
Use this to spin up new sites quickly with sensible defaults.

## What You Get
- Minimal files, no sample posts
- Remote theme via `remote_theme` for easy upgrades
- Pre‑wired assets (`assets/css/custom.css`, `assets/js/*`)
- Basic navigation and page defaults

## Prerequisites
- Ruby 3.x (recommend via `rbenv` or `asdf`)
- Bundler: `gem install bundler`
- macOS: `xcode-select --install` (for native gems)
- Windows: use RubyInstaller with DevKit, or WSL2

Verify versions:
```bash
ruby -v
bundle -v
```

## Quick Start

Option A — Use as GitHub template (recommended)
1) Click "Use this template" on the repo page
2) Name your new repo, then clone it locally:
```bash
git clone https://github.com/<you>/<new-repo>.git
cd <new-repo>
```

Option B — Copy locally
```bash
git clone https://github.com/<source-owner>/<this-repo>.git new-site
cd new-site
rm -rf .git
git init -b main
git add . && git commit -m "chore: scaffold site"
```

Install deps and run:
```bash
bundle install
bundle exec jekyll serve --livereload
```
Open http://localhost:4000

If you see missing gems, run `bundle update` and retry.

## Customize
- `_config.yml`: site title, description, `url`, `baseurl`, skin
- `_data/navigation.yml`: primary nav items
- `_pages/`: add standalone pages (auto‑output with nice URLs)
- `_posts/`: add blog posts (`YYYY-MM-DD-title.md`)
- `assets/css/custom.css`: your styles (already included)
- `_includes/head.html`, `_includes/footer.html`: metadata and footer links
- `assets/js/reveal.js`, `assets/js/tactile.js`: custom JS hooks

Tip: set `url` (e.g. `https://yourdomain.com`) and `baseurl` (often `""`)
before deploying so canonical links and sitemaps are correct.

## Content Examples

New page (`_pages/about.md`):
```markdown
---
title: About
permalink: /about/
layout: single
---

Your content here.
```

New post (`_posts/2025-01-01-hello.md`):
```markdown
---
title: Hello
categories: [blog]
tags: [intro]
layout: single
---

First post!
```

## Deploy

GitHub Pages (remote theme compatible)
1) Push to GitHub
2) Settings → Pages → Build from `GitHub Actions` or `Deploy from branch`
3) If using Actions, add the Jekyll workflow below.

GitHub Actions workflow (`.github/workflows/jekyll.yml`):
```yaml
name: Build and Deploy Jekyll
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/jekyll-build-pages@v1
        with:
          source: .
          destination: ./_site
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./_site
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Other hosts
- Netlify: set build command `bundle exec jekyll build`, publish dir `_site`
- Cloudflare Pages: framework preset “Jekyll”, same build/publish as above

## Troubleshooting
- macOS: if `bundle install` fails, run `xcode-select --install`
- Windows: prefer WSL2; otherwise install Ruby+DevKit
- Lock to GitHub Pages versions: `bundle update github-pages`
- Clear caches: delete `.sass-cache`, `.jekyll-cache`, then re‑serve

## Upgrading Theme
This template uses `remote_theme: "mmistakes/minimal-mistakes@<version>"`.
To upgrade, bump the version in `_config.yml` and run:
```bash
bundle update
```

## Acknowledgements
- Theme: [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes)
- Author: Michael Rose

## License
MIT — see [LICENSE](LICENSE)
