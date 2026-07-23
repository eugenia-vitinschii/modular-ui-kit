<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text as="h1" :type="'heading'">Modular UI Kit</base-text>
               <base-text as="h2" :type="'subheading'">Minimalist & Accessible Design System</base-text>
            </div>
            <div class="page__content">
               <base-text as="a" href='https://github.com/eugenia-vitinschii/modular-ui-kit'>
                  <img alt='GitHub Clones'
                     src='https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/2e6247835bbf3928be881ca260cad051/raw/clone.json&logo=github'>
               </base-text>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseText from '@/components/ui/typography/BaseText.vue';
</script>