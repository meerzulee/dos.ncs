import { defineConfig } from 'vite'
import path from 'path'

import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import compress from 'vite-plugin-compress'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(), 
    compress({
      extensions: ['png'],
      svgo: false,
      pngquant: true
    })

  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    }
  }
})
