import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { createElectronConfig } from 'electron-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    createElectronConfig({
      entry: 'src/main.ts'
    })
  ],
})
