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
            <div class="section">
               <p class="subheading">Icon Buttons</p>
               <div class="section__item">
                  <base-icon-button variant="success"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                           d="M480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880h20q10 0 20 2v81q-10-2-19.5-2.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186q122-112 181-203.5T720-552v-8h80v8q0 100-79.5 217.5T480-80Zm56.5-423.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-560Zm240-80h80v-120h120v-80H800v-120h-80v120H600v80h120v120Z" />
                     </svg></base-icon-button>
                  <base-icon-button variant="danger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                           d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                     </svg></base-icon-button>
                  <base-icon-button variant="default"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                           d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" />
                     </svg></base-icon-button>
               </div>
               <div class="section__item">
                  <base-icon-button variant="success" disabled><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960">
                        <path
                           d="M480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880h20q10 0 20 2v81q-10-2-19.5-2.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186q122-112 181-203.5T720-552v-8h80v8q0 100-79.5 217.5T480-80Zm56.5-423.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-560Zm240-80h80v-120h120v-80H800v-120h-80v120H600v80h120v120Z" />
                     </svg></base-icon-button>
                  <base-icon-button variant="danger" disabled><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960">
                        <path
                           d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                     </svg></base-icon-button>
                  <base-icon-button variant="default" disabled><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960">
                        <path
                           d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" />
                     </svg></base-icon-button>
               </div>
               <div class="section__item">
                  <base-icon-button variant="success" loading><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960">
                        <path
                           d="M480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880h20q10 0 20 2v81q-10-2-19.5-2.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186q122-112 181-203.5T720-552v-8h80v8q0 100-79.5 217.5T480-80Zm56.5-423.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-560Zm240-80h80v-120h120v-80H800v-120h-80v120H600v80h120v120Z" />
                     </svg></base-icon-button>
                  <base-icon-button variant="danger" loading><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960">
                        <path
                           d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z" />
                     </svg></base-icon-button>
                  <base-icon-button variant="default" loading><svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960">
                        <path
                           d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z" />
                     </svg></base-icon-button>
               </div>
            </div>

         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseButton from '@/components/ui/buttons/BaseButton.vue';
import BaseIconButton from '@/components/ui/buttons/BaseIconButton.vue';
</script>

<style lang="sass">

.buttons
   display: flex
   justify-content: space-between
   flex-wrap: wrap
</style>