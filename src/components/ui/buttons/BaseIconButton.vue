<template>
   <button class="btn-icon" :class="[`btn-icon--${variant}`, `btn-icon--${size}`, { 'is-loading': loading }]"
      :disabled="disabled" :type="type">
      <span class="btn-icon__content" v-if="!loading">
         <slot></slot>
      </span>
      <span class="btn-spinner" v-else>
      </span>
   </button>
</template>

<script setup lang="ts">
/* BUTTON TYPES */
import type { UIButtonType, UISize, UIButtonVariant } from '@/types/ui.types'

/* PROPS INTERFACE*/
interface Props {
   variant?: UIButtonVariant
   type?: UIButtonType
   loading?: boolean
   disabled?: boolean
   size?: UISize
}

/* DEFAULT BUTTON Props */
withDefaults(defineProps<Props>(), {
   variant: "primary",
   type: "button",
   loading: false,
   size: "lg",
   disabled: false
})
</script>
