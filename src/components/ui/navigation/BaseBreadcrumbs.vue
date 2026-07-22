<template>
   <div class="container">
      <nav class="base-breadcrumbs" v-if="route.path !== '/'">
         <ul class="base-breadcrumbs__list">
            <base-icon-button @click="router.back()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                  <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
               </svg></base-icon-button>
            <li class="base-breadcrumbs__item" v-for="(crumb, index) in breadcrumbs" :key="index">
               <base-text as="span" v-if="index === breadcrumbs.length - 1">{{ crumb.label }}</base-text>
               <template v-else>
                  <base-text as="router-link" :to="crumb.to" :align="'center'"> {{ crumb.label }}</base-text>
                  <base-text as="span" class="base-breadcrumbs__item-separator">/</base-text>
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
import BaseIconButton from "../buttons/BaseIconButton.vue"
import BaseText from "../typography/BaseText.vue"

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
