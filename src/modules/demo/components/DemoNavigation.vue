<template>
   <aside class="demo-nav">
      <div class="demo-nav__header">
         <muk-text :type="'muk-subheading'">UI Kit Showcase</muk-text>
         <muk-icon-button aria-label="Close Demo" @click="$emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path
                  d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
            </svg>
         </muk-icon-button>
      </div>
      <nav class="demo-nav__body">
         <div class="demo-nav__group" v-for="group in navConfig" :key="group.title">
            <muk-text as="span" :variant="'primary'">{{ group.title }}</muk-text>
            <ul>
               <li v-for="link in group.items" :key="link.path">
                  <muk-text as="router-link" :to="link.path" @click="$emit('close')">{{ link.label }}</muk-text>
               </li>
            </ul>
         </div>
      </nav>
   </aside>
</template>

<script setup lang="ts">
/* COMPONENTS */
import { MukText, MukIconButton } from 'modular-ui-kit-vue'


/* PROPS & EMITS */
const emit = defineEmits<{
   (e: 'close'): void
}>()

interface NavItem {
   label: string
   path: string
}

interface NavGroup {
   title: string
   items: NavItem[]
}

const navConfig: NavGroup[] = [
   {
      title: 'General',
      items: [
         { label: 'Typography', path: '/demo/ui/text' },
         { label: 'Buttons', path: '/demo/ui/buttons' },
         { label: 'Component Flow', path: '/demo/ui/flow' },
         { label: 'Feedback & Toast', path: '/demo/ui/feedback' },
      ]
   },
   {
      title: 'Form Elements',
      items: [
         { label: 'Inputs', path: '/demo/ui/form/inputs' },
         { label: 'Selects', path: '/demo/ui/form/selects' },
         { label: 'Textareas', path: '/demo/ui/form/textareas' },
         { label: 'Checkboxes', path: '/demo/ui/form/checkboxes' },
         { label: 'Radio', path: '/demo/ui/form/radio' },
      ]
   },
   {
      title: 'System & Errors',
      items: [
         { label: '401 Unauthorized', path: '/401' },
         { label: '403 Forbidden', path: '/403' },
         { label: '404 Not Found', path: '/404' },
         { label: '500 Server Error', path: '/500' },
      ]
   }
]
</script>
<style lang="sass">

.demo-nav
   &__header
      display: flex
      justify-content: space-between
      align-items: center

</style>