<template>
   <div class="muk-select">
      <label class="muk-form-label muk-form-label--top" v-if="label" :for="id">
         {{ label }}
      </label>
      <div class="muk-select__wrapper">
         <select class="muk-select__field" :id="id" :class="{ 'is-error': !!error }" :value="modelValue"
            :disabled="disabled" @change="onChange" :aria-invalid="!!error"
            :aria-describedby="error ? `${id}-error` : hint ? `${id}-hint` : undefined">
            <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
               {{ option.label }}
            </option>
         </select>
         <span class="muk-select__icon" feat(ui): add a11y to form elements, buttons, and links>↓</span>
      </div>
      <p class="muk-form-error" v-if="error" :id="`${id}-error`">{{ error }}</p>
      <p class="muk-form-hint" v-else-if="hint" :id="`${id}-hint`">{{ hint }}</p>
   </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'

const id = useId()

/*=== OPTION TYPE ===*/
type Option = {
   label: string
   value: string | number
}
/*=== INTERFACE ===*/
interface Props {
   modelValue: string | number
   label?: string
   placeholder?: string
   options: Option[]
   error?: string
   hint?: string
   disabled?: boolean
}

/*=== PROPS ===*/
const props = withDefaults(defineProps<Props>(), {
   modelValue: "",
   disabled: false,
})

/*=== EMITS ===*/
const emit = defineEmits<{
   (e: "update:modelValue", value: string | number): void
}>()

function onChange(e: Event) {
   const target = e.target as HTMLSelectElement
   emit("update:modelValue", target.value)
}

</script>