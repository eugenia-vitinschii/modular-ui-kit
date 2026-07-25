/* AUTH STORE */

import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import { authApi } from "../api/auth.api";
//types
import type { LoginPayload, RegisterPayload, User } from "../types";
import { errorRoutes } from "@/modules/errors/routes/error.routes";


export const useAuthStore = defineStore("auth", () => {
   const user = ref<User | null>(null)
   const token = ref<string | null>(null)

   const isAuthenticated = computed(() => !!token.value)

   /* === AUTO LOGIN === */
   const savedUser = localStorage.getItem('user');
   const savedToken = localStorage.getItem('token');

   if (savedUser) {
      try {
         user.value = JSON.parse(savedUser)
      } catch {
         localStorage.removeItem("user")
      }
   }
   if (savedToken) {
      token.value = savedToken
   }

   /* === LOGIN === */
   async function login(credentials: LoginPayload) {
      try {
         const { data } = await authApi.login(credentials)

         user.value = data.user;
         token.value = data.token;

         localStorage.setItem("user", JSON.stringify(data.user));
         localStorage.setItem("token", data.token);

         return true
      } catch (error) {
         console.error("LOGIN FAILED:", error)
         return false
      }
   }
   /* === REGISTER === */
   async function register(credentials: RegisterPayload) {
      try {
         const { data } = await authApi.register(credentials)

         user.value = data.user;
         token.value = data.token;

         localStorage.setItem("user", JSON.stringify(data.user));
         localStorage.setItem("token", data.token);

         return true
      } catch (error) {
         console.error("LOGIN FAILED:", error)
         return false
      }
   }

   /* === LOGOUT === */
   function logout() {
      user.value = null;
      token.value = null;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
   }

   return {
      //state
      user,
      token,
      isAuthenticated,
      //actions
      login,
      register,
      logout,
   }

})