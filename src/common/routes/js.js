// js模块 ==================
const jsPage = () => import('@/views/js/Js.vue')
const revealText = () => import('@/views/js/reveal-text.vue')

const js = [
  {
    path: '/js',
    name: 'js',
    component: jsPage,
    meta: {
      title: 'js学习' //  网页title
    }
  },
  {
    path: '/js/revealText',
    name: 'revealText',
    component: revealText,
    meta: {
      title: 'js分割文本' //  网页title
    }
  },
]

export default js
