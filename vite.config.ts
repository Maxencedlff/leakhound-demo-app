import { defineConfig } from 'vite'
export default defineConfig({
  server: {
    // ⚠️ CORS ouvert à n'importe quel site
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
})
