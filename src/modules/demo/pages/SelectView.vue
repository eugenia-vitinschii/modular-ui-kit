<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Select Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="form muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Select</muk-text>
                  <div class="form__item">
                     <muk-select v-model="selectedCountry" :options="countries" placeholder="Select country..."
                        label="Your Country" />
                  </div>
                  <div class="form__item">
                     <muk-select v-model="selectedCity" :options="cities" placeholder="Select sity..." label="Your City"
                        error="Please select your city to continue" />
                  </div>
                  <div class="form__item">
                     <muk-select v-model="lockedWorkModel" :options="workModelOptions" placeholder="Select sity..."
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
import { ref } from 'vue'

/* COMPONENTS */
import MukSelect from '@/components/ui/form/MukSelect.vue';
import MukText from '@/components/ui/typography/MukText.vue';

/* state */
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