<template>
   <button class="muk-btn" :class="[`muk-btn--${variant}`, `muk-btn--${size}`, { 'is-loading': loading }]"
      :disabled="disabled" :type="type" :aria-busy="loading">
      <span class="muk-btn__content" v-if="!loading">
         <slot></slot>
      </span>
      <template v-else>
         <span class="muk-btn-spinner" aria-hidden="true"></span>
         <span class="visually-hidden">Loading</span>
      </template>
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
