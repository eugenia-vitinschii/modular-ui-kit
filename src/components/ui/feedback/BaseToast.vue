<template>
   <div class="base-toast" :class="`base-toast--${toast.variant}`" @mouseenter="pause" @mouseleave="resume">
      <div class="base-toast__wrapper">
         <div class="base-toast__message">
            <base-text type="body-text" :variant="toast.variant">{{ toast.message }}</base-text>
         </div>
         <base-icon-button @click="remove" :variant="toast.variant">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path
                  d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
         </base-icon-button>
      </div>
      <div class="base-toast__progress" :style="{ width: progress + '%' }"></div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref, onMounted, onUnmounted } from 'vue';

/* Components */
import BaseIconButton from '../buttons/BaseIconButton.vue';
import BaseText from '../typography/BaseText.vue';

/* shared state */
import { useToast, type Toast } from './useToast.ts'

/* props */
const props = defineProps<{ toast: Toast }>()

/* remove toast */
const { removeToast } = useToast()

/* variables */
const progress = ref(100)
let interval: number | null = null
let remaining = props.toast.duration
let startTime = Date.now()

/* remove */
function remove() {
   removeToast(props.toast.id)
}

/* tick */
function tick() {
   const elapsed = Date.now() - startTime
   progress.value = 100 - (elapsed / props.toast.duration) * 100

   if (elapsed >= remaining) {
      remove()
   }
}

/* pause */
function pause() {
   if (interval) clearInterval(interval)
   remaining -= Date.now() - startTime
}

/* resume */
function resume() {
   startTime = Date.now()
   interval = window.setInterval(tick, 16)
}
/* Hooks */
onMounted(() => {
   interval = window.setInterval(tick, 16)
})

onUnmounted(() => {
   if (interval) clearInterval(interval)
})
</script>
