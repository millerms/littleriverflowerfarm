---
layout: single
title: Components
description: Theme‑aware UI building blocks — buttons, cards, accordion, tabs, tooltips, CTA, chips, alerts, progress, skeleton, modal.
permalink: /docs/components/
paginate: 5
seo: true
---

All components are pure CSS (with light JS where helpful) and follow the theme palettes in `assets/css/theme.css`.

## Buttons

- Solid: `<a class="btn-modern" href="#">Action</a>`
- Outline: `<a class="btn-modern btn-modern--outline" href="#">Outline</a>`
- Ghost: `<a class="btn-modern btn-modern--ghost" href="#">Ghost</a>`
- Sizes: `btn-modern--sm`, `btn-modern--lg`
- Icon: `<a class="btn-modern btn-modern--icon" aria-label="Play"><i class="fas fa-play"></i></a>`
- Block: `<a class="btn-modern btn-modern--block" href="#">Full Width</a>`
- Loading: `<a class="btn-modern is-loading" aria-busy="true">Loading…</a>`

## Cards

```html
<div class="card-grid">
  <a class="card--link" href="#">
    <article class="card">
      <div class="card__body">
        <h4 class="card__title">Title</h4>
        <p class="card__text">Description here.</p>
      </div>
    </article>
  </a>
</div>
```

## Accordion

```html
<details class="accordion">
  <summary>Question?</summary>
  <div class="accordion__content">Answer</div>
</details>
```

## Tabs (Keyboard‑Enhanced)

```html
<div class="tabs" role="tablist" aria-label="Demo">
  <input class="tabs__radio" type="radio" name="ex" id="t1" checked>
  <label class="tabs__label" for="t1" role="tab" aria-controls="p1">One</label>
  <div class="tabs__panel" id="p1" role="tabpanel" aria-labelledby="t1">Panel one</div>

  <input class="tabs__radio" type="radio" name="ex" id="t2">
  <label class="tabs__label" for="t2" role="tab" aria-controls="p2">Two</label>
  <div class="tabs__panel" id="p2" role="tabpanel" aria-labelledby="t2">Panel two</div>
</div>
```

Arrow keys, Home, End supported via `assets/js/ui.js`.

## Tooltips

`<a data-tooltip="Helpful tip">Hover me</a>`

## CTA Banner

```html
<div class="cta-banner">
  <div>
    <h3 class="cta-banner__title">Quick Start</h3>
    <p class="cta-banner__text">Spin up and ship fast.</p>
  </div>
  <div class="cta-banner__actions">
    <a class="btn-modern" href="#">Get Started</a>
    <a class="btn-modern btn-modern--outline" href="#">Learn More</a>
  </div>
</div>
```

## Chips / Alerts / Progress / Skeleton

- Chip: `<span class="chip chip--success">Success</span>`
- Alert: `<div class="alert alert--info"><div class="alert__title">Info</div><p class="alert__text">Details…</p></div>`
- Progress: `<div class="progress" style="--value: 66%"><div class="progress__bar"></div></div>`
- Steps: `<div class="steps"><div class="step is-done">1</div><div class="step is-active">2</div></div>`
- Skeleton: `<div class="skeleton skeleton--text" style="width:70%"></div>`

## Modal (Native `<dialog>`)

```html
<a class="btn-modern" data-modal-target="demo" aria-haspopup="dialog">Open</a>
<dialog class="modal" id="demo">
  <div class="modal__header">
    <h3 class="modal__title">Modal title</h3>
    <button class="btn-modern btn-modern--sm modal__close" data-modal-close aria-label="Close">✕</button>
  </div>
  <div class="modal__body">Content…</div>
  <div class="modal__footer">
    <button class="btn-modern btn-modern--outline" data-modal-close>Cancel</button>
    <a class="btn-modern" href="#">Continue</a>
  </div>
</dialog>
```

