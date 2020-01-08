// 列表模块 ==================
const index = () => import('@/views/list/index.vue')
const detail = () => import('@/views/list/detail.vue')

const list = [{
    path: '/list/detail',
    name: 'detail',
    component: detail,
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/list',
    name: 'index',
    component: index,
    meta: {
      title: '列表页',
      cacheTo: ["detail"], //只有从本路由进入这个数组里的路由才会缓存list这个页面
      keepAlive: true
    },
  }
]

export default list