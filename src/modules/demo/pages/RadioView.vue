<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text as="h1" :type="'heading'">Radio Preview</base-text>1>
            </div>
            <div class="page__content">
               <div class="form section">
                  <base-text as="h2" :type="'subheading'">Radio</base-text>
                  <div class="form__item">
                     <base-radio v-model="selectedPlan" value="starter" name="billing-group" label="Starter Plan"
                        hint="Free forever, includes 3 active projects" />
                     <base-radio v-model="selectedPlan" value="pro" name="billing-group" label="Pro Business"
                        hint="$19/month, unlimited projects & team sharing" />
                     <base-radio v-model="selectedPlan" value="enterprise" name="billing-group" label="Enterprise"
                        hint="Custom solutions for large organizations" disabled />
                     <base-radio v-model="errorPlan" value="declined" name="error-group"
                        label="Accept terms & privacy policy"
                        error="You must accept the terms before changing your plan" />
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
import BaseRadio from '@/components/ui/form/BaseRadio.vue';
import BaseText from '@/components/ui/typography/BaseText.vue';

/* state */
const selectedPlan = ref('starter')
const errorPlan = ref(null)

</script>