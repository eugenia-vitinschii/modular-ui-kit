<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text as="h1" :type="'heading'">Checkbox Preview</base-text>
            </div>
            <div class="page__content">
               <div class="form section">
                  <base-text as="h2" :type="'subheading'">Checkbox</base-text>
                  <div class="form__item">
                     <base-checkbox v-model="baseValue" label="Remember me" />
                  </div>
                  <div class="form__item">
                     <base-checkbox v-model="hintValue" label="Subscribe to newsletter"
                        hint="We promise to send only high-quality articles once a week." />
                  </div>
                  <div class="form__item">
                     <base-checkbox v-model="errorValue" label="I accept the Terms and Conditions"
                        error="This field is required" />
                  </div>
                  <div class="form__item">
                     <base-checkbox v-model="disabledUnchecked" label="Unavailable option" disabled />
                  </div>
                  <div class="form__item">
                     <base-checkbox v-model="disabledChecked" label="Locked active option" disabled />
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
import BaseCheckbox from '@/components/ui/form/BaseCheckbox.vue';
import BaseText from '@/components/ui/typography/BaseText.vue';

/* state */
const baseValue = ref(true)
const hintValue = ref(false)
const errorValue = ref(false)
const disabledUnchecked = ref(false)
const disabledChecked = ref(true)

</script>
