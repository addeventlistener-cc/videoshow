import Vue from 'vue'
Vue.config.productionTip = false
// 导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入axios模块
import axios from 'axios'
Vue.prototype.$axios = axios 
//导入elementui模块
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//导入vuex模块
// import store from './store/index.js'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count+=1
    }
  }
})
import App from './App.vue'
import router from'./router.js'
import { Button, Select } from 'element-ui';
Vue.use(Button)
Vue.use(Select)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
