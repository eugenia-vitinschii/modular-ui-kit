

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
   {
      path: '/',
      redirect: 'ui/buttons'
   },
   {
      path: '/ui',
      name: 'ui-kit',
      children: [
         {
            path: 'buttons',
            name: 'ui-buttons',
            component: () => import('../views/ButtonsView.vue')
         },
         {
            path: 'form',
            name: 'ui-form',
            component: () => import('../views/FormElementsView.vue')
         },

      ]
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})

export default router