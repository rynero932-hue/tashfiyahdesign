/* ============================================
   TOKO TASHFIYAH - Script
   Modern Islamic Store E-Commerce (Matrix Variant + Deskripsi Baru)
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
    description: "Lagi cari label baju yang eco-friendly dan kelihatan mewah? ✨ Gunakan Label Katun Polos Cream kami! Bahannya lembut banget, nggak bikin gatal, dan tersedia lengkap dalam ukuran 1,3cm sampai 5cm. Plus, tiap roll isinya 100 meter lho, jadi jauh lebih hemat buat stok produksi kamu. Bikin brand kamu makin aesthetic sekarang juga! 🏷️.",
    colors: ["Label Katun Cream", "Label Katun Hitam", "Label Katun Putih"],
    sizes: ["1.3cm", "1.5cm", "2cm", "2.5cm", "3cm", "5cm"],
    combinations: {
      "Label Katun Cream|1.3cm": 92000,
      "Label Katun Cream|1.5cm": 110000,
      "Label Katun Cream|2cm": 134000,
      "Label Katun Cream|2.5cm": 159000,
      "Label Katun Cream|3cm": 199000,
      "Label Katun Cream|5cm": 250000,
      "Label Katun Hitam|1.3cm": 125000,
      "Label Katun Hitam|2cm": 169000,
      "Label Katun Hitam|2.5cm": 220000,
      "Label Katun Hitam|3cm": 250000,
      "Label Katun Putih|1.3cm": 95000,
      "Label Katun Putih|2cm": 165000,
      "Label Katun Putih|2.5cm": 220000,
      "Label Katun Putih|3cm": 250000
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
    price: 40000,
    oldPrice: 45000,
    spec: "Permukaan Mengkilap | Panjang: ± 180 Meter",
    description: "Setiap roll memiliki panjang kurang lebih 180 meter, menjadikannya pilihan sangat ekonomis bagi pelaku usaha konveksi, jasa pembungkus kado, maupun kerajinan tangan. Pita ini sangat cocok digunakan sebagai bahan label baju, dekorasi hampers, buket bunga, hingga aksesoris rambut. Bahan kuat, tidak mudah terurai, dan warnanya tidak mudah pudar.",
    colors: ["Satin Putih", "Satin Hitam"],
    sizes: ["1.3cm", "2cm", "2.5cm", "3cm", "4cm", "5cm"],
    combinations: {
      "Satin Putih|1.3cm": 40000,
      "Satin Putih|2cm": 50000,
      "Satin Putih|2.5cm": 65000,
      "Satin Putih|3cm": 75000,
      "Satin Putih|4cm": 95000,
      "Satin Putih|5cm": 125000,
      "Satin Hitam|1.3cm": 45000,
      "Satin Hitam|2cm": 55000,
      "Satin Hitam|2.5cm": 70000,
      "Satin Hitam|3cm": 80000,
      "Satin Hitam|4cm": 100000
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
    price: 40000,
    oldPrice: 45000,
    spec: "Tekstur Halus | Panjang: ± 180 Meter",
    description: "Label tafeta berkualitas tinggi dengan tekstur bahan yang khas dan permukaan yang dapat dicetak dengan jelas. Produk ini merupakan pilihan standar industri untuk label pakaian karena sifatnya yang kuat, tahan cuci, dan memiliki daya serap tinta yang baik saat diproses menggunakan printer label atau sablon.",
    colors: ["Putih"],
    sizes: ["1.3cm", "2cm", "2.5cm", "3cm", "4cm", "5cm"],
    combinations: {
      "Putih|1.3cm": 40000,
      "Putih|2cm": 50000,
      "Putih|2.5cm": 65000,
      "Putih|3cm": 75000,
      "Putih|4cm": 95000,
      "Putih|5cm": 125000
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
    price: 84000,
    oldPrice: 90000,
    spec: "Bahan Nylon | Panjang: ± 30 Meter",
    description: "Karet elastis kualitas premium dari brand terpercaya YKK yang sudah terjamin kekuatan dan daya tahannya. Produk ini memiliki elastisitas yang stabil, tidak mudah kendor meskipun sudah dicuci berkali-kali, dan sangat nyaman saat diaplikasikan pada pakaian.",
    colors: ["Putih Natural"],
    sizes: ["2cm", "2.5cm", "3cm", "3.8cm", "5cm"],
    combinations: {
      "Putih Natural|2cm": 84000,
      "Putih Natural|2.5cm": 92000,
      "Putih Natural|3cm": 98000,
      "Putih Natural|3.8cm": 145000,
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
    price: 220000,
    oldPrice: 250000,
    spec: "Isi ±1000 pcs | Hasil Rapi & Pekat",
    description: "Label baju berbahan katun berkualitas yang memberikan kesan natural, eksklusif, dan ramah di kulit. Menggunakan teknik sablon berkualitas tinggi, hasil cetakan logo dan tulisan terlihat tajam, presisi, serta tahan lama.",
    colors: ["Cream Sablon", "Hitam Sablon", "Putih Sablon"],
    sizes: ["1.3cm", "1.5cm", "2cm", "2.5cm", "3cm", "5cm"],
    combinations: {
      "Cream Sablon|1.3cm": 220000,
      "Cream Sablon|1.5cm": 230000,
      "Cream Sablon|2cm": 250000,
      "Cream Sablon|2.5cm": 280000,
      "Cream Sablon|3cm": 300000,
      "Cream Sablon|5cm": 350000,
      "Hitam Sablon|1.3cm": 250000,
      "Hitam Sablon|2cm": 280000,
      "Hitam Sablon|2.5cm": 310000,
      "Hitam Sablon|3cm": 330000,
      "Putih Sablon|1.3cm": 230000,
      "Putih Sablon|2cm": 260000,
      "Putih Sablon|2.5cm": 290000,
      "Putih Sablon|3cm": 310000
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
    price: 400000,
    oldPrice: 450000,
    spec: "Isi: ±1100pcs",
    description: "Tingkatkan nilai brand pakaian Anda dengan label woven bordir berkualitas premium. Kami menyediakan dua jenis pilihan label yaitu Woven Damask dengan tekstur benang yang lebih rapat, halus, dan detail tajam.",
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
  }
];

// ── PAYMENT DATA ──
const paymentMethods = [
  { icon: `<img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" alt="BCA" style="height: 24px;">`, name: "Bank BCA", accountNumber: "7735309650", accountName: "ARIF WIJAYA" },
  { icon: `<img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" alt="Mandiri" style="height: 24px;">`, name: "Bank Mandiri", accountNumber: "9000031825285", accountName: "ARIF WIJAYA" },
  { icon: `<img src="https://i2.wp.com/www.pikpng.com/pngl/b/342-3425063_svg-logo-bank-bni-png-clipart.png" alt="BNI" style="height: 24px;">`, name: "Bank BNI", accountNumber: "0175181167", accountName: "SOLIHAT" },
  { icon: `<img src="https://upload.wikimedia.org/wikipedia/commons/6/68/BANK_BRI_logo.svg" alt="BRI" style="height: 24px;">`, name: "Bank BRI", accountNumber: "0334-01-076871-50-7", accountName: "SOLIHAT" }
];

// ── STORE CONFIG ──
const storeConfig = {
  name: "Toko Tashfiyah",
  whatsappNumber: "628998561811",
  address: "Tashfiyah Label Baju - Jl. Sakura Rt. 1 Rw. 14 No. 11 Mantung, Sanggrahan, Grogol, Sukoharjo",
  email: "tokomuslim2@gmail.com",
  operatingHours: "Senin - Sabtu, 08:00 - 21:00 WIB",
  socialMedia: {
    instagram: "https://www.instagram.com/tasfiyahdesign/",
    shopee: "https://shopee.co.id/tashfiyahdesign",
    website: "https://tokomuslimin2.blogspot.com/"
  }
};

// ── STATE ──
let cart = [];
let currentCategory = 'Semua';
let visibleProductsCount = 6; 
let searchQuery = '';

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
}

// ── FILTER RENDER ──
function renderCategories() {
  const filterContainer = document.getElementById('category-filters');
  if (!filterContainer) return;
  const categories = ['Semua', ...new Set(products.map(p => p.category))];
  filterContainer.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === currentCategory ? 'active' : ''}" onclick="filterProducts('${cat}')">${cat}</button>
  `).join('');
}

function filterProducts(category) {
  currentCategory = category;
  visibleProductsCount = 6; 
  document.getElementById('search-input').value = ''; 
  searchQuery = '';
  renderCategories(); 
  renderProducts();   
}

function loadMoreProducts() {
  visibleProductsCount += 6; 
  renderProducts();
}

function searchProducts() {
  searchQuery = document.getElementById('search-input').value.toLowerCase();
  visibleProductsCount = 6; 
  renderProducts();
}

// ── PRODUCT RENDER ──
function renderProducts() {
  const grid = document.getElementById('products-grid');
  const loadMoreBtn = document.getElementById('load-more-container');
  if (!grid) return;

  let filteredProducts = currentCategory === 'Semua' 
    ? products 
    : products.filter(p => p.category === currentCategory);

  if (searchQuery.trim() !== '') {
    filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchQuery));
  }

  if (filteredProducts.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: #888; font-style:italic; padding: 40px 0;">Maaf, produk tidak ditemukan.</p>`;
    loadMoreBtn.style.display = 'none';
    return;
  }

  const productsToShow = filteredProducts.slice(0, visibleProductsCount);

  if (visibleProductsCount >= filteredProducts.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }

  grid.innerHTML = productsToShow.map((product, index) => {
    const badgeHtml = product.badge ? `<span class="product-badge ${product.badge.toLowerCase().replace(" ", "-")}">${product.badge}</span>` : '';
    const oldPriceHTML = product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : '';

    return `
      <div class="product-card fade-in" style="animation-delay: ${(index % 4) * 0.1}s" data-id="${product.id}">
        <div class="product-slider" id="slider-${product.id}">
          ${badgeHtml}
          <div class="slides-wrapper" data-current="0">
            ${product.images.map(img => `<div class="slide"><img src="${img}" alt="${product.name}" loading="lazy"></div>`).join('')}
          </div>
          <button class="slider-btn prev" onclick="slideProduct(${product.id}, -1)">‹</button>
          <button class="slider-btn next" onclick="slideProduct(${product.id}, 1)">›</button>
          <div class="slider-dots">
            ${product.images.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${product.id}, ${i})"></button>`).join('')}
          </div>
        </div>
        <div class="product-info">
          <div class="product-category">${product.category}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-price-row">
            <div class="product-price">${formatPrice(product.price)}</div>
            ${oldPriceHTML}
          </div>
          <div class="product-actions">
            <button class="btn btn-whatsapp btn-sm" onclick="orderWhatsAppDirect(${product.id})">Beli Langsung</button>
            <button class="btn btn-outline btn-sm" onclick="viewProduct(${product.id})">Pilih Varian</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  initTouchSwipe();
}

// ── PRODUCT SLIDER LOGIC (CARD) ──
function slideProduct(productId, direction) {
  const slider = document.getElementById(`slider-${productId}`);
  if (!slider) return;
  const wrapper = slider.querySelector('.slides-wrapper');
  const dots = slider.querySelectorAll('.dot');
  const totalSlides = slider.querySelectorAll('.slide').length;
  let current = parseInt(wrapper.dataset.current);

  current += direction;
  if (current < 0) current = totalSlides - 1;
  if (current >= totalSlides) current = 0;

  wrapper.style.transform = `translateX(-${current * 100}%)`;
  wrapper.dataset.current = current;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
}

function goToSlide(productId, index) {
  const slider = document.getElementById(`slider-${productId}`);
  if (!slider) return;
  const wrapper = slider.querySelector('.slides-wrapper');
  const dots = slider.querySelectorAll('.dot');
  wrapper.style.transform = `translateX(-${index * 100}%)`;
  wrapper.dataset.current = index;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function initTouchSwipe() {
  document.querySelectorAll('.product-slider').forEach(slider => {
    let startX = 0, endX = 0;
    const productId = parseInt(slider.id.replace('slider-', ''));
    slider.addEventListener('touchstart', e => startX = e.touches[0].clientX, { passive: true });
    slider.addEventListener('touchend', e => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50) slideProduct(productId, diff > 0 ? 1 : -1);
    }, { passive: true });
  });
}

function orderWhatsAppDirect(productId) { viewProduct(productId); }
function openWhatsApp() { window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent("Assalamu'alaikum Toko Tashfiyah, saya mau tanya-tanya nih kak.")}`, '_blank'); }

// ── PRODUCT MODAL LOGIC ──
let currentProduct = null;
let currentQuantity = 1;
let currentModalSlide = 0;

let selectedColorName = null;
let selectedSizeName = null;
let finalCalculatedPrice = 0;

function viewProduct(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentProduct = product;
  currentQuantity = 1;
  currentModalSlide = 0;
  
  selectedColorName = (product.colors && product.colors.length > 0) ? product.colors[0] : '';
  selectedSizeName = (product.sizes && product.sizes.length > 0) ? product.sizes[0] : '';
  
  updateModalPriceDisplay();

  const slidesWrapper = document.getElementById('modal-slides-wrapper');
  const dotsWrapper = document.getElementById('modal-slider-dots');
  if (slidesWrapper && dotsWrapper) {
    slidesWrapper.innerHTML = product.images.map(img => `<div class="slide"><img src="${img}" alt="${product.name}"></div>`).join('');
    dotsWrapper.innerHTML = product.images.map((_, i) => `<button class="dot ${i === 0 ? 'active' : ''}" onclick="goToModalSlide(${i})"></button>`).join('');
    slidesWrapper.style.transform = `translateX(0%)`;
  }

  document.getElementById('modal-title').textContent = product.name;
  document.getElementById('modal-spec').textContent = product.spec || "";
  document.getElementById('modal-desc').textContent = product.description;
  document.getElementById('modal-qty').textContent = currentQuantity;

  const variantsContainer = document.getElementById('modal-variants-container');
  if (product.colors && product.colors.length > 0) {
    variantsContainer.innerHTML = `
      <div class="modal-variants-title">Pilih Warna/Tipe:</div>
      <div class="modal-variants-list" id="modal-colors-list">
        ${product.colors.map(c => `
          <button class="variant-btn ${c === selectedColorName ? 'active' : ''}" onclick="selectColor('${c}')">${c}</button>
        `).join('')}
      </div>
    `;
  } else { variantsContainer.innerHTML = ''; }

  const sizesContainer = document.getElementById('modal-sizes-container');
  if (product.sizes && product.sizes.length > 0) {
    sizesContainer.innerHTML = `
      <div class="modal-variants-title" style="margin-top:0;">Pilih Ukuran:</div>
      <div class="modal-variants-list" id="modal-sizes-list">
        ${product.sizes.map(s => `
          <button class="variant-btn ${s === selectedSizeName ? 'active' : ''}" onclick="selectSize('${s}')">${s}</button>
        `).join('')}
      </div>
    `;
  } else { sizesContainer.innerHTML = ''; }

  const addCartBtn = document.getElementById('modal-add-cart-btn');
  const waBtn = document.getElementById('modal-wa-btn');

  addCartBtn.onclick = () => {
    if (finalCalculatedPrice === 0) { showToast("Varian ini sedang tidak tersedia."); return; }
    let fullVariantName = buildFullVariantName();
    addToCart(product.id, currentQuantity, fullVariantName, finalCalculatedPrice);
    closeModal();
    showToast(`Ditambahkan ke keranjang!`);
  };

  waBtn.onclick = () => {
    if (finalCalculatedPrice === 0) { showToast("Varian ini sedang tidak tersedia."); return; }
    let fullVariantName = buildFullVariantName();
    orderWhatsAppModal(product, currentQuantity, fullVariantName, finalCalculatedPrice);
  };

  document.body.classList.add('modal-open');
  document.getElementById('product-modal').classList.add('active');
}

function updateModalPriceDisplay() {
  const priceDisplay = document.getElementById('modal-price');
  const addCartBtn = document.getElementById('modal-add-cart-btn');
  const waBtn = document.getElementById('modal-wa-btn');

  if (currentProduct.combinations) {
    let comboKey = `${selectedColorName}|${selectedSizeName}`;
    if(!selectedSizeName && selectedColorName) comboKey = `${selectedColorName}|`; 
    if(selectedSizeName && !selectedColorName) comboKey = `|${selectedSizeName}`;

    let price = currentProduct.combinations[comboKey];

    if (price) {
      finalCalculatedPrice = price;
      priceDisplay.textContent = formatPrice(price);
      priceDisplay.style.color = "var(--primary)";
      addCartBtn.disabled = false;
      waBtn.disabled = false;
      addCartBtn.style.opacity = "1";
      waBtn.style.opacity = "1";
    } else {
      finalCalculatedPrice = 0;
      priceDisplay.textContent = "Tidak Tersedia";
      priceDisplay.style.color = "#E74C3C";
      addCartBtn.disabled = true;
      waBtn.disabled = true;
      addCartBtn.style.opacity = "0.5";
      waBtn.style.opacity = "0.5";
    }
  } else {
    finalCalculatedPrice = currentProduct.price;
    priceDisplay.textContent = formatPrice(finalCalculatedPrice);
  }
}

function buildFullVariantName() {
  if(selectedColorName && selectedSizeName) return `${selectedColorName} - ${selectedSizeName}`;
  if(selectedColorName) return selectedColorName;
  if(selectedSizeName) return selectedSizeName;
  return 'Satu Ukuran';
}

window.selectColor = function(colorName) {
  selectedColorName = colorName;
  updateModalPriceDisplay();
  const btns = document.querySelectorAll('#modal-colors-list .variant-btn');
  btns.forEach(btn => btn.classList.toggle('active', btn.textContent.trim() === colorName));
}

window.selectSize = function(sizeName) {
  selectedSizeName = sizeName;
  updateModalPriceDisplay();
  const btns = document.querySelectorAll('#modal-sizes-list .variant-btn');
  btns.forEach(btn => btn.classList.toggle('active', btn.textContent.trim() === sizeName));
}

function slideModal(direction) {
  if (!currentProduct) return;
  const totalSlides = currentProduct.images.length;
  currentModalSlide += direction;
  if (currentModalSlide < 0) currentModalSlide = totalSlides - 1;
  if (currentModalSlide >= totalSlides) currentModalSlide = 0;
  updateModalSlider();
}

function goToModalSlide(index) { currentModalSlide = index; updateModalSlider(); }

function updateModalSlider() {
  document.getElementById('modal-slides-wrapper').style.transform = `translateX(-${currentModalSlide * 100}%)`;
  document.querySelectorAll('#modal-slider-dots .dot').forEach((dot, i) => dot.classList.toggle('active', i === currentModalSlide));
}

function closeModal() { 
  document.getElementById('product-modal').classList.remove('active'); 
  document.body.classList.remove('modal-open');
  currentProduct = null; 
}

function updateQuantity(change) {
  currentQuantity += change;
  if (currentQuantity < 1) currentQuantity = 1;
  document.getElementById('modal-qty').textContent = currentQuantity;
}

// ── CART LOGIC ──
function loadCart() { const savedCart = localStorage.getItem('tashfiyah_cart'); if (savedCart) cart = JSON.parse(savedCart); updateCartBadge(); }
function saveCart() { localStorage.setItem('tashfiyah_cart', JSON.stringify(cart)); updateCartBadge(); }
function updateCartBadge() {
  const badge = document.querySelector('.cart-count');
  if (badge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.transform = 'scale(1.3)';
    setTimeout(() => badge.style.transform = 'scale(1)', 200);
  }
}

function openCart() { renderCartItems(); document.getElementById('cart-panel').classList.add('open'); document.getElementById('cart-overlay').classList.add('active'); document.body.classList.add('modal-open'); }
function closeCart() { document.getElementById('cart-panel').classList.remove('open'); document.getElementById('cart-overlay').classList.remove('active'); document.body.classList.remove('modal-open'); }

function addToCart(productId, qty, fullVariantName, variantPrice) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existingItem = cart.find(item => item.id === productId && item.variant === fullVariantName);
  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ id: product.id, name: product.name, price: variantPrice, image: product.images[0], quantity: qty, variant: fullVariantName });
  }
  saveCart();
}

function updateCartItemQty(index, change) { cart[index].quantity += change; if (cart[index].quantity <= 0) cart.splice(index, 1); saveCart(); renderCartItems(); }
function removeFromCart(index) { cart.splice(index, 1); saveCart(); renderCartItems(); }

function renderCartItems() {
  const container = document.getElementById('cart-items-container');
  const totalPriceEl = document.getElementById('cart-total-price');

  if (cart.length === 0) { container.innerHTML = `<div class="cart-empty">Keranjang Anda masih kosong.</div>`; totalPriceEl.textContent = 'Rp0'; return; }

  let html = ''; let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity; total += itemTotal;
    const variantHtml = item.variant && item.variant !== 'Satu Ukuran' ? `<span class="cart-item-variant">${item.variant}</span>` : '';
    html += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          ${variantHtml}
          <div class="cart-item-price">${formatPrice(item.price)}</div>
          <div class="cart-actions-wrapper">
            <div class="cart-item-qty-controls">
              <button class="cart-qty-btn" onclick="updateCartItemQty(${index}, -1)">-</button>
              <div class="cart-qty-val">${item.quantity}</div>
              <button class="cart-qty-btn" onclick="updateCartItemQty(${index}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">Hapus</button>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
  totalPriceEl.textContent = formatPrice(total);
}

// ── CHECKOUT WA ──
function orderWhatsAppModal(product, qty, fullVariantName, variantPrice) {
  const total = variantPrice * qty;
  let varianText = (fullVariantName && fullVariantName !== 'Satu Ukuran') ? `(${fullVariantName})` : '';
  const message = `Assalamu'alaikum, Toko Tashfiyah.\nSaya mau order ini kak:\n\n=== ORDER DETAIL ===\n1. ${product.name} ${varianText}\n   ${qty} x ${formatPrice(variantPrice)} = ${formatPrice(total)}\n\nTOTAL: *${formatPrice(total)}*\n\nAlamat pengiriman:\n(Tulis disini)\n\nApakah stoknya aman kak?`;
  window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

function checkoutWhatsApp() {
  if (cart.length === 0) { showToast("Keranjang kosong!"); return; }
  let message = `Assalamu'alaikum, Toko Tashfiyah.\nSaya mau checkout pesanan saya nih kak:\n\n=== CART DETAIL ===\n`;
  let total = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity; total += itemTotal;
    let varianText = (item.variant && item.variant !== 'Satu Ukuran') ? `[${item.variant}]` : '';
    message += `${index + 1}. ${item.name} ${varianText}\n    ${item.quantity} x ${formatPrice(item.price)} = ${formatPrice(itemTotal)}\n`;
  });
  message += `\nTOTAL PESANAN: *${formatPrice(total)}*\n\nAlamat pengiriman:\n(Tulis alamat lengkap disini)\n\nMohon info ongkir dan nomor rekening ya. Terima kasih.`;
  window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// ── UTILITIES & SECTIONS ──
function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) { container = document.createElement('div'); container.id = 'toast-container'; container.className = 'toast-container'; document.body.appendChild(container); }
  const toast = document.createElement('div'); toast.className = 'toast'; toast.innerHTML = '✅ ' + message; container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
}

function renderPaymentMethods() {
  const grid = document.getElementById('payment-grid'); if (!grid) return;
  grid.innerHTML = paymentMethods.map((m, i) => {
    const descHtml = m.description ? `<p>${m.description}</p>` : '';
    return `<div class="payment-card reveal delay-${(i % 4) + 1}">
      <div class="payment-icon">${m.icon}</div>
      <h3>${m.name}</h3>
      ${descHtml}
      <div class="payment-details"><div class="detail-label">Nomor Rekening</div><div class="detail-value">${m.accountNumber}</div></div>
      <div class="payment-details"><div class="detail-label">Atas Nama</div><div class="detail-value">${m.accountName}</div></div>
      <button class="copy-btn" onclick="copyToClipboard('${m.accountNumber}')">📋 Salin Rekening</button>
    </div>`;
  }).join('');
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => showToast('Nomor berhasil disalin!')).catch(err => { fallbackCopyTextToClipboard(text); });
  } else { fallbackCopyTextToClipboard(text); }
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea"); textArea.value = text;
  textArea.style.top = "0"; textArea.style.left = "0"; textArea.style.position = "fixed"; textArea.style.opacity = "0";
  document.body.appendChild(textArea); textArea.focus(); textArea.select();
  try { var successful = document.execCommand('copy'); if(successful) { showToast('Nomor berhasil disalin!'); } else { showToast('Gagal menyalin.'); } } catch (err) { showToast('Gagal menyalin.'); }
  document.body.removeChild(textArea);
}

function renderContact() {
  const c = document.getElementById('contact-info');
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeConfig.address)}`;
  if (c) c.innerHTML = `
    <h3>${storeConfig.name}</h3>
    <div class="contact-item"><div class="contact-item-icon">📍</div><div class="contact-item-text"><h4>Alamat</h4><p><a href="${mapsLink}" target="_blank" style="color: var(--primary); text-decoration: underline; font-weight: 500;">${storeConfig.address}</a></p></div></div>
    <div class="contact-item"><div class="contact-item-icon">📧</div><div class="contact-item-text"><h4>Email</h4><p>${storeConfig.email}</p></div></div>
    <div class="contact-item"><div class="contact-item-icon">📞</div><div class="contact-item-text"><h4>WhatsApp</h4><p>+${storeConfig.whatsappNumber}</p></div></div>
  `;
  const s = document.getElementById('social-card');
  if (s) s.innerHTML = `<h3>Pesan Sekarang</h3><p>Kami siap membantu Anda via WhatsApp.</p><button class="wa-direct-btn" onclick="openWhatsApp()">Chat via WA</button><h4 class="social-links-heading">Kunjungi Kami Di</h4><div class="social-links"><a href="${storeConfig.socialMedia.instagram}" target="_blank" class="social-link" title="Instagram">📸</a><a href="${storeConfig.socialMedia.shopee}" target="_blank" class="social-link" title="Shopee">🛍️</a><a href="${storeConfig.socialMedia.website}" target="_blank" class="social-link" title="Website Resmi">🌐</a></div>`;
}

function renderTrustBuilder() {
  const grid = document.getElementById('trust-grid'); if (!grid) return;
  const f = [{i:'⭐️',t:'Grade A Quality',d:'Bahan tidak luntur/brudul.'},{i:'🛒',t:'Ready Stock',d:'Pengerjaan cepat & tepat waktu.'},{i:'💰',t:'Harga Kompetitif',d:'Cocok untuk konveksi besar.'},{i:'💬',t:'Konsultasi Gratis',d:'Bantu pilih spesifikasi ideal via WA.'}];
  grid.innerHTML = f.map((x,i) => `<div class="trust-card reveal delay-${(i%4)+1}"><div class="trust-icon">${x.i}</div><h3>${x.t}</h3><p>${x.d}</p></div>`).join('');
}

function renderFooter() {
  const cl = document.getElementById('footer-contact-list'); if(cl) cl.innerHTML = `<li>📧 ${storeConfig.email}</li><li>📱 +${storeConfig.whatsappNumber}</li><li>🕐 ${storeConfig.operatingHours}</li>`;
  const socials = document.getElementById('footer-socials');
  if (socials) { socials.innerHTML = `<a href="${storeConfig.socialMedia.instagram}" target="_blank" class="footer-social-link" title="Instagram">📸</a><a href="${storeConfig.socialMedia.shopee}" target="_blank" class="footer-social-link" title="Shopee">🛍️</a><a href="${storeConfig.socialMedia.website}" target="_blank" class="footer-social-link" title="Website">🌐</a>`; }
}

function initNavbar() {
  const headerWrapper = document.getElementById('header-wrapper'); 
  const hamburger = document.getElementById('hamburger'); 
  const navLinks = document.getElementById('nav-links');
  
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) { headerWrapper.classList.add('scrolled'); } 
    else { headerWrapper.classList.remove('scrolled'); }
  });

  if (hamburger) hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); navLinks.classList.toggle('open'); });
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => { hamburger.classList.remove('active'); navLinks.classList.remove('open'); }));
}

function initRevealAnimations() {
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }), { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400));
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('click', (e) => { 
  if (e.target.classList.contains('modal-overlay')) closeModal(); 
  if (e.target.classList.contains('cart-overlay')) closeCart(); 
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closeCart(); } });

document.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderCategories();
  renderProducts();
  renderPaymentMethods();
  renderContact();
  renderTrustBuilder();
  renderFooter();
  initNavbar();
  initScrollTop();
  setTimeout(initRevealAnimations, 100);
});
