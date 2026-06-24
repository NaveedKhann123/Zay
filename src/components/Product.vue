
<template>
  <div class="shop-container">

    <div class="sidebar">
      <h2>Categories</h2>

      <div class="filter">
        <div class="item" @click="toggle('gender')">
          Gender 
          <i class="fa fa-chevron-down" :class="{ 'rotate-arrow': open.gender }"></i>
        </div>
        <div v-if="open.gender" class="sub">
          <div>Men</div>
          <div>Women</div>
        </div>

        <div class="item" @click="toggle('sale')">
          Sale 
          <i class="fa fa-chevron-down" :class="{ 'rotate-arrow': open.sale }"></i>
        </div>
        <div v-if="open.sale" class="sub">
          <div>Luxury</div>
          <div>Sport</div>
        </div>

        <div class="item" @click="toggle('product')">
          Product 
          <i class="fa fa-chevron-down" :class="{ 'rotate-arrow': open.product }"></i>
        </div>
        <div v-if="open.product" class="sub">
          <div>Bag</div>
          <div>Sweater</div>
          <div>Sunglasses</div>
        </div>
      </div>
    </div>

    <div class="content">

      <div class="top-bar">
        <div class="tabs">
          <span>All</span>
          <span>Men's</span>
          <span>Women's</span>
        </div>

        <select class="sort-dropdown">
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
              <button class="action-btn" title="Add to Wishlist">
                <i class="fa fa-heart"></i>
              </button>
              <button class="action-btn" title="Quick View">
                <i class="fa fa-eye"></i>
              </button>
              <button class="action-btn" title="Add to Cart">
                <i class="fa fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          
          <div class="product-info">
            <h3 class="product-title">{{ product.name }}</h3>
            
            <div class="stars">
              <i v-for="star in 5" :key="star" class="fa fa-star"></i>
            </div>
            
            <div class="sizes-container">
              <span v-for="size in product.sizes" :key="size" class="size-badge">
                {{ size }}
              </span>
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

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const open = ref({
  gender: false,
  sale: false,
  product: false,
});


const defaultImage = "https://via.placeholder.com/300x400?text=Missing+Image";

// Product dataset array
const products = ref([
  { id: 1, name: "Oupidatat non", image: "/shop_01.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 2, name: "Oupidatat non", image: "/shop_02.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 3, name: "Oupidatat non", image: "/shop_03.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 4, name: "Oupidatat non", image: "/shop_04.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 5, name: "Oupidatat non", image: "/shop_05.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 6, name: "Oupidatat non", image: "/shop_06.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 7, name: "Oupidatat non", image: "/shop_07.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 8, name: "Oupidatat non", image: "/shop_08.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] },
  { id: 9, name: "Oupidatat non", image: "/shop_09.jpg", price: "$250", sizes: ["M", "L", "X", "XL"] }
]);


const toggle = (menu) => {
  open.value[menu] = !open.value[menu];
};
</script>

<style scoped>
.shop-container {
  display: flex;
  padding: 40px;
  gap: 40px;
  font-family: sans-serif;
}

.sidebar {
  width: 20%;
}

.sidebar h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  font-weight: bold;
}

.fa-chevron-down {
  transition: transform 0.2s ease;
}

.rotate-arrow {
  transform: rotate(180deg);
}

.sub {
  padding-left: 15px;
  background: #f9f9f9;
}

.sub div {
  padding: 8px 0;
  cursor: pointer;
}

.content {
  width: 80%;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
}

.tabs span {
  margin-right: 20px;
  cursor: pointer;
  transition: color 0.2s ease;
}

.tabs span:hover {
  color: #59AB6E;
}

/* Dropdown Styling */
.sort-dropdown {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 500px;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  outline: none;
}

.sort-dropdown:focus {
  border-color: #59AB6E;
}

.grid {
  display: flex;
  gap: 30px 20px; 
  flex-wrap: wrap;
}

.product-card {
  flex: 0 0 calc(33.333% - 14px); 
  min-width: 200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column; 
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4; 
  overflow: hidden;
  background-color: #f5f5f5;
  border: 1px solid #eee;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  display: block;
}


.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.action-btn {
  background-color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: translateY(15px); 
  transition: all 0.3s ease;
}

.image-wrapper:hover .action-btn {
  transform: translateY(0);
}

.action-btn:hover {
  background-color: #67B87C; 
  color: #fff;
}

.product-info {
  display: flex;
  flex-direction: column; 
  gap: 6px;
  padding: 12px 0 0 0;
}

.product-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.stars {
  display: flex;
  gap: 2px;
  color: #ffc107; 
  font-size: 14px;
}

.sizes-container {
  display: flex;
  gap: 6px;
  margin: 2px 0;
}

.size-badge {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  font-weight: bold;
  color: #555;
  border: 1px solid #ccc;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  background-color: #fff;
  transition: all 0.2s ease;
}

.size-badge:hover {
  background-color: #333;
  color: #fff;
  border-color: #333;
}

.product-price {
  font-weight: bold;
  color: #111;
  font-size: 15px;
  margin-top: 2px;
}

/* Pagination Bar */
.pagination {
  display: flex;
  justify-content: right;
  gap: 10px;
  margin-top: 40px;
  padding-top: 20px;
}

.page-btn {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  width: 36px;
  height: 36px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
}

.page-btn:hover {
  border-color: #67B87C;
  background-color: #67B87C;
  color: #fff;
}

.page-btn.active {
  background-color: #67B87C;
  color: #fff;
  border-color: #67B87C;
}
</style>

