// Rotates testimonials on the home page.
(function () {
  var items = document.querySelectorAll('[data-testimonial]');
  if (!items.length) return;

  var index = 0;
  var intervalMs = 9000;

  function show(next) {
    items[index].classList.remove('is-active');
    index = next;
    items[index].classList.add('is-active');
  }

  items[0].classList.add('is-active');

  setInterval(function () {
    var next = (index + 1) % items.length;
    show(next);
  }, intervalMs);
})();
