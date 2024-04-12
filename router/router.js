import { createRouter, createWebHistory } from 'vue-router';

// name：路由的名稱，path：路由的路徑，component：該路由對應的頁面組件
const routes = [
    { name: "login", path: "/login", component: () => import('../views/login.vue') },
    { name: "main", path: "/main", component: () => import('../views/main.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 導出路由轉換器
export default router