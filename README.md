# modular-ui-kit-vue

![NPM Version](https://img.shields.io/npm/v/modular-ui-kit-vue?color=42b883)
![NPM Downloads](https://img.shields.io/npm/dm/modular-ui-kit-vue?color=35495e)
[![GitHub Clones](https://img.shields.io/badge/dynamic/json?color=success&label=Clone&query=count&url=https://gist.githubusercontent.com/eugenia-vitinschii/2e6247835bbf3928be881ca260cad051/raw/clone.json&logo=github)](https://github.com/MShawon/github-clone-count-badge)

`modular-ui-kit-vue` is a lightweight library of independent frontend components designed for rapid development and clean code. No heavy backend logic: just pure, flexible, and responsive UI elements ready to be dropped into any web application.

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
  <base-text as="h1" :type="'subheading'" :variant="'warning'">My component</base-text>
  <base-text as="h1" :variant="'muted'">My component</base-text>
</template>
<script setup lang="ts">
import { BaseText } from 'modular-ui-kit-vue'
import 'modular-ui-kit-vue/dist/modular-ui-kit-vue.css'
</script>
```

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

```

import styles inside main.ts

```
import 'modular-ui-kit-vue/dist/modular-ui-kit-vue.css'
import '@/assets/sass/app.sass'
```

### Accessibility (a11y)

All components are built with basic accessibility in mind:

- Native keyboard navigation support (Focus states, `Enter` / `Space` key handlers).
- Proper ARIA attributes (`aria-expanded`, `aria-hidden`) out of the box.
- High-contrast focus rings for better visibility.

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

- ## Deafult params
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
