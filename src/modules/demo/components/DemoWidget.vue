<template>
   <div ref="widgetRef" class="demo-widget">
      <base-button @click="toggleMenu">Demo UI Kit</base-button>
      <Transition name="fade">
         <div v-if="isOpen" class="demo-widget__menu" @mousedown.stop @touchstart.stop>
            <demo-navigation @close="isOpen = false" />
         </div>
      </Transition>
   </div>
</template>

<script setup lang="ts">
/* VUE */
import { ref } from 'vue';

/* COMPONENTS */
import BaseButton from '@/components/ui/buttons/BaseButton.vue';
import DemoNavigation from './DemoNavigation.vue';

/* STATE */
const isOpen = ref(false)

function toggleMenu() {
   isOpen.value = !isOpen.value
}

</script>

<style lang="sass">
.demo-widget
  position: fixed
  z-index: 9999
  right: 30px
  bottom: 30px
  &__menu
   @include container()
   max-height: 70vh
   overflow-y: auto
   scrollbar-width: thin
   position: absolute
   bottom: 30px
   right: 0
   width: 240px

/* === [mobile] === */
@media (max-height: 569px)
   .demo-widget
      max-height:250px
      &__menu

</style>