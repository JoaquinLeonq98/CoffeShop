import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["darkgrey-alpaca-160443.hostingersite.com", "coffee.local"],
  },
  adapter: netlify(),
});
