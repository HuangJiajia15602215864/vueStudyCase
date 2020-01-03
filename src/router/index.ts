import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import html from '../views/Html.vue'
import css from '../views/Css.vue'
import js from '../views/Js.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/html',
    name: 'html',
    component: html
  },
  {
    path: '/css',
    name: 'css',
    component: css
  },
  {
    path: '/js',
    name: 'js',
    component: js
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
