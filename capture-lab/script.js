const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("[data-nav]").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPage) {
    link.classList.add("is-active");
  }
});

document.querySelectorAll("[data-fill]").forEach((bar, index) => {
  const value = Number(bar.getAttribute("data-fill")) || 0;
  requestAnimationFrame(() => {
    const delay = Math.min(index * 60, 360);
    window.setTimeout(() => {
      bar.style.transform = `scaleX(${Math.max(0, Math.min(value, 100)) / 100})`;
    }, delay);
  });
});

const parallaxNodes = [...document.querySelectorAll("[data-parallax]")];
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (parallaxNodes.length > 0 && !prefersReducedMotion) {
  window.addEventListener(
    "pointermove",
    (event) => {
      const px = event.clientX / window.innerWidth - 0.5;
      const py = event.clientY / window.innerHeight - 0.5;

      parallaxNodes.forEach((node) => {
        const depth = Number(node.getAttribute("data-parallax")) || 1;
        node.style.transform = `translate3d(${px * depth * 18}px, ${py * depth * 18}px, 0)`;
      });
    },
    { passive: true }
  );
}

document.querySelectorAll(".current-year").forEach((node) => {
  node.setAttribute("data-year", String(new Date().getFullYear()));
});
