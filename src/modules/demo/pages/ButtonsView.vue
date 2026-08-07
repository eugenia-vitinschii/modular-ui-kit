<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Buttons Preview [Icon & Basic]</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls</muk-text>
                  <muk-radio value="normal" v-model="buttonState" name="buttons-demo" label="Normal type" />
                  <muk-radio value="loading" v-model="buttonState" name="buttons-demo" label="Loading" />
                  <muk-radio value="disabled" v-model="buttonState" name="buttons-demo" label="Disabled" />
               </div>
               <div class="muk-section">
                  <muk-text :type="'muk-subheading'">Basic buttons</muk-text>
                  <div class="buttons-grid">
                     <div class="button-card" v-for="variant in variants" :key="variant">
                        <div class="button-card__header">
                           <muk-text>{{ variant }}</muk-text>
                        </div>
                        <div class="button-card__sizes">
                           <div class="button-card-row" v-for="size in sizes" :key="size">
                              <muk-text>{{ size }}</muk-text>
                              <muk-button :variant="variant" :size="size" :loading="buttonState === 'loading'"
                                 :disabled="buttonState === 'disabled'">
                                 {{ variant }}</muk-button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="muk-section">
                  <muk-text as="h3" :type="'muk-subheading'">Icon buttons</muk-text>
                  <div class="buttons-grid">
                     <div class="button-card" v-for="variant in variants" :key="variant">
                        <div class="button-card__header">
                           <muk-text>{{ variant }}</muk-text>
                        </div>
                        <div class="button-card__sizes">
                           <div class="button-card-row" v-for="size in sizes" :key="size">
                              <muk-icon-button :variant="variant" :size="size" :loading="buttonState === 'loading'"
                                 :disabled="buttonState === 'disabled'" aria-label="demo">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                    <path
                                       d="M160-240v-480 172-12 320Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v131q-18-13-38-22.5T800-548v-92H447l-80-80H160v480h283q3 21 9.5 41t15.5 39H160Zm400 0v-22q0-45 44-71.5T720-280q72 0 116 26.5t44 71.5v22H560Zm103.5-183.5Q640-367 640-400t23.5-56.5Q687-480 720-480t56.5 23.5Q800-433 800-400t-23.5 56.5Q753-320 720-320t-56.5-23.5Z" />
                                 </svg>
                              </muk-icon-button>
                           </div>
                        </div>
                     </div>
                  </div>
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
import MukButton from '@/components/ui/buttons/MukButton.vue';
import MukIconButton from '@/components/ui/buttons/MukIconButton.vue';
import MukRadio from '@/components/ui/form/MukRadio.vue';
import MukText from '@/components/ui/typography/MukText.vue';

/* TYPES */
import type { UIButtonVariant, UISize } from '@/types/ui.types';

/* BUTTONS */
/* state control */
type DemoState = 'normal' | 'loading' | 'disabled'
const buttonState = ref<DemoState>('normal')

/* variants */
const variants: UIButtonVariant[] = [
   'primary',
   'secondary',
   'success',
   'warning',
   'danger',
   'ghost'
]
/* sizes */
const sizes: UISize[] = ['sm', 'md', 'lg']

</script>

<style lang="sass">
.buttons-grid
   display: grid
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
   gap: 10px

.button-card
   padding: 16px

.button-card-row
   display: flex
   align-items: center
   justify-content: space-between
   overflow: scroll

</style>