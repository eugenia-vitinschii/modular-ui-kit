# modular-ui-kit-vue

[![NPM Version](https://img.shields.io/npm/v/modular-ui-kit-vue?color=42b883)](https://www.npmjs.com/package/modular-ui-kit-vue)
[![NPM Downloads](https://img.shields.io/npm/dm/modular-ui-kit-vue?color=35495e)](https://www.npmjs.com/package/modular-ui-kit-vue)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/2e6247835bbf3928be881ca260cad051/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)

A lightweight, high-performance UI component library for **Vue 3 + TypeScript**. Built on a unified system of design tokens, thoughtful accessibility (a11y) basics, and maximum performance optimization.

[Demo Project (main branch)](https://github.com/eugenia-vitinschii/modular-ui-kit-vue/tree/main) •
[Wiki & Documentation](https://github.com/eugenia-vitinschii/modular-ui-kit-vue/wiki)

## Features

- **Lightweight & Fast:** Minimal bundle size with zero heavy third-party dependencies.
- **Design Tokens:** All style are powered by native `--muk-*` CSS variables.
- **Scope Isolation:** All components use the `Muk*` prefix (`<muk-button>`, `<muk-input>`), eliminating conflicts with standard HTML tags or other UI libraries.
- **Accessible (a11y):** Built-in support for ARIA attributes, focus management, and full keyboard navigation.

## Installation

Install the package via your preferred package manager:

```bash
npm install modular-ui-kit-vue
# or
pnpm add modular-ui-kit-vue
# or
yarn add modular-ui-kit-vue


```

### Quick start

```
<template>
  <muk-text as="h1" :type="'muk-heading'" :variant="'primary'">Modular UI Kit</muk-text>
  <muk-text as="h2" :type="'muk-subheading'" :variant="'warning'">Craft flexible & lightweight Vue 3 interface<base-text>
  <muk-text :variant="'muted'">Explore reusable components, custom design tokens, and flexible typography out of the box.</base-text>
</template>
<script setup lang="ts">
import { MukText } from 'modular-ui-kit-vue'
import 'modular-ui-kit-vue/dist/modular-ui-kit-vue.css'
</script>
```

### Available Components

Buttons

- MukButton: Standard action button
- MukIconButton: svg action button

Form Elements

- MukCheckbox: Checkbox input component
- MukInput: Standard text input field
- MukRadio: Radio button option
- MukSelect: Dropdown select menu
- MukTextarea : Multi-line text input field

Feedback & States

- MukToast / MukToastContainer: Toast notification components
- MukSkeleton: Skeleton loader for async data
- MukEmptyState: Placeholder display for empty data views
- MukErrorState: Placeholder display for error screens

Navigation

- MukBreadcrumbs: Breadcrumb navigation path
- MukPagination: Page navigation control

Overlays

- MukModal: Modal dialog window with color variants

Typography

- MukText: Standardized typography component

### Documentation

[![Wiki Documentation](https://img.shields.io/badge/docs-GitHub_Wiki-blue?style=for-the-badge&logo=github)](https://github.com/eugenia-vitinschii/modular-ui-kit/wiki/Muk-Button-Component)

#### Form Elements

```
import { MukInput, MukSelect, MukTextarea, MukCheckbox, MukRadio } from 'modular-ui-kit-vue'
```

All form elements includes:

- label?: sting
- hint?: string
- error?: string
- disabled?: boolean; default: false

```
import { MukInput } from 'modular-ui-kit-vue'
```

- type?: UIInputType; default: ‘text’’
- autocomplete?: string
- placeholder?: string

Supported variants:

- type UIInputType = 'text' | 'email' | 'password' | 'search' | 'date' | 'tel' | 'number'

```
import { MukTextarea } from 'modular-ui-kit-vue'
```

- rows: number

```
import { MukRadio } from 'modular-ui-kit-vue'
```

- name: string

#### Typography

```
import { MukText } from 'modular-ui-kit-vue'
```

- variant?: UITextVariant, default: ‘secondary’
- as?: string, default: ‘p’
- type?: UITextType, default: ‘muk-body-text’
- align?: UITextAlign, default: ‘left’

Supported variants:

- type UIVariant = 'primary' | 'danger' | 'warning' | 'success' | 'secondary'
- type UITextVariant = UIVariant | 'muted'
- type UITextType = 'muk-heading' | 'muk-subheading' | 'muk-body-text'
- type UITextAlign = 'left' | 'center' | 'right'

#### Buttons

```
import { MukButton, MukIconButton } from 'modular-ui-kit-vue'
```

For Both:

- variant?: UIButtonVariant, default: primary
- size?: UISize, default: lg
- type?: UIButtonType, default: button
- loading?: boolean, default: false
- disabled?: boolean, default: false

- - Icon button includes slot for svg

Supported variants:

- type UIVariant = 'primary' | 'danger' | 'warning' | 'success' | 'secondary'
- type UIButtonVariant = UIVariant | 'ghost'
- type UISize = 'sm' | 'md' | 'lg'
- type UIButtonType = 'button' | 'submit' | 'reset'

### Types

```
/* UI VARIANTS */
export type UIVariant = 'primary' | 'danger' | 'warning' | 'success' | 'secondary'
export type UISize = 'sm' | 'md' | 'lg'

/* TEXT */
export type UITextType = 'muk-heading' | 'muk-subheading' | 'muk-body-text'
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

### Design Tokens

modular-ui-kit-vue is built using native CSS variables. You can easily override default colors, typography, borders, and spacing to match your brand design.

open or create app.sass, copy and use:

```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')

:root
  /* === Colors: Text === */
  --muk-text: #0f172a
  --muk-text-muted: #64748b

  /* === Colors: Backgrounds === */
  --muk-bg: #f8fafc
  --muk-bg-soft: #f1f5f9
  --muk-bg-card: #ffffff
  --muk-bg-code: #e2e8f0

  /* === Colors: Accents & Statuses === */
  --muk-primary: #0891b2
  --muk-primary-hover: #0e7490
  --muk-danger: #e11d48
  --muk-success: #059669
  --muk-warning: #d97706

  /* === Typography === */
  --muk-font-family: 'Inter', system-ui, -apple-system, sans-serif
  --muk-font-heading: 26px
  --muk-font-subheading: 19px
  --muk-font-body: 16px

  --muk-font-heading-md: 24px
  --muk-font-subheading-md: 18px
  --muk-font-body-md: 15px

  --muk-font-heading-sm: 20px
  --muk-font-subheading-sm: 16px
  --muk-font-body-sm: 14px

  /* === Borders === */
  --muk-border-color: rgba(236, 238, 242, 0.08)
  --muk-border-width: 1px
  --muk-border-style: solid
  --muk-border-radius: 10px

  /* === Space Tokens: Elements (inputs, buttons, icons) === */
  --muk-space-content-sm: 6px
  --muk-space-content-md: 10px
  --muk-space-content-lg: 14px

  /* === Space Tokens: Containers (forms, cards, sections) === */
  --muk-space-container-sm: 16px
  --muk-space-container-md: 24px
  --muk-space-container-lg: 32px

  /* === Design Utilities === */
  --muk-transition: all 0.3s ease-out
  --muk-opacity: 0.4

```

import styles inside main.ts

```
import 'modular-ui-kit-vue/dist/modular-ui-kit-vue.css'
import '@/assets/sass/app.sass'
```
