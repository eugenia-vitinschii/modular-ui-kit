<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <h1 class="heading">Buttons Preview</h1>
            </div>
            <div class="page__content section">
               <p class="subheading">Buttons</p>
               <div class="buttons section__item">
                  <div class="button__list">
                     <base-button variant="primary" size="sm">primary</base-button>
                     <base-button variant="primary" size="md">primary</base-button>
                     <base-button variant="primary" size="lg">primary</base-button>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="secondary" size="sm">secondary</base-button>
                     <base-button variant="secondary" size="md">secondary</base-button>
                     <base-button variant="secondary" size="lg">secondary</base-button>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="danger" size="sm">danger</base-button>
                     <base-button variant="danger" size="md">danger</base-button>
                     <base-button variant="danger" size="lg">danger</base-button>

                  </div>
                  <div class="buttons__list">
                     <base-button variant="ghost" size="sm">ghost</base-button>
                     <base-button variant="ghost" size="md">ghost</base-button>
                     <base-button variant="ghost" size="lg">ghost</base-button>
                  </div>
               </div>
               <div class="buttons section__item">
                  <div class="buttons__list">
                     <base-button variant="primary" loading size="sm"> primary</base-button>
                     <base-button variant="primary" loading size="md"> primary</base-button>
                     <base-button variant="primary" loading size="lg"> primary</base-button>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="secondary" loading size="sm">secondary</base-button>
                     <base-button variant="secondary" loading size="md">secondary</base-button>
                     <base-button variant="secondary" loading size="lg">secondary</base-button>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="danger" loading size="sm">danger</base-button>
                     <base-button variant="danger" loading size="md">danger</base-button>
                     <base-button variant="danger" loading size="lg">danger</base-button>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="ghost" loading size="sm">ghost</base-button>
                     <base-button variant="ghost" loading size="md">ghost</base-button>
                     <base-button variant="ghost" loading size="lg">ghost</base-button>
                  </div>
               </div>
               <div class="buttons section__item">
                  <div class="buttons__list">
                     <base-button variant="primary" disabled size="sm"> primary</base-button>
                     <base-button variant="primary" disabled size="md"> primary</base-button>
                     <base-button variant="primary" disabled size="lg"> primary</base-button>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="secondary" disabled size="sm">secondary</base-button>
                     <base-button variant="secondary" disabled size="md">secondary</base-button>
                     <base-button variant="secondary" disabled size="lg">secondary</base-button>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="danger" disabled size="sm">danger</base-button>
                     <base-button variant="danger" disabled size="md">danger</base-button>
                     <base-button variant="danger" disabled size="lg">danger</base-button>
                  </div>
                  <div class="buttons__list">
                     <base-button variant="ghost" disabled size="sm">ghost</base-button>
                     <base-button variant="ghost" disabled size="md">ghost</base-button>
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

<style lang="sass">

.buttons
   display: flex
   justify-content: space-between
   flex-wrap: wrap
</style>