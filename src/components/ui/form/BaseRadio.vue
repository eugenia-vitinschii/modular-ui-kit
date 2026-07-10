<template>
   <div class="base-radio">
      <label class="base-radio__wrapper" :for="id">
         <div class="base-radio__data">
            <input type="radio" class="base-radio__field" :id="id" :checked="modelValue === value" :disabled="disabled"
               :name="name" @change="onChange">
            <span class="base-radio__box" :class="{ 'is-error': !!error }">
               <span class="base-radio__circle"></span>
            </span>
            <span class="form-label form-label--side" v-if="label"> {{ label }}</span>
         </div>
      </label>
      <div class="base-radio__info">
         <p class="form-error" v-if="error">{{ error }}</p>
         <p class="form-hint" v-else-if="hint">{{ hint }}</p>
      </div>
   </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'

const id = useId()
/*=== PROPS  Interface ===*/
interface Props {
   modelValue: boolean | string | number | null
   value: boolean | string | number
   label?: string
   name: string
   hint?: string
   error?: string
   disabled?: boolean
}

/*=== PROPS ===*/
const props = withDefaults(defineProps<Props>(), {
   disabled: false,
})

/*=== EMIT ===*/
const emit = defineEmits<{
   (e: "update:modelValue", value: boolean | string | number): void
}>()

function onChange(e: Event) {
   emit("update:modelValue", props.value)
}
</script>
