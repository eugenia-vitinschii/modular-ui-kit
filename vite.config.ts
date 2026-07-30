import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'node:path'

export default defineConfig(({ command }) => {
  const isBuild = command === 'build'

  return {
    plugins: [
      vue(),
      //dev
      !isBuild && vueDevTools(),
    ].filter(Boolean),

    server: {
      port: 5100,
      strictPort: true,
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `@use "@/assets/sass/abstracts/index-lib" as *\n`
        }
      }
    },

    //build
    ...(isBuild && {
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'ModularUiKit',
          fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
        },
        rollupOptions: {
          external: ['vue', 'pinia', 'vue-router'],
          output: {
            globals: {
              vue: 'Vue',
              pinia: 'Pinia',
              'vue-router': 'VueRouter'
            },
            assetFileNames: (assetInfo) => {
              if (assetInfo.name === 'style.css') return 'modular-ui-kit.css'
              return assetInfo.name || 'assets/[name]-[hash][extname]'
            }
          }
        }
      }
    })
  }
})