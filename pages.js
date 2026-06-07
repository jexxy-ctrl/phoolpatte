// ============================================================
//  PhoolPatte — PAGES.JS
//  All page render functions
// ============================================================

// ── PAGE: HOME ────────────────────────────────────────────────
function renderHome() {
  renderNavbar('home');
  document.getElementById('app').innerHTML = `

    <!-- HERO -->
    <section class="hero">
      <div class="hero-blob b1"></div>
      <div class="hero-blob b2"></div>
      <div class="hero-txt">
        <div class="hero-badge">🌺 Delhi NCR's Premium Phool Shop</div>
        <h1 class="hero-h1">Every Ritual Deserves<br><em>Real Flowers</em></h1>
        <p class="hero-sub">From <strong>Jaimala & Varmala</strong> to <strong>Phoolon ki Chadar</strong>, temple flowers, flower jewellery & full function decoration — delivered fresh across Delhi NCR.</p>
        <div class="hero-btns">
          <button class="btn-primary" onclick="Router.go('catalog')">🌸 Browse Catalog</button>
          <button class="btn-outline" onclick="openWA('Namaste PhoolPatte! Main apne function ke liye flowers chahiye.')">📲 WhatsApp Us</button>
        </div>
        <div class="hero-trust">
          <div class="trust-i">⭐ 4.9 Rated</div>
          <div class="trust-i" style="color:var(--border)">|</div>
          <div class="trust-i">🚚 Same Day Delivery</div>
          <div class="trust-i" style="color:var(--border)">|</div>
          <div class="trust-i">💐 500+ Happy Families</div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="flower-blob">🌺
          <div class="fb-badge b1">🌿 Farm Fresh</div>
          <div class="fb-badge b2">💒 Wedding Special</div>
          <div class="fb-badge b3">✨ Delhi NCR</div>
        </div>
      </div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee">
      <div class="marquee-track">
        ${[...Array(2)].map(() => `
          <span>🌸 Jaimala</span><span class="dot">✦</span>
          <span>🌺 Varmala</span><span class="dot">✦</span>
          <span>🛕 Genda Phool</span><span class="dot">✦</span>
          <span>💎 Flower Jewellery</span><span class="dot">✦</span>
          <span>🌼 Phoolon ki Chadar</span><span class="dot">✦</span>
          <span>🎊 Haldi Décor</span><span class="dot">✦</span>
          <span>🌿 Mehendi Décor</span><span class="dot">✦</span>
          <span>🚚 Delhi NCR</span><span class="dot">✦</span>
        `).join('')}
      </div>
    </div>

    <!-- CATEGORIES -->
    <section style="background:#fff" id="catsSection">
      <div class="container">
        <div class="sec-hdr fu">
          <div class="sec-label">🌸 Browse by Category</div>
          <h2 class="sec-title">Our <em>Collections</em></h2>
          <p class="sec-sub">Tap any category to explore all products</p>
        </div>
        <div class="cat-grid fu" id="catGrid"></div>
      </div>
    </section>

    <!-- OCCASIONS -->
    <section class="occasions" id="occasions">
      <div class="container occ-inner">
        <div class="sec-label">🎊 We Serve All Functions</div>
        <h2 class="sec-title">Which Function Is Yours?</h2>
        <p class="sec-sub">Flowers & decoration for every ritual, every ceremony</p>
        <div class="occ-grid" id="occGrid"></div>
      </div>
    </section>

    <!-- WHY US -->
    <section style="background:#fff">
      <div class="container">
        <div class="sec-hdr fu">
          <div class="sec-label">💎 Why PhoolPatte</div>
          <h2 class="sec-title">Flowers You Can <em>Trust</em></h2>
        </div>
        <div class="why-grid fu">
          <div class="why-card"><div class="why-icon">🌿</div><div class="why-title">Farm Fresh Daily</div><div class="why-desc">Sourced every morning from Ghazipur Phool Mandi — never stored overnight</div></div>
          <div class="why-card"><div class="why-icon">🚚</div><div class="why-title">All Delhi NCR</div><div class="why-desc">Noida, Gurgaon, Faridabad, Ghaziabad, Greater Noida & entire Delhi</div></div>
          <div class="why-card"><div class="why-icon">⚡</div><div class="why-title">Same Day Delivery</div><div class="why-desc">Order by 6 PM and receive your flowers the same evening</div></div>
          <div class="why-card"><div class="why-icon">💬</div><div class="why-title">Custom Orders</div><div class="why-desc">Specific colors, flowers, sizes — made exactly how you want it</div></div>
          <div class="why-card"><div class="why-icon">💰</div><div class="why-title">Best Prices</div><div class="why-desc">Direct from mandi — no middlemen, honest pricing for every budget</div></div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section style="background:var(--cream)">
      <div class="container">
        <div class="sec-hdr fu">
          <div class="sec-label">💌 Customer Love</div>
          <h2 class="sec-title">What Families <em>Say</em></h2>
        </div>
        <div class="testi-grid fu" id="testiGrid"></div>
      </div>
    </section>

    <!-- DELIVERY -->
    <section style="background:#fff;text-align:center" id="delivery">
      <div class="container" style="max-width:680px">
        <div class="sec-label" style="justify-content:center">🚚 Delivery Zones</div>
        <h2 class="sec-title fu">We Deliver Across <em>Delhi NCR</em></h2>
        <p class="sec-sub fu" style="margin:.5rem auto 0">Same-day delivery for most areas. Order before 6 PM for evening delivery.</p>
        <div class="area-pills fu" id="areaPills"></div>
        <button class="btn-primary" style="margin:0 auto" onclick="openWA('Namaste! Kya aap mere area mein deliver karte ho? Mera location: ')">📲 Check My Area</button>
      </div>
    </section>

    ${renderFooterHTML()}
    <button class="wa-float" onclick="openWA('Namaste PhoolPatte! Main order karna chahta/chahti hoon.')" title="Order on WhatsApp">📲</button>
  `;

  // Fill dynamic parts
  document.getElementById('catGrid').innerHTML = CATEGORIES.map(c => `
    <div class="cat-card" onclick="Router.go('category', {catId:'${c.id}'})">
      <div class="cat-img"><img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='${fallbackImg()}'"/></div>
      <div class="cat-body">
        <div class="cat-name">${c.name}</div>
        <div class="cat-sub">${c.desc}</div>
        <div class="cat-link">Browse all →</div>
      </div>
    </div>`).join('');

  document.getElementById('occGrid').innerHTML = OCCASIONS.map(o => `
    <div class="occ-pill" onclick="openWA('${o.msg}')">
      ${o.icon} ${o.label}
    </div>`).join('');

  document.getElementById('testiGrid').innerHTML = TESTIMONIALS.map(t => `
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <div class="testi-text">${t.text}</div>
      <div class="testi-author">
        <div class="testi-av" style="background:${t.bg}">${t.avatar}</div>
        <div><div class="testi-name">${t.name}</div><div class="testi-loc">📍 ${t.loc}</div></div>
      </div>
    </div>`).join('');

  document.getElementById('areaPills').innerHTML = DELIVERY_AREAS.map(a => `<span class="area-pill">${a}</span>`).join('');

  initScrollReveal();
}

// ── PAGE: CATALOG (all products + filter tabs) ────────────────
function renderCatalog(opts = {}) {
  renderNavbar('catalog');
  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh">
      <section style="background:var(--cream)">
        <div class="container">
          <div class="breadcrumb">
            <a onclick="Router.go('home')">Home</a>
            <span>›</span>
            <span>Catalog</span>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;margin-bottom:1.8rem">
            <div>
              <div class="sec-label">🌺 Full Catalog</div>
              <h2 class="sec-title">All <em>Products</em></h2>
            </div>
            <div style="font-size:.82rem;color:var(--light)" id="prodCount"></div>
          </div>
          <div class="filter-tabs" id="filterTabs"></div>
          <div class="prod-grid" id="prodGrid"></div>
        </div>
      </section>
      ${renderFooterHTML()}
      <button class="wa-float" onclick="openWA('Namaste PhoolPatte! Main catalog dekh raha/rahi hoon.')">📲</button>
    </div>`;

  const tabs = [{ id: 'all', label: 'All' }, ...CATEGORIES.map(c => ({ id: c.id, label: c.name }))];
  let active = opts.catId || 'all';

  function renderTabs() {
    document.getElementById('filterTabs').innerHTML = tabs.map(t => `
      <button class="ftab${t.id === active ? ' active' : ''}" onclick="catalogFilter('${t.id}')">${t.label}</button>`).join('');
  }

  window.catalogFilter = function(id) {
    active = id;
    renderTabs();
    renderProducts();
  };

  function renderProducts() {
    const list = active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === active);
    document.getElementById('prodCount').textContent = `${list.length} product${list.length !== 1 ? 's' : ''}`;
    document.getElementById('prodGrid').innerHTML = list.length
      ? list.map(productCardHTML).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--light)">No products in this category yet.</div>`;
  }

  renderTabs();
  renderProducts();
}

// ── PAGE: CATEGORY DETAIL ──────────────────────────────────────
function renderCategory(opts = {}) {
  const cat = CATEGORIES.find(c => c.id === opts.catId);
  if (!cat) { Router.go('catalog'); return; }
  const products = PRODUCTS.filter(p => p.cat === cat.id);
  renderNavbar('catalog');

  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh">

      <!-- HERO BANNER -->
      <div class="cat-page-hero">
        <img src="${cat.img}" alt="${cat.name}" onerror="this.src='${fallbackImg()}'"/>
        <div class="cat-page-hero-txt">
          <div class="hindi">${cat.hindi}</div>
          <h1>${cat.icon} ${cat.name}</h1>
          <p>${cat.desc}</p>
        </div>
      </div>

      <section style="background:var(--cream)">
        <div class="container">
          <div class="breadcrumb">
            <a onclick="Router.go('home')">Home</a><span>›</span>
            <a onclick="Router.go('catalog')">Catalog</a><span>›</span>
            <span>${cat.name}</span>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.8rem">
            <div>
              <div class="sec-label">${cat.icon} ${products.length} Products</div>
              <h2 class="sec-title">All <em>${cat.name}</em></h2>
            </div>
            <button class="btn-outline" onclick="openWA('Main ${cat.name} ke baare mein enquiry karna chahta/chahti hoon. Please share options.')">
              📲 Custom Order
            </button>
          </div>

          <div class="prod-grid" id="catProdGrid"></div>
        </div>
      </section>

      <!-- RELATED CATEGORIES -->
      <section style="background:#fff">
        <div class="container">
          <div class="sec-hdr">
            <div class="sec-label">🌸 More Collections</div>
            <h2 class="sec-title">You Might Also <em>Like</em></h2>
          </div>
          <div class="cat-grid" id="relatedCats"></div>
        </div>
      </section>

      ${renderFooterHTML()}
      <button class="wa-float" onclick="openWA('Namaste! Main ${cat.name} order karna chahta/chahti hoon.')">📲</button>
    </div>`;

  document.getElementById('catProdGrid').innerHTML = products.length
    ? products.map(productCardHTML).join('')
    : `<div style="text-align:center;padding:3rem;color:var(--light);grid-column:1/-1">No products yet — <a style="color:var(--saffron);cursor:pointer" onclick="openWA('Main ${cat.name} ke liye enquiry karna chahta/chahti hoon.')">WhatsApp us for custom orders!</a></div>`;

  document.getElementById('relatedCats').innerHTML = CATEGORIES
    .filter(c => c.id !== cat.id).slice(0, 4).map(c => `
      <div class="cat-card" onclick="Router.go('category', {catId:'${c.id}'})">
        <div class="cat-img"><img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='${fallbackImg()}'"/></div>
        <div class="cat-body">
          <div class="cat-name">${c.name}</div>
          <div class="cat-link">Browse →</div>
        </div>
      </div>`).join('');

  initScrollReveal();
}

// ── PAGE: CART ─────────────────────────────────────────────────
function renderCart() {
  renderNavbar('cart');
  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh;background:var(--cream)">
      <section>
        <div class="container" style="max-width:700px">
          <div class="breadcrumb">
            <a onclick="Router.go('home')">Home</a><span>›</span><span>Cart</span>
          </div>
          <div class="sec-label">🛒 Your Cart</div>
          <h2 class="sec-title" style="margin-bottom:1.8rem">Review Your <em>Order</em></h2>
          <div id="cartList"></div>
          <div id="cartSummary"></div>
        </div>
      </section>
    </div>`;
  renderCartContent();
}

function renderCartContent() {
  const cart = State.getCart();
  const listEl    = document.getElementById('cartList');
  const summaryEl = document.getElementById('cartSummary');
  if (!listEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty">
        <div class="ce-icon">🛒</div>
        <p>Your cart is empty!</p>
        <button class="btn-primary" style="margin:1.5rem auto 0" onclick="Router.go('catalog')">🌸 Browse Products</button>
      </div>`;
    summaryEl.innerHTML = '';
    return;
  }

  listEl.innerHTML = `<div class="cart-list">${cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    if (!p) return '';
    const subtotal = p.price * item.qty;
    return `
      <div class="cart-item" data-cart-id="${p.id}">
        <img src="${p.img}" alt="${p.name}" onerror="this.src='${fallbackImg()}'"/>
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">${fmt(p.price)}${p.unit ? ` / ${p.unit}` : ''}</div>
          <div style="font-size:.78rem;color:var(--light);margin-top:.2rem">Subtotal: ${fmt(subtotal)}</div>
        </div>
        <div class="ci-actions">
          <div class="qty-ctrl">
            <button onclick="cartUpdate(${p.id}, ${item.qty - 1})">−</button>
            <span>${item.qty}</span>
            <button onclick="cartUpdate(${p.id}, ${item.qty + 1})">+</button>
          </div>
          <button class="ci-remove" onclick="cartUpdate(${p.id}, 0)" title="Remove">🗑️</button>
        </div>
      </div>`;
  }).join('')}</div>`;

  const total = State.cartTotal();
  const delivery = total > 5000 ? 0 : 200;

  summaryEl.innerHTML = `
    <div class="cart-summary-card">
      <div class="cs-row"><span class="cs-label">Subtotal</span><span class="cs-val">${fmt(total)}</span></div>
      <div class="cs-row"><span class="cs-label">Delivery</span><span class="cs-val">${delivery === 0 ? '🎉 Free' : fmt(delivery)}</span></div>
      ${delivery > 0 ? `<div style="font-size:.74rem;color:var(--green);padding:.3rem 0">Add ${fmt(5000 - total)} more for free delivery!</div>` : ''}
      <div class="cs-row"><span class="cs-total-label">Total</span><span class="cs-total-val">${fmt(total + delivery)}</span></div>
    </div>
    <button class="btn-primary btn-full" style="margin-bottom:.7rem" onclick="Router.go('purchase', {fromCart: true})">
      🛒 Proceed to Order
    </button>
    <button class="btn-outline btn-full" onclick="Router.go('catalog')">← Continue Shopping</button>
    <p class="wa-note" style="margin-top:1rem">📲 You'll be redirected to WhatsApp to confirm your order</p>`;
}

window.cartUpdate = function(productId, qty) {
  if (qty < 1) State.cartRemove(productId);
  else State.cartQty(productId, qty);
  renderCartContent();
  State.updateNavBadges();
};

// ── PAGE: WISHLIST & LIKED ─────────────────────────────────────
function renderWishlist(opts = {}) {
  renderNavbar();
  const activeTab = opts.tab || 'wishlist';

  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh;background:var(--cream)">
      <section>
        <div class="container" style="max-width:900px">
          <div class="breadcrumb">
            <a onclick="Router.go('home')">Home</a><span>›</span><span>Saved Items</span>
          </div>
          <h2 class="sec-title" style="margin-bottom:1.2rem">Your <em>Saved Items</em></h2>
          <div class="wl-tabs">
            <button class="wl-tab ${activeTab==='wishlist'?'active':''}" onclick="Router.go('wishlist',{tab:'wishlist'})">
              🔖 Wishlist
              <span class="wl-count-badge">${State.getWishlist().length}</span>
            </button>
            <button class="wl-tab ${activeTab==='liked'?'active':''}" onclick="Router.go('wishlist',{tab:'liked'})">
              ❤️ Liked
              <span class="wl-count-badge">${State.getLiked().length}</span>
            </button>
          </div>
          <div id="wlGrid"></div>
        </div>
      </section>
    </div>`;

  const ids = activeTab === 'wishlist' ? State.getWishlist() : State.getLiked();
  const list = ids.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

  if (!list.length) {
    document.getElementById('wlGrid').innerHTML = `
      <div class="empty-state">
        <div class="icon">${activeTab === 'wishlist' ? '🔖' : '❤️'}</div>
        <h3>Nothing saved yet</h3>
        <p>${activeTab === 'wishlist' ? 'Save products to your wishlist' : 'Like products'} to find them easily later.</p>
        <button class="btn-primary" style="margin:1.5rem auto 0" onclick="Router.go('catalog')">🌸 Browse Products</button>
      </div>`;
  } else {
    document.getElementById('wlGrid').innerHTML = `<div class="prod-grid">${list.map(productCardHTML).join('')}</div>`;
  }
}

// ── PAGE: PURCHASE (Order Form) ────────────────────────────────
function renderPurchase(opts = {}) {
  renderNavbar();
  const fromCart  = opts.fromCart || false;
  const cartItems = fromCart ? State.getCart() : null;
  const singleP   = opts.product || null;
  const singleQty = opts.qty || 1;

  // Build item list for display
  let items = [];
  if (fromCart) {
    items = State.getCart().map(i => {
      const p = PRODUCTS.find(x => x.id === i.id);
      return p ? { product: p, qty: i.qty } : null;
    }).filter(Boolean);
  } else if (singleP) {
    items = [{ product: singleP, qty: singleQty }];
  }

  if (!items.length) { Router.go('catalog'); return; }

  const subtotal  = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  const delivery  = subtotal > 5000 ? 0 : 200;
  const total     = subtotal + delivery;

  // Set today as min date
  const today = new Date().toISOString().split('T')[0];

  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh;background:var(--cream)">
      <section>
        <div class="page-inner" style="padding-top:2rem">
          <button class="page-back" onclick="history.back()">← Back</button>
          <div class="page-title">Complete Your Order</div>
          <p class="page-sub">Fill your details — we'll send your order to WhatsApp 📲</p>

          <!-- ORDER ITEMS -->
          <div style="margin-bottom:1.8rem">
            ${items.map(i => `
              <div class="order-summary-box">
                <img src="${i.product.img}" alt="${i.product.name}" onerror="this.src='${fallbackImg()}'"/>
                <div>
                  <div class="osb-name">${i.product.name}</div>
                  <div class="osb-price">${fmt(i.product.price)}${i.product.unit ? ` / ${i.product.unit}` : ''}</div>
                  <div class="osb-qty">Qty: ${i.qty} &nbsp;·&nbsp; Subtotal: ${fmt(i.product.price * i.qty)}</div>
                </div>
              </div>`).join('')}
          </div>

          <!-- CUSTOMER DETAILS -->
          <div class="form-card">
            <h3>📋 Your Details</h3>
            <div class="form-row">
              <div class="form-group"><label>Full Name *</label><input id="fname" type="text" placeholder="Aapka naam"/></div>
              <div class="form-group"><label>WhatsApp Number *</label><input id="fphone" type="tel" placeholder="10-digit number" maxlength="10" value="${State.getPhone() || ''}"/></div>
            </div>
            <div class="form-row full">
              <div class="form-group"><label>Delivery Address *</label><input id="faddr" type="text" placeholder="Full address with area & city"/></div>
            </div>
          </div>

          <!-- DELIVERY DETAILS -->
          <div class="form-card">
            <h3>📅 Delivery Details</h3>
            <div class="form-row">
              <div class="form-group"><label>Delivery Date *</label><input id="fdate" type="date" min="${today}" value="${today}"/></div>
              <div class="form-group"><label>Preferred Time</label>
                <select id="ftime">
                  <option>Morning (6 AM – 10 AM)</option>
                  <option>Afternoon (10 AM – 2 PM)</option>
                  <option selected>Evening (4 PM – 8 PM)</option>
                  <option>Night (8 PM – 11 PM)</option>
                </select>
              </div>
            </div>
            <div class="form-row full">
              <div class="form-group">
                <label>Special Instructions / Customization</label>
                <textarea id="fnotes" placeholder="E.g. specific flower color, size, function date, anything special..."></textarea>
              </div>
            </div>
          </div>

          <!-- TOTAL -->
          <div class="purchase-total-bar">
            <div>
              <div class="ptb-label">Subtotal</div>
              <div style="font-size:.78rem;color:var(--light);margin-top:.2rem">Delivery: ${delivery === 0 ? 'FREE 🎉' : fmt(delivery)}</div>
            </div>
            <div class="ptb-amount">${fmt(total)}</div>
          </div>

          <button class="btn-wa-lg" onclick="confirmOrder()">📲 Send Order on WhatsApp</button>
          <p class="wa-note">📱 WhatsApp will open with your complete order details pre-filled</p>
        </div>
      </section>
    </div>`;

  // Attach confirm logic
  window.confirmOrder = function() {
    const name  = document.getElementById('fname').value.trim();
    const phone = document.getElementById('fphone').value.trim().replace(/\D/g,'');
    const addr  = document.getElementById('faddr').value.trim();
    const date  = document.getElementById('fdate').value;
    const time  = document.getElementById('ftime').value;
    const notes = document.getElementById('fnotes').value.trim();

    if (!name || !phone || !addr) {
      alert('Please fill in your name, WhatsApp number and delivery address.');
      return;
    }
    if (phone.length < 10) { alert('Please enter a valid 10-digit WhatsApp number.'); return; }

    State.setPhone(phone);

    const itemLines = items.map(i =>
      `  • ${i.product.name} × ${i.qty} = ${fmt(i.product.price * i.qty)}`
    ).join('\n');

    const msg =
`🌸 *New Order — PhoolPatte*

📦 *Items:*
${itemLines}

💰 *Subtotal:* ${fmt(subtotal)}
🚚 *Delivery:* ${delivery === 0 ? 'FREE' : fmt(delivery)}
💳 *Total:* ${fmt(total)}

👤 *Name:* ${name}
📱 *WhatsApp:* ${phone}
📍 *Address:* ${addr}
📅 *Delivery Date:* ${date}
⏰ *Time Slot:* ${time}${notes ? `\n📝 *Instructions:* ${notes}` : ''}

Please confirm availability and slot. Thank you! 🙏`;

    if (fromCart) State.cartClear();
    openWA(msg);
  };
}

// ── PAGE: DELIVERY ─────────────────────────────────────────────
function renderDelivery() {
  renderNavbar('delivery');
  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh;background:#fff">
      <section style="text-align:center">
        <div class="container" style="max-width:680px">
          <div class="breadcrumb" style="justify-content:center"><a onclick="Router.go('home')">Home</a><span>›</span><span>Delivery</span></div>
          <div class="sec-label" style="justify-content:center">🚚 Delivery Info</div>
          <h2 class="sec-title fu">We Deliver Across <em>Delhi NCR</em></h2>
          <p class="sec-sub fu" style="margin:.5rem auto 1.5rem">Same-day delivery available for most areas. Order before 6 PM for evening delivery. Order before 10 PM for next morning delivery.</p>
          <div class="area-pills fu" id="areaPillsDel"></div>
          <div style="background:var(--cream);border-radius:var(--radius-lg);padding:1.5rem;margin:1.5rem 0;text-align:left" class="fu">
            <div class="sec-label">📋 Delivery Policy</div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:.7rem;margin-top:.8rem">
              <li style="font-size:.88rem;color:var(--mid);display:flex;gap:8px"><span>⚡</span> <span><strong>Same Day:</strong> Order before 6 PM — delivery by 10 PM same day</span></li>
              <li style="font-size:.88rem;color:var(--mid);display:flex;gap:8px"><span>🌅</span> <span><strong>Next Morning:</strong> Order by 10 PM — delivered by 8 AM next day</span></li>
              <li style="font-size:.88rem;color:var(--mid);display:flex;gap:8px"><span>🚚</span> <span><strong>Free Delivery:</strong> On orders above ₹5,000</span></li>
              <li style="font-size:.88rem;color:var(--mid);display:flex;gap:8px"><span>💬</span> <span><strong>Custom Timing:</strong> WhatsApp us for specific time slot bookings for your function</span></li>
            </ul>
          </div>
          <button class="btn-primary" style="margin:0 auto" onclick="openWA('Namaste! Kya aap mere area mein deliver karte ho? Mera location: ')">📲 Check My Area</button>
        </div>
      </section>
      ${renderFooterHTML()}
    </div>`;

  document.getElementById('areaPillsDel').innerHTML = DELIVERY_AREAS.map(a => `<span class="area-pill">${a}</span>`).join('');
  initScrollReveal();
}

// ── OCCASIONS PAGE ─────────────────────────────────────────────
function renderOccasions() {
  renderNavbar('occasions');
  document.getElementById('app').innerHTML = `
    <div style="padding-top:62px;min-height:100vh">
      <section class="occasions" style="min-height:50vh;display:flex;align-items:center">
        <div class="container occ-inner" style="width:100%">
          <div class="sec-label">🎊 All Functions</div>
          <h2 class="sec-title">We Serve Every <em>Occasion</em></h2>
          <p class="sec-sub">Select your function and we'll guide you on WhatsApp</p>
          <div class="occ-grid" style="margin-top:2.5rem">
            ${OCCASIONS.map(o => `<div class="occ-pill" onclick="openWA('${o.msg}')">${o.icon} ${o.label}</div>`).join('')}
          </div>
        </div>
      </section>
      <section style="background:#fff">
        <div class="container">
          <div class="sec-hdr fu">
            <div class="sec-label">🌸 Browse By Category</div>
            <h2 class="sec-title">Shop Our <em>Collections</em></h2>
          </div>
          <div class="cat-grid fu">
            ${CATEGORIES.map(c => `
              <div class="cat-card" onclick="Router.go('category', {catId:'${c.id}'})">
                <div class="cat-img"><img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.src='${fallbackImg()}'"/></div>
                <div class="cat-body"><div class="cat-name">${c.name}</div><div class="cat-link">Browse →</div></div>
              </div>`).join('')}
          </div>
        </div>
      </section>
      ${renderFooterHTML()}
    </div>`;
  initScrollReveal();
}

// ── FOOTER HTML ────────────────────────────────────────────────
function renderFooterHTML() {
  return `
    <footer>
      <div class="container footer-grid">
        <div>
          <div class="logo" style="cursor:default">
            <div class="logo-icon">🌸</div>
            <span class="logo-name" style="color:#fff">Phool<span>Patte</span></span>
          </div>
          <p class="footer-tagline">Delhi NCR's trusted flower shop for every function — Jaimala to Phoolon ki Chadar, we make your rituals beautiful.</p>
          <button class="btn-wa" style="margin-top:1rem" onclick="openWA('Hello PhoolPatte!')">📲 WhatsApp Us</button>
        </div>
        <div class="footer-col">
          <h4>Collections</h4>
          <ul>
            ${CATEGORIES.map(c => `<li><a onclick="Router.go('category',{catId:'${c.id}'})">${c.name}</a></li>`).join('')}
          </ul>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a onclick="Router.go('catalog')">Full Catalog</a></li>
            <li><a onclick="Router.go('wishlist')">Wishlist</a></li>
            <li><a onclick="Router.go('cart')">My Cart</a></li>
            <li><a onclick="Router.go('delivery')">Delivery Info</a></li>
            <li><a onclick="Router.go('occasions')">Occasions</a></li>
            <li><a onclick="openWA('Namaste!')">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">© 2025 PhoolPatte. Made with 🌸 for every function in Delhi NCR.</div>
    </footer>`;
}
