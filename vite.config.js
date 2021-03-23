import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $color-primary: #E86487;
          $text-base: #333333;
          $text-light: #666666;
        `,
      }
    }
  },
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        resolveStyle: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
      }]
    })
  ]
})
