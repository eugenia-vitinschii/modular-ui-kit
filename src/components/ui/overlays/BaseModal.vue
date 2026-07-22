<template>
   <Teleport to="body">
      <transition name="modal-fade">
         <div class="base-modal-backdrop" v-if="open" @click="close">
            <div class="base-modal" :class="`base-modal--${variant}`" @click.stop>
               <div class="base-modal__header" v-if="title">
                  <base-text type="subheading" :variant="variant">{{ title }}</base-text>
               </div>
               <div class="base-modal__content">
                  <slot name="content"></slot>
               </div>
               <div class="base-modal__footer">
                  <slot name="actions"></slot>
               </div>
            </div>
         </div>
      </transition>
   </Teleport>
</template>

<script setup lang="ts">
/* VUE */
import BaseText from '../typography/BaseText.vue';

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
