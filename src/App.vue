<template>
  <div class="wrapper">
    <app-header />
    <div class="content">
      <base-breadcrumbs />
      <router-view />
      <base-toast-container />
    </div>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
/* === COMPONENTS === */
import AppHeader from './widgets/AppHeader.vue';
import AppFooter from './widgets/AppFooter.vue';
import BaseBreadcrumbs from './components/ui/navigation/BaseBreadcrumbs.vue';
import BaseToastContainer from './components/ui/feedback/BaseToastContainer.vue';
</script>
