// css模块 ==================
const cssPage = () => import('@/views/css/Css.vue')

const vue = [
  {
    path: '/css',
    name: 'css',
    component: cssPage,
    meta: {
      level: 1,
      isRequireAuth: false,
      title: 'css学习' //  网页title
    }
  }
]

export default vue
