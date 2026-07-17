<template>
   <div class="base-toast-container">
      <TransitionGroup name="toast">
         <base-toast v-for="toast in toasts" :key="toast.id" :toast="toast" />
      </TransitionGroup>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseToast from './BaseToast.vue';

/* Shared state */
import { useToast } from './useToast.ts';

/* variables */
const { toasts } = useToast()

</script>