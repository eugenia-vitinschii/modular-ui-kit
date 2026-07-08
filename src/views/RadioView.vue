<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <h1 class="heading">Radio Preview</h1>
            </div>
            <div class="page__content">
               <div class="form section">
                  <p class="subheading">Radio</p>
                  <div class="form__item">
                     <base-radio v-model="selectedPlan" value="starter" name="billing-group" label="Starter Plan"
                        hint="Free forever, includes 3 active projects" />
                     <base-radio v-model="selectedPlan" value="pro" name="billing-group" label="Pro Business"
                        hint="$19/month, unlimited projects & team sharing" />
                     <base-radio v-model="selectedPlan" value="enterprise" name="billing-group" label="Enterprise"
                        hint="Custom solutions for large organizations" disabled />
                  </div>
                  <p class="subheading">Radio error</p>
                  <div class="form__item">
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

const selectedPlan = ref('starter')
const errorPlan = ref(null)

</script>