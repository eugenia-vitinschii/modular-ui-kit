<template>
   <component :is="as" :class="[type, `txt--${align}`, `txt--${variant}`]">
      <slot></slot>
   </component>
</template>

<script setup lang="ts">

/* TYOES */
import type { UITextVariant, UITextType, UITextAlign } from '@/types/ui.types';

/* PROPS */
interface Props {
   variant?: UITextVariant
   as?: string
   type?: UITextType
   align?: UITextAlign
}

const props = withDefaults(defineProps<Props>(), {
   variant: 'secondary',
   align: 'left',
   as: 'p',
   type: 'body-text'
})

</script>
