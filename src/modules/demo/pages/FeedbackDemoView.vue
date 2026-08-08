<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Toast & Modal Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls [Toast]</muk-text>
                  <div class="demo-controls__buttons">
                     <muk-button v-for="type in variants" :key="type" :variant="type" @click="triggerToast(type)">
                        Show {{ type }} toast
                     </muk-button>
                  </div>
               </div>
               <div class="demo-controls muk-section">
                  <muk-text as="h3" :type="'muk-subheading'">Demo Controls [Modal]</muk-text>
                  <div class="demo-controls__buttons">
                     <muk-button v-for="type in variants" :key="type" :variant="type" @click="openModal(type)">
                        Show {{ type }} modal
                     </muk-button>
                  </div>
               </div>
            </div>
            <muk-modal v-model:open="isModalOpen" :title="activeTitle" :variant="activeVariant">
               <template #content>
                  <muk-text>variant: {{ activeVariant }}</muk-text>
                  <muk-input v-if="activeVariant === 'danger'" v-model="confirmText"
                     placeholder="Type 'DELETE' to confirm" :error="inputError" />
                  <muk-checkbox v-if="activeVariant === 'warning'" v-model="isAgreed"
                     label="I accept the risk and want to proceed" />
               </template>
               <template #actions>
                  <muk-button variant="secondary" @click="isModalOpen = false">
                     cancel
                  </muk-button>
                  <muk-button :variant="activeVariant" @click="handleConfirm"
                     :disabled="activeVariant === 'warning' && !isAgreed">
                     confirm
                  </muk-button>
               </template>
            </muk-modal>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* Components */
import { MukButton, MukInput, MukCheckbox, MukModal, MukText, useMukToast } from 'modular-ui-kit-vue'

import type { UIVariant } from 'modular-ui-kit-vue'

/*======= TOAST DEMO ======= */

const { addToast } = useMukToast()

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
// popup state
const isModalOpen = ref(false)
const activeVariant = ref<UIVariant>('success')
const activeTitle = ref('')

// form state
const confirmText = ref('')
const inputError = ref('')
const isAgreed = ref(false)

// open modal handler
function openModal(variant: UIVariant) {
   activeVariant.value = variant
   activeTitle.value = `${variant.toUpperCase()} Action Required`

   confirmText.value = ''
   inputError.value = ''
   isAgreed.value = false


   isModalOpen.value = true
}

/* confirm action handler */
function handleConfirm() {
   if (activeVariant.value === 'danger' && confirmText.value !== 'DELETE') {
      inputError.value = 'Please type DELETE exactly to confirm!'
      return
   }
   const message = `Action confirmed for variant ${activeVariant.value}`
   addToast(message, 'success', 3000)

   isModalOpen.value = false
}

</script>

<style lang="sass">

.demo-controls__buttons 
   display: flex 
   align-items: start
   justify-content: space-between
   flex-direction: column
   gap: 20px
</style>
