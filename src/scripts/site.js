// Interactions de la page d'accueil. Aucune dépendance. Respecte « réduire les animations ».
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* En-tête : état au défilement, aiguille de la boussole, indicateur latéral */
const header = $('[data-header]');
let ticking = false;
const onScroll = () => {
  const y = window.scrollY;
  header?.classList.toggle('is-scrolled', y > 40);
  document.body.classList.toggle('has-dots', y > window.innerHeight * 0.55);
  $$('[data-compass]').forEach((c) => c.style.setProperty('--needle', `${20 + y * 0.09}deg`));
  ticking = false;
};
window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

/* Menus déroulants (bureau) */
const dropdowns = $$('[data-dropdown]');
const closeAll = (except) => dropdowns.forEach((d) => { if (d !== except) { d.classList.remove('is-open'); $('button.top', d)?.setAttribute('aria-expanded', 'false'); } });
dropdowns.forEach((d) => {
  const btn = $('button.top', d);
  btn.addEventListener('click', () => {
    const open = !d.classList.contains('is-open');
    closeAll(d);
    d.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
  d.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeAll(); btn.focus(); } });
  d.addEventListener('focusout', (e) => { if (!d.contains(e.relatedTarget)) { d.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); } });
});
document.addEventListener('click', (e) => { if (!e.target.closest('[data-dropdown]')) closeAll(); });

/* Menu mobile */
const burger = $('[data-burger]');
const mobile = $('[data-mobile]');
const setMobile = (open) => {
  if (!burger || !mobile) return;
  burger.setAttribute('aria-expanded', String(open));
  mobile.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) header?.classList.add('is-scrolled');
  else onScroll();
};
burger?.addEventListener('click', () => setMobile(burger.getAttribute('aria-expanded') !== 'true'));
mobile?.addEventListener('click', (e) => { if (e.target.closest('a')) setMobile(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && burger?.getAttribute('aria-expanded') === 'true') { setMobile(false); burger.focus(); } });
matchMedia('(min-width: 1061px)').addEventListener('change', (e) => { if (e.matches) setMobile(false); });

/* Apparition au défilement */
const reveals = $$('.reveal');
if (reduce || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  reveals.forEach((el) => io.observe(el));
}

/* Compteurs */
const animateCount = (el) => {
  const target = Number(el.dataset.count);
  const t0 = performance.now();
  const dur = 1500;
  const step = (t) => {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
    if (p < 1) requestAnimationFrame(step);
  };
  el.textContent = '0';
  requestAnimationFrame(step);
};
if (!reduce && 'IntersectionObserver' in window) {
  const co = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { animateCount(en.target); co.unobserve(en.target); } });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach((el) => co.observe(el));
}

/* Vidéo officielle (chargée uniquement à l'ouverture) */
const dialog = $('#video-dialog');
const video = dialog && $('video', dialog);
$$('[data-video-open]').forEach((b) => b.addEventListener('click', () => {
  if (!dialog || !video) return;
  if (!video.getAttribute('src')) video.src = dialog.dataset.videoSrc;
  dialog.showModal();
  video.play().catch(() => {});
}));
$$('[data-video-close]').forEach((b) => b.addEventListener('click', () => dialog.close()));
dialog?.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
dialog?.addEventListener('close', () => video?.pause());

/* Indicateur latéral : section active */
const links = $$('[data-spy]');
if (links.length && 'IntersectionObserver' in window) {
  const so = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle('is-active', a.dataset.spy === en.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  links.forEach((a) => { const s = document.getElementById(a.dataset.spy); if (s) so.observe(s); });
}

/* Information « prototype » */
const proto = $('[data-proto]');
try { if (sessionStorage.getItem('proto-hidden') === '1' && proto) proto.hidden = true; } catch (e) { /* stockage indisponible */ }
if (proto) setTimeout(() => { proto.hidden = true; }, 12000);
$('[data-proto-close]')?.addEventListener('click', () => {
  if (proto) proto.hidden = true;
  try { sessionStorage.setItem('proto-hidden', '1'); } catch (e) { /* stockage indisponible */ }
});
