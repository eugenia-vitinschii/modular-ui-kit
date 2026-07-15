<template>
   <button class="btn-icon" :class="[`btn-icon--${variant}`, { 'is-loading': loading }]" :disabled="disabled"
      :type="type">
      <span class="btn-icon__content" v-if="!loading">
         <slot></slot>
      </span>
      <span class="btn-spinner" v-else>
      </span>
   </button>

</template>

<script setup lang="ts">
/* BUTTON TYPES */
type ButtonVariant = "default" | "danger" | 'success'
type ButtonType = "button" | "submit"

/* PROPS INTERFACE*/
interface Props {
   variant?: ButtonVariant
   type?: ButtonType
   loading?: boolean
   disabled?: boolean
}

/* DEFAULT BUTTON Props */
withDefaults(defineProps<Props>(), {
   variant: "default",
   type: "button",
   loading: false,
   disabled: false
})
</script>
