<template>
   <div class="base-select">
      <label class="form-label form-label--top" v-if="label" :for="id">
         {{ label }}
      </label>
      <div class="base-select__wrapper">
         <select class="base-select__field" :id="id" :class="{ 'is-error': !!error }" :value="modelValue"
            :disabled="disabled" @change="onChange">
            <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
               {{ option.label }}
            </option>
         </select>
         <span class="base-select__icon">↓</span>
      </div>
      <p class="form-error" v-if="error">{{ error }}</p>
      <p class="form-hint" v-else-if="hint">{{ hint }}</p>
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