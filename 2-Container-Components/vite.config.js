import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/current-user': 'http://localhost:8080',
      '/users': 'http://localhost:8080',
      '/users:/id': 'http://localhost:8080',
      '/products': 'http://localhost:8080',
    },
  },
})
