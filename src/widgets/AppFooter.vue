<template>
   <footer class="muk-footer">
      <div class="muk-container">
         <div class="muk-footer__wrapper">
            <muk-text :type="'subheading'" :variant="'primary'" :align="'center'">[MODULAR UI KIT]</muk-text>
            <muk-text as="a" :href="'https://github.com/eugenia-vitinschii/modular-ui-kit'" :variant="'muted'"
               :align="'center'">[repo]</muk-text>
         </div>
      </div>
   </footer>
</template>

<script setup lang="ts">
/* COMPONENTS */
import MukText from '@/components/ui/typography/MukText.vue';
</script>
