// Rotates testimonials on the home page.
(function () {
  var items = document.querySelectorAll('[data-testimonial]');
  if (!items.length) return;

  var container = document.querySelector('.lr-testimonials');
  var index = 0;
  var intervalMs = 12000;
  var lastTapTime = 0;
  var lastTapX = 0;
  var doubleTapDelay = 320;
  var doubleTapDistance = 40;

  function show(next) {
    items[index].classList.remove('is-active');
    index = next;
    items[index].classList.add('is-active');
  }

  function step(delta) {
    var next = (index + delta + items.length) % items.length;
    show(next);
  }

  items[0].classList.add('is-active');

  setInterval(function () {
    step(1);
  }, intervalMs);

  if (container) {
    container.addEventListener('touchend', function (event) {
      if (event.changedTouches.length !== 1) return;
      var touch = event.changedTouches[0];
      var now = Date.now();
      var withinDelay = now - lastTapTime <= doubleTapDelay;
      var withinDistance = Math.abs(touch.clientX - lastTapX) <= doubleTapDistance;

      if (withinDelay && withinDistance) {
        var rect = container.getBoundingClientRect();
        var isLeft = touch.clientX < rect.left + rect.width / 2;
        event.preventDefault();
        step(isLeft ? -1 : 1);
        lastTapTime = 0;
        lastTapX = 0;
        return;
      }

      lastTapTime = now;
      lastTapX = touch.clientX;
    }, { passive: false });
  }
})();
