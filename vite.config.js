import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import prerender from '@prerenderer/rollup-plugin';
import JSDOMRenderer from '@prerenderer/renderer-jsdom';
import path from 'path';

const inlineCssPlugin = () => ({
  name: 'inline-css',
  transformIndexHtml: {
    order: 'post',
    handler(html, ctx) {
      if (!ctx.bundle) return html;
      let newHtml = html;
      for (const [fileName, asset] of Object.entries(ctx.bundle)) {
        if (fileName.endsWith('.css')) {
          const styleTag = `<style>\n${asset.source}\n</style>`;
          newHtml = newHtml.replace(/<\/head>/, `${styleTag}\n</head>`);
          // We DON'T delete the link tag here yet—the prerenderer needs it.
          // We only hide it or let postProcess clean it up.
        }
      }
      return newHtml;
    }
  }
});

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    inlineCssPlugin(),
    prerender({
      staticDir: path.join(process.cwd(), 'dist'),
      routes: ['/', '/menu', '/contact'],
      renderer: new JSDOMRenderer(),
      rendererOptions: {
        renderAfterTime: 2000,
      },
      postProcess(renderedRoute) {
        // Remove the external CSS link now that it's inlined
        renderedRoute.html = renderedRoute.html
          .replace(/<link[^>]*?href=["']?.*?\.css["']?[^>]*?>/gi, '')
          .replace(/<script-disabled/g, '<script')
          .replace(/<\/script-disabled/g, '</script');
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        // Object syntax works again in Vite 6!
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-utils': ['lucide-react', 'react-helmet-async']
        }
      }
    }
  }
});