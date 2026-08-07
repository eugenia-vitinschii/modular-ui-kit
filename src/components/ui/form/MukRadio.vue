<template>
   <div class="muk-radio">
      <label class="muk-radio__wrapper" :for="id">
         <div class="muk-radio__data">
            <input type="radio" class="muk-radio__field" :id="id" :checked="modelValue === value" :disabled="disabled"
               :name="name" @change="onChange" :aria-invalid="!!error"
               :aria-describedby="error ? `${id}-error` : hint ? `${id}-hint` : undefined">
            <span class="muk-radio__box" :class="{ 'is-error': !!error }">
               <span class="muk-radio__circle" aria-hidden="true"></span>
            </span>
            <span class="muk-form-label muk-form-label--side" v-if="label"> {{ label }}</span>
         </div>
      </label>
      <div class="muk-radio__info">
         <p class="muk-form-error" v-if="error" :id="`${id}-error`">{{ error }}</p>
         <p class="muk-form-hint" v-else-if="hint" :id="`${id}-hint`">{{ hint }}</p>
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
