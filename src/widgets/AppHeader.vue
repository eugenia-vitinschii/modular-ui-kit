<template>
   <header class="header">
      <div class="container">
         <div class="header__wrapper">
            <div class="header__logo">
               <base-text :varinat="'primary'">[Modular UI Kit]</base-text>
            </div>
            <nav class="header__nav">
               <ul>
                  <li v-for="item in navItems" :key="item.path">
                     <base-text as="router-link" :to="item.path">{{ item.label }}</base-text>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   </header>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseText from '@/components/ui/typography/BaseText.vue';

const navItems = [
   { label: 'Text', path: '/ui/text' },
   { label: 'Buttons', path: '/ui/buttons' },
   { label: 'Input', path: '/ui/form/inputs' },
   { label: 'Select', path: '/ui/form/selects' },
   { label: 'Textarea', path: '/ui/form/textareas' },
   { label: 'Checkbox', path: '/ui/form/checkboxes' },
   { label: 'Radio', path: '/ui/form/radio' },
   { label: 'Component Flow', path: '/ui/flow' },
   { label: 'Toast & Popup', path: '/ui/feedback' },
   { label: 'Table', path: '/ui/table' },
]

</script>
