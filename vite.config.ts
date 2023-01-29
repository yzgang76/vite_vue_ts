import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    port:3000,
    proxy: {
      '/api':'http://127.0.0.1:4523/m1/2213202-0-default'
    }
  }
})
