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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/p1',
      name: 'page1',
      component: () => import('../pages/FirstPage.vue')
    },
    {
      path: '/p2',
      name: 'page2',
      component: () => import('../pages/SecondPage.vue')
    },
    {
      path: '/p3',
      name: 'page3',
      component: () => import('../pages/ThirdPage.vue')
    },
    {
      path: '/p4',
      name: 'page4',
      component: () => import('../pages/FourthPage.vue')
    },
    {
      path: '/p5',
      name: 'page5',
      component: () => import('../pages/FifthPage.vue')
    }
  ]
})

export default router
