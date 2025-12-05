async function loadTemplate(targetId, url) {
  const host = document.getElementById(targetId);
  if (!host) return null;
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const html = await response.text();
    host.innerHTML = html;
    return host;
  } catch (err) {
    console.error(`Failed to load template ${url}:`, err);
    return null;
  }
}

function initNav(pageId, headerEl) {
  if (!headerEl) return;
  const navBtn = headerEl.querySelector('#nav');
  const nav = headerEl.querySelector('#menu');
  navBtn?.addEventListener('click', () => {
    navBtn.classList.toggle('open');
    const expanded = navBtn.getAttribute('aria-expanded') === 'true';
    navBtn.setAttribute('aria-expanded', String(!expanded));
  });

  if (pageId) {
    const active = headerEl.querySelector(`[data-page="${pageId}"]`);
    active?.classList.add('active');
  }
}

function initFooter(footerEl) {
  if (!footerEl) return;
  const year = footerEl.querySelector('#y');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

(async function bootstrapTemplates() {
  const pageId = document.body.dataset.page || '';
  const header = await loadTemplate('site-header', 'templates/header.html');
  initNav(pageId, header);

  const footer = await loadTemplate('site-footer', 'templates/footer.html');
  initFooter(footer);
})();
