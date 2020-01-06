// css模块 ==================
const cssPage = () => import('@/views/css/Css.vue')
const staggeredWaveLoading = () => import('@/views/css/staggered-wave-loading.vue')

const css = [
  {
    path: '/css',
    name: 'css',
    component: cssPage,
    meta: {
      title: 'css学习' //  网页title
    }
  },
  {
    path: '/css/staggeredWaveLoading',
    name: 'staggeredWaveLoading',
    component: staggeredWaveLoading,
    meta: {
      title: '交错动画' //  网页title
    }
  }
]

export default css
