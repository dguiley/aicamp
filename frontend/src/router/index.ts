import Dogs3WaysVue from '@/views/Dogs3Ways.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import DrawingPage from '../views/DrawingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/dogs', component: Dogs3WaysVue },
    { path: '/drawing', component: DrawingPage },
  ]
})

export default router
