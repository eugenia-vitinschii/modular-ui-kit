<template>
   <div class="page">
      <div class="container">
         <div class="page__wrapper">
            <div class="page__header">
               <base-text as="h1" :type="'heading'">Component Flow Preview</base-text>
            </div>
            <div class="page__content">
               <div class="demo-controls section">
                  <base-text as="h2" :type="'subheading'">Demo Controls</base-text>
                  <base-radio v-model="pageState" value="content" label="Show Content" name="page-flow-state" />
                  <base-radio v-model="pageState" value="loading" label="Loading (Skeleton)" name="page-flow-state" />
                  <base-radio v-model="pageState" value="error" label="Error State" name="page-flow-state" />
                  <base-radio v-model="pageState" value="empty" label="Empty State" name="page-flow-state" />
               </div>
               <div class="demo section">
                  <Transition name="fade" mode="out-in">
                     <div class="demo-content" v-if="isLoading" key="loading">
                        <div class="skeleton-card" v-for="n in 3" :key="n">
                           <div class="skeleton-item">
                              <base-skeleton :type="'circle'" :width="'50px'" />
                           </div>
                           <div class="skeleton-item">
                              <base-skeleton :type="'text'" :width="'200px'" />
                           </div>
                           <div class="skeleton-item">
                              <base-skeleton :type="'text'" :height="'40px'" />
                           </div>
                           <div class="skeleton-item">
                              <base-skeleton :type="'rect'" :width="'120px'" />
                           </div>
                        </div>
                     </div>
                     <div class="demo-info section__item" v-else-if="hasError" key="error">
                        <error-state>
                           <template #action>
                              <base-button @click="handleRetry" variant="ghost">Try again</base-button>
                           </template>
                        </error-state>
                     </div>
                     <div class="demo-content section__item article-items" v-else-if="hasArticles" key="articles">
                        <div class="article section__item" v-for="article in articles" :key="article.slug">
                           <base-text as="h3" :type="'subheading'">{{ article.title }}</base-text>
                           <base-text>{{ article.description }}</base-text>
                        </div>
                     </div>
                     <div class="demo-info" v-else key="empty">
                        <empty-state variant="primary" class="section__item">
                        </empty-state>
                        <empty-state class="section__item">
                           <template #action>
                              <base-button @click="handleRetry" variant="ghost">Try again</base-button>
                           </template>
                        </empty-state>
                     </div>
                  </Transition>
               </div>

            </div>
            <div class="page__footer">
               <base-pagination :total-pages="13" :page="currentPage" @change="currentPage = $event" />
            </div>
         </div>
      </div>
   </div>
</template>


<script setup lang="ts">
/* VUE */
import { ref, computed } from 'vue'

/* COMPONENTS */
import { BaseRadio, EmptyState, ErrorState, BaseButton, BaseSkeleton, BasePagination, BaseText } from 'modular-ui-kit-vue'

const MOCK_ARTICLES = [
   { slug: 'vue3-guide', title: 'Mastering Vue 3 Composition API', description: 'Deep dive into setup, refs, and clean architecture.' },
   { slug: 'sass-mixins', title: 'Advanced Sass Architecture', description: 'How to structure your design system tokens and mixins efficiently.' },
   { slug: 'npm-package', title: 'Publishing your first NPM Package', description: 'A complete step-by-step guide for frontend developers.' }
]

/* manage  flow*/
const pageState = ref<'content' | 'loading' | 'error' | 'empty'>('content')

const isLoading = computed(() => pageState.value === 'loading')
const hasError = computed(() => pageState.value === 'error')
const isEmpty = computed(() => pageState.value === 'empty')

const articles = computed(() => {
   if (isEmpty.value) return []
   return MOCK_ARTICLES
})

const hasArticles = computed(() => articles.value.length > 0)

/* retry */
const handleRetry = () => {
   pageState.value = 'loading'
   setTimeout(() => {
      pageState.value = 'content'
   }, 1500)
}

/* pagination */
const currentPage = ref(2)

</script>
<style lang="sass">

.article:first-child
   margin-top: 0px

.skeleton-card
   margin-top: 20px
.skeleton-item
   margin-top: 10px
</style>