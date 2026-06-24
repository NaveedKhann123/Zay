<template>
  <div class="cat">
    <h1 class="title">Categories of The Month</h1>

    <p class="desc">
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br />
      officia deserunt mollit anim id est laborum.
    </p>

    <div class="grid">
      <div class="card">
        <div class="img-container">
          <img src="/category_img_01.jpg" alt="Watch" />
        </div>
        <p class="card-text">Watch</p>
        <button>Go Shop</button>
      </div>

      <div class="card">
        <div class="img-container">
          <img src="/category_img_02.jpg" alt="Shoes" />
        </div>
        <p class="card-text">Shoes</p>
        <button>Go Shop</button>
      </div>

      <div class="card">
        <div class="img-container">
          <img src="/category_img_03.jpg" alt="Accessories" />
        </div>
        <p class="card-text">Accessories</p>
        <button>Go Shop</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cat {
  width: 100%;
  /* FIXED: height ہٹا کر padding دی ہے تاکہ موبائل پر بیک گراؤنڈ خود بڑا ہو سکے */
  padding: 60px 20px;
  background-color: #ffffff;
}

.title {
  text-align: center;
  font-weight: 300;
  color: #212529;
  margin-top: 20px;
}

.desc {
  text-align: center;
  color: #6c757d;
  margin-bottom: 40px;
}

.grid {
  display: flex;
  justify-content: center;
  gap: 30px; 
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  text-align: center;
  flex: 1;
  max-width: 300px; 
}

/* FIXED: امیج کو ریسپانسو گول دائرے میں رکھنے کے لیے نیا کنٹینر */
.img-container {
  width: 100%;
  aspect-ratio: 1 / 1; /* یہ تصویر کو ہمیشہ پرفیکٹ چورس/گول رکھے گا */
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 15px;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .img-container img {
  transform: scale(1.1); /* اب ہوور پر امیج دائرے کے اندر ہی خوبصورتی سے زوم ہوگی */
}

.card-text {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
  color: #212529;
}

button {
  padding: 8px 20px;
  border: none;
  background: #59AB6E;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  transition: background 0.2s;
}

button:hover {
  background: #3f8f52;
}

/* ===================================================
   MOBILE RESPONSIVE: میڈیا کیوری برائے موبائل فونز
   =================================================== */
@media (max-width: 768px) {
  .cat {
    padding: 40px 15px;
  }

  .grid {
    flex-direction: column; /* موبائل پر تینوں کارڈز ایک دوسرے کے نیچے آئیں گے */
    align-items: center;
    gap: 40px;
  }

  .card {
    width: 100%;
    max-width: 260px; /* موبائل اسکرین کے حساب سے سائز ایڈجسٹ کیا */
  }

  .title {
    font-size: 24px;
  }

  .desc {
    font-size: 14px;
  }
}
</style>