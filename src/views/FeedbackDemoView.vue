<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <h1 class="heading">Toast & Modals Preview</h1>
            </div>
            <div class="page__content">
               <div class="demo-controls section">
                  <h2 class="subheading">Demo Controls</h2>
                  <div class="demo-controls__buttons">
                     <base-button v-for="type in variants" :key="type" :variant="type" @click="triggerToast(type)">Show
                        {{ type }} toast</base-button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */

/* Components */
import BaseButton from '@/components/ui/buttons/BaseButton.vue';

import { useToast } from '@/components/ui/feedback/useToast';
import type { UIVariant } from '@/types/ui.types'

/*======= TOAST DEMO ======= */

const { addToast } = useToast()

const variants: UIVariant[] = [
   'primary',
   'secondary',
   'success',
   'warning',
   'danger',
]
// messages for demo
const toastMessages: Record<UIVariant, string> = {
   primary: 'New system updates are now available.',
   secondary: 'Your draft has been saved automatically.',
   success: 'Changes saved successfully!',
   warning: 'Please review your entries before proceeding.',
   danger: 'Something went wrong. Please try again.'
}

// trigger
function triggerToast(variant: UIVariant) {
   const message = toastMessages[variant]
   addToast(message, variant, 3000)
}

/*======= POPUP DEMO ======= */
</script>

<style lang="sass">
.demo-controls__buttons
   display: flex
   align-items: center
   justify-content: space-between
</style>