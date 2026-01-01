// PubMed references: batch-fetch metadata for elements with data-pubmed-id
(function(){
  function collectPmids() {
    const nodes = Array.from(document.querySelectorAll('[data-pubmed-id]'));
    const ids = Array.from(new Set(nodes.map(n => (n.getAttribute('data-pubmed-id')||'').trim()).filter(Boolean)));
    return { nodes, ids };
  }
  function parseSummaryJSON(json) {
    if (!json || !json.result) return {};
    const res = json.result;
    const out = {};
    (res.uids || []).forEach(id => {
      const it = res[id];
      if (!it) return;
      const doi = (it.articleids || []).find(a => a.idtype === 'doi');
      const url = doi ? 'https://doi.org/' + doi.value : ('https://pubmed.ncbi.nlm.nih.gov/' + id + '/');
      const authors = (it.authors || []).map(a => a.name).filter(Boolean);
      const pubdate = it.pubdate || it.epubdate || '';
      const yearMatch = pubdate.match(/\b(19|20)\d{2}\b/);
      const year = yearMatch ? yearMatch[0] : '';
      out[id] = {
        title: it.title || '',
        authors,
        journal: it.fulljournalname || it.source || '',
        year,
        url,
        doi: doi ? doi.value : ''
      };
    });
    return out;
  }
  async function fetchSummaries(ids) {
    const url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&retmode=json&id=' + encodeURIComponent(ids.join(','));
    const resp = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!resp.ok) throw new Error('PubMed fetch failed: ' + resp.status);
    return resp.json();
  }
  function renderInto(el, meta) {
    if (!meta) return;
    const titleEl = el.querySelector('.ref-title');
    if (titleEl) {
      titleEl.textContent = meta.title || titleEl.textContent;
    }
    const linkEl = el.querySelector('.ref-link');
    if (linkEl) {
      linkEl.href = meta.url;
    }
    const authorsEl = el.querySelector('.ref-authors');
    if (authorsEl && meta.authors && meta.authors.length) {
      authorsEl.textContent = meta.authors.join(', ');
    }
    const journalEl = el.querySelector('.ref-journal');
    if (journalEl && meta.journal) journalEl.textContent = meta.journal;
    const yearEl = el.querySelector('.ref-year');
    if (yearEl && meta.year) yearEl.textContent = meta.year;
    const doiEl = el.querySelector('.ref-doi');
    if (doiEl && meta.doi) {
      doiEl.textContent = meta.doi;
      doiEl.href = 'https://doi.org/' + meta.doi;
      doiEl.parentElement.style.display = '';
    }
  }
  function buildCitationText(el) {
    try {
      const title = (el.querySelector('.ref-title')?.textContent || '').trim();
      const authors = (el.querySelector('.ref-authors')?.textContent || '').trim();
      const journal = (el.querySelector('.ref-journal')?.textContent || '').trim();
      const year = (el.querySelector('.ref-year')?.textContent || '').trim();
      const doiNode = el.querySelector('.ref-doi');
      const doi = (doiNode && doiNode.textContent || '').trim();
      const parts = [];
      if (authors) parts.push(authors + '.');
      if (title) parts.push(title + '.');
      if (journal) parts.push(journal + (year ? ' ' + year + '.' : '.'));
      if (doi) parts.push('DOI: ' + doi);
      return parts.join(' ');
    } catch (_) { return ''; }
  }
  function onCopyClick(e) {
    const btn = e.target.closest('[data-copy-citation]');
    if (!btn) return;
    const el = btn.closest('.ref-item');
    if (!el) return;
    const text = buildCitationText(el);
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      const prev = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = prev; }, 1200);
    }).catch(() => {});
  }
  async function enhance() {
    try {
      const { nodes, ids } = collectPmids();
      if (!ids.length) return;
      const json = await fetchSummaries(ids);
      const map = parseSummaryJSON(json);
      nodes.forEach(node => {
        const id = (node.getAttribute('data-pubmed-id') || '').trim();
        if (id && map[id]) renderInto(node, map[id]);
      });
    } catch (e) {
      // Silently ignore; keep fallbacks
      console.warn('[refs] ', e);
    }
  }
  document.addEventListener('DOMContentLoaded', enhance);
  document.addEventListener('click', onCopyClick);
})();
