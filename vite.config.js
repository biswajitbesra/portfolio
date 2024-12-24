import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/personal-portfolio/',
    build: {
        outDir: 'dist',
    },
    plugins: [react()],
})