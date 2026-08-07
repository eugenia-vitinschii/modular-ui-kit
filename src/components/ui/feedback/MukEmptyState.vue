<template>
   <div class="muk-empty-state" :class="`muk-empty-state--${variant}`">
      <div class="muk-empty-state__text">
         <muk-text type="muk-subheading" as="h3">{{ title }}</muk-text>
         <muk-text type="muk-body-text">{{ description }}</muk-text>
      </div>
      <div v-if="$slots.action" class="muk-empty-state__actions">
         <slot name="action"></slot>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import MukText from '../typography/MukText.vue';

/* VARIANTS */
import type { UIEmptyStateVariant } from '@/types/ui.types'

/* PROPS */
withDefaults(
   defineProps<{
      title?: string
      description?: string
      variant?: UIEmptyStateVariant
   }>(),
   {
      variant: 'secondary',
      title: "No data available",
      description: 'There is nothing to display here at the moment. Please try refreshing the page',
   }
)

// defineSlots<{
//    action?(props: object): any
// }>()

</script>
