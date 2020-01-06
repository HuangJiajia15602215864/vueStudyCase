import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {
  html,
  css,
  js,
  vue
} from '@/common/routes/index.ts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    redirect: '/home'
  },
  ...html,
  ...css,
  ...js,
  ...vue
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
document.title=to.meta.title||'前端学习积累'
next();
  })

export default router