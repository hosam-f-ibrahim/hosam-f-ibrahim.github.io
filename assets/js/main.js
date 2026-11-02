/**
* Template Name: EasyFolio
* Template URL: https://bootstrapmade.com/easyfolio-bootstrap-portfolio-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
* Adapted: content is static HTML; motion respects reduced-motion settings.
*/
(function () {
  "use strict";
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const body = document.body;
  const header = document.querySelector('#header');

  /* Header shadow on scroll (template) */
  function toggleScrolled() {
    window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled, { passive: true });
  window.addEventListener('load', toggleScrolled);

  /* Mobile nav: a real button with aria-expanded; Escape closes */
  const toggle = document.querySelector('.mobile-nav-toggle');
  function setNav(open) {
    body.classList.toggle('mobile-nav-active', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Menu');
    const i = toggle.querySelector('i');
    i.classList.toggle('bi-list', !open);
    i.classList.toggle('bi-x', open);
    // Keep keyboard focus inside the open menu: content behind the overlay is inert (WCAG 2.4.11)
    ['main', '#footer', '.header-contact', '.logo', '#scroll-top', '.skip-link'].forEach((s) => { const e = document.querySelector(s); if (e) e.inert = open; });
    if (open) { const first = document.querySelector('#navmenu a'); first && first.focus(); }
  }
  if (toggle) {
    toggle.addEventListener('click', () => setNav(!body.classList.contains('mobile-nav-active')));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && body.classList.contains('mobile-nav-active')) { setNav(false); toggle.focus(); }
    });
  }
  document.querySelectorAll('#navmenu a').forEach((a) => a.addEventListener('click', () => {
    if (body.classList.contains('mobile-nav-active')) setNav(false);
  }));

  /* Scroll-top button (template) */
  const scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() { if (scrollTop) window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active'); }
  if (scrollTop) scrollTop.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); });
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop, { passive: true });

  /* Reveal on scroll (template's AOS), off for reduced motion */
  window.addEventListener('load', () => {
    if (window.AOS) AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, mirror: false, disable: reduce });
    // If the reveal script didn't load, drop its stylesheet so no content stays hidden
    else document.querySelectorAll('link[href*="aos.css"]').forEach((l) => l.remove());
  });

  /* Hero parallax: blobs and portrait drift with the scroll (user-driven) */
  const hero = document.querySelector('.hero .hero-image');
  if (hero && !reduce) {
    let ticking = false;
    const update = () => {
      const r = hero.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height) + 0.35));
      hero.style.setProperty('--scroll', p.toFixed(3));
      ticking = false;
    };
    document.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  /* Operating cycle: replays automatically while it is on screen (owner, 2 Nov 2026); static for reduced motion */
  const track = document.getElementById('cycleTrack');
  if (track) {
    const stages = [...track.querySelectorAll('.stage')];
    const bar = track.querySelector('.cycle-progress');
    const core = document.getElementById('cycleCore');
    const vertical = () => window.matchMedia('(max-width: 991px)').matches;
    let timers = [], inView = false;
    const setBar = (f) => {
      if (vertical()) { bar.style.width = ''; bar.style.height = `calc((100% - 56px) * ${f})`; }
      else { bar.style.height = ''; bar.style.width = `calc(84% * ${f})`; }
    };
    const finalState = () => { stages.forEach((s) => s.classList.add('lit')); core.classList.add('lit'); setBar(1); };
    // Calm pace (owner, 2 Nov 2026): 1.2 s per stage, the full cycle holds for 4 s, then a 1.2 s pause before it starts again
    const START = 1200, STEP = 1200, HOLD = 4000;
    const play = () => {
      timers.forEach(clearTimeout); timers = [];
      stages.forEach((s) => s.classList.remove('lit')); core.classList.remove('lit'); setBar(0);
      stages.forEach((s, i) => timers.push(setTimeout(() => { s.classList.add('lit'); setBar(i / (stages.length - 1)); }, START + i * STEP)));
      timers.push(setTimeout(() => core.classList.add('lit'), START + stages.length * STEP));
      timers.push(setTimeout(() => { if (inView && !document.hidden) play(); }, START + stages.length * STEP + HOLD));
    };
    if (reduce || !('IntersectionObserver' in window)) { finalState(); }
    else {
      const io = new IntersectionObserver((es) => {
        const was = inView; inView = es[0].isIntersecting;
        if (inView && !was) play();
        if (!inView) { timers.forEach(clearTimeout); timers = []; finalState(); }
      }, { threshold: 0.45 });
      io.observe(track);
      document.addEventListener('visibilitychange', () => { if (!document.hidden && inView) play(); });
    }
    window.addEventListener('resize', () => { if (stages[stages.length - 1].classList.contains('lit')) setBar(1); });
  }

  /* Recommendations carousel: plays continuously (owner, 2 Nov 2026); holds while hovered or focused so a slide can be read; still for reduced motion */
  window.addEventListener('load', () => {
    const el = document.getElementById('recSlider');
    if (!el || !window.Swiper) return;
    const sw = new Swiper(el, {
      slidesPerView: 1, spaceBetween: 24, loop: true, speed: reduce ? 0 : 900, grabCursor: true,
      autoHeight: false, watchSlidesProgress: true,
      breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } },
      navigation: { nextEl: '.rec-next', prevEl: '.rec-prev' },
      keyboard: { enabled: true, onlyInViewport: true },
      a11y: { enabled: true, prevSlideMessage: 'Previous recommendation', nextSlideMessage: 'Next recommendation' },
      autoplay: reduce ? false : { delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }
    });
    if (reduce) return;
    el.addEventListener('focusin', () => sw.autoplay.stop());
    el.addEventListener('focusout', () => sw.autoplay.start());
  });

  /* Scrollspy (template) */
  const links = document.querySelectorAll('.navmenu a');
  function spy() {
    links.forEach((a) => {
      if (!a.hash || a.pathname !== location.pathname) return;
      const s = document.querySelector(a.hash); if (!s) return;
      const y = window.scrollY + 200;
      if (y >= s.offsetTop && y <= s.offsetTop + s.offsetHeight) { links.forEach((l) => l.classList.remove('active')); a.classList.add('active'); a.setAttribute('aria-current', 'true'); }
      else { a.classList.remove('active'); a.removeAttribute('aria-current'); }
    });
  }
  window.addEventListener('load', spy);
  document.addEventListener('scroll', spy, { passive: true });
})();
