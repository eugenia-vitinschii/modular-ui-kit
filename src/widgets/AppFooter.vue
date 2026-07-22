<template>
   <footer class="footer">
      <div class="container">
         <div class="footer__wrapper">
            <base-text :type="'subheading'" :variant="'primary'" :align="'center'">[MODULAR UI KIT]</base-text>
            <base-text as="a" :href="'https://github.com/eugenia-vitinschii/modular-ui-kit'" :variant="'muted'"
               :align="'center'">[repo]</base-text>
         </div>
      </div>
   </footer>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseText from '@/components/ui/typography/BaseText.vue';
</script>
