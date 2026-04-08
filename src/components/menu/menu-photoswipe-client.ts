import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const coffeeLightbox = new PhotoSwipeLightbox({
  gallery: "#coffee-menu",
  children: "a",
  pswpModule: () => import("photoswipe"),
});

const foodLightbox = new PhotoSwipeLightbox({
  gallery: "#food-menu",
  children: "a",
  pswpModule: () => import("photoswipe"),
});

coffeeLightbox.init();
foodLightbox.init();

document.addEventListener("astro:after-swap", () => {
  coffeeLightbox.init();
  foodLightbox.init();
});
