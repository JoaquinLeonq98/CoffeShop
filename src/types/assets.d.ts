declare module "*.svg" {
  const asset: { src: string };
  export default asset;
}

declare module "*.svg?url" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const asset: { src: string };
  export default asset;
}

declare module "*.jpg" {
  const asset: { src: string };
  export default asset;
}

declare module "*.jpeg" {
  const asset: { src: string };
  export default asset;
}

declare module "*.webp" {
  const asset: { src: string };
  export default asset;
}

declare module "*.avif" {
  const asset: { src: string };
  export default asset;
}

declare module "*.gif" {
  const asset: { src: string };
  export default asset;
}
