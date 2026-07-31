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
