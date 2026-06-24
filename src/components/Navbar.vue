<template>
  <div class="navigation-wrapper">
    <header class="header">
      <div class="contact-info">
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:info@company.com">info@company.com</a>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone-alt"></i>
          <a href="tel:0100200340">010-020-0340</a>
        </div>
      </div>

      <div class="social-links">
        <a href="#" class="instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" class="facebook" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="linkedin" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" class="twitter" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      </div>
    </header>
    
    <nav class="navbar">
      <div class="logo">
        <a href="#"><h1>Zay</h1></a>
      </div>
      
      <div class="nav-links" :class="{ 'is-active': isMenuOpen }">
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/about" @click="closeMenu">About</router-link>
        <router-link to="/shop" @click="closeMenu">Shop</router-link>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
      </div>
      
      <div class="nav-actions-wrapper">
        <div class="nav-icons">
          <a href="#" class="icon-search"><i class="fas fa-search"></i></a>
          <a href="#">
            <i class="fas fa-shopping-cart"></i>
            <span class="cart-badge">7</span>
          </a>
          <a href="#">
            <i class="fas fa-user"></i>
            <span class="user-badge">+99</span>  
          </a>
        </div>

        <button class="menu-toggle" @click="toggleMenu" :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'">
          <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-ellipsis-v'"></i>
        </button>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Mobile menu toggle state
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navigation-wrapper {
  width: 100%;
}

/* ========== HEADER STYLES ========== */
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: #212934;
  padding: 12px 70px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.02);
}

.header:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: #1e293b;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  color: white;
}

.contact-item i {
  font-size: 13px;
  width: 1.1rem;
  text-align: center;
  color: white;
}

.contact-item a {
  text-decoration: none;
  font-size: 13px;
  transition: color 0.15s;
  color: white;
}

.contact-item a:hover {
  color: #59AB6E;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 15px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 14px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.social-links a:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.social-links a.instagram:hover { color: #E4405F; }
.social-links a.facebook:hover { color: #1877F2; }
.social-links a.linkedin:hover { color: #0A66C2; }
.social-links a.twitter:hover { color: #1DA1F2; }

/* ========== NAVBAR STYLES ========== */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  padding: 10px 70px;
  border-bottom: 1px solid #e9ecef;
  position: relative; /* Context parent for the absolute menu list */
}

.logo a {
  text-decoration: none;
}

.logo h1 {
  color: #59AB6E;
  font-family: Arial, sans-serif;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 0;
}

.nav-links {
  display: flex;
  gap: 70px;
}

.nav-links a {
  color: #292C2F;
  text-decoration: none;
  font-size: 19px;
  font-family: Arial, sans-serif;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: #59AB6E;
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 60%;
}

.nav-links a:hover {
  color: #59AB6E;
}

.nav-actions-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-icons {
  display: flex;
  gap: 5px;
  align-items: center;
}

.nav-icons a {
  color: #292C2F;
  text-decoration: none;
  padding: 8px 10px;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icons a:hover {
  background: #f0f0f0;
  color: #59AB6E;
}

.nav-icons a i {
  font-size: 20px;
}

.nav-icons a .cart-badge,
.nav-icons a .user-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: #E9EEF5;
  color: #212529;
  font-size: 11px;
  font-weight: bold;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  line-height: 1;
}

.nav-icons a .user-badge {
  font-size: 9px;
  min-width: 24px;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #292C2F;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background 0.3s ease;
  z-index: 10000; 
}
.menu-toggle:hover {
  background: #f0f0f0;
  color: #59AB6E;
}



@media (max-width: 1024px) {
  .header { padding: 12px 40px; }
  .navbar { padding: 10px 40px; }
  .nav-links { gap: 40px; }
  .logo h1 { font-size: 34px; }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px 20px;
  }
  
  .contact-info {
    justify-content: center;
    gap: 15px 25px;
  }

  .navbar {
    padding: 15px 20px;
    justify-content: space-between;
  }

  .logo h1 {
    font-size: 32px;
  }

  .menu-toggle {
    display: block;
  }


  .nav-links {
    display: none; 
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #FFFFFF;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    padding: 15px 0;
    gap: 0;
    z-index: 9999;
    border-top: 1px solid #e9ecef;
  }

  
  .nav-links.is-active {
    display: flex;
  }

  .nav-links a {
    font-size: 18px;
    padding: 14px 24px;
    width: 100%;
    text-align: left;
    border-radius: 0;
  }
  
  .nav-links a:hover {
    background-color: #f8f9fa;
  }

  .nav-links a::after {
    display: none; 
  }
}

@media (max-width: 480px) {
  .header { padding: 12px 15px; gap: 8px; }
  .contact-info { flex-direction: column; align-items: center; gap: 6px; font-size: 12px; }
  .contact-item { white-space: normal; }
  .contact-item a { font-size: 12px; }
  .social-links { gap: 8px; }
  .social-links a { width: 28px; height: 28px; font-size: 12px; }
  .navbar { padding: 12px 15px; }
  .logo h1 { font-size: 26px; }
  
  .nav-icons a {
    width: 32px;
    height: 32px;
  }
  .nav-icons a i {
    font-size: 16px;
  }
}
</style>