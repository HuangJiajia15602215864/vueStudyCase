import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navigation from 'vue-navigation'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Navigation, {router}) // router为路由文件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts //将echarts注册成Vue的全局属性

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
