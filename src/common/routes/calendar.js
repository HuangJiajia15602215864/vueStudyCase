// 日历组件模块 ==================
const calendarPage = () => import('@/views/calendar/index.vue')

const calendar = [{
    path: '/calendar',
    name: 'calendar',
    component: calendarPage,
    meta: {
      title: '日历组件'
    }
  }
]

export default calendar