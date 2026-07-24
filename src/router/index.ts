
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from "vue-router";

/* ==== DEMO ROUTES ==== */
import { demoRoutes } from '@/modules/demo/routes/demo.routes';

/* === ERROR ROUTES === */
import { errorRoutes } from '@/modules/errors/routes/error.routes.ts';

/* === LANDING ROUTES === */
import { landingRoutes } from '@/modules/landing/routes/landing.routes';

const routes: RouteRecordRaw[] = [
   ...demoRoutes,
   ...errorRoutes,
   ...landingRoutes,
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})

export default router