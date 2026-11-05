import './styles.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { initScene, reduce } from './scene3d.js';
import { profil } from './data/profil.js';
import { competences, parId as compById, COMMUNES, PARCOURS_A } from './data/competences.js';
import { projets, parId as projById } from './data/projets.js';
import { bilan, postBut, progression, NIVEAUX } from './data/bilan.js';

gsap.registerPlugin(ScrollTrigger);
const $ = (s) => document.querySelector(s);
const md = (s) => (s || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const MOBILE = matchMedia('(max-width:700px)');

/* ── Contenu ── */
$('#baseline').textContent = profil.baseline;
$('#situation').innerHTML = `${esc(profil.statut)} · ${esc(profil.parcoursLabel)} · ${esc(profil.etablissement)}`;

const compCard = (c) => `<button class="card" data-comp="${c.id}">
  <div class="num">${c.num}</div><h3>${esc(c.motCle)}</h3><small>${esc(c.titre)}</small></button>`;
$('#list-communes').innerHTML = COMMUNES.map((id) => compCard(compById[id])).join('');
$('#list-parcours').innerHTML = PARCOURS_A.map((id) => compCard(compById[id])).join('');

const projCard = (p) => `<button class="card" data-proj="${p.id}" data-comps="${p.competences.join(' ')}">
  <span class="meta-line">${esc(p.ref)} · ${esc(p.annee)}</span><h3>${esc(p.titre)}</h3><small>${esc(p.resume)}</small>
  <span class="kws">${p.competences.map((c) => esc(compById[c]?.motCle || c)).join(' · ')}</span></button>`;
$('#projets-grid').innerHTML = projets.map(projCard).join('');
$('#filters').innerHTML = ['tous', ...competences.map((c) => c.id)].map((id, i) =>
  `<button aria-pressed="${i === 0}" data-f="${id}">${id === 'tous' ? 'Tous' : esc(compById[id].motCle)}</button>`).join('');
$('#filters').addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('#filters button').forEach((x) => x.setAttribute('aria-pressed', x === b));
  document.querySelectorAll('#projets-grid .card').forEach((c) => {
    c.hidden = b.dataset.f !== 'tous' && !c.dataset.comps.split(' ').includes(b.dataset.f);
  });
  ScrollTrigger.refresh();
});

$('#bilan-chapo').textContent = bilan.chapo;
$('#bars').innerHTML = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'].map((id) =>
  `<div class="bar"><span>${esc(compById[id].motCle)}</span><i title="${NIVEAUX[progression[id]]}"><b data-w="${(progression[id] + 1) * 25}"></b></i></div>`).join('');
$('#bilan-corps').innerHTML = bilan.corps.map((t) => `<p>${md(esc(t))}</p>`).join('');
$('#post-chapo').textContent = postBut.chapo;
$('#voies').innerHTML = postBut.voies.map((v) => `<div class="card"><h3>${esc(v.libelle)}${v.actif ? ' <small class="tag">voie choisie</small>' : ''}</h3><small>${esc(v.detail)}</small></div>`).join('');
$('#adequation').innerHTML = postBut.adequation.map((a) => `<p><strong>${esc(a.competence || '')}</strong> — ${esc(a.texte || '')}</p>`).join('');
$('#liens').innerHTML = profil.liens.map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('') +
  `<a href="${esc(profil.cv)}" download>CV (PDF)</a>`;

/* ── Modales : naissent de l'élément cliqué, se ferment au geste ── */
const modal = $('#modal'), body = $('#modal-body');
let source = null;
const originOf = (el) => {
  const r = modal.getBoundingClientRect(), c = (el || modal).getBoundingClientRect();
  return `${Math.round(c.left + c.width / 2 - r.left)}px ${Math.round(c.top + c.height / 2 - r.top)}px`;
};
const closeModal = (velocity = 0) => {
  if (!modal.open || modal.closing) return;
  modal.closing = true;
  const drag = gsap.getProperty(modal, 'y') > 40;
  gsap.to(modal, drag
    ? { y: innerHeight, opacity: 0, duration: reduce ? 0 : Math.max(0.18, 0.35 - velocity / 6000), ease: 'power2.in', onComplete: finish }
    : { scale: 0.9, opacity: 0, transformOrigin: originOf(source), duration: reduce ? 0 : 0.22, ease: 'power2.in', onComplete: finish });
};
function finish() { modal.closing = false; modal.close(); gsap.set(modal, { clearProps: 'all' }); }
modal.querySelector('.close').onclick = () => closeModal();
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
modal.addEventListener('cancel', (e) => { e.preventDefault(); closeModal(); });
modal.addEventListener('close', () => { lenis.start(); three.setPaused(false); });
function open(html, from) {
  body.innerHTML = html; modal.scrollTop = 0;
  const first = !modal.open;
  if (first) { source = from || null; modal.showModal(); }
  lenis.stop(); three.setPaused(true);
  gsap.killTweensOf(modal); modal.closing = false;
  if (reduce) { gsap.set(modal, { opacity: 1, y: 0, scale: 1 }); return; }
  if (first) gsap.fromTo(modal, { scale: 0.88, opacity: 0, y: 0, transformOrigin: originOf(source) }, { scale: 1, opacity: 1, duration: 0.45, ease: 'expo.out' });
  else gsap.fromTo(body, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' });
}
/* tirer la fenêtre vers le bas (tactile) : suivi 1:1, élan projeté, retour en ressort */
(() => {
  let y0 = 0, last = 0, lastT = 0, v = 0, on = false;
  const project = (vel) => (vel / 1000) * 0.998 / (1 - 0.998) * 0.12;
  modal.addEventListener('touchstart', (e) => { on = false; if (modal.scrollTop <= 0) { y0 = e.touches[0].clientY; last = y0; lastT = performance.now(); v = 0; on = null; } }, { passive: true });
  modal.addEventListener('touchmove', (e) => {
    if (on === false) return;
    const y = e.touches[0].clientY, dy = y - y0;
    if (on === null) { if (Math.abs(dy) < 10) return; if (dy < 0 || modal.scrollTop > 0) { on = false; return; } on = true; gsap.killTweensOf(modal); }
    e.preventDefault();
    const t = performance.now(); v = (y - last) / Math.max(1, t - lastT) * 1000; last = y; lastT = t;
    const k = Math.max(0, dy - 10);
    gsap.set(modal, { y: k, opacity: 1 - Math.min(0.5, k / 700) });
  }, { passive: false });
  const end = () => {
    if (on !== true) return; on = false;
    const y = gsap.getProperty(modal, 'y');
    if (y + project(v) > 140 || v > 900) closeModal(Math.max(0, v));
    else gsap.to(modal, { y: 0, opacity: 1, duration: 0.5, ease: 'elastic.out(1, 0.9)' });
  };
  modal.addEventListener('touchend', end); modal.addEventListener('touchcancel', end);
})();
const STAR = [['S', 'Situation', 'situation'], ['T', 'Tâche', 'tache'], ['A', 'Action', 'action'], ['R', 'Résultat', 'resultat']];
function projectHTML(p) {
  const s = p.star || {};
  return `<header class="m-head"><span class="tag">${esc(p.ref)}</span>
      <h3>${esc(p.titre)}</h3><p class="serif">${esc(p.sousTitre || '')}</p>
      <ul class="m-meta"><li>${esc(p.periode)}</li><li>${esc(p.organisation || '')}</li><li>${esc(p.duree || '')}</li></ul></header>
    ${(p.media || []).slice(0, 1).map((m) => `<figure class="m-fig"><img src="${esc(m.src)}" alt="${esc(m.alt)}"></figure>`).join('')}
    <div class="m-star">${STAR.map(([l, k, f]) => `<section ><b>${l}</b><h4>${k}</h4><p>${md(esc(s[f] || ''))}</p></section>`).join('')}</div>
    <footer class="m-foot">
      <div>${p.competences.map((c) => `<button class="chip" data-comp="${c}">C${compById[c].num.slice(1)} · ${esc(compById[c].motCle)}</button>`).join('')}
        ${(p.motsCle || []).map((k) => `<span class="kw">${esc(k)}</span>`).join('')}</div>
      <div>${(p.liens || []).map((l) => `<a class="btn" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>
    </footer>`;
}
function compHTML(c) {
  const preuves = (c.projets || []).concat(projets.filter((p) => p.competences.includes(c.id)).map((p) => p.id));
  const uniq = [...new Set(preuves)].map((id) => projById[id]).filter(Boolean);
  return `<header class="m-head"><span class="tag">C${c.num.slice(1)} · ${c.parcours === 'commune' ? 'Compétence commune' : 'Parcours A'}</span>
      <div class="m-big"><span>${c.num}</span><h3>${esc(c.motCle)}</h3></div>
      <p class="serif">${esc(c.level3)}</p></header>
    <p class="m-def">${esc(c.definition)}</p>
    <h4 >Apprentissages critiques</h4>
    <ol class="m-ac">${c.acs.map((a) => `<li ><code>${a.code}</code><span>${esc(a.texte)}</span></li>`).join('')}</ol>
    <h4 >Preuves</h4>
    <div class="m-proofs">${uniq.map((p) => `<button class="chip" data-proj="${p.id}">${esc(p.ref)} — ${esc(p.titre)}</button>`).join('') || '—'}</div>`;
}
document.addEventListener('click', (e) => {
  const pc = e.target.closest('[data-proj]'), cc = e.target.closest('[data-comp]');
  if (pc) open(projectHTML(projById[pc.dataset.proj]), pc);
  else if (cc) open(compHTML(compById[cc.dataset.comp]), cc);
});

/* ── Navigation latérale ── */
const scenes = [...document.querySelectorAll('.scene')];
$('#dots').innerHTML = scenes.map((s) => `<a href="#${s.id}" aria-label="${esc(s.dataset.title)}" title="${esc(s.dataset.title)}"></a>`).join('');
const dots = [...document.querySelectorAll('#dots a')];

/* ── Scène 3D + scroll ── */
const three = initScene($('#scene'));
const lenis = new Lenis({ duration: 1.1, lerp: reduce ? 1 : 0.14 });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  e.preventDefault(); lenis.scrollTo(a.getAttribute('href'));
});

const STEPS = ['Arbre', 'Racines', 'Tronc', 'Branches', 'Feuillage', 'Cime', 'Ciel'];
const stepBar = document.createElement('nav');
stepBar.className = 'steps'; stepBar.setAttribute('aria-label', 'Étapes');
stepBar.innerHTML = scenes.map((el, i) => `<a href="#${el.id}">${STEPS[i]}</a>`).join('');
document.body.append(stepBar);
const stepLinks = [...stepBar.querySelectorAll('a')];
document.addEventListener('touchstart', () => {}, { passive: true });   // iOS n'applique :active que si un écouteur tactile existe

const counter = $('#cur');
let active = -1;
function setActive(i) {
  if (i === active) return;
  for (const list of [dots, stepLinks]) { list[active]?.classList.remove('on'); list[i].classList.add('on'); }
  const l = stepLinks[i];
  if (stepBar.scrollWidth > stepBar.clientWidth) stepBar.scrollTo({ left: l.offsetLeft - (stepBar.clientWidth - l.offsetWidth) / 2 });
  counter.textContent = i + 1;
  active = i;
}
scenes.forEach((s, i) => ScrollTrigger.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onToggle: (self) => self.isActive && setActive(i) }));

if (!reduce) {
  gsap.from('.hero > *', { y: 16, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', delay: 0.2 });
  gsap.utils.toArray('.scene:not(.hero)').forEach((sec) =>
    gsap.from(sec.querySelectorAll('.head, .card, .bar, .prose p, .links a'), { y: 16, opacity: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out',
      scrollTrigger: { trigger: sec, start: 'top 75%' } }));
}
gsap.utils.toArray('.bar b').forEach((b) =>
  gsap.to(b, { width: b.dataset.w + '%', duration: reduce ? 0 : 1.2, ease: 'power3.out', scrollTrigger: { trigger: b, start: 'top 90%' } }));


/* ── Station courante : i quand le centre de la section i est au centre de l'écran ── */
let centres = [];
const measure = () => { centres = scenes.map((el) => el.offsetTop + el.offsetHeight / 2); };
ScrollTrigger.addEventListener('refresh', measure);
measure();
function currentStation() {
  const mid = scrollY + innerHeight / 2, n = centres.length;
  if (mid <= centres[0]) return 0;
  for (let i = 0; i < n - 1; i++) if (mid < centres[i + 1]) return i + (mid - centres[i]) / (centres[i + 1] - centres[i]);
  return n - 1;
}

/* ── Navigation dans les branches : chaque branche porte ses "+" ── */
const L = three.limbAnchors || [];
const lien = (k) => profil.liens.find((l) => l.label.toLowerCase().includes(k));
const HOTS = [
  ...[['Compétences', '#communes'], ['Projets', '#projets'], ['Contact', '#contact']].map(([label, go], i) => ({ st: 0, a: three.heroAnchors?.[i], label, go })),
  ...['c3', 'c4', 'c5'].map((id, i) => ({ st: 1, a: L[0]?.[i], label: `C${compById[id].num.slice(1)} · ${compById[id].motCle}`, comp: id })),
  ...['c1', 'c2', 'c6'].map((id, i) => ({ st: 2, a: L[1]?.[i], label: `C${compById[id].num.slice(1)} · ${compById[id].motCle}`, comp: id })),
  ...projets.slice(0, 3).map((p, i) => ({ st: 3, a: L[2]?.[i], label: p.titre, proj: p.id })),
  { st: 4, a: L[3]?.[1], label: 'Après le BUT', go: '#apres' },
  { st: 5, a: L[4]?.[1], label: 'Me contacter', go: '#contact' },
  ...[lien('github'), lien('linkedin'), { label: 'CV', href: profil.cv }].filter(Boolean).map((l, i) => ({ st: 6, a: L[5]?.[i], label: l.label, href: l.href })),
].filter((h) => h.a !== undefined);
const hotLayer = document.createElement('div');
hotLayer.className = 'hots';
hotLayer.setAttribute('aria-label', 'Navigation dans l’arbre');
document.body.append(hotLayer);
HOTS.forEach((h) => {
  const b = document.createElement('button');
  b.className = h.st === 0 ? 'hot hot-hero' : 'hot'; b.type = 'button';
  b.innerHTML = `<span>${esc(h.label)}</span>`;
  b.setAttribute('aria-label', h.label);
  if (h.comp) b.dataset.comp = h.comp;
  if (h.proj) b.dataset.proj = h.proj;
  b.addEventListener('click', () => {
    if (h.go) lenis.scrollTo(h.go);
    if (h.href) window.open(h.href, '_blank', 'noopener');
  });
  hotLayer.append(b);
  h.el = b;
});

const HOT = { WINDOW: 0.32, MARGIN: 24, FLIP_LEFT: 220, FLIP_RIGHT: 200 };
const setOn = (h, on) => { if (h.on !== on) { h.on = on; h.el.classList.toggle('on', on); } };
gsap.ticker.add(() => {
  const st = currentStation(), w = innerWidth, hgt = innerHeight;
  three.setStation(st);
  for (const h of HOTS) {
    if (Math.abs(st - h.st) >= HOT.WINDOW || (h.st > 0 && MOBILE.matches)) { setOn(h, false); continue; }
    const p = three.project(h.a);
    const ok = p && p.x > HOT.MARGIN && p.x < w - HOT.MARGIN && p.y > HOT.MARGIN && p.y < hgt - HOT.MARGIN;
    setOn(h, !!ok);
    if (!ok) continue;
    const tf = `translate(${p.x}px, ${p.y}px)`;
    if (h.tf !== tf) h.el.style.transform = h.tf = tf;
    const flip = p.x < w / 2 ? p.x > HOT.FLIP_LEFT : p.x > w - HOT.FLIP_RIGHT;
    if (h.flip !== flip) { h.flip = flip; h.el.classList.toggle('flip', flip); }
  }
});

/* ── Formulaire de contact : envoi via Formspree, sans quitter la page ── */
const form = $('#contact-form'), status = $('#cf-status');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.className = 'form-status';
  const bad = [...form.querySelectorAll('[required]')].filter((f) => !f.checkValidity());
  form.querySelectorAll('.field').forEach((f) => f.classList.remove('invalid'));
  if (bad.length) {
    bad.forEach((f) => f.closest('.field').classList.add('invalid'));
    status.textContent = bad.some((f) => f.type === 'email' && f.value) ? 'Cette adresse email ne semble pas valide' : 'Merci de remplir les trois champs';
    status.classList.add('err');
    bad[0].focus();
    return;
  }
  const btn = form.querySelector('.send');
  btn.disabled = true; btn.textContent = 'Envoi…';
  try {
    const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error();
    form.reset();
    status.textContent = 'Message envoyé, merci. Je vous réponds rapidement';
    status.classList.add('ok');
  } catch {
    status.innerHTML = `L’envoi a échoué. Vous pouvez m’écrire directement à <a href="mailto:${esc(profil.email)}">${esc(profil.email)}</a>`;
    status.classList.add('err');
  } finally {
    btn.disabled = false; btn.textContent = 'Envoyer le message';
  }
});
form.querySelectorAll('input, textarea').forEach((f) => f.addEventListener('input', () => f.closest('.field')?.classList.remove('invalid')));
