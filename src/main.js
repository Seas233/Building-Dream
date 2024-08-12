import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/router.js';
const app = createApp(App)

app.use(router)
app.mount("#app")
/*
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
app.use(ElementPlus);
 */

/*
import { createStore } from 'vuex'
import Vue from 'vue'

const store = createStore({
  state: {
    // 状态定义
  },
  mutations: {
    // 突变定义
  },
  actions: {
    // 动作定义
  }
})

new Vue({
  store,
  // 其他选项
})
*/