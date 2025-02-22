import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
import { fileURLToPath } from "url";

import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // COMPONENTS
      "@comps": path.resolve(__dirname, "src/components"),
      // ATOMS
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@btns": path.resolve(__dirname, "src/components/atoms/button"),
      "@inputs": path.resolve(__dirname, "src/components/atoms/input"),
      // MOLECULES
      "@mols": path.resolve(__dirname, "src/components/molecules"),
      // ORGANISMS
      "@orgs": path.resolve(__dirname, "src/components/organisms"),
      "@cards": path.resolve(__dirname, "src/components/organisms/card"),
      "@modals": path.resolve(__dirname, "src/components/organisms/modal"),
      // TEMPLATES
      "@temps": path.resolve(__dirname, "src/components/templates"),
      // VARIANTS
      "@vars": path.resolve(__dirname, "src/components/vatiants"),

      // HOOKS
      "@hooks": path.resolve(__dirname, "src/hooks"),

      // PAGES
      "@pages": path.resolve(__dirname, "src/pages"),
      "@public": path.resolve(__dirname, "src/pages/public"),
      "@private": path.resolve(__dirname, "src/pages/private"),
      // ACCESS
      "@user": path.resolve(__dirname, "src/pages/private/user"),
      "@admin": path.resolve(__dirname, "src/pages/private/admin"),

      // ROUTES
      "@routes": path.resolve(__dirname, "src/pages/routes"),

      // UTILS
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
