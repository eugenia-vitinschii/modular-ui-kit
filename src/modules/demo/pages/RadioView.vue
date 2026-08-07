<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Radio Preview</muk-text>1>
            </div>
            <div class="muk-page__content">
               <div class="form muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Radio</muk-text>
                  <div class="form__item">
                     <muk-radio v-model="selectedPlan" value="starter" name="billing-group" label="Starter Plan"
                        hint="Free forever, includes 3 active projects" />
                     <muk-radio v-model="selectedPlan" value="pro" name="billing-group" label="Pro Business"
                        hint="$19/month, unlimited projects & team sharing" />
                     <muk-radio v-model="selectedPlan" value="enterprise" name="billing-group" label="Enterprise"
                        hint="Custom solutions for large organizations" disabled />
                     <muk-radio v-model="errorPlan" value="declined" name="error-group"
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
import MukRadio from '@/components/ui/form/MukRadio.vue';
import MukText from '@/components/ui/typography/MukText.vue';

/* state */
const selectedPlan = ref('starter')
const errorPlan = ref(null)

</script>