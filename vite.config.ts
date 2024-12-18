import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  css: { postcss: { plugins: [tailwind(), autoprefixer()] } },
  plugins: [vue()],
  resolve: { 
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } 
  },
  server: { host: '0.0.0.0', port: 52101 },
  build: {
    rollupOptions: {
      external: ['vh-plugin'],  // 添加这行来处理 vh-plugin 的问题
      output: {
        manualChunks: undefined // 优化打包配置
      }
    },
    sourcemap: false, // 生产环境不需要 sourcemap
    chunkSizeWarningLimit: 1500 // 增加块大小警告限制
  }
})
