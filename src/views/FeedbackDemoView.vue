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
                  <base-button @click="triggerToast('success')" variant="ghost">succes toast</base-button>
                  <base-button @click="triggerToast('error')" variant="danger">error toast</base-button>
                  <base-button @click="triggerToast('warning')" variant="primary">warning toast</base-button>
                  <base-button @click="triggerToast('info')" variant="secondary">info toast</base-button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* Components */
import BaseButton from '@/components/ui/buttons/BaseButton.vue';

/* */
import { useToast, type ToastType } from '@/components/ui/feedback/useToast';

const { addToast } = useToast()

// messages for demo
const toastMessages: Record<ToastType, string> = {
   success: 'Success! Everything went smoothly.',
   error: 'Oops! Something went terribly wrong.',
   warning: 'Warning! Please review your input files.',
   info: 'Heads up! New updates are available.'
}

// trigger
function triggerToast(type: ToastType) {
   const message = toastMessages[type]
   addToast(message, type, 3000)
}
</script>
