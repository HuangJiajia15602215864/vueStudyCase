// flex移动端模块 ==================
const flexPage = () => import('@/views/flex/index.vue')
const headerPage = () => import('@/views/flex/Header.vue')

const flex = [
  {
    path: '/flex',
    name: 'flex',
    component: flexPage,
    meta: {
      title: 'flex移动端页面布局',
      depth:  1
    }
  },
  {
    path: '/flex/header',
    name: 'header',
    component: headerPage,
    meta: {
      title: 'flex之标题栏',
      depth:  2
    }
  }
]

export default flex