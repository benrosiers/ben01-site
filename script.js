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

/* ---- Suivi des clics de conversion (pré-save, plateformes musicales) ----
   Un seul gestionnaire de clic centralise l'envoi des événements vers les pixels
   réellement présents sur la page (Meta fbq, GA4 gtag, TikTok ttq). Chaque appel est
   protégé par typeof : rien ne casse si un pixel n'est pas (encore) chargé.

   - [data-pixel-event] : événement historique simple (ex. PreSave),
     envoyé tel quel à chaque pixel pour compatibilité avec le suivi existant.
   - [data-music-platform] (+ [data-tracking-location]) : clic vers une plateforme
     d'écoute musicale réelle. Envoie l'événement MusicPlatformClick / music_platform_click
     / ClickButton avec la plateforme, l'URL de destination et l'emplacement sur la page.

   Un lien peut porter les deux attributs à la fois : les deux événements
   sont alors envoyés. */
(function () {
  function sendLegacyPixelEvent(eventName) {
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName);
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName);
    }
    if (typeof window.ttq !== 'undefined' && typeof window.ttq.track === 'function') {
      window.ttq.track(eventName);
    }
  }

  function sendMusicPlatformClick(platform, destinationUrl, location) {
    if (typeof window.fbq === 'function') {
      window.fbq('trackCustom', 'MusicPlatformClick', {
        platform: platform,
        destination_url: destinationUrl,
        location: location
      });
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'music_platform_click', {
        platform: platform,
        destination_url: destinationUrl,
        location: location
      });
    }
    if (typeof window.ttq !== 'undefined' && typeof window.ttq.track === 'function') {
      window.ttq.track('ClickButton', {
        content_name: platform,
        content_type: 'music_platform',
        destination_url: destinationUrl
      });
    }
  }

  document.querySelectorAll('[data-pixel-event], [data-music-platform]').forEach(function (link) {
    link.addEventListener('click', function () {
      var platform = link.getAttribute('data-music-platform');
      if (platform) {
        var location = link.getAttribute('data-tracking-location') || '';
        sendMusicPlatformClick(platform, link.href, location);
      }

      var legacyEvent = link.getAttribute('data-pixel-event');
      if (legacyEvent) {
        sendLegacyPixelEvent(legacyEvent);
      }
    });
  });
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
