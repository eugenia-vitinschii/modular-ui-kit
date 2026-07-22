<template>
   <table class="base-table">
      <thead>
         <tr>
            <th v-for="c in columns" :key="c.key">
               <base-text>{{ c.title }}</base-text>
            </th>
            <th v-if="$slots.tableActions">
               <base-text>Actions</base-text>
            </th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="row in data" :key="row.id">
            <td v-for="c in columns" :key="c.key">
               <base-text> {{ row[c.key] }}</base-text>
            </td>
            <td v-if="$slots.tableActions">
               <div class="base-table__actions">
                  <slot name="tableActions" :row="row"></slot>
               </div>
            </td>
         </tr>
      </tbody>
   </table>
</template>

<script setup lang="ts">
/* COMPONENTS */
import BaseText from '../typography/BaseText.vue';

export interface TableColumn {
   key: string
   title: string
}

defineProps<{
   columns: TableColumn[]
   data: any
}>()

</script>
