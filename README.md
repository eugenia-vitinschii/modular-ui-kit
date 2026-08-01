# modular-ui-kit-vue

[![NPM Version](https://img.shields.io/npm/v/modular-ui-kit-vue?color=42b883)](https://www.npmjs.com/package/modular-ui-kit-vue)
[![NPM Downloads](https://img.shields.io/npm/dm/modular-ui-kit-vue?color=35495e)](https://www.npmjs.com/package/modular-ui-kit-vue)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/2e6247835bbf3928be881ca260cad051/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)

[Demo Project (main branch)](https://github.com/eugenia-vitinschii/modular-ui-kit-vue/tree/main) •
[Wiki & Documentation](https://github.com/eugenia-vitinschii/modular-ui-kit-vue/wiki)

`modular-ui-kit` is a lightweight library of independent frontend components designed for rapid development and clean code. No heavy backend logic: just pure, flexible, and responsive UI elements ready to be dropped into any web application.

### Install dependencies:

```sh
npm install
```

### Create a .env file in the project root:

```sh
VITE_API_URL=http://localhost:3000/api

```

### Run:

```sh
npm run dev
```

[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/2e6247835bbf3928be881ca260cad051/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)

`modular-ui-kit-vue` is a lightweight library of independent frontend components designed for rapid development and clean code. No heavy backend logic: just pure, flexible, and responsive UI elements ready to be dropped into any web application.

[![Demo Repository](https://img.shields.io/badge/Demo_Repo-View_Source_Code-6366f1?style=for-the-badge&logo=github&logoColor=white)](https://github.com/eugenia-vitinschii/modular-ui-kit)

### Install

```sh
npm install modular-ui-kit-vue
```

```sh
yarn add modular-ui-kit-vue
```

```sh
pnpm add modular-ui-kit-vue
```

### Quick start

```vue
<template>
  <base-text as="h1" :type="'heading'" :variant="'primary'">My component</base-text>
  <base-text as="h2" :type="'subheading'" :variant="'warning'">My component</base-text>
  <base-text :variant="'muted'">My component</base-text>
</template>
<script setup lang="ts">
import { BaseText } from 'modular-ui-kit-vue'
import 'modular-ui-kit-vue/dist/modular-ui-kit-vue.css'
</script>
```

### Available Components

Buttons

- BaseButton: Standard action button
- BaseIconButton: svg action button

Form Elements

- BaseCheckbox: Checkbox input component
- BaseInput: Standard text input field
- BaseRadio: Radio button option
- BaseSelect: Dropdown select menu
- BaseTextarea : Multi-line text input field

Feedback & States

- BaseToast / BaseToastContainer: Toast notification components
- useToast: Composition API helper for managing toasts
- BaseSkeleton: Skeleton loader for async data
- EmptyState: Placeholder display for empty data views

- ErrorState: Placeholder display for error screens

Navigation

- BaseBreadcrumbs: Breadcrumb navigation path
- BasePagination: Page navigation control

Overlays

- BaseModal: Modal dialog window with color variants

Typography

- BaseText: Standardized typography component

### Design Tokens

modular-ui-kit-vue is built using native CSS variables. You can easily override default colors, typography, borders, and spacing to match your brand design.

open or create app.sass, copy and use:

```
/*  DESIGN TOKENS (CSS Variables for Customization) */
:root
  /* === Colors: Text === */
  --ui-text: #eceef2
  --ui-text-muted: #8a93a6

  /* === Colors: Backgrounds === */
  --ui-bg: #0b0d11
  --ui-bg-soft: #12151c
  --ui-bg-card: #171b24
  --ui-bg-code: #1e2330

  /* === Colors: Accents & Statuses === */
  --ui-primary: #6366f1
  --ui-primary-hover: #4f46e5
  --ui-danger: #ff4a6b
  --ui-success: #10b981
  --ui-warning: #f59e0b

  /* === Typography === */
  --ui-font-heading: 26px
  --ui-font-subheading: 19px
  --ui-font-body: 16px

  --ui-font-heading-md: 24px
  --ui-font-subheading-md: 18px
  --ui-font-body-md: 15px

  --ui-font-heading-sm: 20px
  --ui-font-subheading-sm: 16px
  --ui-font-body-sm: 14px

  /* === Borders === */
  --ui-border-color: rgba(236, 238, 242, 0.08)
  --ui-border-width: 1px
  --ui-border-style: solid
  --ui-border-radius: 0px

  /* === Space Tokens: Elements (inputs, buttons, icons) === */
  --ui-space-content-sm: 6px
  --ui-space-content-md: 10px
  --ui-space-content-lg: 14px

  /* === Space Tokens: Containers (forms, cards, sections) === */
  --ui-space-container-sm: 16px
  --ui-space-container-md: 24px
  --ui-space-container-lg: 32px

  /* === Design Utilities === */
  --ui-transition: all 0.3s ease-out
  --ui-opacity: 0.4

/*  SASS VARIABLES ALIASES */

/* === Colors === */
$text: var(--ui-text)
$text-muted: var(--ui-text-muted)

$bg: var(--ui-bg)
$bg-soft: var(--ui-bg-soft)
$bg-card: var(--ui-bg-card)
$bg-code: var(--ui-bg-code)

$primary: var(--ui-primary)
$primary-hover: var(--ui-primary-hover)
$danger: var(--ui-danger)
$success: var(--ui-success)
$warning: var(--ui-warning)

/* === Typography === */
$heading: var(--ui-font-heading)
$subheading: var(--ui-font-subheading)
$body-text: var(--ui-font-body)

$heading-md: var(--ui-font-heading-md)
$subheading-md: var(--ui-font-subheading-md)
$body-text-md: var(--ui-font-body-md)

$heading-sm: var(--ui-font-heading-sm)
$subheading-sm: var(--ui-font-subheading-sm)
$body-text-sm: var(--ui-font-body-sm)

/* === Borders === */
$border-color: var(--ui-border-color)
$border-width: var(--ui-border-width)
$border-style: var(--ui-border-style)
$border-radius: var(--ui-border-radius)

/* === Space Tokens === */
$space-content-sm: var(--ui-space-content-sm)
$space-content-md: var(--ui-space-content-md)
$space-content-lg: var(--ui-space-content-lg)

$space-container-sm: var(--ui-space-container-sm)
$space-container-md: var(--ui-space-container-md)
$space-container-lg: var(--ui-space-container-lg)

/* === Design === */
$transition: var(--ui-transition)
$opacity: var(--ui-opacity)
```

import styles inside main.ts

```
import 'modular-ui-kit-vue/dist/modular-ui-kit-vue.css'
import '@/assets/sass/app.sass'
```

### Documentation

[![Wiki Documentation](https://img.shields.io/badge/docs-GitHub_Wiki-blue?style=for-the-badge&logo=github)](https://github.com/eugenia-vitinschii/modular-ui-kit/wiki/Base-Button-Component)

#### Base Button

Params

- variant?: UIButtonVariant

```
export type UIVariant = 'primary' | 'danger' | 'warning' | 'success' | 'secondary'
export type UIButtonVariant = UIVariant | 'ghost'

```

- size?: UISize

```
export type UISize = 'sm' | 'md' | 'lg'
```

- type?: UIButtonType

```
export type UIButtonType = "button" | "submit" | "reset"
```

- loading?: boolean
- disabled?: boolean

Deafult params

- variant: "primary",
- type: "button",
- size: "lg",
- loading: false,
- disabled: false

Usage

```
<base-button :variant="'secondary'" @click="handleRegister">register</base-button>
<base-button :type="'submit'" :loading="auth.isLoading" :disabled="auth.isLoading">login</base-button>
```

### Types

```ts
/* UI VARIANTS */
export type UIVariant = 'primary' | 'danger' | 'warning' | 'success' | 'secondary'
export type UISize = 'sm' | 'md' | 'lg'

/* TEXT */
export type UITextType = 'heading' | 'subheading' | 'body-text'
export type UITextAlign = 'left' | 'center' | 'right'
export type UITextVariant = UIVariant | 'muted'

/* BUTTONS */
export type UIButtonVariant = UIVariant | 'ghost'
export type UIButtonType = 'button' | 'submit' | 'reset'

/* EMPTY STATE VARIANT */
export type UIEmptyStateVariant = 'secondary' | 'primary'

/* INPUT TYPE */
export type UIInputType = 'text' | 'email' | 'password' | 'search' | 'date' | 'tel' | 'number'

/* SKELTON TYPE */
export type UISkeletonType = 'text' | 'circle' | 'rect'
```

### Accessibility (a11y)

All components are built with basic accessibility in mind:

- Native keyboard navigation support (Focus states, `Enter` / `Space` key handlers).
- Proper ARIA attributes (`aria-expanded`, `aria-hidden`) out of the box.
- High-contrast focus rings for better visibility.
