import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        core: 'http://localhost:8010/assets/coreEntry.js',
        auth: 'http://localhost:8020/assets/authEntry.js',
        advertising: 'http://localhost:8030/assets/advertisingEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
  server: {
    strictPort: true,
    port: 8000
  }
})
