(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Scroll reveal -------------------------------------------------
  const revealTargets = document.querySelectorAll(
    ".service-photo-card, .why__list li, .testimonial-card, .coverage__list li, .faq__item, .section__head"
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

  // --- Hero ambient droplets (canvas, capped, GPU-cheap) --------------
  const canvas = document.getElementById("heroCanvas");
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext("2d");
    const hero = canvas.closest(".hero");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const count = window.innerWidth < 760 ? 12 : 22;
    let w = 0, h = 0, drops = [], running = true, raf = null;

    function makeDrop() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1 + Math.random() * 2,
        speed: 10 + Math.random() * 16,
        drift: (Math.random() - 0.5) * 5,
        alpha: 0.1 + Math.random() * 0.18,
      };
    }

    function resize() {
      w = hero.clientWidth;
      h = hero.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drops = Array.from({ length: count }, makeDrop);
    }

    let last = performance.now();
    function tick(now) {
      if (!running) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx.clearRect(0, 0, w, h);
      drops.forEach((d) => {
        d.y += d.speed * dt;
        d.x += d.drift * dt;
        if (d.y > h + 6) { d.y = -6; d.x = Math.random() * w; }
        ctx.beginPath();
        ctx.fillStyle = `rgba(249, 115, 22, ${d.alpha})`;
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", () => {
      running = !document.hidden;
      if (running) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      } else if (raf) {
        cancelAnimationFrame(raf);
      }
    });
    raf = requestAnimationFrame(tick);
  }

  // --- Hero visual tilt (desktop pointer only) ------------------------
  // Tilts the whole container (not the individually-animated layers) so
  // the pointer-driven rotate never fights each layer's own CSS float
  // keyframes for the `transform` property.
  const visual = document.querySelector(".hero__visual");
  if (
    visual &&
    !prefersReducedMotion &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  ) {
    let raf = null;
    visual.addEventListener("pointermove", (e) => {
      const rect = visual.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        visual.style.transform = `rotateX(${py * -8}deg) rotateY(${px * 10}deg)`;
        raf = null;
      });
    });
    visual.addEventListener("pointerleave", () => {
      visual.style.transform = "";
    });
  }
})();
