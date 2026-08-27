(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Scroll reveal -------------------------------------------------
  const revealTargets = document.querySelectorAll(
    ".service-photo-card, .why__list li, .testimonial-card, .coverage__list li, .section__head"
  );

  revealTargets.forEach((el, i) => {
    el.setAttribute("data-reveal", "");
    el.style.setProperty("--reveal-delay", `${Math.min(i % 6, 6) * 60}ms`);
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  }
})();
