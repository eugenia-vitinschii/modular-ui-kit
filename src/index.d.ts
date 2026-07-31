declare module 'modular-ui-kit-vue' {
   import { DefineComponent } from 'vue'

   /*  FORM ELEMENTS */
   export const BaseCheckbox: DefineComponent<{}, {}, any>
   export const BaseInput: DefineComponent<{}, {}, any>
   export const BaseRadio: DefineComponent<{}, {}, any>
   export const BaseSelect: DefineComponent<{}, {}, any>
   export const BaseTextarea: DefineComponent<{}, {}, any>

   /*  BUTTONS  */
   export const BaseButton: DefineComponent<{}, {}, any>
   export const BaseIconButton: DefineComponent<{}, {}, any>

   /*  FEEDBACK  */
   export const BaseSkeleton: DefineComponent<{}, {}, any>
   export const BaseToast: DefineComponent<{}, {}, any>
   export const BaseToastContainer: DefineComponent<{}, {}, any>
   export const useToast: () => any
   export const EmptyState: DefineComponent<{}, {}, any>
   export const ErrorState: DefineComponent<{}, {}, any>

   /*  NAVIGATIONS  */
   export const BaseBreadcrumbs: DefineComponent<{}, {}, any>
   export const BasePagination: DefineComponent<{}, {}, any>

   /*  OVERLAYS  */
   export const BaseModal: DefineComponent<{}, {}, any>

   /*  TYPOGRAPHY */
   export const BaseText: DefineComponent<{}, {}, any>

   /*  TYPES */
   export type UIVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | string
   export type UISize = 'sm' | 'md' | 'lg' | string
   export type UITextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
   export type UITextAlign = 'left' | 'center' | 'right'
   export type UITextVariant = UIVariant
   export type UIButtonVariant = UIVariant
   export type UIButtonType = 'button' | 'submit' | 'reset'
   export type UIEmptyStateVariant = UIVariant
   export type UIInputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url'
   export type UISkeletonType = 'text' | 'avatar' | 'card' | 'custom'
}