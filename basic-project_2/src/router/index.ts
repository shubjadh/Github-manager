import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    
    {
      path: '/About',
      name: 'About',
      component: () => import('../pages/AboutPage.vue')
    },
   
    {
      path: '/Login',
      name: 'Login',
      component: () => import('../pages/LoginPage.vue')
    },
    {
      path: '/repositories',
      name: 'repo',
      component: () => import('../pages/RepositoryPage.vue')
    },
    {
      path: '/gist',
      name: 'gist',
      component: () => import('../pages/GistPage.vue')
    },
    {
      path:'/user',
      name: 'user',
      component: () => import('../pages/UserProfilePage.vue')
    }
    
  ]
})

export default router
