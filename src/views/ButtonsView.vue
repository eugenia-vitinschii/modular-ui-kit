<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <h1 class="heading">Base buttons</h1>
            </div>
            <div class="page__content">
               <div class="buttons">
                  <div class="buttons__title">
                     <p class="subheading">variants, size sm</p>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="primary" size="sm">primary</base-button>
                     <base-button variant="secondary" size="sm">secondary</base-button>
                     <base-button variant="danger" size="sm">danger</base-button>
                     <base-button variant="ghost" size="sm">ghost</base-button>
                  </div>
               </div>
               <div class="buttons">
                  <div class="buttons__title">
                     <p class="subheading">loading, size md</p>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="primary" loading size="md"> primary</base-button>
                     <base-button variant="secondary" loading size="md">secondary</base-button>
                     <base-button variant="danger" loading size="md">danger</base-button>
                     <base-button variant="ghost" loading size="md">ghost</base-button>
                  </div>
               </div>
               <div class="buttons">
                  <div class="buttons__title">
                     <p class="subheading">disabled, size lg</p>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="primary" disabled size="lg">primary</base-button>
                     <base-button variant="secondary" disabled size="lg">secondary</base-button>
                     <base-button variant="danger" disabled size="lg">danger</base-button>
                     <base-button variant="ghost" disabled size="lg">ghost</base-button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseButton from '@/components/ui/buttons/BaseButton.vue';

</script>
