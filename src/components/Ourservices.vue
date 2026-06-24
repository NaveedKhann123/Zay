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
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css');

/* ── Card Container ── */
.service-card {
  border-radius: 2rem;
  padding: 2.5rem 2rem;
  max-width: 1100px;
  margin: 2rem auto;
  transition: all 0.3s ease;
  background-color: #FFFFFF;
}


.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: stretch;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.8rem 1rem;
  border-radius: 1.5rem; 
  cursor: default;
  min-height: 180px;
  background-color: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 40, 60, 0.05);
  transition: all 0.3s ease;
}


.service-title {
  font-size: 1.1rem;
  color: #212529;
  margin-bottom: 0.25rem;
  font-family: sans-serif;
  transition: color 0.3s ease;
}

.service-sub {
  font-size: 0.85rem;
  color: #6c757d;
  font-family: sans-serif;
  transition: color 0.3s ease;
}


.service-item:hover {
  transform: translateY(-6px);
  background: #69BB7E;
  box-shadow: 0 16px 30px rgba(105, 187, 126, 0.3);
}


.service-item:hover .service-title,
.service-item:hover .service-sub {
  color: #ffffff;
}


.icon-wrap {
  width: 70px; 
  height: 70px; 
  font-size: 32px;
  color: #69BB7E; 
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(105, 187, 126, 0.1);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.service-item:hover .icon-wrap {
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  transform: scale(1.05);
}



/* Tablets & small laptops */
@media (max-width: 820px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .service-card {
    padding: 1.8rem 1.2rem;
    border-radius: 1.8rem;
  }

  .service-item {
    padding: 1.5rem 1rem;
    min-height: 150px;
  }

  .icon-wrap {
    width: 60px;
    height: 60px;
    font-size: 26px;
  }

  .service-title {
    font-size: 1rem;
  }
}


@media (max-width: 480px) {
  .service-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem;
  }

  .service-card {
    padding: 1rem 0.5rem;
    border-radius: 1.2rem;
    margin: 1rem auto;
  }

  .service-item {
    padding: 1.2rem 0.5rem;
    min-height: 130px;
    border-radius: 1rem;
  }

  .icon-wrap {
    width: 50px;
    height: 50px;
    font-size: 22px;
    margin-bottom: 0.5rem;
  }

  .service-title {
    font-size: 0.9rem;
  }

  .service-sub {
    font-size: 0.75rem;
  }
}


@media (max-width: 360px) {
  .service-grid {
    gap: 0.5rem;
  }

  .service-item {
    padding: 1rem 0.25rem;
    min-height: 115px;
  }

  .icon-wrap {
    width: 42px;
    height: 42px;
    font-size: 18px;
  }

  .service-title {
    font-size: 0.8rem;
  }

  .service-sub {
    font-size: 0.7srem;
  }
}
</style>