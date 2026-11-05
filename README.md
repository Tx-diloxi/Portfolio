# Portfolio BUT Informatique — Marceau LE SECH

Portfolio de 3ᵉ année du BUT Informatique (IUT de Lannion, parcours A « Réalisation d'applications »), construit pour l'oral de janvier 2027.

Le site est un arbre gravé à l'encre verte, posé seul sur une colline. On le remonte en scrollant : **racines → tronc → branches → feuillage → cime → vue du ciel**. Chaque étape correspond à une partie de l'oral.

| Étape | Contenu | Barème du portfolio |
|---|---|---|
| Vue d'ensemble | Présentation et situation actuelle | situation |
| Les racines | Compétences communes C3 Administrer, C4 Gérer, C5 Conduire | communes |
| Le tronc | Compétences du parcours A : C1 Réaliser, C2 Optimiser, C6 Collaborer | parcours |
| Les branches | Projets et traces, fiches au format STAR (Situation, Tâche, Action, Résultat) | preuves |
| Le feuillage | Bilan personnel du BUT | bilan |
| La cime | Après le BUT, adéquation avec la formation | projet post-BUT |
| Vue du ciel | Contact : formulaire, GitHub, LinkedIn, CV | — |

## Fonctionnalités

- Scène 3D (Three.js) : arbre généré par code, courbes de niveau et veinage du bois calculés dans les shaders, feuillage instancié.
- Caméra pilotée par le scroll avec un ressort qui garde l'élan.
- Points « + » accrochés aux branches, qui servent de raccourcis (compétences, projets, liens).
- Fiches de compétences et de projets en fenêtres modales, avec filtre des projets par compétence.
- Formulaire de contact envoyé par [Formspree](https://formspree.io), sans quitter la page.
- Qualité adaptative : le feuillage s'éclaircit tout seul sur les machines lentes.
- Accessibilité : voir [ACCESSIBILITE.md](ACCESSIBILITE.md) pour l'analyse détaillée.

## Lancer le projet

```bash
npm install
npm run dev       # développement, http://localhost:5173
npm run build     # production, dans dist/
npm run preview   # tester le build
```

## Où modifier le contenu

Tout le texte vient de `src/data/` :

| Fichier | Contenu |
|---|---|
| `profil.js` | identité, situation actuelle, liens, CV |
| `competences.js` | les six compétences, apprentissages critiques, auto-évaluation |
| `projets.js` | fiches projets STAR, médias, liens |
| `bilan.js` | bilan, niveaux d'acquisition, projet post-BUT |

Les passages marqués `⟨À REMPLIR⟩` sont des gabarits à remplacer avant l'oral.
Les images vont dans `public/files/media/` (format `.webp` conseillé).

## Structure

```
index.html            squelette et sections
src/main.js           contenu, modales, navigation, formulaire, animations
src/scene3d.js        scène Three.js : arbre, colline, feuillage, caméra
src/styles.css        styles
src/data/             contenu du portfolio
public/files/         CV, photo, captures des projets
.github/workflows/    déploiement GitHub Pages
```

## Déploiement sur GitHub Pages

Le site est statique et ses chemins sont relatifs, il fonctionne donc dans le sous-dossier `/Portfolio/`.

1. Dans les réglages du dépôt, **Pages → Source : GitHub Actions**.
2. Chaque push sur `main` lance `.github/workflows/deploy.yml`, qui construit le site et le publie.

Adresse : `https://tx-diloxi.github.io/Portfolio/`

L'ancienne version du portfolio reste disponible avec :

```bash
git checkout old-portfolio
```

## Technologies

Vite · Three.js · GSAP (ScrollTrigger) · Lenis · HTML/CSS/JS sans framework ni CMS.

## Contact

Marceau LE SECH · [GitHub](https://github.com/Tx-diloxi) · [LinkedIn](https://www.linkedin.com/in/marceau-le-sech-38a60b353/)
