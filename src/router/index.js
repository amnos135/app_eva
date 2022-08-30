import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/2_main.vue'
import mypage from '../views/2_mypage.vue'
import cafe from '../views/2_cafe.vue'
import sub1 from '../views/2_sub1.vue'
import sub2 from '../views/2_sub2.vue'
import login from '../views/2_login.vue'
 


const routes = [
  {
    path: '/',
    name: 'home',
    component: login
  },
  {
    path: '/main',
    name: 'main',
    component: main
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: mypage
  },
  {
    path: '/cafe',
    name: 'cafe',
    component: cafe
  },
  {
    path: '/sub1',
    name: 'sub1',
    component: sub1
  },
  {
    path: '/sub2',
    name: 'sub2',
    component: sub2
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
