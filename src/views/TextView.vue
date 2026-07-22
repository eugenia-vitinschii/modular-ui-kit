<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text as="h1" :type="'heading'">Text Preview</base-text>
            </div>
            <div class="page__content">
               <div class="demo-controls section">
                  <base-text as="h2" :type="'subheading'">Demo Controls</base-text>
                  <base-input v-model="demoText" label="Custom text Preview" placeholder="Type something..." />
                  <base-text>Variants</base-text>
                  <div class="demo-controls--row">
                     <base-radio v-for="variant in variantOptions" :key="variant" v-model="selectedVariant"
                        name="text-variant" :value="variant" :label="variant"></base-radio>
                  </div>
                  <base-text>Alignment:</base-text>
                  <div class="demo-controls--row">
                     <base-radio v-for="align in alignOptions" :key="align" v-model="selectedAlign" name="text-align"
                        :value="align" :label="align" />
                  </div>
               </div>
               <div class="demo-controls section">
                  <base-text as="h2" :type="'heading'">Variant: [{{ selectedVariant }}] Align: [{{ selectedAlign
                  }}]</base-text>
                  <base-text :type="'heading'" :variant="selectedVariant" :align="selectedAlign">{{ demoText
                     }}</base-text>
                  <base-text :type="'subheading'" :variant="selectedVariant" :align="selectedAlign">{{ demoText
                     }}</base-text>
                  <base-text :type="'body-text'" :variant="selectedVariant" :align="selectedAlign">{{ demoText
                     }}</base-text>
               </div>
               <div class="demo-controls section">
                  <base-text as="h3" :type="'heading'">Custom Tags & Links (`as` prop) </base-text>
                  <base-text as="a" href="#" :type="'subheading'">This is a Subheading rendered as a link (a
                     tag)</base-text>
                  <base-text>Rendered as default paragraph</base-text>
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
import BaseRadio from '@/components/ui/form/BaseRadio.vue';
import BaseText from '@/components/ui/typography/BaseText.vue';
import BaseInput from '@/components/ui/form/BaseInput.vue';

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
</style>