// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows external access (equivalent to --host)
    allowedHosts: ['netflix-gpt-4.onrender.com'] // allow Render's domain
  }
});
