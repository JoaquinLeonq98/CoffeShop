import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

import netlify from "@astrojs/netlify";

// En Netlify, define API_URL (y opcionalmente HOME_URL) en Site settings → Environment variables.
// loadEnv rellena desde .env / .env.production en local; en CI solo cuenta process.env.
const fromFiles = {
  ...loadEnv("development", process.cwd(), ""),
  ...loadEnv("production", process.cwd(), ""),
};
const define = {};
for (const key of ["API_URL", "HOME_URL"]) {
  const value = process.env[key] ?? fromFiles[key];
  if (value) {
    define[`import.meta.env.${key}`] = JSON.stringify(value);
  }
}

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    define,
  },
  image: {
    domains: ["darkgrey-alpaca-160443.hostingersite.com", "coffee.local"],
  },
  adapter: netlify(),
});
