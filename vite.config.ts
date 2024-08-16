import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

const __dirname = import.meta.url

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', __dirname)),
      },
      {
        find: '@shared',
        replacement: fileURLToPath(
          new URL('./src/components/shared', __dirname)
        ),
      },
    ],
  },
})
