/**
 * Génération du HTML du contenu, partagée entre le navigateur et le build.
 * Aucune dépendance au DOM : au build, un plugin Vite appelle ces fonctions pour
 * écrire le contenu directement dans la page (lisible sans JavaScript) ; dans le
 * navigateur, main.js les réutilise pour les mêmes sections.
 */
import { profil } from './data/profil.js';
import { competences, parId as compById, COMMUNES, PARCOURS_A } from './data/competences.js';
import { projets, parId as projById } from './data/projets.js';
import { bilan, postBut, progression, NIVEAUX } from './data/bilan.js';

export const md = (s) => (s || '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
export const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const SR_TAB = ' <span class="sr">(s’ouvre dans un nouvel onglet)</span>';
const STAR = [['S', 'Situation', 'situation'], ['T', 'Tâche', 'tache'], ['A', 'Action', 'action'], ['R', 'Résultat', 'resultat']];
const num = (c) => `C${compById[c].num.slice(1)}`;

/* sans JavaScript, une carte est un lien vers la fiche détaillée en bas de page */
const card = (nojs, attrs, anchor, inner) => (nojs ? `<a class="card" href="#${anchor}">${inner}</a>` : `<button class="card" ${attrs}>${inner}</button>`);
const chip = (nojs, kind, id, label) => (nojs ? `<a class="chip" href="#d-${id}">${label}</a>` : `<button class="chip" data-${kind}="${id}">${label}</button>`);

export const compCard = (c, nojs) => card(nojs, `data-comp="${c.id}"`, `d-${c.id}`,
  `<div class="num">${c.num}</div><h3>${esc(c.motCle)}</h3><small>${esc(c.titre)}</small>`);

export const projCard = (p, nojs) => card(nojs, `data-proj="${p.id}" data-comps="${p.competences.join(' ')}"`, `d-${p.id}`,
  `<span class="meta-line">${esc(p.ref)} · ${esc(p.annee)}</span><h3>${esc(p.titre)}</h3><small>${esc(p.resume)}</small>
  <span class="kws">${p.competences.map((c) => esc(compById[c]?.motCle || c)).join(' · ')}</span>`);

export const projectHTML = (p, { nojs = false } = {}) => {
  const s = p.star || {};
  return `<header class="m-head"><span class="tag">${esc(p.ref)}</span>
      <h3${nojs ? '' : ' id="m-title"'}>${esc(p.titre)}</h3><p class="serif">${esc(p.sousTitre || '')}</p>
      <ul class="m-meta"><li>${esc(p.periode)}</li><li>${esc(p.organisation || '')}</li><li>${esc(p.duree || '')}</li></ul></header>
    ${(p.media || []).slice(0, 1).map((m) => `<figure class="m-fig"><img src="${esc(m.src)}" alt="${esc(m.alt)}" loading="lazy"></figure>`).join('')}
    <div class="m-star">${STAR.map(([l, k, f]) => `<section><b>${l}</b><h4>${k}</h4><p>${md(esc(s[f] || ''))}</p></section>`).join('')}</div>
    <footer class="m-foot">
      <div>${p.competences.map((c) => chip(nojs, 'comp', c, `${num(c)} · ${esc(compById[c].motCle)}`)).join('')}
        ${(p.motsCle || []).map((k) => `<span class="kw">${esc(k)}</span>`).join('')}</div>
      <div>${(p.liens || []).map((l) => `<a class="btn" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)} <span aria-hidden="true">↗</span>${SR_TAB}</a>`).join('')}</div>
    </footer>`;
};

export const compHTML = (c, { nojs = false } = {}) => {
  const preuves = (c.projets || []).concat(projets.filter((p) => p.competences.includes(c.id)).map((p) => p.id));
  const uniq = [...new Set(preuves)].map((id) => projById[id]).filter(Boolean);
  return `<header class="m-head"><span class="tag">${num(c.id)} · ${c.parcours === 'commune' ? 'Compétence commune' : 'Parcours A'}</span>
      <div class="m-big"><span>${c.num}</span><h3${nojs ? '' : ' id="m-title"'}>${esc(c.motCle)}</h3></div>
      <p class="serif">${esc(c.level3)}</p></header>
    <p class="m-def">${esc(c.definition)}</p>
    <h4>Apprentissages critiques</h4>
    <ol class="m-ac">${c.acs.map((a) => `<li><code>${a.code}</code><span>${esc(a.texte)}</span></li>`).join('')}</ol>
    <h4>Preuves</h4>
    <div class="m-proofs">${uniq.map((p) => chip(nojs, 'proj', p.id, `${esc(p.ref)} : ${esc(p.titre)}`)).join('') || 'Aucune'}</div>`;
};

/** Contenu de chaque zone de la page, par identifiant. */
export const fill = (nojs = false) => ({
  baseline: esc(profil.baseline),
  situation: `${esc(profil.statut)} · ${esc(profil.parcoursLabel)} · ${esc(profil.etablissement)}`,
  'list-communes': COMMUNES.map((id) => compCard(compById[id], nojs)).join(''),
  'list-parcours': PARCOURS_A.map((id) => compCard(compById[id], nojs)).join(''),
  'projets-grid': projets.map((p) => projCard(p, nojs)).join(''),
  'bilan-chapo': esc(bilan.chapo),
  bars: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6'].map((id) => {
    const n = progression[id], niveau = NIVEAUX[n];
    return `<div class="bar"><span>${esc(compById[id].motCle)}</span>
    <i role="meter" aria-label="Niveau d’acquisition, ${esc(compById[id].motCle)}" aria-valuemin="0" aria-valuemax="${NIVEAUX.length - 1}" aria-valuenow="${n}" aria-valuetext="${esc(niveau)}"><b data-w="${(n + 1) * 25}"></b></i>
    <small>${esc(niveau)}</small></div>`;
  }).join(''),
  'bilan-corps': bilan.corps.map((t) => `<p>${md(esc(t))}</p>`).join(''),
  'post-chapo': esc(postBut.chapo),
  voies: postBut.voies.map((v) => `<div class="card"><h3>${esc(v.libelle)}${v.actif ? ' <small class="tag">voie choisie</small>' : ''}</h3><small>${esc(v.detail)}</small></div>`).join(''),
  adequation: postBut.adequation.map((a) => `<p><strong>${esc(a.competence || '')}</strong> : ${esc(a.texte || '')}</p>`).join(''),
  liens: profil.liens.map((l) => {
    const ext = !l.href.startsWith('mailto:');
    return `<a href="${esc(l.href)}" ${ext ? 'target="_blank" ' : ''}rel="noopener">${esc(l.label)}${ext ? SR_TAB : ''}</a>`;
  }).join('') + `<a href="${esc(profil.cv)}" download>CV (PDF, téléchargement)</a>`,
});

/** Filtres : seulement utiles avec JavaScript. */
export const filtersHTML = () => ['tous', ...competences.map((c) => c.id)].map((id, i) =>
  `<button aria-pressed="${i === 0}" data-f="${id}">${id === 'tous' ? 'Tous' : esc(compById[id].motCle)}</button>`).join('');

/** Fiches complètes pour la version sans JavaScript. */
export const noScriptDetails = () => `<section class="scene nojs" aria-labelledby="t-nojs">
    <h2 id="t-nojs">Fiches détaillées</h2>
    ${competences.map((c) => `<article id="d-${c.id}" class="nojs-fiche">${compHTML(c, { nojs: true })}</article>`).join('')}
    ${projets.map((p) => `<article id="d-${p.id}" class="nojs-fiche">${projectHTML(p, { nojs: true })}</article>`).join('')}
  </section>`;
