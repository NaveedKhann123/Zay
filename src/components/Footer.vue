<template>
  <div class="footer">
    <div class="zay">
      <div class="footer-box">
        <h3>Zay Shop</h3>
        <div class="contact-box">
          <div class="contact-item">
            <span class="icon">📍</span>
            <a href="#">123 Consectetur at ligula 10660</a>
          </div>
          <div class="contact-item">
            <span class="icon">📞</span>
            <a href="#">010-020-0340</a>
          </div>
          <div class="contact-item">
            <span class="icon">✉️</span>
            <a href="#">info@company.com</a>
          </div>
        </div>
      </div>

      <div class="footer-box">
        <h3>Products</h3>
        <a href="#">Luxury</a>
        <a href="#">Sport Wear</a>
        <a href="#">Men's Shoes</a>
        <a href="#">Women's Shoes</a>
        <a href="#">Popular Dress</a>
        <a href="#">Gym Accessories</a>
        <a href="#">Sport Shoes</a>
      </div>

      <div class="footer-box">
        <h3>Further Info</h3>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Shop Locations</a>
        <a href="#">FAQs</a>
        <a href="#">Contact</a>
      </div>
    </div>

    <hr class="footer-line">

    <div class="footer-social">
      <div class="social-links">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>

      <div class="subscribe">
        <input type="email" placeholder="Enter your email">
        <button>Subscribe</button>
      </div>
    </div>
    
    <p class="copyright">Copyright © 2021 Company Name | Designed by TemplateMo</p>
  </div>
</template>

<style scoped>

.footer {
  width: 100%;
  background-color: #212934;
}

.zay {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 60px 20px;
}

.footer-box {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 15px;
}

.footer-box h3 {
  color: #59AB6E;
  font-size: 22px;
  border-bottom: 1px solid #2e3946;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

.footer-box a {
  color: #cfd6e0;
  text-decoration: none;
  margin: 6px 0;
  transition: color 0.2s;
}

.footer-box a:hover {
  color: #59AB6E; 
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.contact-item a {
  margin: 0;
}

.icon {
  margin-right: 10px;
}

.footer-line {
  width: 95%;
  max-width: 1200px;
  border: 0;
  border-top: 1px solid #2e3946;
  margin: 10px auto;
}


.footer-social {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 35px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  color: white;
  text-decoration: none;
  transition: color 0.2s;
}

.social-links a:hover {
  color: #59AB6E;
}

.subscribe {
  display: flex;
}

.subscribe input {
  padding: 10px 15px;
  width: 250px;
  border: 1px solid #2e3946;
  background-color: #212934;
  color: white;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.subscribe button {
  padding: 10px 20px;
  background-color: #59AB6E;
  color: white;
  border: none;
  cursor: pointer;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-weight: 600;
}

.subscribe button:hover {
  background-color: #3f8f52;
}

/* کاپی رائٹ کی پٹی */
.copyright {
  font-size: 14px;
  padding: 20px;
  background-color: #1C232C;
  color: #bcbcbc;
  text-align: center; 
  margin: 0;
}

@media (max-width: 768px) {
  .zay {
    flex-direction: column; 
    gap: 30px;
    padding: 40px 20px;
  }

  .footer-box {
    padding: 0;
  }

  .footer-social {
    flex-direction: column; 
    gap: 25px;
    text-align: center;
    padding: 20px;
  }

  .subscribe {
    width: 100%;
    justify-content: center;
  }

  .subscribe input {
    width: 60%; 
    max-width: 220px;
  }
}
</style>