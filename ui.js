// ============================================================
//  PhoolPatte — UI.JS
//  Shared components: Navbar, PhoneGate, Toast, ProductModal
// ============================================================

// ── TOAST ─────────────────────────────────────────────────────
const Toast = (() => {
  let el;
  function init() {
    el = document.createElement('div');
    el.id = 'toast';
    el.style.cssText = `
      position:fixed;bottom:5rem;left:50%;transform:translateX(-50%) translateY(20px);
      background:var(--dark);color:#fff;border-radius:50px;padding:.65rem 1.4rem;
      font-size:.84rem;font-weight:600;white-space:nowrap;z-index:1000;
      opacity:0;transition:all .28s;pointer-events:none;
      display:flex;align-items:center;gap:7px;box-shadow:0 6px 24px rgba(0,0,0,.25);
    `;
    document.body.appendChild(el);
  }
  let timer;
  function show(msg, icon = '✅') {
    if (!el) init();
    el.innerHTML = `${icon} ${msg}`;
    el.style.opacity = '1';
    el.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(timer);
    timer = setTimeout(hide, 2600);
  }
  function hide() {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateX(-50%) translateY(20px)';
  }
  return { show };
})();

// ── PHONE GATE ────────────────────────────────────────────────
// Shows a modal asking for phone number before any action
// Callback is called with the phone number once confirmed
const PhoneGate = (() => {
  let pendingCallback = null;

  function render() {
    if (document.getElementById('gateOverlay')) return;
    document.body.insertAdjacentHTML('beforeend', `
      <div class="gate-overlay" id="gateOverlay">
        <div class="gate-box">
          <div class="gate-icon">📱</div>
          <div class="gate-title">Just one step!</div>
          <p class="gate-sub">Enter your WhatsApp number to save items, add to cart or like products. We'll use this only for your orders.</p>
          <input class="gate-input" id="gateInput" type="tel" placeholder="Enter 10-digit WhatsApp number" maxlength="10"/>
          <button class="btn-primary btn-full" id="gateConfirm" onclick="PhoneGate.confirm()">✅ Continue</button>
          <div class="gate-skip" onclick="PhoneGate.skip()">Skip for now</div>
          <p class="gate-privacy">🔒 Your number is saved only on your device and never shared.</p>
        </div>
      </div>`);

    // allow Enter key
    document.getElementById('gateInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') PhoneGate.confirm();
    });
  }

  function ask(callback) {
    if (State.hasPhone()) { callback(State.getPhone()); return; }
    render();
    pendingCallback = callback;
    document.getElementById('gateOverlay').classList.add('open');
    setTimeout(() => document.getElementById('gateInput')?.focus(), 200);
  }

  function confirm() {
    const input = document.getElementById('gateInput');
    const val = input.value.trim().replace(/\D/g, '');
    if (val.length < 10) {
      input.style.borderColor = 'var(--rose)';
      input.placeholder = 'Please enter a valid 10-digit number';
      return;
    }
    State.setPhone(val);
    close();
    if (pendingCallback) { pendingCallback(val); pendingCallback = null; }
  }

  function skip() {
    close();
    if (pendingCallback) { pendingCallback(null); pendingCallback = null; }
  }

  function close() {
    const el = document.getElementById('gateOverlay');
    if (el) el.classList.remove('open');
  }

  return { ask, confirm, skip };
})();

// ── NAVBAR ────────────────────────────────────────────────────
function renderNavbar(activePage = 'home') {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.innerHTML = `
    <div class="logo" onclick="Router.go('home')">
      <div class="logo-icon">🌸</div>
      <span class="logo-name">Phool<span>Patte</span></span>
    </div>
    <ul class="nav-links">
      <li><a onclick="Router.go('home')"    class="${activePage==='home'?'active':''}">Home</a></li>
      <li><a onclick="Router.go('catalog')" class="${activePage==='catalog'?'active':''}">Catalog</a></li>
      <li><a onclick="Router.go('occasions')">Occasions</a></li>
      <li><a onclick="Router.go('delivery')">Delivery</a></li>
    </ul>
    <div class="nav-right">
      <button class="nav-icon-btn" onclick="Router.go('wishlist')" title="Wishlist & Likes">
        🤍
        <span class="nav-badge" id="wishBadge"></span>
      </button>
      <button class="nav-icon-btn" onclick="Router.go('cart')" title="Cart">
        🛒
        <span class="nav-badge" id="cartBadge"></span>
      </button>
      <button class="btn-wa" onclick="openWA('Namaste PhoolPatte! Main order karna chahta/chahti hoon.')">📲 Order Now</button>
    </div>`;
  State.updateNavBadges();
}

// ── PRODUCT MODAL ──────────────────────────────────────────────
const ProductModal = (() => {
  let currentProduct = null;
  let qty = 1;

  function render() {
    if (document.getElementById('modalOverlay')) return;
    document.body.insertAdjacentHTML('beforeend', `
      <div class="modal-overlay" id="modalOverlay" onclick="ProductModal.handleOverlayClick(event)">
        <div class="modal" id="productModal">
          <button class="modal-close" onclick="ProductModal.close()">✕</button>
          <div class="modal-img">
            <img id="mImg" src="" alt=""/>
            <div class="modal-img-tag" id="mTag"></div>
          </div>
          <div class="modal-info">
            <div class="modal-cat"  id="mCat"></div>
            <div class="modal-name" id="mName"></div>
            <div class="modal-price-row">
              <div class="modal-price" id="mPrice"></div>
              <div class="modal-orig"  id="mOrig"></div>
              <div class="modal-disc"  id="mDisc"></div>
            </div>
            <div class="modal-desc"     id="mDesc"></div>
            <div class="modal-includes" id="mIncludes"></div>
            <div class="modal-qty-row">
              <label>Qty</label>
              <div class="qty-ctrl">
                <button onclick="ProductModal.changeQty(-1)">−</button>
                <span id="mQty">1</span>
                <button onclick="ProductModal.changeQty(1)">+</button>
              </div>
            </div>
            <div class="modal-like-row">
              <button class="modal-like-btn" id="mLikeBtn" onclick="ProductModal.toggleLike()">🤍 Like</button>
              <button class="modal-wish-btn" id="mWishBtn" onclick="ProductModal.toggleWish()">🔖 Wishlist</button>
            </div>
            <div class="modal-action-row">
              <button class="btn-primary btn-full" onclick="ProductModal.addToCart()">🛒 Add to Cart</button>
              <button class="btn-wa-lg"            onclick="ProductModal.buyNow()">📲 Order via WhatsApp</button>
            </div>
          </div>
        </div>
      </div>`);
  }

  function open(productId) {
    render();
    const p = PRODUCTS.find(x => x.id === productId);
    if (!p) return;
    currentProduct = p;
    qty = 1;

    const cat = CATEGORIES.find(c => c.id === p.cat);
    document.getElementById('mImg').src           = p.img;
    document.getElementById('mImg').onerror       = function(){ this.src = fallbackImg(); };
    document.getElementById('mTag').textContent   = p.tag;
    document.getElementById('mCat').textContent   = cat ? cat.name : '';
    document.getElementById('mName').textContent  = p.name;
    document.getElementById('mPrice').textContent = fmt(p.price) + (p.unit ? ` / ${p.unit}` : '');
    document.getElementById('mOrig').textContent  = fmt(p.orig);
    document.getElementById('mDisc').textContent  = discPct(p.price, p.orig) + '% off';
    document.getElementById('mDesc').textContent  = p.desc;
    document.getElementById('mQty').textContent   = 1;
    document.getElementById('mIncludes').innerHTML =
      `<h4>Includes</h4><ul>${p.includes.map(i => `<li>${i}</li>`).join('')}</ul>`;

    updateLikeWishBtns();
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function updateLikeWishBtns() {
    if (!currentProduct) return;
    const lb = document.getElementById('mLikeBtn');
    const wb = document.getElementById('mWishBtn');
    if (lb) { lb.classList.toggle('active', State.isLiked(currentProduct.id)); lb.textContent = State.isLiked(currentProduct.id) ? '❤️ Liked' : '🤍 Like'; }
    if (wb) { wb.classList.toggle('active', State.isWishlisted(currentProduct.id)); wb.textContent = State.isWishlisted(currentProduct.id) ? '🔖 Wishlisted' : '🔖 Wishlist'; }
  }

  function changeQty(d) {
    qty = Math.max(1, qty + d);
    document.getElementById('mQty').textContent = qty;
  }

  function toggleLike() {
    PhoneGate.ask(() => {
      const now = State.toggleLike(currentProduct.id);
      updateLikeWishBtns();
      refreshCardButtons(currentProduct.id);
      Toast.show(now ? 'Added to Liked!' : 'Removed from Liked', now ? '❤️' : '🤍');
    });
  }

  function toggleWish() {
    PhoneGate.ask(() => {
      const now = State.toggleWishlist(currentProduct.id);
      updateLikeWishBtns();
      refreshCardButtons(currentProduct.id);
      Toast.show(now ? 'Added to Wishlist!' : 'Removed from Wishlist', now ? '🔖' : '');
    });
  }

  function addToCart() {
    PhoneGate.ask(() => {
      State.cartAdd(currentProduct.id, qty);
      refreshCardButtons(currentProduct.id);
      Toast.show(`Added to cart!`, '🛒');
      close();
    });
  }

  function buyNow() {
    close();
    Router.go('purchase', { product: currentProduct, qty });
  }

  function handleOverlayClick(e) {
    if (e.target === document.getElementById('modalOverlay')) close();
  }

  function close() {
    const el = document.getElementById('modalOverlay');
    if (el) el.classList.remove('open');
    document.body.style.overflow = '';
    currentProduct = null;
  }

  return { open, close, changeQty, toggleLike, toggleWish, addToCart, buyNow, handleOverlayClick };
})();

// ── CARD BUTTON HELPERS ───────────────────────────────────────
// Refreshes like/wishlist/cart button states on product cards after toggle
function refreshCardButtons(productId) {
  const card = document.querySelector(`[data-product-id="${productId}"]`);
  if (!card) return;
  const likeBtn = card.querySelector('.like-btn');
  const wishBtn = card.querySelector('.wish-btn');
  const cartBtn = card.querySelector('.cart-btn');
  if (likeBtn) {
    likeBtn.classList.toggle('liked', State.isLiked(productId));
    likeBtn.title = State.isLiked(productId) ? 'Liked' : 'Like';
    likeBtn.textContent = State.isLiked(productId) ? '❤️' : '🤍';
  }
  if (wishBtn) {
    wishBtn.classList.toggle('wishlisted', State.isWishlisted(productId));
    wishBtn.title = State.isWishlisted(productId) ? 'Wishlisted' : 'Add to Wishlist';
    wishBtn.textContent = State.isWishlisted(productId) ? '🔖' : '🏷️';
  }
  if (cartBtn) {
    cartBtn.classList.toggle('in-cart', State.isInCart(productId));
  }
}

// ── PRODUCT CARD HTML ─────────────────────────────────────────
function productCardHTML(p) {
  const tagClass = { Popular:'hot', New:'new', Premium:'prem', 'Best Value':'value', Hot:'hot' }[p.tag] || 'hot';
  return `
    <div class="prod-card" data-product-id="${p.id}" onclick="ProductModal.open(${p.id})">
      <div class="prod-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='${fallbackImg()}'"/>
        <div class="prod-tag ${tagClass}">${p.tag}</div>
        <div class="card-actions" onclick="event.stopPropagation()">
          <button class="card-action-btn like-btn ${State.isLiked(p.id)?'liked':''}"
            onclick="cardLike(${p.id})" title="Like">
            ${State.isLiked(p.id) ? '❤️' : '🤍'}
          </button>
          <button class="card-action-btn wish-btn ${State.isWishlisted(p.id)?'wishlisted':''}"
            onclick="cardWish(${p.id})" title="Wishlist">
            ${State.isWishlisted(p.id) ? '🔖' : '🏷️'}
          </button>
        </div>
      </div>
      <div class="prod-body">
        <div class="prod-name">${p.name}</div>
        <div class="prod-desc">${p.desc}</div>
        <div class="prod-foot">
          <div>
            <div class="prod-price"><s>${fmt(p.orig)}</s> ${fmt(p.price)}</div>
            ${p.unit ? `<div class="prod-unit">${p.unit}</div>` : ''}
          </div>
          <button class="btn-wa cart-btn ${State.isInCart(p.id)?'in-cart':''}"
            onclick="event.stopPropagation(); cardCart(${p.id})"
            style="font-size:.75rem;padding:.38rem .85rem;">
            🛒
          </button>
        </div>
      </div>
    </div>`;
}

// Card-level action handlers
function cardLike(id) {
  PhoneGate.ask(() => {
    const now = State.toggleLike(id);
    refreshCardButtons(id);
    Toast.show(now ? 'Added to Liked!' : 'Removed from Liked', now ? '❤️' : '🤍');
  });
}
function cardWish(id) {
  PhoneGate.ask(() => {
    const now = State.toggleWishlist(id);
    refreshCardButtons(id);
    Toast.show(now ? 'Added to Wishlist!' : 'Removed from Wishlist', now ? '🔖' : '');
  });
}
function cardCart(id) {
  PhoneGate.ask(() => {
    State.cartAdd(id, 1);
    refreshCardButtons(id);
    Toast.show('Added to cart!', '🛒');
  });
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fu').forEach(el => obs.observe(el));
}
