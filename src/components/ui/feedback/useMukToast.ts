/* Shared State/ Singleton (TOAST) */

import { ref } from "vue";

/* toast type */
import type { UIVariant } from '@/types/ui.types'

/* toast interface */
export interface Toast {
   id: string
   message: string
   variant: UIVariant
   duration: number
}

/* toast ref */
const toasts = ref<Toast[]>([])

export function useToast() {
   //create toast
   const addToast = (
      message: string,
      variant: UIVariant = 'secondary',
      duration: number = 3000
   ) => {
      const id = Date.now().toString() + Math.random().toString().slice(2, 6)
      toasts.value.push({ id, message, variant, duration })
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
