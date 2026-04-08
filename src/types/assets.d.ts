declare module "@/assets/*.svg" {
  const asset: { src: string };
  export default asset;
}

declare module "@/assets/*.{png,jpg,jpeg,webp,avif,gif}" {
  const asset: { src: string };
  export default asset;
}

