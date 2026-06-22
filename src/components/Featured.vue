<template>
  <div class="featured-section">
    <h1 class="section-title">Featured Product</h1>

    <p class="section-desc">
      Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />
      pariatur. Excepteur sint occaecat cupidatat non proident.
    </p>

    <div class="product-grid">

      <!-- CARD 1 -->
      <div class="product-card">
        <img src="/feature_prod_01.jpg" />

        <div class="rating-row">
          <div class="stars">
            <span class="star yellow">★</span>
            <span class="star yellow">★</span>
            <span class="star yellow">★</span>
            <span class="star gray">★</span>
            <span class="star gray">★</span>
          </div>
          <div class="price">$240.00</div>
        </div>

        <h3 class="product-title">Gym Weight</h3>
        <p class="product-desc">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.
        </p>
        <p class="reviews">Reviews (24)</p>
      </div>

      <!-- CARD 2 -->
      <div class="product-card">
        <img src="/feature_prod_02.jpg" />

        <div class="rating-row">
          <div class="stars">
            <span class="star yellow">★</span>
            <span class="star yellow">★</span>
            <span class="star yellow">★</span>
            <span class="star gray">★</span>
            <span class="star gray">★</span>
          </div>
          <div class="price">$240.00</div>
        </div>

        <h3 class="product-title">Cloud Nike Shoes</h3>
       
        <p class="product-desc">
      Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
        </p>
         <p class="reviews">Reviews (48)</p>
      </div>

      <!-- CARD 3 -->
      <div class="product-card">
        <img src="/feature_prod_03.jpg" />

        <div class="rating-row">
          <div class="stars">
            <span class="star yellow">★</span>
            <span class="star yellow">★</span>
            <span class="star yellow">★</span>
            <span class="star gray">★</span>
            <span class="star gray">★</span>
          </div>
          <div class="price">$240.00</div>
        </div>

        <h3 class="product-title">Summer Adidas Shoes</h3>
        
        <p class="product-desc">
         Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
        </p>
        <p class="reviews">Reviews (74)</p>
      </div>

    </div>
  </div>
</template>


<style scoped>
.featured-section {
  width: 100%;
  background: #e9eef5;
  padding: 60px 20px;
}

.section-title {
  text-align: center;
  font-size: 32px;
  color: #212529;
}

.section-desc {
  text-align: center;
  margin-top: 10px;
  color: #555;
}

.product-grid {
  display: flex;
  justify-content: space-around;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
}

.product-card {
  width: 300px;
  background: #fff;
  padding: 15px;
  border-radius: 10px;

  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.product-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
}

.rating-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.stars {
  display: flex;
  gap: 3px;
}

.star {
  font-size: 16px;
}

.yellow {
  color: #fbc02d;
}

.gray {
  color: #bcbcbc;
}

.price {
  font-weight: bold;
  color: #212529;
}

.product-title {
  margin-top: 10px;
  font-size: 18px;
}

.product-desc {
  font-size: 14px;
  color: #666;
}

.reviews {
  font-size: 13px;
  color: #888;
}
</style>