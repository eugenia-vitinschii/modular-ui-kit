<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Modular UI Kit</muk-text>
               <muk-text as="h2" :type="'muk-subheading'">Minimalist & Accessible Design System</muk-text>
            </div>
            <div class="muk-page__content">
               <muk-text as="a" href='https://github.com/eugenia-vitinschii/modular-ui-kit'>
                  <img alt='GitHub Clones'
                     src='https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/2e6247835bbf3928be881ca260cad051/raw/clone.json&logo=github'>
               </muk-text>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import { MukText } from 'modular-ui-kit-vue'
</script>