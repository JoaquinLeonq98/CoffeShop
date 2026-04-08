import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

import netlify from "@astrojs/netlify";

// `import.meta.url` → ruta absoluta; el alias con RegExp es lo que Vite documenta para
// `@/…` y evita fallos de resolución en el bundle SSR (p. ej. en Netlify Linux).
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDirSlash = path.join(__dirname, "src") + path.sep;

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Solo `@/…` (no `@` suelto: rompería paquetes tipo `@astrojs/...`).
      alias: [{ find: /^@\//, replacement: srcDirSlash }],
    },
  },
  image: {
    domains: ["darkgrey-alpaca-160443.hostingersite.com", "coffee.local"],
  },
  adapter: netlify(),
});

