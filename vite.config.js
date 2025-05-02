// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // Make sure this is imported

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss()]  // Add tailwindcss plugin here
})
