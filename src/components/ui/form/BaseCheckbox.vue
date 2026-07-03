<template>
   <div class="base-checkbox">
      <label class="base-checkbox__wrapper" :for="id">
         <div class="base-checkbox__data">
            <input type="checkbox" class="base-checkbox__field" :id="id" :checked="modelValue" :disabled="disabled"
               @change="onChange">
            <span class="base-checkbox__box" :class="{ 'is-error': !!error }">
               <span class="base-checkbox__check">✓</span>
            </span>
            <span class="base-checkbox__label form-label" v-if="label"> {{ label }}</span>
         </div>
         <div class="base-checkbox__info">
            <p class="form-error" v-if="error">{{ error }}</p>
            <p class="form-hint" v-else-if="hint">{{ hint }}</p>
         </div>
      </label>
   </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'

const id = useId()
/*=== PROPS  Interface ===*/
interface Props {
   modelValue: boolean
   label?: string
   hint?: string
   error?: string
   disabled?: boolean
}

/*=== PROPS ===*/
const props = withDefaults(defineProps<Props>(), {
   modelValue: false,
   disabled: false,
})

/*=== EMIT ===*/
const emit = defineEmits<{
   (e: "update:modelValue", value: boolean): void
}>()

function onChange(e: Event) {
   const target = e.target as HTMLInputElement
   emit("update:modelValue", target.checked)
}
</script>
