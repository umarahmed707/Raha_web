// // vite.config.js
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'  // Make sure this is imported

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), 
//     tailwindcss()]  // Add tailwindcss plugin here
// })
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // Tailwind CSS plugin
import postcss from 'postcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // Add Tailwind CSS plugin
  ],
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'), // Make sure autoprefixer is used
      ],
    },
  },
  build: {
    cssCodeSplit: true, // Split CSS into multiple files
    minify: 'terser',  // Minify JS for production
  },
})
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Path to your React components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1445C2',
        secondary: '#587EDB',
      },
      animation: {
        scroll: 'scroll 40s linear infinite', // Define the scrolling animation here
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode support via 'class' strategy
}
