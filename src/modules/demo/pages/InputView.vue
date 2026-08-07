<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Input preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="form muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Input</muk-text>
                  <div class="form__item">
                     <muk-input v-model="textValue" label="*Name" placeholder="Enter your username..." />
                     <!-- <p class="body-text" v-if="textValue">Current value: <strong>{{ textValue }}</strong> </p> -->
                  </div>
                  <div class="form__item">
                     <muk-input v-model="emailValue" type="email" label="*Enter email" placeholder="example@email.com"
                        :error="emailError" hint="We will never share your email." />
                  </div>
                  <div class="form__item">
                     <muk-input v-model="disabledValue" label="API Key" disabled />
                  </div>
                  <div class="form__item">
                     <muk-input v-model="passwordValue" type="password" label="*Enter password"
                        placeholder="Enter password..." />
                  </div>
                  <div class="form__item">
                     <muk-input v-model="dateValue" type="date" label="Your birthday" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref, computed } from 'vue'

/* COMPONENTS */
import MukInput from '@/components/ui/form/MukInput.vue';
import MukText from '@/components/ui/typography/MukText.vue';

/* vstate */
const textValue = ref('')
const emailValue = ref('')
const passwordValue = ref('')
const disabledValue = ref('hidden_secure_token_xyz')
const dateValue = ref('')

//error
const emailError = computed(() => {
   if (!emailValue.value) return ''
   return emailValue.value.includes('@') ? '' : 'Invalid email'
})

</script>
