<template>
   <button class="btn-icon" :class="[`btn-icon--${variant}`, `btn-icon--${size}`, { 'is-loading': loading }]"
      :disabled="disabled" :type="type" :aria-busy="loading" :aria-label="ariaLabel">
      <span class="btn-icon__content" v-if="!loading" aria-hidden="true">
         <slot></slot>
      </span>
      <template v-else>
         <span class="btn-spinner" aria-hidden="true"></span>
         <span class="visually-hidden">Loading</span>
      </template>
   </button>
</template>

<script setup lang="ts">
/* BUTTON TYPES */
import type { UIButtonType, UISize, UIButtonVariant } from '@/types/ui.types'

/* PROPS INTERFACE*/
interface Props {
   ariaLabel?: string
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
