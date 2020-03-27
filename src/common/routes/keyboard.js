// 键盘组件模块 ==================
const keyboardPage = () => import('@/views/keyboard/keyboard.vue')

const keyboard = [{
    path: '/keyboard',
    name: 'keyboard',
    component: keyboardPage,
    meta: {
      title: '键盘组件'
    }
  }
]

export default keyboard