<template>
   <div class="muk-toast" :class="`muk-toast--${toast.variant}`" @mouseenter="pause" @mouseleave="resume">
      <div class="muk-toast__wrapper">
         <div class="muk-toast__message">
            <muk-text type="muk-body-text" :variant="toast.variant">{{ toast.message }}</muk-text>
         </div>
         <muk-icon-button @click="remove" :variant="toast.variant" aria-label="close toast">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
               <path
                  d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
         </muk-icon-button>
      </div>
      <div class="muk-toast__progress" :style="{ width: progress + '%' }"></div>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref, onMounted, onUnmounted } from 'vue';

/* Components */
import MukIconButton from '../buttons/MukIconButton.vue';
import MukText from '../typography/MukText.vue';

/* shared state */
import { useToast, type Toast } from './useMukToast.ts'

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
