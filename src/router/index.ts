import { createRouter, createWebHistory } from 'vue-router';
import sxddyfz from "./routes/sxddyfz.vue";
import fljc from "./routes/fljc.vue";
import login from "../Navigation/conponment/Login.vue";

// 路由配置
const routes = [
    {
        path: '/',
        name: 'sxddyfz',
        component: sxddyfz,
    },
    {
        path: '/fljc',
        name: 'fljc',
        component: fljc,
    },
    {
        path: '/login',
        name:'login',
        component: login,
    }
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 History 模式
    routes,
});

export default router;
