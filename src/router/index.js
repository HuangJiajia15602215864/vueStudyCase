import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {
  html,
  css,
  js,
  vue,
  list,
  luckyDraw,
  calendar,
  flex,
  chart,
  keyboard
} from '@/common/routes/index.ts'

Vue.use(VueRouter)

const routes = [{
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
  ...vue,
  ...list,
  ...luckyDraw,
  ...calendar,
  ...flex,
  ...chart,
  ...keyboard
]

const scrollBehavior=function(to, from, savedPosition) {
  if (savedPosition) {// 浏览器的前进后退才有savedPosition值
    return savedPosition
  }  
  else {
    return {
      x: 0,
      y: 0
    }
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  /* 从列表页进入详情页则缓存列表页，若从其他页面进入列表页则不缓存列表页。 */
  if (from.meta.cacheTo) {
    from.meta.cacheTo.forEach(item => {
      console.log(to.name)
      console.log(item)
      console.log(item.includes(to.name))
      if (item.includes(to.name)) {
        console.log("保持");
        from.meta.keepAlive = true;
      } else if (!item.includes(to.name)) {
        from.meta.keepAlive = false
      }
    })
  }
  next()
})

export default router