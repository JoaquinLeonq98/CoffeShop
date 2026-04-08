import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#gallery",
  children: "a",
  pswpModule: PhotoSwipe,
});

lightbox.init();

document.addEventListener("astro:after-swap", () => {
  lightbox.init();
});
