<template>
   <table class="base-table">
      <thead>
         <tr>
            <th v-for="c in columns" :key="c.key" class="body-text">{{ c.title }}</th>
            <th v-if="$slots.tableActions" class="body-text">Actions</th>
         </tr>
      </thead>
      <tbody>
         <tr v-for="row in data" :key="row.id">
            <td v-for="c in columns" :key="c.key" class="body-text">
               {{ row[c.key] }}
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

export interface TableColumn {
   key: string
   title: string
}

defineProps<{
   columns: TableColumn[]
   data: any
}>()

</script>
