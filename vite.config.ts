import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"


// https://vite.dev/config/
export default defineConfig({
  base: '/test-wicht/',
  plugins: [react()],


  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animation': ['gsap', 'framer-motion', 'lenis'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
});


