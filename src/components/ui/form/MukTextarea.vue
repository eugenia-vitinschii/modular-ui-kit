<template>
   <div class="muk-textarea">
      <label class="muk-form-label muk-form-label--top" v-if="label" :for="id">
         {{ label }}
      </label>
      <textarea class="muk-textarea__field" :class="{ 'is-error': !!error }" :id="id" :placeholder="placeholder"
         :value="modelValue" :rows="rows" :disabled="disabled" @input="onInput" :aria-invalid="!!error"
         :aria-describedby="error ? `${id}-error` : hint ? `${id}-hint` : undefined">
      </textarea>
      <p class="muk-form-error" v-if="error" :id="`${id}-error`">{{ error }}</p>
      <p class="muk-form-hint" v-else-if="hint" :id="`${id}-hint`">{{ hint }}</p>
   </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'

const id = useId()

/*=== INTERFACE PROPS ===*/
interface Props {
   modelValue: string | undefined
   label?: string
   placeholder?: string
   error?: string
   hint?: string
   disabled?: boolean
   rows?: number
}

/*=== PROPS ===*/
const props = withDefaults(defineProps<Props>(), {
   modelValue: "",
   rows: 6,
   disabled: false,
})

/*=== EMITS===*/
const emit = defineEmits<{
   (e: "update:modelValue", value: string): void
}>()

function onInput(e: Event) {
   const target = e.target as HTMLTextAreaElement
   emit("update:modelValue", target.value)
}
</script>
