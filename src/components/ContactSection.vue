<template>
  <div class="page-header">
    <h1 class="page-header__title">Contact Us</h1>
    <p class="page-header__subtitle">
      Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
      <br class="desktop-br" /> Lorem ipsum dolor sit amet.
    </p>
  </div>
</template>

<style scoped>
.page-header {
  width: 100%;
  /* FIXED: ہائٹ فکسڈ کرنے کے بجائے min-height دی ہے اور فلیکس باکس استعمال کیا ہے */
  min-height: 250px;
  background-color: #E9EEF5;
  padding: 40px 20px;
  
  /* اس سے ٹیکسٹ باکس کے بالکل بیچ (Center) میں ائے گا */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-header__title {
  text-align: center;
  color: #212529;
  font-size: 36px;
  margin-bottom: 15px;
  margin-top: 0;
}

.page-header__subtitle {
  text-align: center;
  color: #6c757d;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  max-width: 800px; 
}

@media (max-width: 768px) {
  .page-header {
    min-height: 200px; 
    padding: 30px 15px;
  }

  .page-header__title {
    font-size: 28px; 
  }

  .page-header__subtitle {
    font-size: 14px; 
  }

  .desktop-br {
    display: none;
  }
}
</style>