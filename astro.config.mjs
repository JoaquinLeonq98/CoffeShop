import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { fileURLToPath } from "node:url";

import netlify from "@astrojs/netlify";

// Rutas absolutas desde este archivo (no desde process.cwd()) para que Linux/Netlify
// resuelvan "@/..." igual que en local.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, "src");

export default defineConfig({
  vite: {
    plugins: [tsconfigPaths({ root: __dirname }), tailwindcss()],
    resolve: {
      alias: {
        "@": srcDir,
      },
    },
  },
  image: {
    domains: ["darkgrey-alpaca-160443.hostingersite.com", "coffee.local"],
  },
  adapter: netlify(),
});

