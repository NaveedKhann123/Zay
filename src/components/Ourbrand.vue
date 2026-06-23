<script setup>
import { ref } from 'vue'

// Carousel ka starting index (0 matlab pehla logo yani Levi's)
const current = ref(0)

// Pehle se chauthe tak (1 to 4) logos ki list
const logos = [
  { src: '/brand_01.png', alt: "Levi's" },  // 1st Brand
  { src: '/brand_02.png', alt: 'Adidas' },  // 2nd Brand
  { src: '/brand_03.png', alt: 'Nike' },    // 3rd Brand
  { src: '/brand_04.png', alt: 'H&M' }     // 4th Brand
]

// Agla logo dikhane ke liye function (Next Button)
function nextLogo() {
  if (current.value === logos.length - 1) {
    current.value = 0 // Wapas pehle par le aaye
  } else {
    current.value++
  }
}

// Pichla logo dikhane ke liye function (Previous Button)
function prevLogo() {
  if (current.value === 0) {
    current.value = logos.length - 1 // Wapas aakhri par le aaye
  } else {
    current.value--
  }
}
</script>

<template>
  <div class="brands">
    <h1>Our Brands</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
    
    <div class="logo-carousel-container">
      <button 
        @click="prevLogo" 
        class="carousel-arrow left-arrow" 
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      <div class="logo-slider">
        <div 
          class="logo-track" 
          :style="{ transform: `translateX(-${current * 25}%)` }"
        >
          <div 
            v-for="(logo, index) in logos" 
            :key="index" 
            class="logo-item"
            :class="{ active: current === index }"
          >
            <img :src="logo.src" :alt="logo.alt">
          </div>
        </div>
      </div>

      <button 
        @click="nextLogo" 
        class="carousel-arrow right-arrow" 
        aria-label="Next slide"
      >
        &#10095;
      </button>
    </div>
  </div>
 
</template>

<style scoped>
/* Main Container Background */
.brands {
  width: 100%;
  padding: 60px 0;
  background-color: #E9EEF5;
  text-align: center;
}

.brands h1 {
  margin-bottom: 10px;
  color: #333;
  font-family: sans-serif;
}

.brands p {
  margin-bottom: 30px;
  color: #666;
  font-family: sans-serif;
}

/* Carousel Inner Layout */
.logo-carousel-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ebf0f6;
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: sans-serif;
  border-radius: 8px;
}

/* Extra elements frame view wrapper */
.logo-slider {
  flex-grow: 1;
  overflow: hidden;
  margin: 0 15px;
}

/* Smooth sliding movement line */
.logo-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
}

/* 4 Items ko screen par balance fit karne ka setup */
.logo-item {
  flex: 0 0 25%; /* First frame par saare 4 logos inline show karega */
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 15px;
}

/* Gray styling filters */
.logo-item img {
  max-width: 110px;
  width: 100%;
  height: auto;
  filter: opacity(0.45) grayscale(100%);
  transition: filter 0.3s ease, transform 0.3s ease;
}

/* Hover effect or current active item illumination */
.logo-item img:hover,
.logo-item.active img {
  filter: opacity(1) grayscale(0%);
  transform: scale(1.08);
}

/* Arrow Navigation Button Core Styling */
.carousel-arrow {
  background: none;
  border: none;
  font-size: 26px;
  color: #bcc6d2;
  cursor: pointer;
  padding: 10px;
  transition: color 0.2s ease, transform 0.1s ease;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-arrow:hover {
  color: #8fa0b5;
}

.carousel-arrow:active {
  transform: scale(0.9);
}

/* Mobile Screens Viewport Updates */
@media (max-width: 768px) {
  .logo-item {
    flex: 0 0 50%; /* Mobile screen par auto-adjust ho kar 2 logos dikhayega */
  }
}
</style>