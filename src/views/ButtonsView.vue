<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <h1 class="heading">Buttons Preview [Icon & Basic]</h1>
            </div>
            <div class="page__content">
               <div class="demo-controls section">
                  <h2 class="subheading">Demo Controls</h2>
                  <base-radio value="normal" v-model="buttonState" name="buttons-demo" label="Normal type" />
                  <base-radio value="loading" v-model="buttonState" name="buttons-demo" label="Loading" />
                  <base-radio value="disabled" v-model="buttonState" name="buttons-demo" label="Disabled" />
               </div>
               <div class="section">
                  <p class="subheading">Basic buttons</p>
                  <div class="buttons-grid">
                     <div class="button-card" v-for="variant in variants" :key="variant">
                        <div class="button-card__header">
                           <p class="body-text">{{ variant }}</p>
                        </div>
                        <div class="button-card__sizes">
                           <div class="button-card-row" v-for="size in sizes" :key="size">
                              <p class="body-text">{{ size }}</p>
                              <base-button :variant="variant" :size="size" :loading="buttonState === 'loading'"
                                 :disabled="buttonState === 'disabled'">
                                 {{ variant }}</base-button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class=" section">
                  <p class="subheading">Icon buttons</p>
                  <div class="buttons-grid">
                     <div class="button-card" v-for="variant in variants" :key="variant">
                        <div class="button-card__header">
                           <p class="body-text">{{ variant }}</p>
                        </div>
                        <div class="button-card__sizes">
                           <div class="button-card-row" v-for="size in sizes" :key="size">
                              <base-icon-button :variant="variant" :size="size" :loading="buttonState === 'loading'"
                                 :disabled="buttonState === 'disabled'">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                    <path
                                       d="M160-240v-480 172-12 320Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v131q-18-13-38-22.5T800-548v-92H447l-80-80H160v480h283q3 21 9.5 41t15.5 39H160Zm400 0v-22q0-45 44-71.5T720-280q72 0 116 26.5t44 71.5v22H560Zm103.5-183.5Q640-367 640-400t23.5-56.5Q687-480 720-480t56.5 23.5Q800-433 800-400t-23.5 56.5Q753-320 720-320t-56.5-23.5Z" />
                                 </svg>
                              </base-icon-button>
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
import BaseButton from '@/components/ui/buttons/BaseButton.vue';
import BaseIconButton from '@/components/ui/buttons/BaseIconButton.vue';
import BaseRadio from '@/components/ui/form/BaseRadio.vue';

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
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
   gap: 10px

.button-card
   padding: 16px

.button-card-row
   display: flex
   align-items: center
   justify-content: space-between
</style>