
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from "vue-router";

/* ==== DEMO ROUTES ==== */
import { demoRoutes } from '@/modules/demo/routes/demo.routes';
/* === ERROR ROUTES === */
import { errorRoutes } from '@/modules/errors/routes/error.routes.ts';


const routes: RouteRecordRaw[] = [
   ...demoRoutes,
   ...errorRoutes,
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})

export default router