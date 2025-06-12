import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts : ['70c2288e-ff5e-4140-abab-30ae0a775444-00-36bsbsjcxvm1p.sisko.replit.dev']
  }
})
