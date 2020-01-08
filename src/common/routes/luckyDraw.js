// 抽奖模块 ==================
const luckyDrawPage = () => import('@/views/lucky-draw/index.vue')

const luckyDraw = [{
    path: '/luckyDraw',
    name: 'luckyDraw',
    component: luckyDrawPage,
    meta: {
      title: '抽奖页'
    }
  }
]

export default luckyDraw