<template>
  <div class="cat">
    <h1 class="title">Categories of The Month</h1>

    <p class="desc">
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui <br />
      officia deserunt mollit anim id est laborum.
    </p>

    <div class="grid">
      <div class="card">
        <img src="/category_img_01.jpg" />
        <p>Watch</p>
        <button>Go Shop</button>
      </div>

      <div class="card">
        <img src="/category_img_02.jpg" />
        <p>Shoes</p>
        <button>Go Shop</button>
      </div>

      <div class="card">
        <img src="/category_img_03.jpg" />
        <p>Accessories</p>
        <button>Go Shop</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cat {
  width: 100%;
  height: 600px;
  background-color: #ffffff;
}

.title {
  text-align: center;
  margin-top: 80px;
  color: #212529;
}

.desc {
  text-align: center;
}

.grid {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  text-align: center;
}

.card img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  transition: 0.3s;
}

.card img:hover {
  transform: scale(1.05);
}

button {
  margin-top: 10px;
  padding: 8px 15px;
  border: none;
  background: #59AB6E;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background: #3f8f52;
}
</style>