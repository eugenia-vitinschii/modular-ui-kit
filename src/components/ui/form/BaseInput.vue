<template>
   <div class="base-input">
      <label v-if="label" class="form-label form-label--top" :for="id">
         {{ label }}
      </label>
      <input class="base-input__control" :class="{ 'is-error': !!error }" :id="id" :type="type"
         :placeholder="placeholder" :disabled="disabled" :value="modelValue" @input="onInput">
      <p class="form-error" v-if="error">{{ error }}</p>
      <p class="form-hint" v-else-if="hint">{{ hint }}</p>
   </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'

const id = useId()

/* INPUT TYPE */
type InputType = "text" | "email" | "password" | "search" | "date" | "tel" | "number"

/* PROPS */
withDefaults(defineProps<{
   modelValue: string | number | undefined
   label?: string
   placeholder?: string
   hint?: string
   error?: string
   disabled?: boolean
   type?: InputType
}>(), {
   type: 'text'
})

/* EMIT */
const emit = defineEmits<{
   (e: "update:modelValue", value: string | number): void
}>()

function onInput(e: Event) {
   const target = e.target as HTMLInputElement

   const value = target.type === 'number' && target.value !== '' ? Number(target.value) : target.value

   emit("update:modelValue", value)
}
</script>