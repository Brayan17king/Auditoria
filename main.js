/* ============================================================
   AuditaFácil — main.js
   Funcionalidades:
   - Scroll reveal con IntersectionObserver
   - Navbar activa al hacer scroll
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* -------------------------
     SCROLL REVEAL
  ------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // Stagger dentro del mismo padre para efecto de ola
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
      const idx = siblings.indexOf(entry.target);
      const delay = (idx % 4) * 90; // máx ~270ms de desfase

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

  const navObserver = new IntersectionObserver(([entry]) => {
    nav.classList.toggle('scrolled', !entry.isIntersecting);
  }, { threshold: 0 });

  // Observa el hero para saber si ya pasamos
  const hero = document.querySelector('.hero');
  if (hero) navObserver.observe(hero);

});
