<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text as="h1" :type="'heading'">Input preview</base-text>
            </div>
            <div class="page__content">
               <div class="form section">
                  <base-text as="h2" :type="'subheading'">Input</base-text>
                  <div class="form__item">
                     <base-input v-model="textValue" label="*Name" placeholder="Enter your username..." />
                     <!-- <p class="body-text" v-if="textValue">Current value: <strong>{{ textValue }}</strong> </p> -->
                  </div>
                  <div class="form__item">
                     <base-input v-model="emailValue" type="email" label="*Enter email" placeholder="example@email.com"
                        :error="emailError" hint="We will never share your email." />
                  </div>
                  <div class="form__item">
                     <base-input v-model="disabledValue" label="API Key" disabled />
                  </div>
                  <div class="form__item">
                     <base-input v-model="passwordValue" type="password" label="*Enter password"
                        placeholder="Enter password..." />
                  </div>
                  <div class="form__item">
                     <base-input v-model="dateValue" type="date" label="Your birthday" />
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
import BaseInput from '@/components/ui/form/BaseInput.vue';
import BaseText from '@/components/ui/typography/BaseText.vue';

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
