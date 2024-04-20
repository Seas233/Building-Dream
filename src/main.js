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