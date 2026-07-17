/* Shared State/ Singleton (TOAST) */

import { ref } from "vue";

/* toast type */
export type ToastType = 'success' | "error" | "info" | "warning"

/* toast interface */
export interface Toast {
   id: string
   message: string
   type: ToastType
   duration: number
}

/* toast ref */
const toasts = ref<Toast[]>([])

export function useToast() {
   //create toast
   const addToast = (
      message: string,
      type: ToastType = 'info',
      duration: number = 3000
   ) => {
      const id = Date.now().toString() + Math.random().toString().slice(2, 6)
      toasts.value.push({ id, message, type, duration })
   }
   //remove toast
   const removeToast = (id: string) => {
      toasts.value = toasts.value.filter(t => t.id !== id)
   }
   return {
      toasts,
      addToast,
      removeToast
   }
}
