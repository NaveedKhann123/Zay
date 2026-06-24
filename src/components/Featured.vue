<template>
  <div class="featured-section">
    <h1 class="section-title">Featured Product</h1>

    <p class="section-desc">
      Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla <br />
      pariatur. Excepteur sint occaecat cupidatat non proident.
    </p>

    <div class="product-grid">

      <div class="product-card">
        <img src="/feature_prod_01.jpg" alt="Gym Weight" />

        <div class="card-body">
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
      </div>

      <div class="product-card">
        <img src="/feature_prod_02.jpg" alt="Cloud Nike Shoes" />

        <div class="card-body">
          <div class="rating-row">
            <div class="stars">
              <span class="star yellow">★</span>
              <span class="star yellow">★</span>
              <span class="star yellow">★</span>
              <span class="star gray">★</span>
              <span class="star gray">★</span>
            </div>
            <div class="price">$480.00</div>
          </div>

          <h3 class="product-title">Cloud Nike Shoes</h3>
          <p class="product-desc">
            Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.
          </p>
          <p class="reviews">Reviews (48)</p>
        </div>
      </div>

      <div class="product-card">
        <img src="/feature_prod_03.jpg" alt="Summer Adidas Shoes" />

        <div class="card-body">
          <div class="rating-row">
            <div class="stars">
              <span class="star yellow">★</span>
              <span class="star yellow">★</span>
              <span class="star yellow">★</span>
              <span class="star gray">★</span>
              <span class="star gray">★</span>
            </div>
            <div class="price">$360.00</div>
          </div>

          <h3 class="product-title">Summer Adidas Shoes</h3>
          <p class="product-desc">
            Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.
          </p>
          <p class="reviews">Reviews (74)</p>
        </div>
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
  font-weight: 300;
  color: #212529;
}

.section-desc {
  text-align: center;
  margin-top: 10px;
  color: #6c757d;
  margin-bottom: 30px;
}

.product-grid {
  display: flex;
  justify-content: center;
  gap: 25px;
  max-width: 1200px;
  margin: 40px auto 0 auto;
}

.product-card {
  width: 100%;
  max-width: 360px; /* بڑی اسکرین پر کارڈز کو زے شاپ جتنا چوڑا لک دینے کے لیے */
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

.product-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
}


.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.rating-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.stars {
  display: flex;
  gap: 3px;
}

.star {
  font-size: 16px;
}

.yellow {
  color: #ffc107;
}

.gray {
  color: #bcbcbc;
}

.price {
  font-weight: 600;
  color: #6c757d;
  font-size: 18px;
}

.product-title {
  font-size: 20px;
  font-weight: 500;
  color: #212529;
  margin-bottom: 10px;
}

.product-desc {
  font-size: 15px;
  color: #495057;
  line-height: 1.5;
  margin-bottom: 15px;
  flex-grow: 1;
}

.reviews {
  font-size: 14px;
  color: #6c757d;
  margin: 0;
}


@media (max-width: 991px) {
  .product-grid {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .product-card {
    max-width: 320px; 
  }
}

@media (max-width: 768px) {
  .product-grid {
    flex-direction: column;
    align-items: center;
    gap: 35px;
  }

  .product-card {
    width: 100%;
    max-width: 340px; 
  }

  .section-title {
    font-size: 26px;
  }
  
  .section-desc {
    font-size: 14px;
  }
}
</style>