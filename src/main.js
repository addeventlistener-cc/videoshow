import Vue from 'vue'
Vue.config.productionTip = false
// 导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入elementui模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import App from './App.vue'
import router from'./router.js'
import { Button, Select } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
