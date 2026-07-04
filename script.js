/* ============================================================
   ben01 — Néons cheap
   script.js — comportements légers
   Aucune dépendance externe.
   ============================================================ */

/* ---- Fade-in au scroll (Intersection Observer) ---- */
(function () {
  var targets = document.querySelectorAll('.fade-in');

  // Fallback immédiat si l'API n'est pas disponible
  if (!('IntersectionObserver' in window)) {
    for (var i = 0; i < targets.length; i++) {
      targets[i].classList.add('visible');
    }
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();

/* ---- En-tête: classe .scrolled quand on défile ---- */
(function () {
  var header = document.querySelector('.header');
  if (!header) return;

  function updateHeader() {
    if (window.scrollY > 48) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
})();

/* ---- Navigation: ferme les ancres proprement (compense la nav fixe) ---- */
(function () {
  var navHeight = 60; // hauteur approximative de la nav

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });
})();
