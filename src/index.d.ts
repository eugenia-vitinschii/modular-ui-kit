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

   /*  TYPES */
   export type {
      UiVariant, UISize, UITextType, UITextAlign, UITextVariant, UIButtonVariant, UIButtonType,
      UIEmptyStateVariant, UIInputType, UISkeletonType
   } from './types/ui.types.ts'
}

