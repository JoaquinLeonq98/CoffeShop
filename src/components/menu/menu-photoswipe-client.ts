import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";

const coffeeLightbox = new PhotoSwipeLightbox({
  gallery: "#coffee-menu",
  children: "a",
  pswpModule: PhotoSwipe,
});

const foodLightbox = new PhotoSwipeLightbox({
  gallery: "#food-menu",
  children: "a",
  pswpModule: PhotoSwipe,
});

coffeeLightbox.init();
foodLightbox.init();

document.addEventListener("astro:after-swap", () => {
  coffeeLightbox.init();
  foodLightbox.init();
});
