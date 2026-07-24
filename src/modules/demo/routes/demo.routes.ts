/* DEMO ROUTES */

import { RouterView, type RouteRecordRaw } from "vue-router";

export const demoRoutes: RouteRecordRaw[] = [

   {
      path: '/demo',
      name: 'demo-ui-kit',
      meta: { title: "Demo" },
      children: [
         {
            path: '',
            name: 'demo-home',
            component: () => import('../pages/DemoHomeView.vue'),
         },
         {
            path: 'ui',
            component: RouterView,
            meta: { title: "UI" },
            children: [
               {
                  path: 'text',
                  name: 'ui-text',
                  component: () => import('../pages/TextView.vue'),
                  meta: { title: "Text" },
               },
               {
                  path: 'buttons',
                  name: 'ui-buttons',
                  component: () => import('../pages/ButtonsView.vue'),
                  meta: { title: "Buttons" },
               },
               {
                  path: 'flow',
                  name: 'ui-flow',
                  component: () => import('../pages/ComponentFlowView.vue'),
                  meta: { title: "Component Flow" },
               },
               {
                  path: 'table',
                  name: 'ui-table',
                  component: () => import('../pages/TableView.vue'),
                  meta: { title: "Table" },
               }, {
                  path: 'feedback',
                  name: 'ui-feedback',
                  component: () => import('../pages/FeedbackDemoView.vue'),
                  meta: { title: "Toast and Modal" },
               }, {
                  path: 'form',
                  name: 'ui-form',
                  component: RouterView,
                  meta: { title: "Form" },
                  children: [
                     {
                        path: 'inputs',
                        name: 'ui-form-inputs',
                        component: () => import('../pages/InputView.vue'),
                        meta: { title: "Inputs" }
                     },
                     {
                        path: 'selects',
                        name: 'ui-form-selects',
                        component: () => import('../pages/SelectView.vue'),
                        meta: { title: "Selects" }
                     },
                     {
                        path: 'textareas',
                        name: 'ui-form-textareas',
                        component: () => import('../pages/TextareaView.vue'),
                        meta: { title: "Textareas" }
                     },
                     {
                        path: 'checkboxes',
                        name: 'ui-form-checkboxes',
                        component: () => import('../pages/CheckboxView.vue'),
                        meta: { title: "Checkboxes" }
                     },
                     {
                        path: 'radio',
                        name: 'ui-form-radio',
                        component: () => import('../pages/RadioView.vue'),
                        meta: { title: "Radio" }
                     },
                  ]
               }
            ]
         },
      ]
   },
]