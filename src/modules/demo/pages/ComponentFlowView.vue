<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text as="h1" :type="'muk-heading'">Component Flow Preview</muk-text>
            </div>
            <div class="muk-page__content">
               <div class="demo-controls muk-section">
                  <muk-text as="h2" :type="'muk-subheading'">Demo Controls</muk-text>
                  <muk-radio v-model="pageState" value="content" label="Show Content" name="page-flow-state" />
                  <muk-radio v-model="pageState" value="loading" label="Loading (Skeleton)" name="page-flow-state" />
                  <muk-radio v-model="pageState" value="error" label="Error State" name="page-flow-state" />
                  <muk-radio v-model="pageState" value="empty" label="Empty State" name="page-flow-state" />
               </div>
               <div class="demo muk-section">
                  <Transition name="fade" mode="out-in">
                     <div class="demo-content" v-if="isLoading" key="loading">
                        <div class="skeleton-card" v-for="n in 3" :key="n">
                           <div class="skeleton-item">
                              <muk-skeleton :type="'circle'" :width="'50px'" />
                           </div>
                           <div class="skeleton-item">
                              <muk-skeleton :type="'text'" :width="'200px'" />
                           </div>
                           <div class="skeleton-item">
                              <muk-skeleton :type="'text'" :height="'40px'" />
                           </div>
                           <div class="skeleton-item">
                              <muk-skeleton :type="'rect'" :width="'120px'" />
                           </div>
                        </div>
                     </div>
                     <div class="demo-info muk-section__item" v-else-if="hasError" key="error">
                        <muk-error-state>
                           <template #action>
                              <muk-button @click="handleRetry" variant="ghost">Try again</muk-button>
                           </template>
                        </muk-error-state>
                     </div>
                     <div class="demo-content muk-section__item article-items" v-else-if="hasArticles" key="articles">
                        <div class="article muk-section__item" v-for="article in articles" :key="article.slug">
                           <muk-text as="h3" :type="'muk-subheading'">{{ article.title }}</muk-text>
                           <muk-text>{{ article.description }}</muk-text>
                        </div>
                     </div>
                     <div class="demo-info" v-else key="empty">
                        <muk-empty-state variant="primary" class="muk-section__item">
                        </muk-empty-state>
                        <muk-empty-state class="muk-section__item">
                           <template #action>
                              <muk-button @click="handleRetry" variant="ghost">Try again</muk-button>
                           </template>
                        </muk-empty-state>
                     </div>
                  </Transition>
               </div>

            </div>
            <div class="muk-page__footer">
               <muk-pagination :total-pages="13" :page="currentPage" @change="currentPage = $event" />
            </div>
         </div>
      </div>
   </div>
</template>


<script setup lang="ts">
/* VUE */
import { ref, computed } from 'vue'

/* COMPONENTS */
import MukRadio from '@/components/ui/form/MukRadio.vue';
import MukEmptyState from '@/components/ui/feedback/MukEmptyState.vue';
import MukErrorState from '@/components/ui/feedback/MukErrorState.vue';
import MukButton from '@/components/ui/buttons/MukButton.vue';
import MukSkeleton from '@/components/ui/feedback/MukSkeleton.vue';
import MukPagination from '@/components/ui/navigation/MukPagination.vue';
import MukText from '@/components/ui/typography/MukText.vue';

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