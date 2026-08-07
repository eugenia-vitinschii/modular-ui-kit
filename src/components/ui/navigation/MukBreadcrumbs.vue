<template>
   <div class="muk-container">
      <nav class="muk-breadcrumbs" v-if="route.path !== '/'">
         <ul class="muk-breadcrumbs__list">
            <muk-icon-button @click="router.back()" aria-label="Go back">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                  <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
               </svg></muk-icon-button>
            <li class="muk-breadcrumbs__item" v-for="(crumb, index) in breadcrumbs" :key="index">
               <muk-text as="span" v-if="index === breadcrumbs.length - 1">{{ crumb.label }}</muk-text>
               <template v-else>
                  <muk-text as="router-link" :to="crumb.to" :align="'center'"> {{ crumb.label }}</muk-text>
                  <muk-text as="span" class="muk-breadcrumbs__item-separator">/</muk-text>
               </template>
            </li>
         </ul>
      </nav>
   </div>

</template>

<script setup lang="ts">
/* VUE & ROUTER */
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"

/* COMPONENTS */
import MukIconButton from "../buttons/MukIconButton.vue"
import MukText from "../typography/MukText.vue"

const route = useRoute()
const router = useRouter()

const breadcrumbs = computed(() => {
   const matched = route.matched.filter(r => r.meta && r.meta.title)

   let crumbs = matched.map(r => {
      const label = typeof r.meta.title === 'function' ? r.meta.title(route) : r.meta.title

      let cleanPatch = r.path

      Object.keys(route.params).forEach(key => {
         cleanPatch = cleanPatch.replace(`:${key}`, route.params[key] as string)
      })

      return { label: label as string, to: cleanPatch }
   })
   if (route.path !== '/') {
      crumbs.unshift({ label: 'Home', to: '/' })
   }

   return crumbs

})

</script>
