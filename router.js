// ============================================================
//  PhoolPatte — ROUTER.JS
//  Client-side routing — no page reloads
// ============================================================

const Router = (() => {
  // Route map: key → render function
  const routes = {
    home:      () => renderHome(),
    catalog:   (o) => renderCatalog(o),
    category:  (o) => renderCategory(o),
    cart:      () => renderCart(),
    wishlist:  (o) => renderWishlist(o),
    purchase:  (o) => renderPurchase(o),
    delivery:  () => renderDelivery(),
    occasions: () => renderOccasions(),
  };

  function go(page, opts = {}) {
    const fn = routes[page];
    if (!fn) { go('home'); return; }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Run the page renderer
    fn(opts);

    // Push to browser history so back button works
    history.pushState({ page, opts }, '', `#${page}`);
  }

  // Handle browser back/forward
  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.page) {
      const fn = routes[e.state.page];
      if (fn) { fn(e.state.opts || {}); return; }
    }
    renderHome();
  });

  // Initial load — read hash
  function init() {
    const hash = window.location.hash.replace('#', '').split('?')[0];
    if (routes[hash]) go(hash);
    else go('home');
  }

  return { go, init };
})();
