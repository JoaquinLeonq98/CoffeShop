/// <reference types="astro/client" />

declare module '*.astro' {
	const Component: any
	export default Component
}

// Algunos servidores de TS no cargan bien `ImportMeta.env` con Astro.
interface ImportMeta {
  readonly env: Record<string, any>;
}

