import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import prerender from '@prerenderer/rollup-plugin';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Prerendering configuration for production builds
    prerender({
      routes: ['/', '/404'], // List of routes to prerender
      renderer: '@prerenderer/renderer-jsdom',
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500, // Wait for animations to settle
      },
      postProcess(renderedRoute) {
        // Clean up the output HTML
        renderedRoute.html = renderedRoute.html
          .replace(/<script-disabled/g, '<script')
          .replace(/<\/script-disabled/g, '</script');
      },
    }),
  ],
});
