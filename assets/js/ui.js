// Minimal UI helpers: modal open/close
document.addEventListener('click', (e) => {
  const openBtn = e.target.closest('[data-modal-target]');
  if (openBtn) {
    const id = openBtn.getAttribute('data-modal-target');
    const dlg = document.getElementById(id);
    if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
    e.preventDefault();
    return;
  }
  const closeBtn = e.target.closest('[data-modal-close]');
  if (closeBtn) {
    const dlg = closeBtn.closest('dialog');
    if (dlg) dlg.close();
    e.preventDefault();
  }
});

// Tabs: keyboard navigation and ARIA sync
function initTabs(container) {
  const radios = Array.from(container.querySelectorAll('.tabs__radio'));
  if (!radios.length) return;

  function sync() {
    radios.forEach((r) => {
      const label = r.nextElementSibling;
      const panel = label && label.nextElementSibling;
      const selected = r.checked;
      if (label) {
        label.setAttribute('aria-selected', selected ? 'true' : 'false');
        label.tabIndex = selected ? 0 : -1;
      }
      if (panel && panel.classList.contains('tabs__panel')) {
        panel.setAttribute('aria-hidden', selected ? 'false' : 'true');
      }
    });
  }

  // Ensure one tab is focusable
  if (!radios.some((r) => r.checked)) {
    radios[0].checked = true;
  }
  sync();

  container.addEventListener('keydown', (e) => {
    const label = e.target.closest('.tabs__label');
    if (!label || !container.contains(label)) return;
    const currentRadio = label.previousElementSibling;
    if (!currentRadio || !currentRadio.classList.contains('tabs__radio')) return;

    const idx = radios.indexOf(currentRadio);
    if (idx < 0) return;

    let nextIdx = idx;
    if (e.key === 'ArrowRight') nextIdx = (idx + 1) % radios.length;
    else if (e.key === 'ArrowLeft') nextIdx = (idx - 1 + radios.length) % radios.length;
    else if (e.key === 'Home') nextIdx = 0;
    else if (e.key === 'End') nextIdx = radios.length - 1;
    else return; // ignore other keys

    e.preventDefault();
    const nextRadio = radios[nextIdx];
    nextRadio.checked = true;
    sync();
    const nextLabel = nextRadio.nextElementSibling;
    if (nextLabel) nextLabel.focus();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tabs').forEach(initTabs);
});
