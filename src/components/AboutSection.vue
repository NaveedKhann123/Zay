<template>
  <div class="about">
    <div class="text">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <div class="image">
      <img src="/about-hero.svg" alt="">
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 40px;
  background-color: #59AB6E;
  height: 480px;
}

/* text side */
.text {
  width: 50%;
  color: white;
}

/* image side */
.image {
  width: 50%;
}

.image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>