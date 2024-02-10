import { createRouter, createWebHistory } from 'vue-router'
import page1Vue from '@/views/page-1.vue'
import page2Vue from '@/views/page-2.vue'
import page3Vue from '@/views/page-3.vue'
import page4Vue from '@/views/page-4.vue'
import page5Vue from '@/views/page-5.vue'
import page6Vue from '@/views/page-6.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: page1Vue
    },
    {
      path: '/about',
      name: 'about',
      component: page2Vue
    },
    {
      path: '/services',
      name: 'services',
      component: page3Vue
    },
    {
      path: '/shop',
      name: 'shop',
      component: page4Vue
    },
    {
      path: '/login',
      name: 'login',
      component: page5Vue
    },
    {
      path: '/signin',
      name: 'signin',
      component: page6Vue
    },
  ]
})

export default router
