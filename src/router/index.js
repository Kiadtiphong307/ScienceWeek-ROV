import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import TeamView from '@/views/TeamView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/Team',
      name: 'Team',
      component: TeamView
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterView
    }
  ]
})

export default router
