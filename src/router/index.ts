

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
   {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: "Home" }
   },
   {
      path: '/ui',
      name: 'ui-kit',
      children: [
         {
            path: 'buttons',
            name: 'ui-buttons',
            component: () => import('../views/ButtonsView.vue'),
            meta: { title: "Buttons" },
         },
         {
            path: 'flow',
            name: 'ui-flow',
            component: () => import('../views/ComponentFlowView.vue'),
            meta: { title: "Component Flow" },
         },
         {
            path: 'table',
            name: 'ui-table',
            component: () => import('../views/TableView.vue'),
            meta: { title: "Table" },
         },
         {
            path: 'form',
            name: 'ui-form',
            meta: { title: "Form" },
            children: [
               {
                  path: 'inputs',
                  name: 'ui-form-inputs',
                  component: () => import('../views/InputView.vue'),
                  meta: { title: "Inputs" }
               },
               {
                  path: 'selects',
                  name: 'ui-form-selects',
                  component: () => import('../views/SelectView.vue'),
                  meta: { title: "Selects" }
               },
               {
                  path: 'textareas',
                  name: 'ui-form-textareas',
                  component: () => import('../views/TextareaView.vue'),
                  meta: { title: "Textareas" }
               },
               {
                  path: 'checkboxes',
                  name: 'ui-form-checkboxes',
                  component: () => import('../views/CheckboxView.vue'),
                  meta: { title: "Checkboxes" }
               },
               {
                  path: 'radio',
                  name: 'ui-form-radio',
                  component: () => import('../views/RadioView.vue'),
                  meta: { title: "Radio" }
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