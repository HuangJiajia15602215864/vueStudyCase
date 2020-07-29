// 分页组件模块 ==================
const paginationPage = () => import('@/views/pagination/index.vue')

const pagination = [{
    path: '/pagination',
    name: 'pagination',
    component: paginationPage,
    meta: {
      title: '分页组件'
    }
  }
]

export default pagination