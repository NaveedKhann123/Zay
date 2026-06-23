<template>
  <div class="service-card">
    <div class="service-grid">
      <div 
        v-for="service in services" 
        :key="service.id" 
        class="service-item"
      >
        <div class="icon-wrap">
          <i :class="['fas', service.icon]"></i>
        </div>
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-sub">{{ service.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const services = ref([
  { id: 1, title: 'Delivery Services', icon: 'fa-truck-fast', subtitle: 'Express & Standard' },
  { id: 2, title: 'Shipping & Return', icon: 'fa-arrows-rotate', subtitle: 'Easy returns' },
  { id: 3, title: 'Promotion', icon: 'fa-tags', subtitle: 'Special offers' },
  { id: 4, title: '24 Hours Service', icon: 'fa-clock', subtitle: 'Always available' }
])

onMounted(() => {
  console.log('✅ Delivery Services component mounted')
})
</script>



<style scoped>
/* ── Card Container ── */
.service-card {

  
  border-radius: 2rem;
  padding: 2.5rem 2rem;
  max-width: 1100px;
  margin: 2rem auto;

  transition: all 0.3s ease;
  background-color: #FFFFFF;
}

/* ── Grid Layout ── */
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: stretch;
}

/* ── Individual Service Items ── */
.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.8rem 1rem;
  /* border-radius: 1.5rem; */
  cursor: default;
  min-height: 160px;
 box-shadow: 0 16px 30px -12px rgba(0, 40, 60, 0.15);
}

.service-item:hover {
  transform: translateY(-6px);
  background: #69BB7E;
  box-shadow: 0 16px 30px -12px rgba(0, 40, 60, 0.15);
  border-color: rgba(255, 255, 255, 0.9);
  color: white;
}

/* ── Icon ── */
.icon-wrap {
  font-size: 40px;
  color: green;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(30, 58, 95, 0.06);
  margin-bottom: 0.75rem;
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.service-item:hover .icon-wrap {
  background: #69BB7E;
  color: white;
  transform: scale(1.05);
}




/* ── Responsive ── */

/* Tablets & small laptops */
@media (max-width: 820px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .service-card {
    padding: 1.8rem 1.2rem;
    border-radius: 1.8rem;
  }

  .service-item {
    padding: 1.4rem 0.8rem;
    min-height: 140px;
  }

  .icon-wrap {
    width: 3.6rem;
    height: 3.6rem;
    font-size: 2rem;
  }

  .service-title {
    font-size: 1rem;
  }
}

/* Mobile phones */
@media (max-width: 480px) {
  .service-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .service-card {
    padding: 1.2rem 0.8rem;
    border-radius: 1.5rem;
    margin: 1rem auto;
  }

  .service-item {
    padding: 1rem 0.4rem;
    min-height: 120px;
    border-radius: 1.2rem;
  }

  .icon-wrap {
    width: 3rem;
    height: 3rem;
    font-size: 1.6rem;
    margin-bottom: 0.4rem;
  }

  .service-title {
    font-size: 0.85rem;
  }

  .service-sub {
    font-size: 0.7rem;
  }
}

/* Very small screens */
@media (max-width: 360px) {
  .service-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .service-item {
    padding: 0.75rem 0.2rem;
    min-height: 100px;
  }

  .icon-wrap {
    width: 2.6rem;
    height: 2.6rem;
    font-size: 1.3rem;
  }

  .service-title {
    font-size: 0.75rem;
  }

  .service-sub {
    font-size: 0.6rem;
  }
}
</style>
