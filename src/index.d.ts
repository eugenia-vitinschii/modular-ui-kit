declare module 'modular-ui-kit-vue' {
   import { DefineComponent } from 'vue'

   /*  FORM ELEMENTS */
   export const MukCheckbox: DefineComponent<{}, {}, any>
   export const MukInput: DefineComponent<{}, {}, any>
   export const MukRadio: DefineComponent<{}, {}, any>
   export const MukSelect: DefineComponent<{}, {}, any>
   export const MukTextarea: DefineComponent<{}, {}, any>

   /*  BUTTONS  */
   export const MukButton: DefineComponent<{}, {}, any>
   export const MukIconButton: DefineComponent<{}, {}, any>

   /*  FEEDBACK  */
   export const MukSkeleton: DefineComponent<{}, {}, any>
   export const MukToast: DefineComponent<{}, {}, any>
   export const MukToastContainer: DefineComponent<{}, {}, any>
   export const useMukToast: () => any
   export const MukEmptyState: DefineComponent<{}, {}, any>
   export const MukErrorState: DefineComponent<{}, {}, any>

   /*  NAVIGATIONS  */
   export const MukBreadcrumbs: DefineComponent<{}, {}, any>
   export const MukPagination: DefineComponent<{}, {}, any>

   /*  OVERLAYS  */
   export const MukModal: DefineComponent<{}, {}, any>

   /*  TYPOGRAPHY */
   export const MukText: DefineComponent<{}, {}, any>

   export type UIVariant = 'primary' | 'danger' | 'warning' | 'success' | 'secondary'
   export type UISize = 'sm' | 'md' | 'lg'
   export type UITextType = 'muk-heading' | 'muk-subheading' | 'muk-body-text'
   export type UITextAlign = 'left' | 'center' | 'right'
   export type UITextVariant = UIVariant | 'muted'
   export type UIButtonVariant = UIVariant | 'ghost'
   export type UIButtonType = "button" | "submit" | "reset"
   export type UIEmptyStateVariant = 'secondary' | 'primary'
   export type UIInputType = "text" | "email" | "password" | "search" | "date" | "tel" | "number"
   export type UISkeletonType = 'text' | 'circle' | 'rect'
}