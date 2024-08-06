import { createRouter, createWebHistory } from 'vue-router';

// name：路由的名稱，path：路由的路徑，component：該路由對應的頁面組件
const routes = [
    { name: "login", path: "/login", component: () => import('../views/login.vue') },
    { name: "register", path: "/register", component: () => import('../views/register.vue') },
    { name: "main", path: "/main", component: () => import('../views/main.vue') },
    { name: "video", path: "/video", component: () => import('../views/video_recomamdation.vue') },
    { name: "person", path: "/person", component: () => import('../views/person.vue') },
    { name: "archive", path: "/archive", component: () => import('../views/archive.vue') },
    { name: "map", path: "/map", component: () => import('../views/foot_map.vue') },
    { name: "article", path: "/article", component: () => import('../views/article.vue') },
    { name: "create_article", path: "/create_article", component: () => import('../views/create_article.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 導出路由轉換器
export default router