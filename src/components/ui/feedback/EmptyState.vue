<template>
   <div class="empty-state" :class="`empty-state--${variant}`">
      <div class="empty-state__text">
         <base-text type="subheading" as="h3">{{ title }}</base-text>
         <base-text type="body-text">{{ description }}</base-text>
      </div>
      <div class="empty-state__actions">
         <slot name="action"></slot>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseText from '../typography/BaseText.vue';

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
</script>
