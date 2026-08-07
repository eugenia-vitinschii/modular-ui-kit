<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Text Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls</muk-text>
                  <muk-input v-model="demoText" label="Custom text Preview" placeholder="Type something..." />
                  <muk-text>Variants</muk-text>
                  <div class="demo-controls--row">
                     <muk-radio v-for="variant in variantOptions" :key="variant" v-model="selectedVariant"
                        name="text-variant" :value="variant" :label="variant"></muk-radio>
                  </div>
                  <muk-text>Alignment:</muk-text>
                  <div class="demo-controls--row">
                     <muk-radio v-for="align in alignOptions" :key="align" v-model="selectedAlign" name="text-align"
                        :value="align" :label="align" />
                  </div>
               </div>
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-heading'" :variant="selectedVariant" :align="selectedAlign">
                     {{ demoText }}</muk-text>
                  <muk-text :type="'muk-subheading'" :variant="selectedVariant" :align="selectedAlign">{{ demoText
                  }}</muk-text>
                  <muk-text :variant="selectedVariant" :align="selectedAlign">{{ demoText
                  }}</muk-text>
               </div>
               <div class="demo-controls muk-section">
                  <muk-text as="h3" :type="'muk-heading'">Custom Tags & Links (`as` prop) </muk-text>
                  <muk-text as="a" href="#" :type="'muk-subheading'">This is a Subheading rendered as a link (a
                     tag)</muk-text>
                  <muk-text>Rendered as default paragraph</muk-text>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue'

/* COMPONENTS */
import MukRadio from '@/components/ui/form/MukRadio.vue';
import MukText from '@/components/ui/typography/MukText.vue';
import MukInput from '@/components/ui/form/MukInput.vue';

/* Types */
import type { UITextVariant, UITextAlign } from '@/types/ui.types';

/* Options */
const variantOptions: UITextVariant[] = [
   'primary',
   'secondary',
   'success',
   'warning',
   'danger',
   'muted'
]

const alignOptions: UITextAlign[] = ['left', 'center', 'right']

/* STATE */
const demoText = ref('The quick brown fox jumps over the lazy dog')
const selectedVariant = ref<UITextVariant>('secondary')
const selectedAlign = ref<UITextAlign>('left')

</script>


<style lang="sass">
.demo-controls--row
   display: flex
   align-items: center
   justify-content: start
   flex-direction: row
   flex-wrap: wrap
</style>