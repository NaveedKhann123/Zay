import { createRouter, createWebHistory } from 'vue-router'

import Home from '../view/Home.vue'
import About from '../view/About.vue'
import Shop from '../view/Shop.vue'
import Contact from '../view/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
    { path: '/shop', component: Shop },
      { path: '/contact', component: Contact },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router