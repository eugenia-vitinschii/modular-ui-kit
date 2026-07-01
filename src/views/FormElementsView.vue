<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <h1 class="heading">Form elements</h1>
            </div>
            <div class="page__content">
               <div class="form section">
                  <p class="subheading">Input</p>
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
               <div class="form section">
                  <p class="subheading">Select</p>
                  <div class="form__item">
                     <base-select v-model="selectedCountry" :options="countries" placeholder="Select country..."
                        label="Your Country" />
                  </div>
                  <div class="form__item">
                     <base-select v-model="selectedCity" :options="cities" placeholder="Select sity..."
                        label="Your City" error="Please select your city to continue" />
                  </div>
                  <div class="form__item">
                     <base-select v-model="lockedWorkModel" :options="workModelOptions" placeholder="Select sity..."
                        label="Preferred Work Model" hint="Work model cannot be changed for this role." disabled />
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
import BaseSelect from '@/components/ui/form/BaseSelect.vue';


/* variables for v-model */
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

//select
const selectedCountry = ref('')
const countries = [
   { value: 'usa', label: 'United States' },
   { value: 'uk', label: 'United Kingdom' },
   { value: 'germany', label: 'Germany' },
   { value: 'japan', label: 'Japan' },
   { value: 'canada', label: 'Canada' },
]

const selectedCity = ref('')
const cities = [
   { value: 'kyiv', label: 'Kyiv' },
   { value: 'lviv', label: 'Lviv' }
]

const lockedWorkModel = ref('remote')
const workModelOptions = [
   { value: 'office', label: 'In-office' },
   { value: 'hybrid', label: 'Hybrid' },
   { value: 'remote', label: 'Fully Remote' }
]

</script>
