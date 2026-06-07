// ============================================================
//  PhoolPatte — CENTRAL DATA FILE
//  Edit products, prices, images, and WhatsApp number HERE
// ============================================================

// ── YOUR WHATSAPP NUMBER ─────────────────────────────────────
// Format: country code + number, no spaces, no +
// Example India: 919876543210
const WA_NUMBER = '919999999999';

// ── CATEGORIES ───────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'jaimala',
    name: 'Jaimala & Varmala',
    hindi: 'जयमाला / वरमाला',
    icon: '💐',
    desc: 'Fresh rose, rajnigandha & orchid garlands for your wedding ceremony',
    img: 'blob:https://web.whatsapp.com/0962fdc5-9d3a-4a41-9f67-e8bbe8443ee7',
    color: '#FFF3E0',
  },
  {
    id: 'chadar',
    name: 'Phoolon ki Chadar',
    hindi: 'फूलों की चादर',
    icon: '🌺',
    desc: 'Bridal entry canopy — held over the bride as she arrives',
    img: 'https://floriwish.in/wp-content/uploads/2025/02/Proposal-Decoration-2.png',
    color: '#FCE4EC',
  },
  {
    id: 'jewellery',
    name: 'Flower Jewellery',
    hindi: 'फूल ज्वेलरी',
    icon: '💎',
    desc: 'Haar, bangles, maang tikka & earrings made from real flowers',
    img: 'https://floriwish.in/wp-content/uploads/2024/04/8-1-scaled.webp',
    color: '#E8F5E9',
  },
  {
    id: 'bulk',
    name: 'Loose Flowers',
    hindi: 'खुले फूल',
    icon: '🏵️',
    desc: 'Genda, rose petals, jasmine by kg — for pooja, mandap & decoration',
    img: 'https://floriwish.in/wp-content/uploads/2024/04/1-2-scaled.webp',
    color: '#FFF8E1',
  },
  {
    id: 'decoration',
    name: 'Haldi & Mehendi Décor',
    hindi: 'हल्दी / मेहंदी डेकोर',
    icon: '🎊',
    desc: 'Full backdrop, seat, props & entry arch for your pre-wedding functions',
    img: 'https://floriwish.in/wp-content/uploads/2025/08/BOOK-YOUR-WEDDING-DECORATION_20250709_175649_0000-1.png',
    color: '#FBE9E7',
  },
  {
    id: 'room',
    name: 'Stage & Room Décor',
    hindi: 'स्टेज / रूम डेकोर',
    icon: '🏠',
    desc: 'Mandap, stage, bridal room & gate decoration for complete weddings',
    img: 'https://floriwish.in/wp-content/uploads/2025/02/Proposal-Decoration-3.png',
    color: '#EDE7F6',
  },
];

// ── PRODUCTS ─────────────────────────────────────────────────
// tag options: 'Popular' | 'New' | 'Premium' | 'Best Value' | 'Hot'
// unit: leave empty '' for per piece, or write 'per kg', 'per set', etc.
const PRODUCTS = [
  // ─ JAIMALA ─
  {
    id: 1,
    cat: 'jaimala',
    name: 'Royal Rose Jaimala',
    price: 2500,
    orig: 3200,
    tag: 'Popular',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2024/04/4-1-scaled.webp',
    desc: 'Fresh red & white roses with rajnigandha strings — 4–5 ft length, stays fresh for 24 hrs. Perfect for phera ceremony.',
    includes: ['Premium red & white roses', 'Rajnigandha strings', '4–5 ft standard length', 'Custom sizing on request'],
  },
  {
    id: 2,
    cat: 'jaimala',
    name: 'Orchid & Rose Varmala',
    price: 3500,
    orig: 4500,
    tag: 'Premium',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/07/8e0ea070-c4c2-44c0-8bc6-2961b6dbebe7.webp',
    desc: 'Luxurious orchid and rose combination varmala — modern and elegant for contemporary weddings.',
    includes: ['Purple & white orchids', 'Red roses accent', 'Jasmine strings', 'Custom length available'],
  },
  {
    id: 3,
    cat: 'jaimala',
    name: 'Mogra & Genda Jaimala',
    price: 1800,
    orig: 2400,
    tag: 'Hot',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/11/ChatGPT-Image-Oct-31-2025-11_01_43-PM.png',
    desc: 'Traditional mogra and marigold jaimala — beautiful fragrance, auspicious for all wedding rituals.',
    includes: ['Fresh mogra strings', 'Genda (marigold)', 'Traditional style', 'Pair for bride & groom'],
  },
  {
    id: 4,
    cat: 'jaimala',
    name: 'Lily & Carnation Varmala',
    price: 4200,
    orig: 5500,
    tag: 'New',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/07/f0c9c777-5b2c-452e-8945-6332aa32babd.webp',
    desc: 'Exotic lily and carnation varmala for couples who want something unique and different.',
    includes: ['White lilies', 'Pink carnations', 'Green fillers', 'Custom design available'],
  },

  // ─ CHADAR ─
  {
    id: 5,
    cat: 'chadar',
    name: 'Classic Rose Phoolon ki Chadar',
    price: 4500,
    orig: 6000,
    tag: 'Popular',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/02/Proposal-Decoration-2.png',
    desc: 'Bridal entry canopy made with fresh red roses & marigold — held by family as the bride makes her grand entry.',
    includes: ['Full red rose coverage', 'Marigold border', '4 handles for family', 'Matching petals basket included'],
  },
  {
    id: 6,
    cat: 'chadar',
    name: 'White & Pink Luxe Chadar',
    price: 6000,
    orig: 8000,
    tag: 'Premium',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/08/BOOK-YOUR-WEDDING-DECORATION_20250710_125002_0000.pdf.png',
    desc: 'Elegant white and pink floral chadar for a dreamy, sophisticated bridal entry.',
    includes: ['White & pink roses', 'Mogra flower strings', 'Decorative tassels', '4–6 handles'],
  },
  {
    id: 7,
    cat: 'chadar',
    name: 'Genda Phool Bridal Chadar',
    price: 3200,
    orig: 4200,
    tag: 'Hot',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/08/BOOK-YOUR-WEDDING-DECORATION_20250710_100537_0000.pdf-2.png',
    desc: 'Vibrant marigold chadar — bright, traditional and full of festive energy for a classic Indian entry.',
    includes: ['Fresh genda phool', 'Red rose accents', 'Chunni style design', '4 handle points'],
  },

  // ─ JEWELLERY ─
  {
    id: 8,
    cat: 'jewellery',
    name: 'Complete Bridal Flower Set',
    price: 1800,
    orig: 2500,
    tag: 'Popular',
    unit: 'per set',
    img: 'https://floriwish.in/wp-content/uploads/2024/04/8-1-scaled.webp',
    desc: 'Complete bridal flower jewellery set with fresh mogra & rose — includes all pieces for full look.',
    includes: ['Haar (necklace)', '2 Bangles', 'Maang tikka', 'Earrings', 'Fresh mogra & rose'],
  },
  {
    id: 9,
    cat: 'jewellery',
    name: 'Mogra Haath Phool & Bangles',
    price: 800,
    orig: 1200,
    tag: 'New',
    unit: 'per set',
    img: 'https://floriwish.in/wp-content/uploads/2025/07/f0c9c777-5b2c-452e-8945-6332aa32babd.webp',
    desc: 'Beautiful floral bangles and haath phool with fresh roses and mogra — perfect for haldi & mehendi.',
    includes: ['2 floral bangles', 'Haath phool', 'Rose & mogra flowers', 'Custom color available'],
  },
  {
    id: 10,
    cat: 'jewellery',
    name: 'Rose Petal Maang Tikka',
    price: 450,
    orig: 650,
    tag: 'Hot',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/11/ChatGPT-Image-Oct-31-2025-11_08_23-PM.png',
    desc: 'Delicate rose petal maang tikka — makes a beautiful finishing touch for any bridal look.',
    includes: ['Fresh rose petals', 'Mogra strings', 'Custom chain length', 'Stays fresh 8–10 hrs'],
  },

  // ─ BULK ─
  {
    id: 11,
    cat: 'bulk',
    name: 'Genda Phool (Marigold)',
    price: 120,
    orig: 160,
    tag: 'Best Value',
    unit: 'per kg',
    img: 'https://floriwish.in/wp-content/uploads/2024/04/1-2-scaled.webp',
    desc: 'Fresh marigold by kg — ideal for temple, haldi setup, door torans and mandap. Min order 5 kg.',
    includes: ['Fresh marigold (per kg)', 'Min order 5 kg', 'Morning delivery available', 'Custom quantity'],
  },
  {
    id: 12,
    cat: 'bulk',
    name: 'Red Rose Petals',
    price: 200,
    orig: 280,
    tag: 'Popular',
    unit: 'per kg',
    img: 'https://floriwish.in/wp-content/uploads/2024/05/93930.avif',
    desc: 'Fresh red rose petals by kg — for petal showers, flooring, bed decoration and chadar. Min 2 kg.',
    includes: ['Fresh rose petals (per kg)', 'Min order 2 kg', 'Red or mixed available', 'Same day available'],
  },
  {
    id: 13,
    cat: 'bulk',
    name: 'Mogra (Jasmine)',
    price: 350,
    orig: 480,
    tag: 'Hot',
    unit: 'per kg',
    img: 'https://floriwish.in/wp-content/uploads/2025/11/ChatGPT-Image-Oct-31-2025-11_05_23-PM.png',
    desc: 'Fresh mogra (jasmine) by kg — divine fragrance for pooja, jewellery making and decoration.',
    includes: ['Fresh mogra (per kg)', 'Fragrant & fresh', 'Min order 1 kg', 'Temple & wedding use'],
  },
  {
    id: 14,
    cat: 'bulk',
    name: 'Mixed Temple Flowers Pack',
    price: 90,
    orig: 130,
    tag: 'Best Value',
    unit: 'per kg',
    img: 'https://floriwish.in/wp-content/uploads/2025/11/ChatGPT-Image-Oct-31-2025-11_11_47-PM.png',
    desc: 'Mixed seasonal flowers by kg — genda, rose, champa for daily pooja and temple offerings.',
    includes: ['Genda + rose + champa', 'Fresh daily', 'Min order 2 kg', 'Loose bulk packing'],
  },

  // ─ DECORATION ─
  {
    id: 15,
    cat: 'decoration',
    name: 'Full Haldi Setup',
    price: 5500,
    orig: 8000,
    tag: 'Popular',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/08/BOOK-YOUR-WEDDING-DECORATION_20250709_175649_0000-1.png',
    desc: 'Complete haldi decoration — backdrop, bridal seating, entry arch & yellow flower props.',
    includes: ['Floral backdrop', 'Bride + groom seat', 'Entry flower arch', 'Genda strings', 'Flower props'],
  },
  {
    id: 16,
    cat: 'decoration',
    name: 'Mehendi Décor Setup',
    price: 4500,
    orig: 6500,
    tag: 'New',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/08/BOOK-YOUR-WEDDING-DECORATION_20250710_100537_0000.pdf-2.png',
    desc: 'Colorful mehendi decoration with flowers, drapes and fairy lights. Seating and backdrop included.',
    includes: ['Colorful floral backdrop', 'Seating decoration', 'Flower drapes & strings', 'LED fairy lights', 'Mehendi props'],
  },

  // ─ ROOM / STAGE ─
  {
    id: 17,
    cat: 'room',
    name: 'Bridal Room Decoration',
    price: 8000,
    orig: 12000,
    tag: 'Premium',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/02/Proposal-Decoration-3.png',
    desc: 'Romantic first night room decoration with fresh flowers, rose petals, candles and fairy lights.',
    includes: ['Bed petal decoration', 'Floral arch above bed', 'Fairy lights & candles', 'Rose petal floor design', 'Welcome banner'],
  },
  {
    id: 18,
    cat: 'room',
    name: 'Entry Gate Flower Arch',
    price: 3500,
    orig: 5000,
    tag: 'Hot',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/03/12-1.png',
    desc: 'Grand flower arch for your function entrance — makes every guest feel the celebration from step one.',
    includes: ['Full flower arch', 'Genda & rose combo', 'Custom size available', 'Installation included'],
  },
  {
    id: 19,
    cat: 'room',
    name: 'Wedding Stage Backdrop',
    price: 7000,
    orig: 10000,
    tag: 'Popular',
    unit: '',
    img: 'https://floriwish.in/wp-content/uploads/2025/08/BOOK-YOUR-WEDDING-DECORATION_20250710_125002_0000.pdf.png',
    desc: 'Full floral stage backdrop for wedding — roses, orchids, drapes and pillar decoration.',
    includes: ['12×8 ft floral backdrop', 'Rose & orchid flowers', 'Side pillar decoration', 'Fairy lights included', 'Setup & removal'],
  },
];

// ── TESTIMONIALS ─────────────────────────────────────────────
const TESTIMONIALS = [
  { name: 'Priya Sharma', loc: 'Noida Sector 18', avatar: '👩', bg: '#FFF3E0',
    text: 'Jaimala was absolutely gorgeous! Rose petals so fresh, fragrance lasted all day. WhatsApp ordering was super easy and they delivered on time. Will order again for my sister\'s wedding!' },
  { name: 'Rahul Verma', loc: 'Gurgaon DLF Phase 4', avatar: '👨', bg: '#FBE9E7',
    text: 'Ordered phoolon ki chadar last minute — they prepared it overnight and delivered at 5 AM! Premium quality, full rose cover. Bahut shukriya PhoolPatte!' },
  { name: 'Sunita Agarwal', loc: 'Faridabad', avatar: '👩', bg: '#E8F5E9',
    text: 'Got full haldi decoration — backdrop, seat, genda strings, entry arch. Everything perfect and price very reasonable compared to event companies!' },
  { name: 'Deepak Malhotra', loc: 'Greater Noida', avatar: '👨', bg: '#EDE7F6',
    text: 'Ordered flower jewellery set for my wife\'s haldi — it was stunning! Fresh mogra and rose, lasted the whole ceremony. Highly recommend.' },
];

// ── DELIVERY AREAS ────────────────────────────────────────────
const DELIVERY_AREAS = [
  '🏙️ Delhi (All Areas)', '🏢 Noida', '🌆 Greater Noida',
  '🏗️ Gurgaon', '🌃 Faridabad', '🏘️ Ghaziabad',
  '🏡 Dadri', '🌉 Bahadurgarh', '🏙️ Sonipat',
];

// ── OCCASIONS ────────────────────────────────────────────────
const OCCASIONS = [
  { icon: '🌼', label: 'Haldi', msg: 'Main Haldi function ke liye decoration chahiye. Please share options and pricing.' },
  { icon: '🎨', label: 'Mehendi', msg: 'Main Mehendi function ke liye decoration chahiye.' },
  { icon: '💒', label: 'Shaadi', msg: 'Main Shaadi ke liye Jaimala/Varmala chahiye.' },
  { icon: '💍', label: 'Sagai', msg: 'Main Sagai ke liye flowers/decoration chahiye.' },
  { icon: '🛕', label: 'Pooja', msg: 'Main Pooja ke liye phool chahiye (genda, mogra, etc.).' },
  { icon: '🌺', label: 'Phoolon ki Chadar', msg: 'Main Phoolon ki Chadar order karna chahta/chahti hoon.' },
  { icon: '🏠', label: 'Griha Pravesh', msg: 'Main Griha Pravesh ke liye flowers chahiye.' },
  { icon: '🎂', label: 'Birthday / Anniversary', msg: 'Main Birthday/Anniversary decoration chahiye.' },
];

// ── HELPERS ───────────────────────────────────────────────────
function waLink(msg) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function openWA(msg) {
  window.open(waLink(msg), '_blank');
}
function fmt(n) {
  return '₹' + Number(n).toLocaleString('en-IN');
}
function discPct(price, orig) {
  return Math.round((1 - price / orig) * 100);
}
function fallbackImg() {
  return 'https://floriwish.in/wp-content/uploads/2024/04/1-2-scaled.webp';
}
