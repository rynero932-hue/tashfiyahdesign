/* ============================================
   ADMIN PANEL — Tashfiyah Design
   All data synced via localStorage
   ============================================ */

const ADMIN_PW_KEY = 'tashfiyah_admin_pw';
const PRODUCTS_KEY = 'tashfiyah_products';
const PAYMENTS_KEY = 'tashfiyah_payments';
const STORE_KEY = 'tashfiyah_store';
const SESSION_KEY = 'tashfiyah_admin_session';

// ── DEFAULT DATA (fallback if no localStorage) ──
const DEFAULT_PRODUCTS = [
  {
    id: 1, name: "Label Pita Katun Polos", category: "Pita Katun",
    price: 92000, oldPrice: 95000,
    spec: "Berat: 290 gr/Roll | Panjang: ± 100 Meter",
    description: "Label katun polos berkualitas, bahan lembut, eco-friendly, tersedia ukuran 1,3cm sampai 5cm.",
    badge: "Terlaris",
    colors: ["Label Katun Cream", "Label Katun Hitam", "Label Katun Putih"],
    sizes: ["1.3cm", "1.5cm", "2cm", "2.5cm", "3cm", "5cm"],
    combinations: {
      "Label Katun Cream|1.3cm": 92000, "Label Katun Cream|1.5cm": 110000,
      "Label Katun Cream|2cm": 134000, "Label Katun Cream|2.5cm": 159000,
      "Label Katun Cream|3cm": 199000, "Label Katun Cream|5cm": 250000,
      "Label Katun Hitam|1.3cm": 125000, "Label Katun Hitam|2cm": 169000,
      "Label Katun Hitam|2.5cm": 220000, "Label Katun Hitam|3cm": 250000,
      "Label Katun Putih|1.3cm": 95000, "Label Katun Putih|2cm": 165000,
      "Label Katun Putih|2.5cm": 220000, "Label Katun Putih|3cm": 250000
    },
    images: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg27xtDoeJZfL-O3vc2QDF7cMZkH2XlPpt97nMH3rIA31w1VkKoUNDXgvgmNZMJV4lfYbKQKd-LK7PGIRgHIZSvAVe8tINBt8YGCs-dHpqgNmjjmllsAdcBCCUt8J7XzO_kb9wDep4UyGjI/s2048/IMG_20210206_151135.jpg"]
  },
  {
    id: 2, name: "Label Pita Satin Polos", category: "Pita Satin",
    price: 40000, oldPrice: 45000,
    spec: "Permukaan Mengkilap | Panjang: ± 180 Meter",
    description: "Pita satin berkualitas dengan permukaan mengkilap, panjang ±180 meter per roll.",
    badge: "Promo",
    colors: ["Satin Putih", "Satin Hitam"],
    sizes: ["1.3cm", "2cm", "2.5cm", "3cm", "4cm", "5cm"],
    combinations: {
      "Satin Putih|1.3cm": 40000, "Satin Putih|2cm": 50000, "Satin Putih|2.5cm": 65000,
      "Satin Putih|3cm": 75000, "Satin Putih|4cm": 95000, "Satin Putih|5cm": 125000,
      "Satin Hitam|1.3cm": 45000, "Satin Hitam|2cm": 55000, "Satin Hitam|2.5cm": 70000,
      "Satin Hitam|3cm": 80000, "Satin Hitam|4cm": 100000
    },
    images: ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQKfwLbEd_OKSKzYzAGL-gTyDyullb1zDQ9-ZYYeaGrG2ZOQncTz4U2hHWztdlhbgUrnrALndgbjHKnhJ9snxUAuIqFdPYTOQaCCSm3x29T2Fd_fZLjxac2vSBys62z5V-L_4nQ-JWAIepjTo4gUWUKqBKtrkUDbcwJHr8HYOQ0rQMIwkShjSWweGvKIjg/s4000/IMG_20220926_055529.jpg"]
  }
];

const DEFAULT_PAYMENTS = [
  { icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg", name: "Bank BCA", accountNumber: "7735309650", accountName: "ARIF WIJAYA" },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg", name: "Bank Mandiri", accountNumber: "9000031825285", accountName: "ARIF WIJAYA" },
  { icon: "https://i2.wp.com/www.pikpng.com/pngl/b/342-3425063_svg-logo-bank-bni-png-clipart.png", name: "Bank BNI", accountNumber: "0175181167", accountName: "SOLIHAT" },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg", name: "Bank BRI", accountNumber: "0334-01-076871-50-7", accountName: "SOLIHAT" }
];

const DEFAULT_STORE = {
  name: "Toko Tashfiyah", whatsappNumber: "628998561811",
  address: "Tashfiyah Label Baju - Jl. Sakura Rt. 1 Rw. 14 No. 11 Mantung, Sanggrahan, Grogol, Sukoharjo",
  email: "tokomuslim2@gmail.com", hours: "Senin - Sabtu, 08:00 - 17:00 WIB",
  social: {
    instagram: "https://instagram.com/tokotashfiyah",
    shopee: "https://shopee.co.id/tokotashfiyah",
    website: "https://tokomuslimin2.blogspot.com/"
  }
};

const DEFAULT_PW = 'tashfiyah2024';

// ── HELPERS ──
function getData(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}
function setData(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}
function fmt(p) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(p);
}
function toast(msg) {
  const wrap = document.getElementById('admin-toast-wrap');
  const t = document.createElement('div');
  t.className = 'admin-toast';
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
}

// ── AUTH ──
function doLogin() {
  const pw = document.getElementById('pw-input').value;
  const storedPw = localStorage.getItem(ADMIN_PW_KEY) || DEFAULT_PW;
  if (pw === storedPw) {
    sessionStorage.setItem(SESSION_KEY, '1');
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-app').classList.remove('hidden');
    initAdmin();
  } else {
    document.getElementById('login-error').textContent = '❌ Password salah. Coba lagi.';
    document.getElementById('pw-input').value = '';
    setTimeout(() => document.getElementById('login-error').textContent = '', 3000);
  }
}
function doLogout() {
  sessionStorage.removeItem(SESSION_KEY);
  location.reload();
}
function togglePw() {
  const inp = document.getElementById('pw-input');
  inp.type = inp.type === 'password' ? 'text' : 'password';
}

// ── INIT ──
function initAdmin() {
  renderStats();
  renderDashProducts();
  renderAdminProducts();
  renderAdminPayments();
  loadStoreForm();
}

// Check session on load
window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem(SESSION_KEY)) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-app').classList.remove('hidden');
    initAdmin();
  }
  document.getElementById('pw-input').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
});

// ── NAVIGATION ──
function showSection(name) {
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + name).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.section === name));
  closeSidebar();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebar-overlay').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}

// ── STATS ──
function renderStats() {
  const prods = getData(PRODUCTS_KEY, DEFAULT_PRODUCTS);
  const cats = new Set(prods.map(p => p.category)).size;
  const minP = prods.length ? Math.min(...prods.map(p => p.price)) : 0;
  const featured = prods.slice(0, 4).length;
  document.getElementById('stat-products').textContent = prods.length;
  document.getElementById('stat-categories').textContent = cats;
  document.getElementById('stat-minprice').textContent = fmt(minP);
  document.getElementById('stat-featured').textContent = featured;
}

// ── DASHBOARD PRODUCTS ──
function renderDashProducts() {
  const prods = getData(PRODUCTS_KEY, DEFAULT_PRODUCTS);
  const wrap = document.getElementById('dash-product-list');
  wrap.innerHTML = prods.map(p => `
    <div class="dash-prod-item">
      <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
      <div class="dash-prod-item-info">
        <div class="dash-prod-item-name">${p.name}</div>
        <div class="dash-prod-item-price">${fmt(p.price)}</div>
      </div>
    </div>
  `).join('');
}

// ── ADMIN PRODUCT LIST ──
function renderAdminProducts() {
  const prods = getData(PRODUCTS_KEY, DEFAULT_PRODUCTS);
  const wrap = document.getElementById('admin-product-list');
  if (!prods.length) { wrap.innerHTML = '<p style="color:#888;padding:20px">Belum ada produk.</p>'; return; }
  wrap.innerHTML = prods.map((p, i) => `
    <div class="admin-prod-row">
      <img class="admin-prod-img" src="${p.images[0]}" alt="${p.name}" loading="lazy">
      <div class="admin-prod-info">
        <div class="admin-prod-name">${p.name}
          ${p.badge ? `<span class="prod-badge ${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
        </div>
        <div class="admin-prod-cat">${p.category}</div>
        <div class="admin-prod-price">${fmt(p.price)}</div>
      </div>
      <div class="admin-prod-actions">
        <button class="btn-edit" onclick="openProductForm(${i})">✏️ Edit</button>
        <button class="btn-danger" onclick="deleteProduct(${i})">🗑 Hapus</button>
      </div>
    </div>
  `).join('');
}

// ── PRODUCT FORM ──
let editProductIdx = null;

function openProductForm(idx) {
  editProductIdx = (idx !== undefined) ? idx : null;
  const prods = getData(PRODUCTS_KEY, DEFAULT_PRODUCTS);
  const modal = document.getElementById('product-modal-bg');
  document.getElementById('product-form-title').textContent = editProductIdx !== null ? 'Edit Produk' : 'Tambah Produk';

  if (editProductIdx !== null) {
    const p = prods[editProductIdx];
    document.getElementById('pf-id').value = p.id;
    document.getElementById('pf-name').value = p.name;
    document.getElementById('pf-category').value = p.category;
    document.getElementById('pf-price').value = p.price;
    document.getElementById('pf-oldprice').value = p.oldPrice || '';
    document.getElementById('pf-spec').value = p.spec || '';
    document.getElementById('pf-desc').value = p.description || '';
    document.getElementById('pf-badge').value = p.badge || '';
    document.getElementById('pf-colors').value = (p.colors || []).join(', ');
    document.getElementById('pf-sizes').value = (p.sizes || []).join(', ');
    document.getElementById('pf-images').value = (p.images || []).join('\n');
    const combLines = Object.entries(p.combinations || {}).map(([k, v]) => `${k}=${v}`).join('\n');
    document.getElementById('pf-combinations').value = combLines;
  } else {
    ['pf-id','pf-name','pf-category','pf-price','pf-oldprice','pf-spec','pf-desc','pf-colors','pf-sizes','pf-images','pf-combinations'].forEach(id => {
      document.getElementById(id).value = '';
    });
    document.getElementById('pf-badge').value = '';
  }

  modal.classList.add('open');
}

function closeProductForm() {
  document.getElementById('product-modal-bg').classList.remove('open');
  editProductIdx = null;
}

function saveProduct() {
  const name = document.getElementById('pf-name').value.trim();
  const category = document.getElementById('pf-category').value.trim();
  const price = parseInt(document.getElementById('pf-price').value);

  if (!name || !category || isNaN(price)) {
    toast('❌ Nama, Kategori, dan Harga wajib diisi!');
    return;
  }

  const prods = getData(PRODUCTS_KEY, DEFAULT_PRODUCTS);
  const oldPrice = document.getElementById('pf-oldprice').value ? parseInt(document.getElementById('pf-oldprice').value) : null;
  const colors = document.getElementById('pf-colors').value.split(',').map(s => s.trim()).filter(Boolean);
  const sizes = document.getElementById('pf-sizes').value.split(',').map(s => s.trim()).filter(Boolean);
  const images = document.getElementById('pf-images').value.split('\n').map(s => s.trim()).filter(Boolean);

  const combRaw = document.getElementById('pf-combinations').value.trim();
  const combinations = {};
  if (combRaw) {
    combRaw.split('\n').forEach(line => {
      const [k, v] = line.split('=');
      if (k && v) combinations[k.trim()] = parseInt(v.trim());
    });
  }

  const product = {
    id: editProductIdx !== null ? prods[editProductIdx].id : Date.now(),
    name, category, price,
    oldPrice,
    spec: document.getElementById('pf-spec').value.trim(),
    description: document.getElementById('pf-desc').value.trim(),
    badge: document.getElementById('pf-badge').value || null,
    colors, sizes,
    combinations: Object.keys(combinations).length ? combinations : undefined,
    images: images.length ? images : ['https://via.placeholder.com/400x400?text=No+Image']
  };

  if (editProductIdx !== null) {
    prods[editProductIdx] = product;
  } else {
    prods.push(product);
  }

  setData(PRODUCTS_KEY, prods);
  closeProductForm();
  renderStats();
  renderDashProducts();
  renderAdminProducts();
  toast('✅ Produk berhasil disimpan!');
}

function deleteProduct(idx) {
  if (!confirm('Yakin hapus produk ini?')) return;
  const prods = getData(PRODUCTS_KEY, DEFAULT_PRODUCTS);
  prods.splice(idx, 1);
  setData(PRODUCTS_KEY, prods);
  renderStats();
  renderDashProducts();
  renderAdminProducts();
  toast('🗑 Produk dihapus');
}

// ── PAYMENT FORM ──
let editPaymentIdx = null;

function renderAdminPayments() {
  const payments = getData(PAYMENTS_KEY, DEFAULT_PAYMENTS);
  const wrap = document.getElementById('admin-payment-list');
  if (!payments.length) { wrap.innerHTML = '<p style="color:#888;padding:20px">Belum ada rekening.</p>'; return; }
  wrap.innerHTML = payments.map((p, i) => `
    <div class="payment-row">
      <img class="pay-logo" src="${p.icon}" alt="${p.name}">
      <div class="payment-row-info">
        <div class="bank-name">${p.name}</div>
        <div class="account-num">${p.accountNumber}</div>
        <div class="account-owner">a.n. ${p.accountName}</div>
      </div>
      <div class="payment-row-actions">
        <button class="btn-edit" onclick="openPaymentForm(${i})">✏️ Edit</button>
        <button class="btn-danger" onclick="deletePayment(${i})">🗑 Hapus</button>
      </div>
    </div>
  `).join('');
}

function openPaymentForm(idx) {
  editPaymentIdx = (idx !== undefined) ? idx : null;
  const payments = getData(PAYMENTS_KEY, DEFAULT_PAYMENTS);
  document.getElementById('payment-form-title').textContent = editPaymentIdx !== null ? 'Edit Rekening' : 'Tambah Rekening';

  if (editPaymentIdx !== null) {
    const p = payments[editPaymentIdx];
    document.getElementById('pmf-name').value = p.name;
    document.getElementById('pmf-number').value = p.accountNumber;
    document.getElementById('pmf-account').value = p.accountName;
    document.getElementById('pmf-icon').value = p.icon;
  } else {
    ['pmf-name','pmf-number','pmf-account','pmf-icon'].forEach(id => document.getElementById(id).value = '');
  }

  document.getElementById('payment-modal-bg').classList.add('open');
}

function closePaymentForm() {
  document.getElementById('payment-modal-bg').classList.remove('open');
  editPaymentIdx = null;
}

function savePayment() {
  const name = document.getElementById('pmf-name').value.trim();
  const number = document.getElementById('pmf-number').value.trim();
  const account = document.getElementById('pmf-account').value.trim();
  if (!name || !number || !account) { toast('❌ Semua field wajib diisi!'); return; }

  const payments = getData(PAYMENTS_KEY, DEFAULT_PAYMENTS);
  const payment = {
    name, accountNumber: number, accountName: account,
    icon: document.getElementById('pmf-icon').value.trim() || ''
  };

  if (editPaymentIdx !== null) payments[editPaymentIdx] = payment;
  else payments.push(payment);

  setData(PAYMENTS_KEY, payments);
  closePaymentForm();
  renderAdminPayments();
  toast('✅ Rekening disimpan!');
}

function deletePayment(idx) {
  if (!confirm('Yakin hapus rekening ini?')) return;
  const payments = getData(PAYMENTS_KEY, DEFAULT_PAYMENTS);
  payments.splice(idx, 1);
  setData(PAYMENTS_KEY, payments);
  renderAdminPayments();
  toast('🗑 Rekening dihapus');
}

// ── STORE FORM ──
function loadStoreForm() {
  const s = getData(STORE_KEY, DEFAULT_STORE);
  document.getElementById('sf-name').value = s.name || '';
  document.getElementById('sf-wa').value = s.whatsappNumber || '';
  document.getElementById('sf-address').value = s.address || '';
  document.getElementById('sf-email').value = s.email || '';
  document.getElementById('sf-hours').value = s.hours || '';
  document.getElementById('sf-ig').value = (s.social || {}).instagram || '';
  document.getElementById('sf-shopee').value = (s.social || {}).shopee || '';
  document.getElementById('sf-website').value = (s.social || {}).website || '';
}

function saveStore() {
  const newPw = document.getElementById('sf-pw').value.trim();
  if (newPw) {
    if (newPw.length < 6) { toast('❌ Password minimal 6 karakter'); return; }
    localStorage.setItem(ADMIN_PW_KEY, newPw);
  }

  const store = {
    name: document.getElementById('sf-name').value.trim(),
    whatsappNumber: document.getElementById('sf-wa').value.trim(),
    address: document.getElementById('sf-address').value.trim(),
    email: document.getElementById('sf-email').value.trim(),
    hours: document.getElementById('sf-hours').value.trim(),
    social: {
      instagram: document.getElementById('sf-ig').value.trim(),
      shopee: document.getElementById('sf-shopee').value.trim(),
      website: document.getElementById('sf-website').value.trim()
    }
  };
  setData(STORE_KEY, store);
  document.getElementById('sf-pw').value = '';
  toast('✅ Informasi toko disimpan!');
}

// ── CLOSE MODALS ON BG CLICK ──
document.getElementById('product-modal-bg').addEventListener('click', function(e) {
  if (e.target === this) closeProductForm();
});
document.getElementById('payment-modal-bg').addEventListener('click', function(e) {
  if (e.target === this) closePaymentForm();
});
