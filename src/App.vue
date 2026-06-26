<template>
  <div class="wrapper">
    <app-header />
    <div class="content">
      <router-view />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
/* === COMPONENTS === */
import AppHeader from './widgets/AppHeader.vue';
import AppFooter from './widgets/AppFooter.vue';

</script>
