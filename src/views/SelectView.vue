<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text as="h1" :type="'heading'">Select Preview</base-text>
            </div>
            <div class="page__content">
               <div class="form section">
                  <base-text as="h2" :type="'subheading'">Select</base-text>
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
import { ref } from 'vue'

/* COMPONENTS */
import BaseSelect from '@/components/ui/form/BaseSelect.vue';
import BaseText from '@/components/ui/typography/BaseText.vue';

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