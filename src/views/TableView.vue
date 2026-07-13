<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <h1 class="heading">Table View</h1>
            </div>
            <div class="page__content section">
               <p class="subheading">Base table</p>
               <div class="base-table-wrapper section__item">
                  <base-table :columns="TABLE_COLUMNS" :data="MOCK_DATA" />
               </div>
               <p class="subheading">Base table with actions</p>
               <div class="base-table-wrapper section__item">
                  <base-table :columns="TABLE_COLUMNS" :data="MOCK_DATA">
                     <template #tableActions="{ row }">
                        <base-button variant="primary" @click="handleEdit(row.id)">edit</base-button>
                        <base-button variant="secondary" @click="handleOpen(row.id)">preview</base-button>
                        <base-button variant="danger" @click="handleDelete(row.id)">delete</base-button>
                     </template>
                  </base-table>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import BaseTable from '@/components/ui/data-display/BaseTable.vue';
import BaseButton from '@/components/ui/buttons/BaseButton.vue';

const TABLE_COLUMNS = [
   { key: 'id', title: 'ID' },
   { key: 'title', title: 'Project Name' },
   { key: 'role', title: 'Role' },
]


const MOCK_DATA = [
   { id: 'PRJ-001', title: 'Alpha Dashboard', role: 'Owner' },
   { id: 'PRJ-002', title: 'E-commerce Core', role: 'Developer' },
   { id: 'PRJ-003', title: 'Sass Compiler Plugin', role: 'Contributor' },
]


const handleOpen = (id: string) => {
   alert(`Opening project: ${id}`)
}

const handleEdit = (id: string) => {
   alert(`Editing project: ${id}`)
}

const handleDelete = (id: string) => {
   alert(`Deleting project: ${id}`)
}
</script>
