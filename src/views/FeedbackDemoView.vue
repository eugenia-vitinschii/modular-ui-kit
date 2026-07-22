<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text as="h1" :type="'heading'">Toast & Modal Preview</base-text>
            </div>
            <div class="page__content">
               <div class="demo-controls section">
                  <base-text as="h2" :type="'subheading'">Demo Controls [Toast]</base-text>
                  <div class="demo-controls__buttons">
                     <base-button v-for="type in variants" :key="type" :variant="type" @click="triggerToast(type)">
                        Show {{ type }} toast
                     </base-button>
                  </div>
               </div>
               <div class="demo-controls section">
                  <base-text as="h3" :type="'subheading'">Demo Controls [Modal]</base-text>
                  <div class="demo-controls__buttons">
                     <base-button v-for="type in variants" :key="type" :variant="type" @click="openModal(type)">
                        Show {{ type }} modal
                     </base-button>
                  </div>
               </div>
            </div>
            <base-modal v-model:open="isModalOpen" :title="activeTitle" :variant="activeVariant">
               <template #content>
                  <base-text>variant: {{ activeVariant }}</base-text>
                  <base-input v-if="activeVariant === 'danger'" v-model="confirmText"
                     placeholder="Type 'DELETE' to confirm" :error="inputError" />
                  <base-checkbox v-if="activeVariant === 'warning'" v-model="isAgreed"
                     label="I accept the risk and want to proceed" />
               </template>
               <template #actions>
                  <base-button variant="secondary" @click="isModalOpen = false">
                     cancel
                  </base-button>
                  <base-button :variant="activeVariant" @click="handleConfirm"
                     :disabled="activeVariant === 'warning' && !isAgreed">
                     confirm
                  </base-button>
               </template>
            </base-modal>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* Components */
import BaseButton from '@/components/ui/buttons/BaseButton.vue';
import BaseInput from '@/components/ui/form/BaseInput.vue';
import BaseCheckbox from '@/components/ui/form/BaseCheckbox.vue';
import BaseModal from '@/components/ui/overlays/BaseModal.vue';
import BaseText from '@/components/ui/typography/BaseText.vue';

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
