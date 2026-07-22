/* ==========  UI TYPES ========== */

/* UI VARIANTS */
export type UIVariant = 'primary' | 'danger' | 'warning' | 'success' | 'secondary'
export type UISize = 'sm' | 'md' | 'lg'

/* TEXT */
export type UITextType = 'heading' | 'subheading' | 'body-text'
export type UITextAlign = 'left' | 'center' | 'right'
export type UITextVariant = UIVariant | 'muted'

/* BUTTONS */
export type UIButtonVariant = UIVariant | 'ghost'
export type UIButtonType = "button" | "submit" | "reset"

/* EMPTY STATE */
export type UIEmptyStateVariant = 'secondary' | 'primary'

/* INPUT TYPE */
export type UIInputType = "text" | "email" | "password" | "search" | "date" | "tel" | "number"