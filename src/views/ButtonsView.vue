<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <h1 class="heading">Buttons Preview</h1>
            </div>
            <div class="page__content">
               <div class="demo-controls section">
                  <h2 class="subheading">Demo Controls</h2>
                  <base-radio value="normal" v-model="buttonState" name="buttons-demo" label="Normal type" />
                  <base-radio value="loading" v-model="buttonState" name="buttons-demo" label="Loading" />
                  <base-radio value="disabled" v-model="buttonState" name="buttons-demo" label="Disabled" />
               </div>
               <div class="buttons-grid section">
                  <div class="button-card" v-for="variant in variants" :key="variant">
                     <div class="button-card__header">
                        <p class="subheading">{{ variant }}</p>
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
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue'

/* COMPONENTS */
import BaseButton from '@/components/ui/buttons/BaseButton.vue';
// import BaseIconButton from '@/components/ui/buttons/BaseIconButton.vue';
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
   gap: 20px

.button-card
   padding: 16px

.button-card-row
   display: flex
   align-items: center
   justify-content: space-between
</style>