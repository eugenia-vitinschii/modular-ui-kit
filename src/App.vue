<template>
  <Transition name="fade" mode="out-in">
    <div class="wrapper" v-if="route.meta.layout === 'error' || route.meta.layout === 'login'">
      <div class=" content">
        <router-view />
      </div>
    </div>
    <div class="wrapper" v-else>
      <app-header />
      <div class="content">
        <base-breadcrumbs />
        <router-view />
        <demo-widget />
        <base-toast-container />
      </div>
      <app-footer />
    </div>
  </Transition>
</template>

<script setup lang="ts">
/* ROUTER */
import { useRoute } from 'vue-router';

/* === COMPONENTS === */
import AppHeader from './widgets/AppHeader.vue';
import AppFooter from './widgets/AppFooter.vue';
import BaseBreadcrumbs from './components/ui/navigation/BaseBreadcrumbs.vue';
import BaseToastContainer from './components/ui/feedback/BaseToastContainer.vue';

/* === DEMO === */
import DemoWidget from './modules/demo/components/DemoWidget.vue';

const route = useRoute()
</script>
