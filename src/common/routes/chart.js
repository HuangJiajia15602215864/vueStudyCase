// 图标组件模块 ==================
const chartPage = () => import('@/views/chart/index.vue')

const chart = [{
    path: '/chart',
    name: 'chart',
    component: chartPage,
    meta: {
      title: '动态图表'
    }
  }
]

export default chart