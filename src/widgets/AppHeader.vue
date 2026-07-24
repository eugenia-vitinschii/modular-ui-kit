<template>
   <header class="header">
      <div class="container">
         <div class="header__wrapper">
            <div class="header__logo">
               <base-text as="router-link" :varinat="'primary'" :to="'/'">[Modular UI Kit]</base-text>
            </div>
            <nav class="header__nav">
               <ul>
                  <!-- <li v-for="item in navItems" :key="item.path">
                     <base-text as="router-link" :to="item.path">{{ item.label }}</base-text>
                  </li> -->
               </ul>
            </nav>
         </div>
      </div>
   </header>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseText from '@/components/ui/typography/BaseText.vue';

</script>

<style lang="sass">

.header
   padding: 20px
</style>
