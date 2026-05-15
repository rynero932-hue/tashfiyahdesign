/* ============================================
   ADMIN PANEL — Tashfiyah Design
   Firebase Firestore Integration
   ============================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import {
  getFirestore, collection, getDocs, addDoc, updateDoc,
  deleteDoc, doc, setDoc, getDoc, orderBy, query
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDN-gIiKxLuEhOs9c_UhdlplvXmGpYgXkE",
  authDomain: "tashfiyah-design.firebaseapp.com",
  projectId: "tashfiyah-design",
  storageBucket: "tashfiyah-design.firebasestorage.app",
  messagingSenderId: "905685278890",
  appId: "1:905685278890:web:b847eff22c20fc4adf30d3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const PRODUCTS_COL = "products";
const PAYMENTS_COL = "payments";
const STORE_DOC    = "config/store";
const ADMIN_DOC    = "config/admin";
const SESSION_KEY  = 'tashfiyah_admin_session';
const DEFAULT_PW   = 'tashfiyah2024';

let allProducts = [];
let allPayments = [];

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
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2800);
}

// ── AUTH ──
async function doLogin() {
  const pw = document.getElementById('pw-input').value.trim();
  if (!pw) return;
  const errEl = document.getElementById('login-error');
  try {
    const snap = await getDoc(doc(db, ADMIN_DOC));
    const storedPw = snap.exists() ? snap.data().password : DEFAULT_PW;
    if (pw === storedPw) {
      sessionStorage.setItem(SESSION_KEY, '1');
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('admin-app').classList.remove('hidden');
      initAdmin();
    } else {
      errEl.textContent = '❌ Password salah. Coba lagi.';
      document.getElementById('pw-input').value = '';
      setTimeout(() => errEl.textContent = '', 3000);
    }
  } catch {
    if (pw === DEFAULT_PW) {
      sessionStorage.setItem(SESSION_KEY, '1');
      document.getElementById('login-screen').style.display = 'none';
      document.getElementById('admin-app').classList.remove('hidden');
      initAdmin();
    } else {
      errEl.textContent = '❌ Password salah.';
      document.getElementById('pw-input').value = '';
      setTimeout(() => errEl.textContent = '', 3000);
    }
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
async function initAdmin() {
  document.querySelector('.admin-main').style.opacity = '0.6';
  await Promise.all([loadProducts(), loadPayments(), loadStoreForm()]);
  document.querySelector('.admin-main').style.opacity = '1';
}

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

// ── PRODUCTS ──
async function loadProducts() {
  try {
    const q = query(collection(db, PRODUCTS_COL), orderBy("order", "asc"));
    const snap = await getDocs(q);
    allProducts = snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
  } catch {
    const snap = await getDocs(collection(db, PRODUCTS_COL));
    allProducts = snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
  }
  renderStats();
  renderDashProducts();
  renderAdminProducts();
}

function renderStats() {
  const cats = new Set(allProducts.map(p => p.category)).size;
  const minP = allProducts.length ? Math.min(...allProducts.map(p => p.price)) : 0;
  document.getElementById('stat-products').textContent = allProducts.length;
  document.getElementById('stat-categories').textContent = cats;
  document.getElementById('stat-minprice').textContent = fmt(minP);
  document.getElementById('stat-featured').textContent = Math.min(allProducts.length, 4);
}

function renderDashProducts() {
  const wrap = document.getElementById('dash-product-list');
  if (!allProducts.length) {
    wrap.innerHTML = '<p style="color:#888;padding:20px 0">Belum ada produk. Tambahkan dari menu Produk.</p>';
    return;
  }
  wrap.innerHTML = allProducts.map(p => `
    <div class="dash-prod-item">
      <img src="${(p.images||[])[0]||'https://via.placeholder.com/160'}" alt="${p.name}" loading="lazy">
      <div class="dash-prod-item-info">
        <div class="dash-prod-item-name">${p.name}</div>
        <div class="dash-prod-item-price">${fmt(p.price)}</div>
      </div>
    </div>`).join('');
}

function renderAdminProducts() {
  const wrap = document.getElementById('admin-product-list');
  if (!allProducts.length) {
    wrap.innerHTML = '<p style="color:#888;padding:20px">Belum ada produk. Klik "+ Tambah Produk".</p>';
    return;
  }
  wrap.innerHTML = allProducts.map((p, i) => `
    <div class="admin-prod-row">
      <img class="admin-prod-img" src="${(p.images||[])[0]||'https://via.placeholder.com/64'}" alt="${p.name}" loading="lazy">
      <div class="admin-prod-info">
        <div class="admin-prod-name">${p.name}
          ${p.badge ? `<span class="prod-badge ${p.badge.toLowerCase()}">${p.badge}</span>` : ''}
        </div>
        <div class="admin-prod-cat">${p.category}</div>
        <div class="admin-prod-price">${fmt(p.price)}</div>
      </div>
      <div class="admin-prod-actions">
        <button class="btn-edit" onclick="openProductForm(${i})">✏️ Edit</button>
        <button class="btn-danger" onclick="deleteProduct('${p.firestoreId}',${i})">🗑 Hapus</button>
      </div>
    </div>`).join('');
}

// ── PRODUCT FORM ──
let editProductIdx = null;

function openProductForm(idx) {
  editProductIdx = idx !== undefined ? idx : null;
  document.getElementById('product-form-title').textContent = editProductIdx !== null ? 'Edit Produk' : 'Tambah Produk';
  if (editProductIdx !== null) {
    const p = allProducts[editProductIdx];
    document.getElementById('pf-id').value = p.firestoreId || '';
    document.getElementById('pf-name').value = p.name || '';
    document.getElementById('pf-category').value = p.category || '';
    document.getElementById('pf-price').value = p.price || '';
    document.getElementById('pf-oldprice').value = p.oldPrice || '';
    document.getElementById('pf-spec').value = p.spec || '';
    document.getElementById('pf-desc').value = p.description || '';
    document.getElementById('pf-badge').value = p.badge || '';
    document.getElementById('pf-colors').value = (p.colors||[]).join(', ');
    document.getElementById('pf-sizes').value = (p.sizes||[]).join(', ');
    document.getElementById('pf-images').value = (p.images||[]).join('\n');
    document.getElementById('pf-combinations').value = Object.entries(p.combinations||{}).map(([k,v]) => `${k}=${v}`).join('\n');
  } else {
    ['pf-id','pf-name','pf-category','pf-price','pf-oldprice','pf-spec','pf-desc','pf-colors','pf-sizes','pf-images','pf-combinations'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('pf-badge').value = '';
  }
  document.getElementById('product-modal-bg').classList.add('open');
}

function closeProductForm() {
  document.getElementById('product-modal-bg').classList.remove('open');
  editProductIdx = null;
}

async function saveProduct() {
  const name = document.getElementById('pf-name').value.trim();
  const category = document.getElementById('pf-category').value.trim();
  const price = parseInt(document.getElementById('pf-price').value);
  if (!name || !category || isNaN(price)) { toast('❌ Nama, Kategori, dan Harga wajib diisi!'); return; }

  const images = document.getElementById('pf-images').value.split('\n').map(s => s.trim()).filter(Boolean);
  const combRaw = document.getElementById('pf-combinations').value.trim();
  const combinations = {};
  if (combRaw) combRaw.split('\n').forEach(line => {
    const eq = line.indexOf('=');
    if (eq > -1) { const k = line.substring(0,eq).trim(); const v = parseInt(line.substring(eq+1)); if (k && !isNaN(v)) combinations[k] = v; }
  });

  const product = {
    name, category, price,
    oldPrice: document.getElementById('pf-oldprice').value ? parseInt(document.getElementById('pf-oldprice').value) : null,
    spec: document.getElementById('pf-spec').value.trim(),
    description: document.getElementById('pf-desc').value.trim(),
    badge: document.getElementById('pf-badge').value || null,
    colors: document.getElementById('pf-colors').value.split(',').map(s=>s.trim()).filter(Boolean),
    sizes: document.getElementById('pf-sizes').value.split(',').map(s=>s.trim()).filter(Boolean),
    combinations: Object.keys(combinations).length ? combinations : {},
    images: images.length ? images : ['https://via.placeholder.com/400x400?text=No+Image'],
    order: editProductIdx !== null ? (allProducts[editProductIdx].order ?? editProductIdx) : allProducts.length,
    updatedAt: new Date().toISOString()
  };

  const btn = document.querySelector('#product-modal-bg .btn-primary');
  btn.textContent = '⏳ Menyimpan...'; btn.disabled = true;
  try {
    if (editProductIdx !== null && allProducts[editProductIdx].firestoreId) {
      await updateDoc(doc(db, PRODUCTS_COL, allProducts[editProductIdx].firestoreId), product);
      toast('✅ Produk berhasil diperbarui!');
    } else {
      product.createdAt = new Date().toISOString();
      await addDoc(collection(db, PRODUCTS_COL), product);
      toast('✅ Produk berhasil ditambahkan!');
    }
    closeProductForm();
    await loadProducts();
  } catch (err) {
    toast('❌ Gagal menyimpan: ' + err.message);
  }
  btn.textContent = '💾 Simpan'; btn.disabled = false;
}

async function deleteProduct(firestoreId, idx) {
  if (!confirm(`Yakin hapus "${allProducts[idx]?.name}"?`)) return;
  try {
    await deleteDoc(doc(db, PRODUCTS_COL, firestoreId));
    toast('🗑 Produk dihapus');
    await loadProducts();
  } catch (err) { toast('❌ Gagal: ' + err.message); }
}

// ── PAYMENTS ──
async function loadPayments() {
  try {
    const snap = await getDocs(collection(db, PAYMENTS_COL));
    allPayments = snap.docs.map(d => ({ firestoreId: d.id, ...d.data() }));
  } catch { allPayments = []; }
  renderAdminPayments();
}

function renderAdminPayments() {
  const wrap = document.getElementById('admin-payment-list');
  if (!allPayments.length) { wrap.innerHTML = '<p style="color:#888;padding:20px">Belum ada rekening.</p>'; return; }
  wrap.innerHTML = allPayments.map((p,i) => `
    <div class="payment-row">
      ${p.icon ? `<img class="pay-logo" src="${p.icon}" alt="${p.name}">` : `<div class="pay-logo" style="display:flex;align-items:center;justify-content:center;font-size:1.4rem">🏦</div>`}
      <div class="payment-row-info">
        <div class="bank-name">${p.name}</div>
        <div class="account-num">${p.accountNumber}</div>
        <div class="account-owner">a.n. ${p.accountName}</div>
      </div>
      <div class="payment-row-actions">
        <button class="btn-edit" onclick="openPaymentForm(${i})">✏️ Edit</button>
        <button class="btn-danger" onclick="deletePayment('${p.firestoreId}',${i})">🗑 Hapus</button>
      </div>
    </div>`).join('');
}

let editPaymentIdx = null;

function openPaymentForm(idx) {
  editPaymentIdx = idx !== undefined ? idx : null;
  document.getElementById('payment-form-title').textContent = editPaymentIdx !== null ? 'Edit Rekening' : 'Tambah Rekening';
  if (editPaymentIdx !== null) {
    const p = allPayments[editPaymentIdx];
    document.getElementById('pmf-name').value = p.name || '';
    document.getElementById('pmf-number').value = p.accountNumber || '';
    document.getElementById('pmf-account').value = p.accountName || '';
    document.getElementById('pmf-icon').value = p.icon || '';
  } else {
    ['pmf-name','pmf-number','pmf-account','pmf-icon'].forEach(id => document.getElementById(id).value = '');
  }
  document.getElementById('payment-modal-bg').classList.add('open');
}

function closePaymentForm() {
  document.getElementById('payment-modal-bg').classList.remove('open');
  editPaymentIdx = null;
}

async function savePayment() {
  const name = document.getElementById('pmf-name').value.trim();
  const number = document.getElementById('pmf-number').value.trim();
  const account = document.getElementById('pmf-account').value.trim();
  if (!name || !number || !account) { toast('❌ Semua field wajib diisi!'); return; }

  const payment = { name, accountNumber: number, accountName: account, icon: document.getElementById('pmf-icon').value.trim() || '', order: editPaymentIdx !== null ? (allPayments[editPaymentIdx].order ?? editPaymentIdx) : allPayments.length };
  const btn = document.querySelector('#payment-modal-bg .btn-primary');
  btn.textContent = '⏳ Menyimpan...'; btn.disabled = true;
  try {
    if (editPaymentIdx !== null && allPayments[editPaymentIdx].firestoreId) {
      await updateDoc(doc(db, PAYMENTS_COL, allPayments[editPaymentIdx].firestoreId), payment);
      toast('✅ Rekening diperbarui!');
    } else {
      await addDoc(collection(db, PAYMENTS_COL), payment);
      toast('✅ Rekening ditambahkan!');
    }
    closePaymentForm();
    await loadPayments();
  } catch (err) { toast('❌ Gagal: ' + err.message); }
  btn.textContent = '💾 Simpan'; btn.disabled = false;
}

async function deletePayment(firestoreId, idx) {
  if (!confirm(`Yakin hapus "${allPayments[idx]?.name}"?`)) return;
  try {
    await deleteDoc(doc(db, PAYMENTS_COL, firestoreId));
    toast('🗑 Rekening dihapus');
    await loadPayments();
  } catch (err) { toast('❌ Gagal: ' + err.message); }
}

// ── STORE ──
async function loadStoreForm() {
  try {
    const snap = await getDoc(doc(db, STORE_DOC));
    const s = snap.exists() ? snap.data() : {};
    document.getElementById('sf-name').value = s.name || 'Tashfiyah Design';
    document.getElementById('sf-wa').value = s.whatsappNumber || '628998561811';
    document.getElementById('sf-address').value = s.address || '';
    document.getElementById('sf-email').value = s.email || '';
    document.getElementById('sf-hours').value = s.hours || '';
    document.getElementById('sf-ig').value = (s.social||{}).instagram || '';
    document.getElementById('sf-shopee').value = (s.social||{}).shopee || '';
    document.getElementById('sf-website').value = (s.social||{}).website || '';
  } catch (err) { console.error('loadStoreForm:', err); }
}

async function saveStore() {
  const newPw = document.getElementById('sf-pw').value.trim();
  const btn = document.querySelector('#section-store .btn-primary');
  btn.textContent = '⏳ Menyimpan...'; btn.disabled = true;
  try {
    if (newPw) {
      if (newPw.length < 6) { toast('❌ Password minimal 6 karakter'); btn.textContent = '💾 Simpan Perubahan'; btn.disabled = false; return; }
      await setDoc(doc(db, ADMIN_DOC), { password: newPw }, { merge: true });
    }
    await setDoc(doc(db, STORE_DOC), {
      name: document.getElementById('sf-name').value.trim(),
      whatsappNumber: document.getElementById('sf-wa').value.trim(),
      address: document.getElementById('sf-address').value.trim(),
      email: document.getElementById('sf-email').value.trim(),
      hours: document.getElementById('sf-hours').value.trim(),
      social: {
        instagram: document.getElementById('sf-ig').value.trim(),
        shopee: document.getElementById('sf-shopee').value.trim(),
        website: document.getElementById('sf-website').value.trim()
      },
      updatedAt: new Date().toISOString()
    }, { merge: true });
    document.getElementById('sf-pw').value = '';
    toast('✅ Informasi toko disimpan!');
  } catch (err) { toast('❌ Gagal: ' + err.message); }
  btn.textContent = '💾 Simpan Perubahan'; btn.disabled = false;
}

// ── SEED DEFAULT DATA ──
async function seedDefaultData() {
  const snap = await getDocs(collection(db, PRODUCTS_COL));
  if (!snap.empty) { toast('ℹ️ Data sudah ada, tidak perlu seed ulang.'); return; }

  toast('⏳ Memuat data awal...');
  const defaultProducts = [
    { name:"Label Pita Katun Polos", category:"Pita Katun", price:92000, oldPrice:95000, spec:"Berat: 290 gr/Roll | Panjang: ± 100 Meter", description:"Label katun polos berkualitas, bahan lembut, eco-friendly.", badge:"Terlaris", colors:["Label Katun Cream","Label Katun Hitam","Label Katun Putih"], sizes:["1.3cm","1.5cm","2cm","2.5cm","3cm","5cm"], combinations:{"Label Katun Cream|1.3cm":92000,"Label Katun Cream|1.5cm":110000,"Label Katun Cream|2cm":134000,"Label Katun Cream|2.5cm":159000,"Label Katun Cream|3cm":199000,"Label Katun Cream|5cm":250000,"Label Katun Hitam|1.3cm":125000,"Label Katun Hitam|2cm":169000,"Label Katun Hitam|2.5cm":220000,"Label Katun Hitam|3cm":250000,"Label Katun Putih|1.3cm":95000,"Label Katun Putih|2cm":165000,"Label Katun Putih|2.5cm":220000,"Label Katun Putih|3cm":250000}, images:["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg27xtDoeJZfL-O3vc2QDF7cMZkH2XlPpt97nMH3rIA31w1VkKoUNDXgvgmNZMJV4lfYbKQKd-LK7PGIRgHIZSvAVe8tINBt8YGCs-dHpqgNmjjmllsAdcBCCUt8J7XzO_kb9wDep4UyGjI/s2048/IMG_20210206_151135.jpg"], order:0, createdAt:new Date().toISOString() },
    { name:"Label Pita Satin Polos", category:"Pita Satin", price:40000, oldPrice:45000, spec:"Permukaan Mengkilap | Panjang: ± 180 Meter", description:"Pita satin berkualitas dengan permukaan mengkilap.", badge:"Promo", colors:["Satin Putih","Satin Hitam"], sizes:["1.3cm","2cm","2.5cm","3cm","4cm","5cm"], combinations:{"Satin Putih|1.3cm":40000,"Satin Putih|2cm":50000,"Satin Putih|2.5cm":65000,"Satin Putih|3cm":75000,"Satin Putih|4cm":95000,"Satin Putih|5cm":125000,"Satin Hitam|1.3cm":45000,"Satin Hitam|2cm":55000,"Satin Hitam|2.5cm":70000,"Satin Hitam|3cm":80000,"Satin Hitam|4cm":100000}, images:["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQKfwLbEd_OKSKzYzAGL-gTyDyullb1zDQ9-ZYYeaGrG2ZOQncTz4U2hHWztdlhbgUrnrALndgbjHKnhJ9snxUAuIqFdPYTOQaCCSm3x29T2Fd_fZLjxac2vSBys62z5V-L_4nQ-JWAIepjTo4gUWUKqBKtrkUDbcwJHr8HYOQ0rQMIwkShjSWweGvKIjg/s4000/IMG_20220926_055529.jpg"], order:1, createdAt:new Date().toISOString() }
  ];
  const defaultPayments = [
    { name:"Bank BCA", accountNumber:"7735309650", accountName:"ARIF WIJAYA", icon:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg", order:0 },
    { name:"Bank Mandiri", accountNumber:"9000031825285", accountName:"ARIF WIJAYA", icon:"https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg", order:1 },
    { name:"Bank BNI", accountNumber:"0175181167", accountName:"SOLIHAT", icon:"https://i2.wp.com/www.pikpng.com/pngl/b/342-3425063_svg-logo-bank-bni-png-clipart.png", order:2 },
    { name:"Bank BRI", accountNumber:"0334-01-076871-50-7", accountName:"SOLIHAT", icon:"https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg", order:3 }
  ];

  for (const p of defaultProducts) await addDoc(collection(db, PRODUCTS_COL), p);
  for (const p of defaultPayments) await addDoc(collection(db, PAYMENTS_COL), p);
  await setDoc(doc(db, STORE_DOC), { name:"Tashfiyah Design", whatsappNumber:"628998561811", address:"Jl. Sakura Rt.1 Rw.14 No.11 Mantung, Sanggrahan, Grogol, Sukoharjo", email:"tokomuslim2@gmail.com", hours:"Senin - Sabtu, 08:00 - 17:00 WIB", social:{ instagram:"https://instagram.com/tokotashfiyah", shopee:"https://shopee.co.id/tokotashfiyah", website:"https://tokomuslimin2.blogspot.com/" }, updatedAt:new Date().toISOString() });

  toast('✅ Data awal berhasil dimuat!');
  await loadProducts(); await loadPayments(); await loadStoreForm();
}

// ── MODALS CLOSE ON BG CLICK ──
document.getElementById('product-modal-bg').addEventListener('click', function(e) { if (e.target===this) closeProductForm(); });
document.getElementById('payment-modal-bg').addEventListener('click', function(e) { if (e.target===this) closePaymentForm(); });

// ── EXPOSE TO WINDOW ──
Object.assign(window, { doLogin, doLogout, togglePw, showSection, toggleSidebar, closeSidebar, openProductForm, closeProductForm, saveProduct, deleteProduct, openPaymentForm, closePaymentForm, savePayment, deletePayment, saveStore, seedDefaultData });

// ── BOOT ──
window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem(SESSION_KEY)) {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('admin-app').classList.remove('hidden');
    initAdmin();
  }
  document.getElementById('pw-input').addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
});
