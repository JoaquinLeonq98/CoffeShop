/**
 * El HTML de WordPress a veces incluye src="icon_*.svg" sin slash inicial.
 * En rutas como /proceso/ el navegador resuelve /proceso/icon_*.svg → 404.
 * Los íconos viven en public/ y deben pedirse como /icon_*.svg.
 */
export function fixPublicIconSrcPaths(html: string): string {
  return html.replace(
    /(\ssrc=)(["'])(icon_(?:coffee|tea|dessert)\.svg)\2/gi,
    (_, prefix: string, quote: string, file: string) =>
      `${prefix}${quote}/${file}${quote}`,
  );
}
