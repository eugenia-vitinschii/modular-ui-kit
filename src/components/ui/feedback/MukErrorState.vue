<template>
   <div class="muk-error-state">
      <div class="muk-error-state__text">
         <muk-text type="muk-subheading" as="h3" :align="'center'" variant="danger">{{ title }}</muk-text>
         <muk-text :align="'center'">{{ description }}</muk-text>
      </div>
      <div class="muk-error-state__action">
         <slot name="action"></slot>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import MukText from '../typography/MukText.vue';

/* PROPS */
const props = withDefaults(
   defineProps<{
      title?: string
      description?: string
   }>(),
   {
      title: "Oops! Something went wrong",
      description: 'Failed to fetch data. Please try again.',
   }
)
</script>
