/**
* Template Name: EasyFolio
* Template URL: https://bootstrapmade.com/easyfolio-bootstrap-portfolio-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
* Adapted: content is static HTML; accessible motion (pause control, reduced motion).
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

  /* Operating cycle: plays once (under 5 s) when it comes into view; Replay button */
  const track = document.getElementById('cycleTrack');
  if (track) {
    const stages = [...track.querySelectorAll('.stage')];
    const bar = track.querySelector('.cycle-progress');
    const core = document.getElementById('cycleCore');
    const replay = document.getElementById('cycleReplay');
    const vertical = () => window.matchMedia('(max-width: 991px)').matches;
    let timers = [];
    const setBar = (f) => {
      if (vertical()) { bar.style.width = ''; bar.style.height = `calc((100% - 56px) * ${f})`; }
      else { bar.style.height = ''; bar.style.width = `calc(84% * ${f})`; }
    };
    const finalState = () => { stages.forEach((s) => s.classList.add('lit')); core.classList.add('lit'); setBar(1); };
    const play = () => {
      timers.forEach(clearTimeout); timers = [];
      stages.forEach((s) => s.classList.remove('lit')); core.classList.remove('lit'); setBar(0);
      stages.forEach((s, i) => timers.push(setTimeout(() => { s.classList.add('lit'); setBar(i / (stages.length - 1)); }, 300 + i * 620)));
      timers.push(setTimeout(() => core.classList.add('lit'), 300 + stages.length * 620));
    };
    if (reduce || !('IntersectionObserver' in window)) { finalState(); }
    else {
      replay.hidden = false;
      replay.addEventListener('click', play);
      const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { play(); io.disconnect(); } }, { threshold: 0.45 });
      io.observe(track);
    }
    window.addEventListener('resize', () => { if (stages[stages.length - 1].classList.contains('lit')) setBar(1); });
  }

  /* Recommendations carousel: moves slowly, pauses on hover/focus, has a visible Pause button */
  window.addEventListener('load', () => {
    const el = document.getElementById('recSlider');
    if (!el || !window.Swiper) return;
    const pauseBtn = document.getElementById('recPause');
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
    let userPaused = false;
    pauseBtn.hidden = false;
    const label = pauseBtn.querySelector('span'), icon = pauseBtn.querySelector('i');
    const render = () => {
      label.textContent = userPaused ? 'Play' : 'Pause';
      icon.className = userPaused ? 'bi bi-play-fill' : 'bi bi-pause-fill';
      pauseBtn.setAttribute('aria-label', userPaused ? 'Play the recommendations carousel' : 'Pause the recommendations carousel');
    };
    pauseBtn.addEventListener('click', () => { userPaused = !userPaused; userPaused ? sw.autoplay.stop() : sw.autoplay.start(); render(); });
    el.addEventListener('focusin', () => sw.autoplay.stop());
    el.addEventListener('focusout', () => { if (!userPaused) sw.autoplay.start(); });
    render();
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
