import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/expense_tracker', // maybe its not deploying because the base isnt set up properly
  plugins: [react(), ghPages()],
})
