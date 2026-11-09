(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    return;
  }

  const projectCards = document.querySelectorAll(".project-item");
  const heroLogo = document.querySelector(".hero-logo");

  projectCards.forEach((card, index) => {
    card.classList.add("will-reveal");
    card.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
  });

  document.documentElement.classList.add("motion-ready");
  heroLogo?.classList.add("animate-in");

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
  });

  projectCards.forEach(card => observer.observe(card));
})();
