<template>
   <div class="base-pagination">
      <base-icon-button :disabled="page === 1" @click="$emit('change', page - 1)">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
         </svg>
      </base-icon-button>
      <base-icon-button v-for="i in pages" :key="i + ''" :disabled="i === '...'" :class="{ 'is-active': i === page }"
         @click="typeof i === 'number' && $emit('change', i)">
         <p class="body-text">{{ i }}</p>
      </base-icon-button>
      <base-icon-button :disabled="page === totalPages" @click="$emit('change', page + 1)">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
         </svg>
      </base-icon-button>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { computed } from 'vue';

/* COMPONENTS */
import BaseIconButton from '../buttons/BaseIconButton.vue';

/* PROPS */
const props = defineProps<{
   page: number
   totalPages: number
}>()

/* EMITS */
const emit = defineEmits<{
   (e: 'change', page: number): void
}>()

const pages = computed(() => {
   const total = props.totalPages
   const current = props.page
   const pageSize = 10 //amout of pages for one line

   const startPage = Math.floor((current - 1) / pageSize) * pageSize + 1
   const endPage = Math.min(total, startPage + pageSize - 1)

   const range: (number | string)[] = []

   if (startPage > 1) { // add ... after pageSize
      range.push(1)
      if (startPage > 2) {
         range.push('...')
      }
   }

   for (let i = startPage; i <= endPage; i++) {
      range.push(i) //show current page numbers
   }

   if (endPage < total) {// add ... before pageSize
      if (endPage < total - 1) {
         range.push('...')
      }
      range.push(total)
   }
   return range
})
</script>
