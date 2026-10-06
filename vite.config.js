import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// SINGLE=1 npm run build -> one self-contained HTML file (handy for sharing a preview)
const single = process.env.SINGLE === '1';

export default defineConfig({
  base: './', // relative paths so the build works on GitHub Pages under any repo name
  plugins: [react(), ...(single ? [viteSingleFile()] : [])],
  build: { outDir: single ? 'dist-single' : 'dist' },
});
