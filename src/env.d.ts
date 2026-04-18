/// <reference types="astro/client" />

// Algunos servidores de TS no cargan bien `ImportMeta.env` con Astro.
interface ImportMeta {
  readonly env: Record<string, any>;
}

