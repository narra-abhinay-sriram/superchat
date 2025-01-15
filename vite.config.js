// vite.config.js
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    {
    ...visualizer({
      filename: './dist/stats.html', // Location of the stats file
      open: true, // Automatically open the report in the browser
      gzipSize: true, // Show gzip sizes
      brotliSize: true, // Show Brotli sizes
      template: 'treemap', // Options: 'treemap', 'sunburst', 'network'
    }),
    apply: 'build', // Ensures it's only used in the build process
  },],
  base:'/',
 
  
});
