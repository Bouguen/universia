import { defineConfig } from 'vite';

// GitHub Pages serves the project below /universia/.
// Vercel Preview deployments serve it from the domain root.
export default defineConfig({
  base: process.env.VERCEL === '1' ? '/' : '/universia/',
});
