---
layout: single
title: References & Citations
description: PubMed references with auto metadata, inline citations with backlinks, and copy‑to‑clipboard.
permalink: /docs/references/
paginate: 6
seo: true
---

This template includes helpers for embedding PubMed references and inline citations.

## Inline Citations

Use the `cite.html` include where you want a citation marker:

---
```liquid
{% include cite.html pmid="31452104" %}
```
---

- Auto‑numbers per page as `[1]`, `[2]`, etc.
- Links to the corresponding reference list item.
- Generates an anchor id like `cite-31452104-1` for backlinks.

## Reference List

Render each reference with `reference.html`:

---

```liquid
<ol class="refs">
  {% include reference.html pmid="31452104" num="1" back="cite-31452104-1" %}
  {% include reference.html pmid="30049270" num="2" back="cite-30049270-2" %}
</ol>
```

---

- If online, metadata is fetched from PubMed E‑utilities (`esummary`).
- If offline, optional fallbacks can be provided: `title`, `authors`, `journal`, `year`, `doi`, `url`.

## Copy Citation

Each reference includes a “Copy” button that composes a simple string: `Authors. Title. Journal Year. DOI: …`

## Styling & Scripts

- Styles: `_sass/custom/_refs.scss` (imported in `assets/css/custom.scss`).
- Script: `assets/js/refs.js` (loaded via `_config.yml` `footer_scripts`).

