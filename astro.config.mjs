import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

import netlify from "@astrojs/netlify";

// En Netlify: Project configuration → Environment variables → Add variable
// (API_URL, HOME_URL). Builds: mismo valor que en tu .env.production local.
//
// Solo cargamos el modo del build: si mezcláramos development+production, un
// .env.development commiteado con coffee.local rompería el prerender en CI.
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
const fromFiles = loadEnv(mode, process.cwd(), "");
const define = {};
for (const key of ["API_URL", "HOME_URL"]) {
  const value = process.env[key] ?? fromFiles[key];
  if (value) {
    define[`import.meta.env.${key}`] = JSON.stringify(value);
  }
}

if (
  process.env.NETLIFY === "true" &&
  mode === "production" &&
  !(process.env.API_URL ?? fromFiles.API_URL)
) {
  throw new Error(
    "Netlify: falta API_URL. Panel: Project configuration → Environment variables → Add variable (scope Builds). O CLI: netlify env:set API_URL \"https://tudominio.com/wp-json/wp/v2\"",
  );
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
