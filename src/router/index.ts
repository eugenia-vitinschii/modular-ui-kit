

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
            redirect: 'ui/form/inputs',
            children: [
               {
                  path: 'inputs',
                  name: 'ui-form-inputs',
                  component: () => import('../views/InputView.vue')
               },
               {
                  path: 'selects',
                  name: 'ui-form-selects',
                  component: () => import('../views/SelectView.vue')
               },
               {
                  path: 'textareas',
                  name: 'ui-form-textareas',
                  component: () => import('../views/TextareaView.vue')
               },
               {
                  path: 'checkboxes',
                  name: 'ui-form-checkboxes',
                  component: () => import('../views/CheckboxView.vue')
               },
            ]
         },

      ]
   }
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})

export default router