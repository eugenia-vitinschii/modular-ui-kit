<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <h1 class="heading">Textarea Preview</h1>
            </div>
            <div class="page__content">
               <div class="form section">
                  <p class="subheading">Textarea</p>
                  <div class="form__item">
                     <base-textarea v-model="biography"
                        placeholder="Tell us about yourself, your skills, and your professional background..."
                        label="Biography" />
                  </div>
                  <div class="form__item">
                     <base-textarea v-model="orderComment" label="Order Comments"
                        placeholder="Add special instructions for delivery..."
                        error="Comment length cannot exceed 150 characters." />
                  </div>
                  <div class="form__item">
                     <base-textarea v-model="systemNotes" label="System Notes (Read Only)"
                        placeholder="No system notes available for this resource."
                        hint="This field is locked and managed by the administrator" disabled />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* COMPONENTS */
import BaseTextarea from '@/components/ui/form/BaseTextarea.vue';


const biography = ref('')
const orderComment = ref('Please deliver the package between 6 PM and 8 PM. If I am not at home, please leave it with my neighbor from apartment 42. Also, make sure to call me 10 minutes before arrival. Thank you so much for your help!')
const systemNotes = ref('CONTAINER_ID: 9f82b3c1\nSTATUS: Active\nLAST_DEPLOY: 2026-07-02 12:44:12\nREGION: eu-central-1\nNo manual overrides allowed.')
</script>