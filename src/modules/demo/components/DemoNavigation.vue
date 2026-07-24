<template>
   <aside class="demo-nav">
      <div class="demo-nav__header">
         <base-text :type="'subheading'">UI Kit Showcase</base-text>
         <base-icon-button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path
                  d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" />
            </svg>
         </base-icon-button>
      </div>
      <nav class="demo-nav__body">
         <div class="demo-nav__group" v-for="group in navConfig" :key="group.title">
            <base-text as="span" :variant="'primary'">{{ group.title }}</base-text>
            <ul>
               <li v-for="link in group.items" :key="link.path">
                  <base-text as="router-link" :to="link.path" @click="$emit('close')">{{ link.label }}</base-text>
               </li>
            </ul>
         </div>
      </nav>
   </aside>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseText from '@/components/ui/typography/BaseText.vue';
import BaseIconButton from '@/components/ui/buttons/BaseIconButton.vue';

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
         { label: 'Data Table', path: '/demo/ui/table' },
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