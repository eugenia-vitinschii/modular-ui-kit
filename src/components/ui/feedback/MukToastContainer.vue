<template>
   <div class="muk-toast-container">
      <TransitionGroup name="toast">
         <muk-toast v-for="toast in toasts" :key="toast.id" :toast="toast" />
      </TransitionGroup>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import MukToast from './MukToast.vue';

/* Shared state */
import { useToast } from './useMukToast.ts';

/* variables */
const { toasts } = useToast()

</script>