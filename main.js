/* ============================================================
   AuditaFácil — main.js
   Funcionalidades:
   - Scroll reveal con IntersectionObserver
   - Navbar shadow al hacer scroll
   (La animación del hero se maneja 100% en CSS)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------
     SCROLL REVEAL
  ------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      const delay = (idx % 4) * 90;

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      revealObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => revealObserver.observe(el));

  /* -------------------------
     NAVBAR SCROLL SHADOW
  ------------------------- */
  const nav = document.querySelector('nav');
  const hero = document.querySelector('.hero');

  if (nav && hero) {
    const navObserver = new IntersectionObserver(([entry]) => {
      nav.classList.toggle('scrolled', !entry.isIntersecting);
    }, { threshold: 0 });
    navObserver.observe(hero);
  }

});
