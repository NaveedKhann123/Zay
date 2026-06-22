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
<p>Copyright © 2021 Company Name | Designed by TemplateMo</p>
</div>

</template>


<style scoped>

.zay {
  width: 100%;
  background-color: #212934;
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
}


.footer-box {
  display: flex;
  flex-direction: column;
}


.footer-box h3 {
  color: #59AB6E;
}


.footer-box a {
  color: white;
  text-decoration: none;
  margin: 8px 0;
}


.footer-box a:hover {
  color: blue;
}


.contact-item {
  margin-bottom: 15px;
}


.icon {
  margin-right: 10px;
  color: #59AB6E;
}

.footer-line {
  width: 90%;
  border: 0;
  border-top: 1px solid #555;
  margin: 30px auto;
}


.footer-social {
  width: 100%;
  background-color: #212934;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px 20px;
}


.social-links {
  display: flex;
  gap: 20px;
}


.social-links a {
  color: white;
  text-decoration: none;
}


.social-links a:hover {
  color: blue;
}


.subscribe {
  display: flex;
}


.subscribe input {
  padding: 10px;
  width: 250px;
  border: none;
}


.subscribe button {
  padding: 10px 20px;
  background-color: #59AB6E;
  color: white;
  border: none;
  cursor: pointer;
}


.subscribe button:hover {
  background-color: #3f8f52;
}
.footer {
  width: 100%;
  background-color: #212934;
}

.zay {
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
}
.copyright {
  
  font-size: 14px;
  padding: 15px 0;
  background-color: #1D242D;
  color: white;
  width: 100%;
  height: 30px;

}

</style>