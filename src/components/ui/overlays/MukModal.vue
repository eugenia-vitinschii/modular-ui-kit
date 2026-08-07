<template>
   <Teleport to="body">
      <transition name="modal-fade">
         <div class="muk-modal-backdrop" v-if="open" @click="close">
            <div class="muk-modal" :class="`muk-modal--${variant}`" @click.stop>
               <div class="muk-modal__header" v-if="title">
                  <muk-text type="muk-subheading" :variant="variant">{{ title }}</muk-text>
               </div>
               <div class="muk-modal__content">
                  <slot name="content"></slot>
               </div>
               <div class="muk-modal__footer">
                  <slot name="actions"></slot>
               </div>
            </div>
         </div>
      </transition>
   </Teleport>
</template>

<script setup lang="ts">
/* VUE */
import MukText from '../typography/MukText.vue';

/* VUE */
import { Teleport, Transition } from 'vue';

/* Types */
import type { UIVariant } from '@/types/ui.types';

/* PROPS & EMITS */
const props = withDefaults(defineProps<{
   open: boolean
   title?: string
   variant?: UIVariant
}>(), {
   variant: 'secondary'
})

const emit = defineEmits<{
   (e: 'update:open', value: boolean): void
}>()

const close = () => {
   emit('update:open', false)
}
</script>
