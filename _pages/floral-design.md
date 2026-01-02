---
layout: splash
title: "Floral Design Work"
permalink: /floral-design/
classes: full-width
---
<section class="lr-intro reveal">
  <h1 class="lr-hero__title">Floral Design Work</h1>
  <p><strong>Bespoke, garden-inspired floral design</strong> for weddings, events, and home decor.</p>
  <p>I create lush, seasonal floral arrangements and custom installations for weddings, events, and home styling. My floral designs are inspired by nature and crafted with care, bringing a fresh, organic feel to every setting.</p>
  <p>During the growing season, I incorporate fresh-cut flowers from my Connecticut flower farm, ensuring your arrangements are as vibrant and natural as possible. When needed, I also source locally and sustainably to support eco-friendly floral design.</p>
  <p>Let's bring your floral vision to life. Send me a message to start planning your custom arrangements.</p>
  <p class="lr-intro__credit">Photography credit: <a href="https://gaylebrooker.com/" rel="noopener">gaylebrooker.com</a>.</p>
</section>

{% assign all_images = site.static_files | where_exp: "file", "file.path contains '/assets/images/squarespace/'" %}
{% assign jpg_images = all_images | where_exp: "file", "file.extname == '.jpg'" %}
{% assign jpeg_images = all_images | where_exp: "file", "file.extname == '.jpeg'" %}
{% assign all_images = jpg_images | concat: jpeg_images | sort: "path" %}
{% assign group_one = all_images | where_exp: "file", "file.name contains '1-'" | sort: "path" %}
{% assign group_two = all_images | where_exp: "file", "file.name contains '2-'" | sort: "path" %}
{% assign group_three = all_images | where_exp: "file", "file.name contains '3-'" | sort: "path" %}

<section class="lr-section reveal">
  <h2>Wedding and Event Floral Design in Connecticut</h2>
  <div class="lr-gallery">
    {% for image in group_one %}
      <figure class="lr-gallery__item">
        <img src="{{ image.path | relative_url }}" alt="Wedding floral design in Connecticut.">
      </figure>
    {% endfor %}
  </div>
</section>

---

<section class="lr-section reveal">
  <h2>Custom Bouquets and Floral Arrangements - Locally Grown in Connecticut</h2>
  <div class="lr-gallery">
    {% for image in group_two %}
      <figure class="lr-gallery__item">
        <img src="{{ image.path | relative_url }}" alt="Custom bouquet with seasonal blooms.">
      </figure>
    {% endfor %}
  </div>
</section>

---

<section class="lr-section reveal">
  <h2>Fresh-Cut Seasonal Flowers from Our Connecticut Flower Farm</h2>
  <div class="lr-gallery">
    {% for image in group_three %}
      <figure class="lr-gallery__item">
        <img src="{{ image.path | relative_url }}" alt="Fresh-cut seasonal flowers from the farm.">
      </figure>
    {% endfor %}
  </div>
</section>

---

<section class="lr-contact reveal" id="contact">
  <h2>Contact</h2>
  <p>Share your date, location, and the floral feel you are dreaming of.</p>
  <form action="mailto:pmiller434@gmail.com" method="post" enctype="text/plain">
    <label for="floral-name">Name</label>
    <input id="floral-name" name="name" type="text" autocomplete="name" required>

    <label for="floral-email">Email</label>
    <input id="floral-email" name="email" type="email" autocomplete="email" required>

    <label for="floral-message">Message</label>
    <textarea id="floral-message" name="message" required></textarea>

    <div class="lr-contact__actions">
      <button class="btn-modern" type="submit">Send Email</button>
      <a class="btn-modern btn-modern--ghost" href="{{ '/about/' | relative_url }}">About the Farm</a>
    </div>
  </form>
</section>
