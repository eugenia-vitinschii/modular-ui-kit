<template>
   <div class="error-state">
      <div class="error-state__text">
         <base-text type="subheading" as="h3" :align="'center'" variant="danger">{{ title }}</base-text>
         <base-text type="body-text" :align="'center'">{{ description }}</base-text>
      </div>
      <div class="error-state__action">
         <slot name="action"></slot>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseText from '../typography/BaseText.vue';

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
