<template>
   <button class="btn" :class="[`btn--${variant}`, `btn--${size}`, { 'is-loading': loading }]"
      :disabled="disabled || loading" :type="type">
      <span v-if="loading" class="btn-spinner"></span>
      <span class="btn__content" v-if="!loading">
         <slot></slot>
      </span>
   </button>
</template>

<script setup lang="ts">
/* BUTTON TYPES */
import type { UIButtonType, UISize, UIButtonVariant } from '@/types/ui.types'

/* PROPS INTERFACE*/
interface Props {
   variant?: UIButtonVariant
   size?: UISize
   type?: UIButtonType
   loading?: boolean
   disabled?: boolean
}

/* DEFAULT BUTTON Props */
withDefaults(defineProps<Props>(), {
   variant: "primary",
   type: "button",
   size: "lg",
   loading: false,
   disabled: false
})
</script>
