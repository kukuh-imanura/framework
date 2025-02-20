import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // COMPONENTS
      '@comps': path.resolve(__dirname, 'src/components'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@mols': path.resolve(__dirname, 'src/components/molecules'),
      '@orgs': path.resolve(__dirname, 'src/components/organisms'),
      '@temps': path.resolve(__dirname, 'src/components/templates'),

      '@hooks': path.resolve(__dirname, 'src/hooks'),

      // PAGES
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@public': path.resolve(__dirname, 'src/pages/public'),
      '@private': path.resolve(__dirname, 'src/pages/private'),
      // ACCESS
      '@user': path.resolve(__dirname, 'src/pages/private/user'),
      '@admin': path.resolve(__dirname, 'src/pages/private/admin'),

      '@routes': path.resolve(__dirname, 'src/pages/routes'),

      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
});
