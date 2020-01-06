// HTML模块 ==================
const htmlPage = () => import('@/views/html/Html.vue')

const html = [
  {
    path: '/html',
    name: 'html',
    component: htmlPage,
    meta: {
      level: 1,
      isRequireAuth: false,
      title: 'html学习' //  网页title
    }
  }
]

export default html
