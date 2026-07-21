<template>
   <div class="empty-state" :class="`empty-state--${variant}`">
      <div class="empty-state__text">
         <h3 class="subheading">{{ title }}</h3>
         <p class="body-text">{{ description }}</p>
      </div>
      <div class="empty-state__actions">
         <slot name="action"></slot>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VARIANTS */
import type { UIEmptyStateVariant } from '@/types/ui.types'

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
