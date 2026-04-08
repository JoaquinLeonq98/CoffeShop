function initScrollReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      el.classList.add("scroll-reveal--visible");
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-reveal--visible");
          observer.unobserve(entry.target);
        }
      }
    },
    {
      // Margen inferior positivo: el elemento entra antes en “vista” y evita quedarse invisible.
      rootMargin: "0px 0px 18% 0px",
      threshold: 0,
    },
  );

  document
    .querySelectorAll(".scroll-reveal:not(.scroll-reveal--visible)")
    .forEach((el) => io.observe(el));
}

initScrollReveal();
document.addEventListener("astro:page-load", initScrollReveal);
document.addEventListener("astro:after-swap", initScrollReveal);
