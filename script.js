/* ============================================
   TOKO TASHFIYAH - App Script
   Simple HTML/CSS/JS, No API
   ============================================ */

// ── PRODUCT DATA ──
const products = [
  {
    id: 1,
    name: "Label Pita Katun Polos",
    category: "Pita Katun",
    price: 92000,
    oldPrice: 95000,
    spec: "Berat: 290 gr/Roll | Panjang: ± 100 Meter",
    description: "Label katun polos berkualitas, bahan lembut, eco-friendly, dan tersedia dalam ukuran 1,3cm sampai 5cm. Setiap roll isi 100 meter, sangat hemat untuk stok produksi.",
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
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg27xtDoeJZfL-O3vc2QDF7cMZkH2XlPpt97nMH3rIA31w1VkKoUNDXgvgmNZMJV4lfYbKQKd-LK7PGIRgHIZSvAVe8tINBt8YGCs-dHpqgNmjjmllsAdcBCCUt8J7XzO_kb9wDep4UyGjI/s2048/IMG_20210206_151135.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkMfFgX0Z_jld4miO8KwR-CAtL0ZTTwFDKnZEa-BGbiKrtNF0aYaO-c3P9RIxf2hm0DcCdpZNSscDqRaLOC_VoidCRsiXhMzOAK-s07zcxsCrcLe22_aBX9B2lVHQTJDbYLe98ONr5ze-I/s2048/IMG_20210206_150918.jpg",
      "https://blogger.googleusercontent.com/img/a/AVvXsEjaD3gfNGXfKfgE7u0uynsZHDjnZWs2Pb5QMBu55yrmjqCayLyxlYwRPMRmW4Nc-2gxKaZMeDgRfTq36q5H2xBXCMk5AzROqqPvJzYWMo80K_ZYcRLPLezA7CUeeZMBcGif3jQQELnlbmCG_QSHb7lKyMof4k6-93hqRrwdgaumno6BPSM07gU1ct9tzudu",
      "https://blogger.googleusercontent.com/img/a/AVvXsEiFftud588f8HIDftVnTx4fqk7O_eKQdo2X3SKW3Nr2rQmYUUv_lvZ7uSnlHpum39sUlb1D2KnWZLv0h6jzpGYx3WbiouEdkw_9PShI9VLjjjqlUIW1mDXM20sVaAfe7zeA_tD389aGjAA7-CAy5DQhxirkpgyYhU6v7NBid0cG5hSz0hhrgyiHeOMJTGyD",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAG2IlA8BnXB7KCrWH8oIDd-nMZOdQMzdy14uTKFjA5qXfoGZ7ZRtErsX1Yc8vbKtluEaZUVOTBv-2kZ2PEGI8S367dJGEsEXu624zurhP0NIycN80ZoZdnZBOjm7UaBa3Fgvie_OV_OS1heCJ8R_xXSKOa0FMnoSx59U1hS_sKCy7OvfV03I8Ll9AVOu0/s1600/WhatsApp%20Image%202025-11-22%20at%2014.38.05%20(1).jpeg"
    ]
  },
  {
    id: 2,
    name: "Label Pita Satin Polos",
    category: "Pita Satin",
    price: 40000, oldPrice: 45000,
    spec: "Permukaan Mengkilap | Panjang: ± 180 Meter",
    description: "Pita satin berkualitas dengan permukaan mengkilap, panjang ±180 meter per roll. Cocok untuk label baju, dekorasi hampers, buket bunga, dan aksesoris rambut.",
    badge: "Promo",
    colors: ["Satin Putih", "Satin Hitam"],
    sizes: ["1.3cm", "2cm", "2.5cm", "3cm", "4cm", "5cm"],
    combinations: {
      "Satin Putih|1.3cm": 40000, "Satin Putih|2cm": 50000, "Satin Putih|2.5cm": 65000,
      "Satin Putih|3cm": 75000, "Satin Putih|4cm": 95000, "Satin Putih|5cm": 125000,
      "Satin Hitam|1.3cm": 45000, "Satin Hitam|2cm": 55000, "Satin Hitam|2.5cm": 70000,
      "Satin Hitam|3cm": 80000, "Satin Hitam|4cm": 100000
    },
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQKfwLbEd_OKSKzYzAGL-gTyDyullb1zDQ9-ZYYeaGrG2ZOQncTz4U2hHWztdlhbgUrnrALndgbjHKnhJ9snxUAuIqFdPYTOQaCCSm3x29T2Fd_fZLjxac2vSBys62z5V-L_4nQ-JWAIepjTo4gUWUKqBKtrkUDbcwJHr8HYOQ0rQMIwkShjSWweGvKIjg/s4000/IMG_20220926_055529.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibfmikxdPBdHnufWukTBCtKPlYRP6gP03cu0COIm50sO9iVVm5yQIgXwN03b5as3oEmCEr3MKRHAcUOzYdNBw9MZfFc07_bYeazMT9uE5ML8MSRFG6qQrv1-zKz5jCxetY72UfDqZdc3q59cWYPYA8VrGwVCSfSkFEtcbU_n-53SjlHcvLZIwLk370qGi1/s4000/IMG_20220913_154304.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQNW121-OftcTaMMw_dzEm8zMw0ZzLj6IrPQo7qFBF9UX9CIQRc-ZdzVkyiSnP2Opj_dkYSLBC8sIgIkN9e8L1JeaQR5rN1vVpFXS-m36tWl5IGHTAv_hAMsva84WO_zRY3SkFMdjaGrlvCGgX6cXTGC8C4yBDV6clW2F5yOVwgt3RxpzPn9bweKCU7p4v/s4064/IMG_20250206_092556_557.jpg"
    ]
  },
  {
    id: 3,
    name: "Label Tafeta Polos",
    category: "Tafeta",
    price: 40000, oldPrice: 45000,
    spec: "Tekstur Halus | Panjang: ± 180 Meter",
    description: "Label tafeta berkualitas tinggi, pilihan standar industri untuk label pakaian. Kuat, tahan cuci, dan daya serap tinta baik untuk printer label atau sablon.",
    badge: "Promo",
    colors: ["Putih"],
    sizes: ["1.3cm", "2cm", "2.5cm", "3cm", "4cm", "5cm"],
    combinations: {
      "Putih|1.3cm": 40000, "Putih|2cm": 50000, "Putih|2.5cm": 65000,
      "Putih|3cm": 75000, "Putih|4cm": 95000, "Putih|5cm": 125000,
    },
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEgkWvPHGbMlFYuclswUn6hJasARuDYWlMVYhS7vyiN6pC8eavmZ8s9iQGA22NEPADA64B13CTpZlIhYfOsF1Q94lu4jG_YhSk9RNR41OwwaSpBJgugfm-GE51Kd1Okr4tOU5dIgYfbPsUEd_g-WDdDoK_FFHY0IOzOTvF8VmojcbbvRN9bvpvl9EKfe7SKU",
      "https://blogger.googleusercontent.com/img/a/AVvXsEgEaEUhQIWCXdZWZYKrggNYdPsWl0-w0UPc1lB29XO30XYVpbPQs5LqM2uAQ9kY7leVC-dDIcsc1qH24FJoaTXtAyp8yL0wgtdD2ayshDl7oZ9mbBOL6jTCsRpSEbOvCUYJjmxA0X2CaGoaJUf3uZ3wYqicP-ot_hEi0Hnvzyx8fzgZ9SA4jX5gZQX-GBYT",
      "https://blogger.googleusercontent.com/img/a/AVvXsEhrBcAQjgnG4J_8BrA2p6m95cq1rO4RJf7KHvwiSypFgAF91w05wQS-BcGTkhW9u1E7LK8J51Dos7yIc0lGN_qHGSBmS3avXvyjFcT4msZTlq_Ks83u5XYVzsgcvnIakldup1haUvl9EO-TePCD-kobU0S9Z1MtgsHk193WrXOUXPm2aa-_C-Eb-SX1dkRi"
    ]
  },
  {
    id: 4,
    name: "Karet Elastis YKK",
    category: "Karet Elastis",
    price: 84000, oldPrice: 90000,
    spec: "Bahan Nylon | Panjang: ± 30 Meter",
    description: "Karet elastis premium brand YKK. Elastisitas stabil, tidak mudah kendor meski dicuci berkali-kali, dan sangat nyaman diaplikasikan pada pakaian.",
    badge: "Baru",
    colors: ["Putih Natural"],
    sizes: ["2cm", "2.5cm", "3cm", "3.8cm", "5cm"],
    combinations: {
      "Putih Natural|2cm": 84000, "Putih Natural|2.5cm": 92000,
      "Putih Natural|3cm": 98000, "Putih Natural|3.8cm": 145000,
      "Putih Natural|5cm": 165000
    },
    images: [
      "https://pix.toco.id/resize/w:700,h:700,fit:cover,f:webp,q:85/toco/5c356bc2-e60d-4f1b-980a-c3bf7fcfe389-a136c381-cff2-4b15-b01d-e686f385bb6e-07c03793-c5ab-406e-9e8e-0f556a55392b.webp?s=8565e021c06d8a957659a32a87e08d33a51701519072eba9251f0dbf5513ac32",
      "https://down-id.img.susercontent.com/file/ee4851239f7943da1ebfe4502e7d776f",
      "https://pix.toco.id/resize/w:700,h:700,fit:cover,f:webp,q:85/toco/79e3c7bf-964c-44fa-b4e0-fcc382ebae57-a136c381-cff2-4b15-b01d-e686f385bb6e-3e100c59-5b0e-41ad-a4ca-4b71510c6769.webp?s=79f7bf1454c756ff4177bd77e4993306c5a7bcb9d035950da6a209db261ce59e"
    ]
  },
  {
    id: 5,
    name: "Label Katun Sablon",
    category: "Katun Sablon",
    price: 220000, oldPrice: 250000,
    spec: "Isi ±1000 pcs | Hasil Rapi & Pekat",
    description: "Label baju berbahan katun dengan sablon berkualitas tinggi. Hasil cetakan tajam, presisi, dan tahan lama. Kesan natural, eksklusif, dan ramah di kulit.",
    badge: "Terlaris",
    colors: ["Cream Sablon", "Hitam Sablon", "Putih Sablon"],
    sizes: ["1.3cm", "1.5cm", "2cm", "2.5cm", "3cm", "5cm"],
    combinations: {
      "Cream Sablon|1.3cm": 220000, "Cream Sablon|1.5cm": 230000,
      "Cream Sablon|2cm": 250000, "Cream Sablon|2.5cm": 280000,
      "Cream Sablon|3cm": 300000, "Cream Sablon|5cm": 350000,
      "Hitam Sablon|1.3cm": 250000, "Hitam Sablon|2cm": 280000,
      "Hitam Sablon|2.5cm": 310000, "Hitam Sablon|3cm": 330000,
      "Putih Sablon|1.3cm": 230000, "Putih Sablon|2cm": 260000,
      "Putih Sablon|2.5cm": 290000, "Putih Sablon|3cm": 310000
    },
    images: [
      "https://blogger.googleusercontent.com/img/a/AVvXsEgwCGboTLcNgNbsVMN01bxEBAnjmQzs5_IhsPYaGXkL7ycPDZNHJOeecCWqJpbuuNaWxVLceXs909_dpVAlOWu4WpruU9bfSFefO5Xzf79aeVTTyG9SFRihMq_4WG9fmGkL5AIdFV9ydlxI4ZjbhGgmrmMoyjM81j3YPNeXmBgI2xAUBJeFME0aFKAKy_-q",
      "https://blogger.googleusercontent.com/img/a/AVvXsEjjnedb76RsT0VFkF7k3YZUY1ugJLDtVylG_hOeElQ9sSN9_UYb5BDLBki_o3viHWTSsXOQEP4cYTEZwhzAgnnZI29limlhnCHIB8x5K0xylOlIzYE0XEW64QAuV_ST40K_vOwDX2Ncbiv5VZ6nK9RTGFi1kgq8cE5v-YUbq4bKcQU0Z5PFVrkBw_i-BvBj",
      "https://blogger.googleusercontent.com/img/a/AVvXsEgeyET6TA26qMh5lmWqXqJka8InO_47GFOwsfWty3asyeXvoBCvIRRV7DdS8qmMjv6NCuvwcucEB4LoYq19OEVbLKgApH2a1cuOYuXBOR6P8yG1QVKiEJMZTH5XDiBj29qxpMTMQKxwklY7YZMtqeUcZ4Z4THsD8dvuzD5UN_GmlnrZVsSZ-UN7VnNVwfzf"
    ]
  },
  {
    id: 6,
    name: "Label Woven / Bordir",
    category: "Label Bordir",
    price: 400000, oldPrice: 450000,
    spec: "Isi: ±1100pcs",
    description: "Label woven bordir premium. Woven Damask dengan tekstur benang rapat, halus, dan detail tajam. Tingkatkan nilai brand pakaian Anda.",
    badge: null,
    colors: ["2 warna"],
    sizes: ["1.8 x 6cm", "2.5 x 6cm", "3 x 6cm", "3.5 x 6cm", "4 x 6cm"],
    combinations: {
      "2 warna|1.8 x 6cm": 400000, "2 warna|2.5 x 6cm": 450000, "2 warna|3 x 6cm": 500000,
      "2 warna|3.5 x 6cm": 550000, "2 warna|4 x 6cm": 600000
    },
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRzYM7p0pse3FzqSV-RaYRd7VvY1ukVucJQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ37icMShIT90DvLkRG1I1VqJByFkBq-wVg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfX94kfLxRKzVmmSn6RYtOlnBP6YHVd-hU8g&s"
    ]
  },
  {
    id: 7,
    name: "Custom Cetak Label Baju",
    category: "Jasa Cetak",
    price: 150000, oldPrice: null,
    spec: "Harga Per Roll (Termasuk Pita + Sablon)",
    description: "Jasa cetak label baju kustom dengan brand Anda sendiri. Gratis biaya desain. Chat admin untuk konsultasi.",
    badge: "Promo",
    colors: ["Pita Katun (Hitam)", "Pita Satin (Emas)"],
    sizes: ["Lebar 1.3cm", "Lebar 2cm"],
    combinations: {
      "Pita Katun (Hitam)|Lebar 1.3cm": 150000, "Pita Katun (Hitam)|Lebar 2cm": 190000,
      "Pita Satin (Emas)|Lebar 1.3cm": 170000, "Pita Satin (Emas)|Lebar 2cm": 210000
    },
    images: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3863Mf6hP6WkncM-fvnUvH1PZENO9FOaH7LJuRXBkfqQcFuih2Vcjwp3mYWFD2EGRzIFxzhNt1XO4RGokenNGmsvXtDsLB2egR8vHXYvaA25yMv-Ut96K0DrVZEYBEfyULWVnSDr0AN0r/s2048/IMG_20201213_164859.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkMfFgX0Z_jld4miO8KwR-CAtL0ZTTwFDKnZEa-BGbiKrtNF0aYaO-c3P9RIxf2hm0DcCdpZNSscDqRaLOC_VoidCRsiXhMzOAK-s07zcxsCrcLe22_aBX9B2lVHQTJDbYLe98ONr5ze-I/s2048/IMG_20210206_150918.jpg",
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg27xtDoeJZfL-O3vc2QDF7cMZkH2XlPpt97nMH3rIA31w1VkKoUNDXgvgmNZMJV4lfYbKQKd-LK7PGIRgHIZSvAVe8tINBt8YGCs-dHpqgNmjjmllsAdcBCCUt8J7XzO_kb9wDep4UyGjI/s2048/IMG_20210206_151135.jpg"
    ]
  }
];

const paymentMethods = [
  { icon: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg", name: "Bank BCA", accountNumber: "7735309650", accountName: "ARIF WIJAYA" },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg", name: "Bank Mandiri", accountNumber: "9000031825285", accountName: "ARIF WIJAYA" },
  { icon: "https://i2.wp.com/www.pikpng.com/pngl/b/342-3425063_svg-logo-bank-bni-png-clipart.png", name: "Bank BNI", accountNumber: "0175181167", accountName: "SOLIHAT" },
  { icon: "https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg", name: "Bank BRI", accountNumber: "0334-01-076871-50-7", accountName: "SOLIHAT" }
];

const storeConfig = {
  name: "Toko Tashfiyah",
  whatsappNumber: "628998561811",
  address: "Tashfiyah Label Baju - Jl. Sakura Rt. 1 Rw. 14 No. 11 Mantung, Sanggrahan, Grogol, Sukoharjo",
  email: "tokomuslim2@gmail.com",
  hours: "Senin - Sabtu, 08:00 - 17:00 WIB",
  social: {
    instagram: "https://instagram.com/tokotashfiyah",
    shopee: "https://shopee.co.id/tokotashfiyah",
    website: "https://tokomuslimin2.blogspot.com/"
  }
};

const categories = [
  { name: "Pita Katun", icon: "🎀", filter: "Pita Katun" },
  { name: "Pita Satin", icon: "✨", filter: "Pita Satin" },
  { name: "Tafeta", icon: "🏷️", filter: "Tafeta" },
  { name: "Karet Elastis", icon: "🔗", filter: "Karet Elastis" },
  { name: "Katun Sablon", icon: "🖨️", filter: "Katun Sablon" },
  { name: "Label Bordir", icon: "🧵", filter: "Label Bordir" },
  { name: "Jasa Cetak", icon: "🎨", filter: "Jasa Cetak" },
  { name: "Semua", icon: "📦", filter: "Semua" }
];

// ── STATE ──
let cart = [];
let currentFilter = 'Semua';
let searchQuery = '';
let visibleCount = 6;

// Modal state
let currentProduct = null;
let modalQty = 1;
let modalSlide = 0;
let selectedColor = '';
let selectedSize = '';
let modalPrice = 0;

// ── HELPERS ──
function fmt(price) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
}

function toast(msg) {
  const wrap = document.getElementById('toast-wrap');
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = '✅ ' + msg;
  wrap.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
}

// ── PAGE NAVIGATION ──
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.page === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.showPage = showPage;

// ── CATEGORY GRID (Beranda) ──
function renderCategories() {
  const grid = document.getElementById('category-grid');
  grid.innerHTML = categories.map(c => `
    <div class="cat-item" onclick="goCategory('${c.filter}')">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-label">${c.name}</div>
    </div>
  `).join('');
}

window.goCategory = function(filter) {
  currentFilter = filter;
  searchQuery = '';
  visibleCount = 6;
  const si = document.getElementById('search-input');
  if (si) si.value = '';
  showPage('katalog');
  renderFilterPills();
  renderProducts();
};

// ── FILTER PILLS (Katalog) ──
function renderFilterPills() {
  const wrap = document.getElementById('filter-pills');
  const cats = ['Semua', ...new Set(products.map(p => p.category))];
  wrap.innerHTML = cats.map(c => `
    <button class="pill ${c === currentFilter ? 'active' : ''}" onclick="setFilter('${c}')">${c}</button>
  `).join('');
}

window.setFilter = function(cat) {
  currentFilter = cat;
  visibleCount = 6;
  renderFilterPills();
  renderProducts();
};

window.searchProducts = function() {
  searchQuery = document.getElementById('search-input').value.toLowerCase();
  visibleCount = 6;
  renderProducts();
};

window.loadMoreProducts = function() {
  visibleCount += 6;
  renderProducts();
};

// ── PRODUCT CARD RENDER ──
function buildCard(product, index) {
  const badge = product.badge ? `<span class="p-badge ${product.badge.toLowerCase()}">${product.badge}</span>` : '';
  const old = product.oldPrice ? `<div class="p-old">${fmt(product.oldPrice)}</div>` : '';

  return `
    <div class="p-card" data-id="${product.id}">
      <div class="p-slider" id="slider-${product.id}">
        ${badge}
        <div class="slides" data-idx="0">
          ${product.images.map(img => `<div class="slide"><img src="${img}" alt="${product.name}" loading="lazy"></div>`).join('')}
        </div>
        <button class="slide-nav prev" onclick="cardSlide(${product.id},-1)">‹</button>
        <button class="slide-nav next" onclick="cardSlide(${product.id},1)">›</button>
        <div class="p-dots">
          ${product.images.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" onclick="cardGo(${product.id},${i})"></button>`).join('')}
        </div>
      </div>
      <div class="p-info">
        <div class="p-cat">${product.category}</div>
        <div class="p-name">${product.name}</div>
        <div class="p-price-row">
          <div class="p-price">${fmt(product.price)}</div>
          ${old}
        </div>
        <div class="p-actions">
          <button class="btn btn-wa" onclick="openModal(${product.id})">Beli</button>
          <button class="btn btn-outline-sm" onclick="openModal(${product.id})">Detail</button>
        </div>
      </div>
    </div>
  `;
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  const loadWrap = document.getElementById('load-more-wrap');

  let list = currentFilter === 'Semua' ? products : products.filter(p => p.category === currentFilter);
  if (searchQuery.trim()) list = list.filter(p => p.name.toLowerCase().includes(searchQuery));

  if (list.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#888;padding:40px 0;font-style:italic">Produk tidak ditemukan.</p>';
    loadWrap.style.display = 'none';
    return;
  }

  const show = list.slice(0, visibleCount);
  grid.innerHTML = show.map((p, i) => buildCard(p, i)).join('');
  loadWrap.style.display = visibleCount >= list.length ? 'none' : 'block';
  initSwipe();
}

function renderFeatured() {
  const wrap = document.getElementById('featured-products');
  const featured = products.slice(0, 4);
  wrap.innerHTML = featured.map((p, i) => buildCard(p, i)).join('');
}

// ── CARD SLIDER ──
window.cardSlide = function(id, dir) {
  const slider = document.getElementById('slider-' + id);
  if (!slider) return;
  const slides = slider.querySelector('.slides');
  const dots = slider.querySelectorAll('.dot');
  const total = slider.querySelectorAll('.slide').length;
  let idx = parseInt(slides.dataset.idx);
  idx = (idx + dir + total) % total;
  slides.style.transform = `translateX(-${idx * 100}%)`;
  slides.dataset.idx = idx;
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
};

window.cardGo = function(id, i) {
  const slider = document.getElementById('slider-' + id);
  if (!slider) return;
  const slides = slider.querySelector('.slides');
  const dots = slider.querySelectorAll('.dot');
  slides.style.transform = `translateX(-${i * 100}%)`;
  slides.dataset.idx = i;
  dots.forEach((d, j) => d.classList.toggle('active', j === i));
};

function initSwipe() {
  document.querySelectorAll('.p-slider').forEach(slider => {
    let sx = 0;
    const id = parseInt(slider.id.replace('slider-', ''));
    slider.addEventListener('touchstart', e => sx = e.touches[0].clientX, { passive: true });
    slider.addEventListener('touchend', e => {
      const diff = sx - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) cardSlide(id, diff > 0 ? 1 : -1);
    }, { passive: true });
  });
}

// ── PRODUCT MODAL ──
window.openModal = function(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  modalQty = 1;
  modalSlide = 0;
  selectedColor = (p.colors && p.colors.length) ? p.colors[0] : '';
  selectedSize = (p.sizes && p.sizes.length) ? p.sizes[0] : '';

  // Slides
  document.getElementById('modal-slides').innerHTML = p.images.map(img => `<div class="slide"><img src="${img}" alt="${p.name}"></div>`).join('');
  document.getElementById('modal-dots').innerHTML = p.images.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" onclick="modalGo(${i})"></button>`).join('');
  document.getElementById('modal-slides').style.transform = 'translateX(0)';

  // Info
  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-spec').textContent = p.spec || '';
  document.getElementById('modal-desc').textContent = p.description;
  document.getElementById('modal-qty').textContent = modalQty;

  // Variants
  const vw = document.getElementById('modal-variants-wrap');
  vw.innerHTML = (p.colors && p.colors.length) ? `
    <div class="var-title">Warna/Tipe:</div>
    <div class="var-list" id="color-list">
      ${p.colors.map(c => `<button class="var-btn ${c === selectedColor ? 'active' : ''}" onclick="pickColor('${c}')">${c}</button>`).join('')}
    </div>
  ` : '';

  const sw = document.getElementById('modal-sizes-wrap');
  sw.innerHTML = (p.sizes && p.sizes.length) ? `
    <div class="var-title">Ukuran:</div>
    <div class="var-list" id="size-list">
      ${p.sizes.map(s => `<button class="var-btn ${s === selectedSize ? 'active' : ''}" onclick="pickSize('${s}')">${s}</button>`).join('')}
    </div>
  ` : '';

  updateModalPrice();

  // Button handlers
  document.getElementById('modal-cart-btn').onclick = () => {
    if (!modalPrice) { toast('Kombinasi tidak tersedia!'); return; }
    addToCart(p.id, modalQty, variantName(), modalPrice);
    closeModal();
    toast(`${p.name} ditambahkan ke keranjang`);
  };
  document.getElementById('modal-wa-btn').onclick = () => {
    if (!modalPrice) { toast('Kombinasi tidak tersedia!'); return; }
    waOrder(p, modalQty, variantName(), modalPrice);
  };

  document.body.classList.add('lock');
  document.getElementById('product-modal').classList.add('active');
};

function updateModalPrice() {
  const el = document.getElementById('modal-price');
  const cartBtn = document.getElementById('modal-cart-btn');
  const waBtn = document.getElementById('modal-wa-btn');

  if (currentProduct.combinations) {
    const key = `${selectedColor}|${selectedSize}`;
    const price = currentProduct.combinations[key];
    if (price) {
      modalPrice = price;
      el.textContent = fmt(price);
      el.style.color = 'var(--primary)';
      cartBtn.disabled = false; waBtn.disabled = false;
      cartBtn.style.opacity = '1'; waBtn.style.opacity = '1';
    } else {
      modalPrice = 0;
      el.textContent = 'Tidak Tersedia';
      el.style.color = '#E74C3C';
      cartBtn.disabled = true; waBtn.disabled = true;
      cartBtn.style.opacity = '0.5'; waBtn.style.opacity = '0.5';
    }
  } else {
    modalPrice = currentProduct.price;
    el.textContent = fmt(modalPrice);
  }
}

function variantName() {
  if (selectedColor && selectedSize) return `${selectedColor} - ${selectedSize}`;
  return selectedColor || selectedSize || 'Satu Ukuran';
}

window.pickColor = function(c) {
  selectedColor = c;
  updateModalPrice();
  document.querySelectorAll('#color-list .var-btn').forEach(b => b.classList.toggle('active', b.textContent.trim() === c));
};

window.pickSize = function(s) {
  selectedSize = s;
  updateModalPrice();
  document.querySelectorAll('#size-list .var-btn').forEach(b => b.classList.toggle('active', b.textContent.trim() === s));
};

window.slideModal = function(dir) {
  if (!currentProduct) return;
  const total = currentProduct.images.length;
  modalSlide = (modalSlide + dir + total) % total;
  document.getElementById('modal-slides').style.transform = `translateX(-${modalSlide * 100}%)`;
  document.querySelectorAll('#modal-dots .dot').forEach((d, i) => d.classList.toggle('active', i === modalSlide));
};

window.modalGo = function(i) { modalSlide = i; slideModal(0); };

window.closeModal = function() {
  document.getElementById('product-modal').classList.remove('active');
  document.body.classList.remove('lock');
  currentProduct = null;
};

window.updateQty = function(d) {
  modalQty = Math.max(1, modalQty + d);
  document.getElementById('modal-qty').textContent = modalQty;
};

// ── CART ──
function loadCart() {
  const saved = localStorage.getItem('tashfiyah_cart');
  if (saved) cart = JSON.parse(saved);
  updateBadge();
}

function saveCart() {
  localStorage.setItem('tashfiyah_cart', JSON.stringify(cart));
  updateBadge();
}

function updateBadge() {
  const b = document.getElementById('cart-badge');
  if (b) {
    const n = cart.reduce((s, i) => s + i.quantity, 0);
    b.textContent = n;
    b.style.transform = 'scale(1.3)';
    setTimeout(() => b.style.transform = 'scale(1)', 200);
  }
}

function addToCart(id, qty, variant, price) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const existing = cart.find(i => i.id === id && i.variant === variant);
  if (existing) { existing.quantity += qty; }
  else { cart.push({ id: p.id, name: p.name, price, image: p.images[0], quantity: qty, variant }); }
  saveCart();
}

window.openCart = function() {
  renderCart();
  document.getElementById('cart-panel').classList.add('open');
  document.getElementById('cart-overlay').classList.add('active');
  document.body.classList.add('lock');
};

window.closeCart = function() {
  document.getElementById('cart-panel').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('active');
  document.body.classList.remove('lock');
};

window.cartQty = function(i, d) {
  cart[i].quantity += d;
  if (cart[i].quantity <= 0) cart.splice(i, 1);
  saveCart(); renderCart();
};

window.cartRm = function(i) {
  cart.splice(i, 1);
  saveCart(); renderCart();
};

function renderCart() {
  const body = document.getElementById('cart-body');
  const totalEl = document.getElementById('cart-total');

  if (!cart.length) {
    body.innerHTML = '<div class="cart-empty">Keranjang masih kosong.</div>';
    totalEl.textContent = 'Rp0';
    return;
  }

  let total = 0;
  body.innerHTML = cart.map((item, i) => {
    const sub = item.price * item.quantity;
    total += sub;
    const varHtml = item.variant && item.variant !== 'Satu Ukuran' ? `<div class="cart-item-var">${item.variant}</div>` : '';
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-body">
          <div class="cart-item-name">${item.name}</div>
          ${varHtml}
          <div class="cart-item-price">${fmt(item.price)}</div>
          <div class="cart-item-row">
            <div class="cart-item-qty">
              <button onclick="cartQty(${i},-1)">−</button>
              <span>${item.quantity}</span>
              <button onclick="cartQty(${i},1)">+</button>
            </div>
            <button class="cart-rm" onclick="cartRm(${i})">Hapus</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  totalEl.textContent = fmt(total);
}

// ── WHATSAPP ──
window.openWhatsApp = function() {
  window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum Toko Tashfiyah, saya mau tanya-tanya nih kak.")}`, '_blank');
};

function waOrder(product, qty, variant, price) {
  const total = price * qty;
  const v = variant !== 'Satu Ukuran' ? `(${variant})` : '';
  const msg = `Assalamu'alaikum, Toko Tashfiyah.\nSaya mau order:\n\n=== ORDER ===\n1. ${product.name} ${v}\n   ${qty} x ${fmt(price)} = ${fmt(total)}\n\nTOTAL: *${fmt(total)}*\n\nAlamat:\n(Tulis disini)\n\nMohon hitungkan ongkir ya. Terima kasih.`;
  window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.checkoutWA = function() {
  if (!cart.length) { toast('Keranjang kosong!'); return; }
  let msg = `Assalamu'alaikum, Toko Tashfiyah.\nSaya mau checkout:\n\n=== CART ===\n`;
  let total = 0;
  cart.forEach((item, i) => {
    const sub = item.price * item.quantity;
    total += sub;
    const v = item.variant !== 'Satu Ukuran' ? `[${item.variant}]` : '';
    msg += `${i + 1}. ${item.name} ${v}\n    ${item.quantity} x ${fmt(item.price)} = ${fmt(sub)}\n`;
  });
  msg += `\nTOTAL: *${fmt(total)}*\n\nAlamat:\n(Tulis alamat lengkap)\n\nMohon info ongkir dan rekening. Terima kasih.`;
  window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
};

// ── RENDER SECTIONS ──
function renderPayments() {
  const list = document.getElementById('payment-list');
  list.innerHTML = paymentMethods.map(m => `
    <div class="pay-card">
      <div class="pay-top">
        <div class="pay-icon"><img src="${m.icon}" alt="${m.name}"></div>
        <div class="pay-name">${m.name}</div>
      </div>
      <div class="pay-detail">No. Rekening<br><strong>${m.accountNumber}</strong></div>
      <div class="pay-detail">Atas Nama<br><strong>${m.accountName}</strong></div>
      <button class="copy-btn" onclick="copyNum('${m.accountNumber}')">📋 Salin Rekening</button>
    </div>
  `).join('');
}

window.copyNum = function(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => toast('Nomor disalin!')).catch(() => fallbackCopy(text));
  } else { fallbackCopy(text); }
};

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); toast('Nomor disalin!'); } catch { toast('Gagal menyalin.'); }
  document.body.removeChild(ta);
}

function renderTrust() {
  const grid = document.getElementById('trust-grid');
  const items = [
    { i: '⭐️', t: 'Grade A Quality', d: 'Bahan tidak luntur/brudul.' },
    { i: '🛒', t: 'Ready Stock', d: 'Pengerjaan cepat & tepat waktu.' },
    { i: '💰', t: 'Harga Kompetitif', d: 'Cocok untuk konveksi besar.' },
    { i: '💬', t: 'Konsultasi Gratis', d: 'Bantu pilih spesifikasi via WA.' }
  ];
  grid.innerHTML = items.map(x => `
    <div class="trust-card">
      <div class="trust-icon">${x.i}</div>
      <h4>${x.t}</h4>
      <p>${x.d}</p>
    </div>
  `).join('');
}

function renderContact() {
  document.getElementById('contact-address').textContent = storeConfig.address;
  document.getElementById('contact-email').textContent = storeConfig.email;
  document.getElementById('contact-phone').textContent = '+' + storeConfig.whatsappNumber;
  document.getElementById('contact-hours').textContent = storeConfig.hours;
}

function renderSocial() {
  const grid = document.getElementById('social-grid');
  grid.innerHTML = `
    <a href="${storeConfig.social.instagram}" target="_blank" class="social-item">
      <div class="s-icon ig">📸</div>
      <div class="s-name">Instagram</div>
    </a>
    <a href="${storeConfig.social.shopee}" target="_blank" class="social-item">
      <div class="s-icon shopee">🛍️</div>
      <div class="s-name">Shopee</div>
    </a>
    <a href="${storeConfig.social.website}" target="_blank" class="social-item">
      <div class="s-icon web">🌐</div>
      <div class="s-name">Website</div>
    </a>
  `;
}

// ── GLOBAL EVENTS ──
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeCart(); }
});

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderCategories();
  renderFilterPills();
  renderProducts();
  renderFeatured();
  renderPayments();
  renderTrust();
  renderContact();
  renderSocial();
});
