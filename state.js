// ============================================================
//  PhoolPatte — STATE.JS
//  Manages: cart, wishlist, liked items, user phone
// ============================================================

const State = (() => {
  // ── Storage helpers ──────────────────────────────────────
  function load(key, fallback = []) {
    try { return JSON.parse(localStorage.getItem('pp_' + key)) ?? fallback; }
    catch { return fallback; }
  }
  function save(key, val) {
    try { localStorage.setItem('pp_' + key, JSON.stringify(val)); } catch {}
  }

  // ── State ─────────────────────────────────────────────────
  let cart     = load('cart',     []);   // [{id, qty}]
  let wishlist = load('wishlist', []);   // [id, ...]
  let liked    = load('liked',    []);   // [id, ...]
  let phone    = load('phone',    null); // '98XXXXXXXX' or null

  // ── Cart ──────────────────────────────────────────────────
  function cartAdd(productId, qty = 1) {
    const existing = cart.find(i => i.id === productId);
    if (existing) existing.qty += qty;
    else cart.push({ id: productId, qty });
    save('cart', cart);
    updateNavBadges();
  }
  function cartRemove(productId) {
    cart = cart.filter(i => i.id !== productId);
    save('cart', cart);
    updateNavBadges();
  }
  function cartQty(productId, qty) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    if (qty < 1) { cartRemove(productId); return; }
    item.qty = qty;
    save('cart', cart);
  }
  function cartClear() { cart = []; save('cart', cart); updateNavBadges(); }
  function getCart()   { return cart.slice(); }
  function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }
  function cartTotal() {
    return cart.reduce((s, i) => {
      const p = PRODUCTS.find(x => x.id === i.id);
      return s + (p ? p.price * i.qty : 0);
    }, 0);
  }
  function isInCart(productId) { return cart.some(i => i.id === productId); }

  // ── Wishlist ───────────────────────────────────────────────
  function toggleWishlist(productId) {
    if (wishlist.includes(productId)) wishlist = wishlist.filter(i => i !== productId);
    else wishlist.push(productId);
    save('wishlist', wishlist);
    updateNavBadges();
    return wishlist.includes(productId);
  }
  function isWishlisted(productId) { return wishlist.includes(productId); }
  function getWishlist()           { return wishlist.slice(); }

  // ── Liked ─────────────────────────────────────────────────
  function toggleLike(productId) {
    if (liked.includes(productId)) liked = liked.filter(i => i !== productId);
    else liked.push(productId);
    save('liked', liked);
    return liked.includes(productId);
  }
  function isLiked(productId) { return liked.includes(productId); }
  function getLiked()         { return liked.slice(); }

  // ── Phone ─────────────────────────────────────────────────
  function getPhone()    { return phone; }
  function hasPhone()    { return !!phone; }
  function setPhone(num) { phone = num; save('phone', num); }

  // ── Nav badge updater ─────────────────────────────────────
  function updateNavBadges() {
    const cartBadge = document.getElementById('cartBadge');
    const wishBadge = document.getElementById('wishBadge');
    if (cartBadge) {
      const c = cartCount();
      cartBadge.textContent = c;
      cartBadge.classList.toggle('show', c > 0);
    }
    if (wishBadge) {
      const w = wishlist.length;
      wishBadge.textContent = w;
      wishBadge.classList.toggle('show', w > 0);
    }
  }

  return {
    cartAdd, cartRemove, cartQty, cartClear, getCart, cartCount, cartTotal, isInCart,
    toggleWishlist, isWishlisted, getWishlist,
    toggleLike, isLiked, getLiked,
    getPhone, hasPhone, setPhone,
    updateNavBadges,
  };
})();
