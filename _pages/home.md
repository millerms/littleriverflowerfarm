---
layout: splash
title: Temp home
tagline: "Temp home page sub"
permalink: /
paginate: 1
header:
  overlay_color: "#0c365cff"
---

Test home page
{: .reveal .reveal--up }

This is a button to the Temp page{% include cite.html pmid="31452104" %} and another action{% include cite.html pmid="30049270" %}:
{: .reveal .reveal--up }

<p>
  <a class="btn-modern btn-modern--lg reveal" href="/temp/" aria-label="Go to Temp page">
    <i class="fas fa-arrow-right btn-modern__icon btn-modern__icon--left" aria-hidden="true"></i>
    View Temp Page
  </a>
  &nbsp;
  <a class="btn-modern btn-modern--outline reveal" href="/temp/" aria-label="Go to Temp page (outline)">
    Outline Button
    <i class="fas fa-external-link-alt btn-modern__icon btn-modern__icon--right" aria-hidden="true"></i>
  </a>
  &nbsp;
  <a class="btn-modern btn-modern--ghost reveal" href="/temp/" aria-label="Go to Temp page (ghost)">
    Ghost Button
    <span class="btn-modern__badge">New</span>
  </a>
</p>

<!-- More button variants -->
<p class="reveal">
  <!-- Icon-only buttons (use aria-label) -->
  <a class="btn-modern btn-modern--icon" href="/temp/" aria-label="Play">
    <i class="fas fa-play" aria-hidden="true"></i>
  </a>
  &nbsp;
  <a class="btn-modern btn-modern--icon btn-modern--outline" href="/temp/" aria-label="Add">
    <i class="fas fa-plus" aria-hidden="true"></i>
  </a>
  &nbsp;
  <a class="btn-modern btn-modern--icon btn-modern--ghost" href="/temp/" aria-label="Favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </a>
</p>

<div class="reveal" style="max-width: 520px;">
  <!-- Block (full-width) -->
  <a class="btn-modern btn-modern--block" href="/temp/" aria-label="Full width action">Full Width Action</a>
  
  <!-- Loading state -->
  <a class="btn-modern is-loading" href="#" aria-busy="true" aria-label="Loading">
    Loading…
  </a>
</div>

<hr>

<!-- Docs Quick Links -->
<h3 class="reveal">Docs Quick Links</h3>
<div class="card-grid reveal" style="margin-top: .25rem;">
  <a class="card--link" href="/docs/getting-started/" aria-label="Getting Started">
    <article class="card">
      <div class="card__body">
        <h4 class="card__title">Getting Started</h4>
        <p class="card__text">Install and run locally in minutes.</p>
      </div>
    </article>
  </a>
  <a class="card--link" href="/docs/components/" aria-label="Components">
    <article class="card">
      <div class="card__body">
        <h4 class="card__title">Components</h4>
        <p class="card__text">Buttons, cards, tabs, tooltips, and more.</p>
      </div>
    </article>
  </a>
  <a class="card--link" href="/docs/references/" aria-label="References">
    <article class="card">
      <div class="card__body">
        <h4 class="card__title">References</h4>
        <p class="card__text">Inline cites and PubMed metadata.</p>
      </div>
    </article>
  </a>
</div>

<p class="reveal" style="display: inline-flex; gap: .5rem; flex-wrap: wrap;">
  <a class="btn-modern" href="/docs/">All Docs</a>
  <a class="btn-modern btn-modern--outline" href="/docs/components/">Browse Components</a>
  <a class="btn-modern btn-modern--ghost" href="/docs/getting-started/">Start Here</a>
</p>

<!-- CTA Banner -->
<div class="cta-banner reveal" data-tooltip="Try me!">
  <div>
    <h3 class="cta-banner__title">Quick Start</h3>
    <p class="cta-banner__text">Spin up a page and tweak styles in minutes.</p>
  </div>
  <div class="cta-banner__actions">
    <a class="btn-modern" href="/temp/">Get Started</a>
    <a class="btn-modern btn-modern--outline" href="/temp/">Learn More</a>
  </div>
  
</div>

<!-- Card Grid -->
<div class="card-grid reveal" style="margin-top: 1rem;">
  <a class="card--link" href="/temp/" aria-label="Read more about Temp">
    <article class="card">
      <div class="card__body">
        <h4 class="card__title">Simple Setup</h4>
        <p class="card__text">Clean defaults, theme-aware styles, and smart components.</p>
      </div>
    </article>
  </a>
  <a class="card--link" href="/temp/" aria-label="Read more about Temp features">
    <article class="card">
      <div class="card__body">
        <h4 class="card__title">Accessible by Design</h4>
        <p class="card__text">Keyboard, contrast, and reduced motion considered from the start.</p>
      </div>
    </article>
  </a>
  <a class="card--link" href="/temp/" aria-label="Read more about Temp speed">
    <article class="card">
      <div class="card__body">
        <h4 class="card__title">Fast and Friendly</h4>
        <p class="card__text">No heavy frameworks. Just the essentials that work.</p>
      </div>
    </article>
  </a>
  
</div>

<!-- Accordion -->
<details class="accordion reveal">
  <summary>What is this template?</summary>
  <div class="accordion__content">
    A Minimal Mistakes starter with theme-aware UI helpers and accessible patterns.
  </div>
</details>
<details class="accordion reveal">
  <summary>Can I customize the colors?</summary>
  <div class="accordion__content">
    Yes. Edit `assets/css/theme.css` to tune palettes; components follow those vars.
  </div>
</details>

<!-- Tabs -->
<div class="tabs reveal" role="tablist" aria-label="Demo tabs">
  <div class="tabs__list">
    <input class="tabs__radio" type="radio" name="demo-tabs" id="tab-1" checked>
    <label class="tabs__label" for="tab-1" role="tab" aria-controls="panel-1">Overview</label>
    <div class="tabs__panel" id="panel-1" role="tabpanel" aria-labelledby="tab-1">
      Use these modules as building blocks for pages.
    </div>

    <input class="tabs__radio" type="radio" name="demo-tabs" id="tab-2">
    <label class="tabs__label" for="tab-2" role="tab" aria-controls="panel-2">Buttons</label>
    <div class="tabs__panel" id="panel-2" role="tabpanel" aria-labelledby="tab-2">
      Solid, outline, and ghost variants with ripple and sheen.
    </div>

    <input class="tabs__radio" type="radio" name="demo-tabs" id="tab-3">
    <label class="tabs__label" for="tab-3" role="tab" aria-controls="panel-3">Cards</label>
    <div class="tabs__panel" id="panel-3" role="tabpanel" aria-labelledby="tab-3">
      A responsive grid with hover lift for visual hierarchy.
    </div>
  </div>
  
</div>

<!-- Tooltip demo -->
<p class="reveal">Hover or focus this <a href="#" data-tooltip="A helpful tooltip!">tooltip link</a> to see more.</p>

<!-- Quote / Testimonial -->
<figure class="quote reveal">
  <blockquote>
    <p>This template strikes a great balance of clean defaults and modern UI elements. It feels fast, accessible, and fun to build with.</p>
  </blockquote>
  <figcaption>
    <span class="quote__author"><strong>Alex Doe</strong><span class="quote__meta">Product Designer</span></span>
  </figcaption>
</figure>

<!-- References demo -->
<h3 class="reveal">References</h3>
<ol class="refs reveal">
  {% include reference.html pmid="31452104" num="1" back="cite-31452104-1" %}
  {% include reference.html pmid="30049270" num="2" back="cite-30049270-2" %}
</ol>

<!-- Chips / Tags -->
<p class="reveal">
  <span class="chip"><i class="fas fa-tag chip__icon chip__icon--left" aria-hidden="true"></i>Default</span>
  <span class="chip chip--success">Success</span>
  <span class="chip chip--info">Info</span>
  <span class="chip chip--warn">Warning</span>
  <span class="chip chip--danger">Danger</span>
</p>

<!-- Alerts -->
<div class="alert alert--success reveal" role="status" aria-live="polite">
  <div class="alert__title">Success</div>
  <p class="alert__text">Your changes were saved successfully.</p>
  
</div>
<div class="alert alert--warn reveal" role="status" aria-live="polite">
  <div class="alert__title">Heads up</div>
  <p class="alert__text">This is a preview environment.</p>
</div>

<!-- Progress + Steps -->
<div class="reveal" style="max-width: 520px;">
  <div class="progress" style="--value: 66%;">
    <div class="progress__bar"></div>
  </div>
  <div class="progress__label">Progress: 66%</div>
  <div class="steps" style="margin-top: .5rem;">
    <div class="step is-done" aria-label="Step 1 done">1</div>
    <div class="step is-active" aria-label="Step 2 current">2</div>
    <div class="step" aria-label="Step 3">3</div>
  </div>
</div>

<!-- Skeleton loading -->
<div class="reveal" style="max-width: 520px; margin-top: .75rem;">
  <div class="skeleton skeleton--text" style="width: 60%;"></div>
  <div class="skeleton skeleton--text" style="width: 90%; margin-top: .4rem;"></div>
  <div class="skeleton skeleton--block" style="margin-top: .6rem;"></div>
</div>

<!-- Modal demo -->
<p class="reveal">
  <a class="btn-modern" href="#" data-modal-target="demo-modal" aria-haspopup="dialog">Open Modal</a>
</p>

<dialog class="modal" id="demo-modal" aria-labelledby="demo-modal-title">
  <div class="modal__header">
    <h3 class="modal__title" id="demo-modal-title">Hello from the modal</h3>
    <button class="btn-modern btn-modern--sm modal__close" data-modal-close aria-label="Close">✕</button>
  </div>
  <div class="modal__body">
    <p>This native dialog uses theme-aware styles and traps focus when open.</p>
  </div>
  <div class="modal__footer">
    <button class="btn-modern btn-modern--outline" data-modal-close>Cancel</button>
    <a class="btn-modern" href="/temp/">Continue</a>
  </div>
</dialog>
