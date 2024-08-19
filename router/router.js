import { createRouter, createWebHistory } from 'vue-router';

// name：路由的名稱，path：路由的路徑，component：該路由對應的頁面組件
const routes = [
    { name: "video", path: "/video", component: () => import('../views/useless/video_recomamdation.vue') },
    { name: "archive", path: "/archive", component: () => import('../views/useless/archive.vue') },
    { name: "map", path: "/map", component: () => import('../views/useless/foot_map.vue') },
    { name: "article", path: "/article", component: () => import('../views/useless/article.vue') },
    
    { name: "test_", path: "/test_", component: () => import('../views/test_.vue') },
    { name: "main", path: "/main", component: () => import('../views/main.vue') },
    { name: "login", path: "/login", component: () => import('../views/login.vue') },
    { name: "register", path: "/register", component: () => import('../views/register.vue') },
    { name: "create_archive", path: "/create_archive", component: () => import('../views/create_archive.vue') },

    { name: "archive_recommendation", path: "/archive_recommendation", component: () => import('../views/archive_recommendation.vue') },
    { name: "user", path: "/user/:id", component: () => import('../views/user.vue') },
    { name: "archive", path: "/archive/:id", component: () => import('../views/archive.vue') },
    { name: "team", path: "/team/:id", component: () => import('../views/team.vue') },
    /*// router.js
const routes = [
  // 動態欄位以冒號開始
  { path: '/users/:id', component: User },
] */
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 導出路由轉換器
export default router