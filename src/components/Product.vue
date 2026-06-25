<template>
  <div class="shop-container">
    <aside class="sidebar">
      <h2>Categories</h2>
      <div class="filter">
        <div class="item" @click="toggle('gender')">
          Gender
          <i class="fa-solid fa-chevron-down" :class="{ 'rotate-arrow': open.gender }"></i>
        </div>
        <div v-if="open.gender" class="sub">
          <div @click="selectFilter('Gender', 'Men')">Men</div>
          <div @click="selectFilter('Gender', 'Women')">Women</div>
        </div>

        <div class="item" @click="toggle('sale')">
          Sale
          <i class="fa-solid fa-chevron-down" :class="{ 'rotate-arrow': open.sale }"></i>
        </div>
        <div v-if="open.sale" class="sub">
          <div @click="selectFilter('Sale', 'Luxury')">Luxury</div>
          <div @click="selectFilter('Sale', 'Sport')">Sport</div>
        </div>

        <div class="item" @click="toggle('product')">
          Product
          <i class="fa-solid fa-chevron-down" :class="{ 'rotate-arrow': open.product }"></i>
        </div>
        <div v-if="open.product" class="sub">
          <div @click="selectFilter('Product', 'Bag')">Bag</div>
          <div @click="selectFilter('Product', 'Sweater')">Sweater</div>
          <div @click="selectFilter('Product', 'Sunglasses')">Sunglasses</div>
        </div>
      </div>
    </aside>

    <main class="content">
      <div class="top-bar">
        <div class="tabs">
          <span class="active-tab">All</span>
          <span>Men's</span>
          <span>Women's</span>
        </div>

        <div class="cart-counter-badge" @click="cartOpen = true">
          <i class="fa-solid fa-shopping-basket"></i> Cart: <strong>{{ cartItemsCount }}</strong>
        </div>
     

        <select class="sort-dropdown" aria-label="Sort products">
          <option value="featured">Featured</option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
          <option value="lowtohigh">Price: Low to High</option>
          <option value="hightolow">Price: High to Low</option>
        </select>
      </div>

      <div class="grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="image-wrapper">
            <img :src="product.image || defaultImage" :alt="product.name" />
            <div class="image-overlay">
              <button class="action-btn" title="Add to Wishlist" @click="addToWishlist(product)">
                <i class="fa-solid fa-heart"></i>
              </button>
              <button class="action-btn" title="Quick View" @click="openQuickView(product)">
                <i class="fa-solid fa-eye"></i>
              </button>
              <button class="action-btn" title="Add to Cart" @click="addToCart(product)">
                <i class="fa-solid fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <div class="product-info">
            <h3 class="product-title">{{ product.name }}</h3>
            <div class="stars">
              <i v-for="star in 5" :key="star" class="fa-solid fa-star"></i>
            </div>
            <div class="sizes-container">
              <span v-for="size in product.sizes" :key="size" class="size-badge">{{ size }}</span>
            </div>
            <div class="product-price">{{ product.price }}</div>
          </div>
        </div>
      </div>

      <div class="pagination">
        <button class="page-btn active">1</button>
        <button class="page-btn">2</button>
        <button class="page-btn">3</button>
      </div>
    </main>

    <div v-if="cartOpen" class="cart-overlay" @click.self="cartOpen = false">
      <div class="cart-sidebar">
        <div class="cart-header">
          <h2>🛒 Your Cart</h2>
          <button class="close-cart-btn" @click="cartOpen = false">&times;</button>
        </div>

        <div v-if="cart.length === 0" class="cart-empty">
          <i class="fa-solid fa-shopping-cart"></i>
          <p>Your cart is empty</p>
        </div>

        <div v-else class="cart-items">
          <div v-for="(item, index) in cart" :key="index" class="cart-item">
            <img :src="item.image || defaultImage" :alt="item.name" />
            <div class="cart-item-info">
              <p class="cart-item-name">{{ item.name }}</p>
              <p class="cart-item-price">{{ item.price }}</p>
            </div>
            <button class="remove-btn" @click="cart.splice(index, 1)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>

        <div class="cart-footer" v-if="cart.length > 0">
          <p class="cart-total">{{ cart.length }} item(s) in cart</p>
          <button class="btn-checkout">Checkout</button>
        </div>
      </div>


      
    </div>

    <div v-if="selectedProduct" class="product-detail-overlay" @click.self="closeDetail">
      <div class="product-detail-modal">
        <button class="close-detail-btn" @click="closeDetail">&times;</button>
        <div class="detail-layout">
          <div class="detail-images">
            <div class="main-image">
              <img :src="selectedProduct.image1 || defaultImage" :alt="selectedProduct.name" />
            </div>
            <div class="thumbnails">
              <img v-for="(thumb, idx) in productThumbnails" :key="idx" :src="thumb" alt="Thumbnail" />
            </div>
          </div>
          <div class="detail-info">
            <h1 class="detail-title">{{ selectedProduct.name }}</h1>
            <p class="detail-price">{{ selectedProduct.price }}</p>
            <div class="detail-rating">
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-warning"></i>
              <i class="fa-solid fa-star text-secondary"></i>
              <span class="rating-text">Rating 4.8 | 36 Comments</span>
            </div>
            <div class="detail-brand">
              <h6>Brand:</h6>
              <p class="text-muted"><strong>Easy Wear</strong></p>
            </div>
            <div class="detail-description">
              <h6>Description:</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="detail-colors">
              <h6>Available Color :</h6>
              <p class="text-muted"><strong>White / Black</strong></p>
            </div>
            <div class="detail-specs">
              <h6>Specification:</h6>
              <ul>
                <li>Lorem ipsum dolor sit</li>
                <li>Amet, consectetur</li>
                <li>Adipiscing elit,set</li>
                <li>Duis aute irure</li>
                <li>Ut enim ad minim</li>
              </ul>
            </div>
            <div class="detail-actions">
              <div class="size-selector">
                <span>Size :</span>
                <button v-for="size in selectedProduct.sizes" :key="size" class="size-btn">{{ size }}</button>
              </div>
              <div class="quantity-selector">
                <span>Quantity</span>
                <button @click="decrementQty" class="qty-btn">-</button>
                <span class="qty-value">{{ quantity }}</span>
                <button @click="incrementQty" class="qty-btn">+</button>
              </div>
              <div class="action-buttons">
                <button class="btn-buy" @click="buyNow">Buy Now</button>
                <button class="btn-cart" @click="addToCart(selectedProduct)">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// UI State Management
const open = ref({ gender: false, sale: false, product: false });
const cartOpen = ref(false); 
const selectedProduct = ref(null);
const quantity = ref(1);

// Data Lists
const cart = ref([]);
const wishlist = ref([]);

const defaultImage = "https://via.placeholder.com/300x400?text=Missing+Image";

const products = ref([
  { id: 1, name: "Oupidatat non", image: "/shop_01.jpg", image1:"./product_single_10.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 2, name: "Oupidatat non", image: "/shop_02.jpg", image1:"./product_single_10.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 3, name: "Oupidatat non", image: "/shop_03.jpg", image1:"./product_single_10.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 4, name: "Oupidatat non", image: "/shop_04.jpg", image1:"./product_single_10.jpg",  price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 5, name: "Oupidatat non", image: "/shop_05.jpg", image1:"./product_single_10.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 6, name: "Oupidatat non", image: "/shop_06.jpg", image1:"./product_single_10.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 7, name: "Oupidatat non", image: "/shop_07.jpg", image1:"./product_single_10.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 8, name: "Oupidatat non", image: "/shop_08.jpg", image1:"./product_single_10.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 9, name: "Oupidatat non", image: "/shop_09.jpg", image1:"./product_single_10.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
]);

const productThumbnails = [
  "./product_single_01.jpg",
  "./product_single_02.jpg",
  "./product_single_03.jpg",
  "./product_single_04.jpg",
  "./product_single_05.jpg",
  "./product_single_06.jpg",
];

// Computed Properties
const cartItemsCount = computed(() => cart.value.length);

// Event Handlers
const toggle = (menu) => { 
  open.value[menu] = !open.value[menu]; 
};

const addToCart = (product) => {
  cart.value.push(product);
  cartOpen.value = true;
};

const addToWishlist = (product) => {
  if (!wishlist.value.some(item => item.id === product.id)) {
    wishlist.value.push(product);
    alert(`Saved "${product.name}" to your wishlist!`);
  } else {
    alert(`"${product.name}" is already in your wishlist!`);
  }
};

const openQuickView = (product) => {
  selectedProduct.value = product;
  quantity.value = 1;
};

const closeDetail = () => { 
  selectedProduct.value = null; 
};

const incrementQty = () => { 
  quantity.value++; 
};

const decrementQty = () => { 
  if (quantity.value > 1) quantity.value--; 
};

const buyNow = () => {
  if (selectedProduct.value) {
    alert(`Buying ${quantity.value} x "${selectedProduct.value.name}" for ${selectedProduct.value.price}`);
  }
};

const selectFilter = (category, type) => {
  console.log(`Filtering by ${category}: ${type}`);
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

/* ========== CART SIDEBAR ========== */
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  z-index: 2000;
}

.cart-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 380px;
  height: 100%;
  background: #fff;
  z-index: 2001;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 30px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #eee;
}

.cart-header h2 { margin: 0; font-size: 20px; color: #212529; }

.close-cart-btn {
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
  color: #888;
  line-height: 1;
}
.close-cart-btn:hover { color: #212529; }

.cart-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #bbb;
  gap: 14px;
}
.cart-empty i { font-size: 52px; }
.cart-empty p { font-size: 16px; }

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.cart-item img {
  width: 60px;
  height: 72px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #eee;
}

.cart-item-info { flex: 1; }
.cart-item-name { margin: 0; font-weight: 600; font-size: 14px; color: #212529; }
.cart-item-price { margin: 4px 0 0; color: #59AB6E; font-weight: bold; font-size: 14px; }

.remove-btn {
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 15px;
  transition: color 0.2s;
}
.remove-btn:hover { color: #e74c3c; }

.cart-footer {
  padding: 20px 24px;
  border-top: 1px solid #eee;
}

.cart-total {
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.btn-checkout {
  width: 100%;
  padding: 14px;
  background: #59AB6E;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-checkout:hover { background: #4a9a5e; }

/* ========== LAYOUT AND MAIN CONTENT ========== */
.shop-container {
  display: flex;
  padding: 40px;
  gap: 40px;
  font-family: sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
}
.sidebar { width: 23%; flex-shrink: 0; }
.sidebar h2 { font-size: 26px; margin-bottom: 20px; color: #212529; }
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-weight: bold;
  color: #333;
}
.fa-chevron-down { transition: transform 0.2s ease; font-size: 14px; color: #888; }
.rotate-arrow { transform: rotate(180deg); color: #59AB6E; }
.sub { padding-left: 15px; background: #f8f9fa; border-radius: 4px; }
.sub div { padding: 10px 0; cursor: pointer; color: #555; font-size: 15px; transition: color 0.2s; }
.sub div:hover { color: #59AB6E; }
.content { width: 77%; flex-grow: 1; }
.top-bar { display: flex; justify-content: space-between; margin-bottom: 30px; align-items: center; gap: 20px; }
.tabs { display: flex; gap: 20px; }
.tabs span { cursor: pointer; font-size: 16px; font-weight: 600; color: #6c757d; transition: color 0.2s ease; }
.tabs span:hover, .tabs span.active-tab { color: #59AB6E; }
.cart-counter-badge {
  background: #f1f3f5;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  user-select: none;
}
.cart-counter-badge:hover { background: #e2e6ea; }
.cart-counter-badge i { color: #59AB6E; margin-right: 4px; }
.sort-dropdown {
  padding: 10px 14px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  max-width: 240px;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  color: #495057;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s;
}
.sort-dropdown:focus { border-color: #59AB6E; }

/* ========== PRODUCT GRID & CARDS ========== */
.grid { display: flex; gap: 30px 20px; flex-wrap: wrap; }
.product-card { flex: 0 0 calc(33.333% - 14px); min-width: 220px; box-sizing: border-box; display: flex; flex-direction: column; }
.image-wrapper { position: relative; width: 100%; aspect-ratio: 3/4; overflow: hidden; background-color: #f8f9fa; border-radius: 8px; border: 1px solid #e9ecef; }
.image-wrapper img { width: 100%; height: 100%; object-fit: cover; display: block; }
.image-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.35);
  display: flex; flex-direction: column; justify-content: center; align-items: center;
  gap: 12px; opacity: 0; transition: opacity 0.3s ease;
}
.image-wrapper:hover .image-overlay { opacity: 1; }
.action-btn {
  background-color: #fff; border: none; width: 44px; height: 44px; border-radius: 50%;
  display: flex; justify-content: center; align-items: center;
  font-size: 16px; color: #333; cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  transform: translateY(20px);
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.image-wrapper:hover .action-btn { transform: translateY(0); }
.action-btn:hover { background-color: #59AB6E; color: #fff; }
.product-info { display: flex; flex-direction: column; gap: 6px; padding: 14px 0 0 0; }
.product-title { margin: 0; font-size: 16px; font-weight: 600; color: #212529; }
.stars { display: flex; gap: 2px; color: #ffc107; font-size: 13px; }
.sizes-container { display: flex; gap: 6px; margin: 2px 0; }
.size-badge {
  display: inline-flex; justify-content: center; align-items: center;
  font-size: 11px; font-weight: bold; color: #6c757d;
  border: 1px solid #dee2e6; width: 28px; height: 28px;
  border-radius: 4px; cursor: pointer; user-select: none;
  background-color: #fff; transition: all 0.2s ease;
}
.size-badge:hover { background-color: #212529; color: #fff; border-color: #212529; }
.product-price { font-weight: bold; color: #212529; font-size: 16px; margin-top: 2px; }

/* ========== PAGINATION ========== */
.pagination { display: flex; justify-content: flex-end; gap: 10px; margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; }
.page-btn {
  background-color: #fff; color: #495057; border: 1px solid #dee2e6;
  width: 38px; height: 38px; font-size: 14px; font-weight: bold;
  cursor: pointer; border-radius: 6px; display: flex; justify-content: center; align-items: center; transition: all 0.2s ease;
}
.page-btn:hover, .page-btn.active { border-color: #59AB6E; background-color: #59AB6E; color: #fff; }

/* ========== PRODUCT DETAIL MODAL ========== */
.product-detail-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center;
  z-index: 1000; padding: 20px; overflow-y: auto;
}
.product-detail-modal {
  background: #fff; max-width: 1000px; width: 100%; max-height: 90vh;
  overflow-y: auto; border-radius: 12px; padding: 40px; position: relative;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.close-detail-btn { position: absolute; top: 15px; right: 20px; font-size: 32px; background: none; border: none; cursor: pointer; color: #6c757d; transition: color 0.2s; z-index: 10; }
.close-detail-btn:hover { color: #212529; }
.detail-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
.detail-images { display: flex; flex-direction: column; gap: 16px; }
.main-image { border-radius: 8px; overflow: hidden; border: 1px solid #e9ecef; }
.main-image img { width: 100%; height: auto; display: block; }
.thumbnails { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; }
.thumbnails img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 4px; border: 1px solid #dee2e6; cursor: pointer; transition: border-color 0.2s; }
.thumbnails img:hover { border-color: #59AB6E; }
.detail-info { display: flex; flex-direction: column; gap: 16px; }
.detail-title { font-size: 28px; margin: 0; color: #212529; }
.detail-price { font-size: 24px; font-weight: bold; color: #212529; margin: 0; }
.detail-rating { display: flex; align-items: center; gap: 4px; }
.text-warning { color: #ffc107; }
.text-secondary { color: #6c757d; }
.rating-text { margin-left: 8px; color: #6c757d; font-size: 14px; }
.detail-brand, .detail-colors { display: flex; gap: 8px; align-items: baseline; }
.detail-brand h6, .detail-colors h6, .detail-description h6, .detail-specs h6 { margin: 0; font-weight: 600; color: #212529; }
.detail-description p { margin: 4px 0 0 0; color: #495057; line-height: 1.6; }
.detail-specs ul { margin: 4px 0 0 0; padding-left: 20px; color: #495057; }
.detail-specs ul li { margin-bottom: 4px; }
.detail-actions { display: flex; flex-direction: column; gap: 16px; margin-top: 8px; }
.size-selector { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.size-selector span { font-weight: 600; color: #212529; }
.size-btn { padding: 8px 16px; border: 1px solid #dee2e6; background: #fff; border-radius: 4px; cursor: pointer; font-weight: 500; transition: all 0.2s; }
.size-btn:hover { background: #212529; color: #fff; border-color: #212529; }
.quantity-selector { display: flex; align-items: center; gap: 12px; }
.quantity-selector span { font-weight: 600; color: #212529; }
.qty-btn { width: 36px; height: 36px; border: 1px solid #dee2e6; background: #fff; border-radius: 4px; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
.qty-btn:hover { background: #f8f9fa; }
.qty-value { min-width: 30px; text-align: center; font-weight: bold; }
.action-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
.btn-buy, .btn-cart { padding: 12px 32px; border: none; border-radius: 6px; font-weight: 600; cursor: pointer; transition: all 0.2s; flex: 1; min-width: 140px; }
.btn-buy { background: #59AB6E; color: #fff; }
.btn-buy:hover { background: #4a9a5e; }
.btn-cart { background: #212529; color: #fff; }
.btn-cart:hover { background: #343a40; }





/* ========== MEDIA QUERIES ========== */

/* Large screens (desktops, 1200px and below) */
@media (max-width: 1200px) {
  .shop-container {
    padding: 30px;
    gap: 30px;
  }
  
  .product-card {
    flex: 0 0 calc(33.333% - 14px);
  }
  
  .detail-layout {
    gap: 30px;
  }
}

/* Medium-large screens (992px and below) */
@media (max-width: 992px) {
  .shop-container {
    flex-direction: column;
    padding: 25px;
  }
  
  .sidebar {
    width: 100%;
    margin-bottom: 20px;
  }
  
  .sidebar h2 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  
  .content {
    width: 100%;
  }
  
  .product-card {
    flex: 0 0 calc(50% - 10px);
  }
  
  .grid {
    gap: 20px;
  }
  
  .detail-layout {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .product-detail-modal {
    padding: 30px;
    max-width: 90vw;
  }
  
  .thumbnails {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .cart-sidebar {
    width: 340px;
  }
}

/* Tablets & small laptops (768px and below) */
@media (max-width: 768px) {
  .shop-container {
    padding: 20px;
  }
  
  .top-bar {
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
  }
  
  .tabs {
    justify-content: center;
    gap: 15px;
  }
  
  .tabs span {
    font-size: 14px;
  }
  
  .sort-dropdown {
    max-width: 100%;
  }
  
  .cart-counter-badge {
    text-align: center;
  }
  
  .product-card {
    flex: 0 0 calc(50% - 10px);
    min-width: 160px;
  }
  
  .product-title {
    font-size: 14px;
  }
  
  .product-price {
    font-size: 14px;
  }
  
  .size-badge {
    width: 24px;
    height: 24px;
    font-size: 10px;
  }
  
  .cart-sidebar {
    width: 300px;
  }
  
  .cart-header {
    padding: 15px 20px;
  }
  
  .cart-header h2 {
    font-size: 18px;
  }
  
  .cart-items {
    padding: 12px 20px;
  }
  
  .cart-footer {
    padding: 15px 20px;
  }
  
  .product-detail-modal {
    padding: 20px;
    max-width: 95vw;
  }
  
  .detail-title {
    font-size: 22px;
  }
  
  .detail-price {
    font-size: 20px;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .btn-buy, .btn-cart {
    width: 100%;
    min-width: auto;
  }
  
  .pagination {
    justify-content: center;
  }
}

/* Mobile phones (576px and below) */
@media (max-width: 576px) {
  .shop-container {
    padding: 15px;
  }
  
  .sidebar h2 {
    font-size: 20px;
  }
  
  .item {
    font-size: 14px;
    padding: 12px 0;
  }
  
  .sub div {
    font-size: 13px;
    padding: 8px 0;
  }
  
  .tabs {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .tabs span {
    font-size: 13px;
    padding: 4px 8px;
  }
  
  .product-card {
    flex: 0 0 100%;
    min-width: auto;
  }
  
  .grid {
    gap: 25px;
  }
  
  .image-wrapper {
    aspect-ratio: 3/4;
  }
  
  .action-btn {
    width: 38px;
    height: 38px;
    font-size: 14px;
  }
  
  .cart-sidebar {
    width: 100%;
    max-width: 100%;
  }
  
  .cart-item img {
    width: 50px;
    height: 60px;
  }
  
  .cart-item-name {
    font-size: 13px;
  }
  
  .cart-item-price {
    font-size: 13px;
  }
  
  .btn-checkout {
    padding: 12px;
    font-size: 15px;
  }
  
  .product-detail-modal {
    padding: 16px;
    max-height: 95vh;
  }
  
  .close-detail-btn {
    top: 10px;
    right: 15px;
    font-size: 28px;
  }
  
  .detail-title {
    font-size: 20px;
  }
  
  .detail-price {
    font-size: 18px;
  }
  
  .thumbnails {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .size-selector {
    gap: 6px;
  }
  
  .size-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
  
  .qty-btn {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
  
  .page-btn {
    width: 34px;
    height: 34px;
    font-size: 13px;
  }
  
  .pagination {
    gap: 6px;
    margin-top: 30px;
  }
}

/* Very small phones (400px and below) */
@media (max-width: 400px) {
  .shop-container {
    padding: 10px;
  }
  
  .cart-header h2 {
    font-size: 16px;
  }
  
  .close-cart-btn {
    font-size: 28px;
  }
  
  .cart-item {
    padding: 10px 0;
    gap: 10px;
  }
  
  .cart-item img {
    width: 40px;
    height: 48px;
  }
  
  .cart-item-name {
    font-size: 12px;
  }
  
  .detail-title {
    font-size: 18px;
  }
  
  .thumbnails {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  
  .product-detail-modal {
    padding: 12px;
  }
}

/* Additional: Fix for very tall screens or specific devices */
@media (max-height: 700px) {
  .product-detail-modal {
    max-height: 95vh;
    padding: 20px;
  }
  
  .detail-images {
    max-height: 50vh;
  }
  
  .main-image img {
    max-height: 40vh;
    object-fit: contain;
  }
}

/* Print styles */
@media print {
  .cart-overlay,
  .cart-sidebar,
  .product-detail-overlay,
  .product-detail-modal {
    display: none !important;
  }
}

/* Optional: Dark mode support */
@media (prefers-color-scheme: dark) {
  .cart-sidebar {
    background: #1a1a1a;
  }
  
  .cart-header {
    border-bottom-color: #333;
  }
  
  .cart-header h2 {
    color: #e9ecef;
  }
  
  .close-cart-btn {
    color: #888;
  }
  
  .close-cart-btn:hover {
    color: #fff;
  }
  
  .cart-item {
    border-bottom-color: #333;
  }
  
  .cart-item-name {
    color: #e9ecef;
  }
  
  .cart-footer {
    border-top-color: #333;
  }
  
  .cart-total {
    color: #e9ecef;
  }
  
  .cart-empty {
    color: #666;
  }
  
  .product-detail-modal {
    background: #1a1a1a;
  }
  
  .detail-title,
  .detail-price,
  .detail-brand h6,
  .detail-colors h6,
  .detail-description h6,
  .detail-specs h6 {
    color: #e9ecef;
  }
  
  .detail-description p,
  .detail-specs ul li {
    color: #adb5bd;
  }
  
  .close-detail-btn {
    color: #888;
  }
  
  .close-detail-btn:hover {
    color: #fff;
  }
}

/* Accessibility: Reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .cart-sidebar {
    animation: none;
  }
  
  .action-btn,
  .image-overlay,
  .product-card,
  .page-btn,
  .size-badge {
    transition: none !important;
  }
}
</style>