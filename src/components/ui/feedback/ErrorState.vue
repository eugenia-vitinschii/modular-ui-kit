<template>
   <div class="error-state">
      <div class="error-state__text">
         <h3 class="subheading">{{ title }}</h3>
         <p class="body-text">{{ description }}</p>
      </div>
      <div class="error-state__action">
         <slot name="error-action"></slot>
      </div>
   </div>
</template>

<script setup lang="ts">

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
