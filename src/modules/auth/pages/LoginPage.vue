<template>
   <div class="muk-page">
      <div class="muk-container">
         <div class="muk-page__wrapper">
            <div class="muk-page__header">
               <muk-text :type="'muk-heading'" as="h1" :align="'center'">Login</muk-text>
               <muk-text :type="'muk-subheading'" as="h2" :align="'center'">Welcome back! Please enter your
                  details.</muk-text>
            </div>
            <div class="muk-page__content ">
               <div class="muk-form-wrapper muk-section">
                  <form class="muk-form" @submit.prevent="submit">
                     <div class="form__error" v-if="auth.error">
                        <muk-text :variant="'danger'" :align="'center'">{{ auth.error }}</muk-text>
                     </div>
                     <div class="muk-form__item">
                        <muk-input v-model="email" type="email" label="*Enter email" placeholder="example@email.com"
                           autocomplete="email" />
                     </div>
                     <div class="muk-form__item">
                        <muk-input v-model="password" type="password" label="*Enter password"
                           autocomplete="current-password" />
                     </div>
                     <div class="muk-form__actions">
                        <muk-button :variant="'secondary'" @click="handleRegister">register</muk-button>
                        <muk-button :type="'submit'" :loading="auth.isLoading"
                           :disabled="auth.isLoading">login</muk-button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
/* VUE & ROUTER */
import { useRouter } from 'vue-router';
import { onUnmounted, ref } from 'vue';

/* COMPONENTS */
import MukText from '@/components/ui/typography/MukText.vue';
import MukInput from '@/components/ui/form/MukInput.vue';
import MukButton from '@/components/ui/buttons/MukButton.vue';

/* STORE */
import { useAuthStore } from '../store/useAuthStore';

const auth = useAuthStore()
const router = useRouter()

/* state */
const email = ref('')
const password = ref('')


const submit = async () => {
   if (!email.value || !password.value) return

   const isSuccess = await auth.login({ email: email.value, password: password.value })

   if (isSuccess) {
      router.push({ name: 'profile' })
   }
}

const handleRegister = () => {
   router.push('/auth/register')
}

onUnmounted(() => {
   auth.clearError()
})
</script>
