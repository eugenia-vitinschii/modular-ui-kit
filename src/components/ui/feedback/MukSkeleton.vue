<template>
   <div class="muk-skeleton" :class="[`muk-skeleton__${type}`, { 'muk-shimmer': shimmer }]" :style="customSize">
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { computed } from 'vue';

/* TYPE */
import type { UISkeletonType } from '@/types/ui.types'

/* PROPS */
interface Props {
   type?: UISkeletonType;
   width?: string | number
   height?: string | number
   shimmer?: boolean
}

const props = withDefaults(defineProps<Props>(), {
   type: 'text',
   shimmer: true
})

/* STYLES */
const customSize = computed(() => {
   const sizes: Record<string, string> = {}

   if (props.width !== undefined && props.width !== '') {
      const withValue = typeof props.width === 'number' ? `${props.width}px` : props.width
      sizes.width = withValue

      if (props.type === 'circle' && !props.height) {
         sizes.height = withValue
      }
   }

   if (props.height !== undefined && props.height !== '') {
      const heightValue = typeof props.height === 'number' ? `${props.height}px` : props.height
      sizes.height = heightValue

      if (props.type === 'circle' && !props.width) {
         sizes.height = heightValue
      }
   }
   return sizes

})
</script>
