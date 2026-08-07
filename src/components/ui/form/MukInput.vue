<template>
   <div class="muk-input" :class="{ 'muk-input-password': isPasswordInput }">
      <label v-if="label" class="muk-form-label muk-form-label--top" :for="id">
         {{ label }}
      </label>
      <div class="muk-input__wrapper">
         <input class="muk-input__control" :class="{ 'is-error': !!error }" :id="id" :type="computedType"
            :placeholder="placeholder" :disabled="disabled" :value="modelValue" :autocomplete="autocomplete"
            @input="onInput" :aria-invalid="!!error"
            :aria-describedby="error ? `${id}-error` : hint ? `${id}-hint` : undefined">
         <muk-icon-button v-if="isPasswordInput" @click="tooglePasswordVisibility" class="muk-input__button">
            <svg v-if="isPasswordVisible" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path
                  d="M403.5-423.5Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM480-200q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q141 0 257.5 76T912-520h-91q-52-93-143-146.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q20 0 40-2t40-6v81q-20 3-40 5t-40 2Zm0-120q22 0 42.5-5t38.5-14q5-50 31.5-90t67.5-64v-7q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm-5-180Zm205 380q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path
                  d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z" />
            </svg>
         </muk-icon-button>
      </div>
      <p class="muk-form-error" v-if="error" :id="`${id}-error`">{{ error }}</p>
      <p class="muk-form-hint" v-else-if="hint" :id="`${id}-hint`">{{ hint }}</p>
   </div>
</template>

<script setup lang="ts">
import { useId, ref, computed } from 'vue'

import MukIconButton from '../buttons/MukIconButton.vue';

const id = useId()

/* INPUT TYPE */
import type { UIInputType } from '@/types/ui.types'

/* PROPS */
const props = withDefaults(defineProps<{
   modelValue: string | number | undefined
   label?: string
   placeholder?: string
   hint?: string
   error?: string
   disabled?: boolean
   type?: UIInputType
   autocomplete?: string
   showPasswordToggle?: boolean
}>(), {
   type: 'text',
   showPasswordToggle: true
})

/* EMIT */
const emit = defineEmits<{
   (e: "update:modelValue", value: string | number): void
}>()

/* toggle visibility */
const isPasswordVisible = ref(false)

const isPasswordInput = computed(() => props.type === 'password' && props.showPasswordToggle)

const computedType = computed(() => {
   if (isPasswordInput.value && isPasswordVisible.value) {
      return 'text'
   }
   return props.type
})

function tooglePasswordVisibility() {
   isPasswordVisible.value = !isPasswordVisible.value
}

function onInput(e: Event) {
   const target = e.target as HTMLInputElement

   const value = target.type === 'number' && target.value !== '' ? Number(target.value) : target.value

   emit("update:modelValue", value)
}
</script>