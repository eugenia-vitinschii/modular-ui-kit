<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Checkbox Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="form muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Checkbox</muk-text>
                  <div class="form__item">
                     <muk-checkbox v-model="baseValue" label="Remember me" />
                  </div>
                  <div class="form__item">
                     <muk-checkbox v-model="hintValue" label="Subscribe to newsletter"
                        hint="We promise to send only high-quality articles once a week." />
                  </div>
                  <div class="form__item">
                     <muk-checkbox v-model="errorValue" label="I accept the Terms and Conditions"
                        error="This field is required" />
                  </div>
                  <div class="form__item">
                     <muk-checkbox v-model="disabledUnchecked" label="Unavailable option" disabled />
                  </div>
                  <div class="form__item">
                     <muk-checkbox v-model="disabledChecked" label="Locked active option" disabled />
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
import { MukText, MukCheckbox } from 'modular-ui-kit-vue'

/* state */
const baseValue = ref(true)
const hintValue = ref(false)
const errorValue = ref(false)
const disabledUnchecked = ref(false)
const disabledChecked = ref(true)

</script>
