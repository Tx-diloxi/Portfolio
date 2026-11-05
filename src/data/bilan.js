/**
 * Bilan du BUT et projet post-BUT.
 * Ces deux sections pèsent ensemble 1,5 point sur 10, plus 0,5 de bonus
 * pour l'adéquation entre la formation et l'après-IUT. Elles se complètent :
 * le bilan dit ce que la formation a fait de toi, le projet post-BUT dit
 * où elle t'emmène. L'argumentaire d'adéquation est le bonus.
 */

/** La timeline du parcours, de la première année à l'alternance. */
export const parcours = [
  {
    id: 'but1',
    periode: '2024 à 2025',
    titre: 'BUT 1',
    sousTitre: 'Les fondamentaux',
    texte:
      'Six compétences, six premiers projets : un jeu en C, une base de données, un poste de travail automatisé et un site web pour un vrai client.',
    jalons: ['SAÉ 1.01 → 1.06', 'Premiers livrables en équipe'],
  },
  {
    id: 'but2',
    periode: '2025 à 2026',
    titre: 'BUT 2',
    sousTitre: 'L’exigence du complet',
    texte:
      '⟨À REMPLIR : ce qui a changé, du programme qui marche à l’application qui tient. Cite une SAÉ marquante.⟩',
    jalons: ['⟨SAÉ⟩', '⟨⟩'],
  },
  {
    id: 'stage',
    periode: '2026',
    titre: 'Stage ou alternance',
    sousTitre: 'Le premier contact avec le métier',
    texte:
      '⟨À REMPLIR : le contexte, ma mission, ce que j’ai découvert du fonctionnement réel d’une équipe de développement.⟩',
    jalons: ['⟨⟩'],
  },
  {
    id: 'but3',
    periode: '2026 à 2027',
    titre: 'BUT 3',
    sousTitre: 'La synthèse et l’oral',
    texte:
      'Le portfolio que vous êtes en train de lire. Un arbre gravé, codé à la main, et six compétences à prouver.',
    jalons: ['Portfolio', 'Soutenance en janvier 2027'],
  },
];

/**
 * Le radar de progression : un niveau de 0 à 3 par compétence.
 * 0 non acquis · 1 en cours d'acquisition · 2 acquis · 3 expert
 * C'est la nomenclature du fichier eportfolio fourni par l'IUT.
 */
export const NIVEAUX = ['non acquis', 'en cours d’acquisition', 'acquis', 'expert'];

export const progression = {
  c1: 2,
  c2: 1,
  c3: 1,
  c4: 1,
  c5: 1,
  c6: 1,
};

export const bilan = {
  chapo:
    'Trois ans de BUT, vus par ce que j’ai construit plutôt que par ce qu’on m’a enseigné.',
  corps: [
    '⟨À REMPLIR : **mon point fort**, la compétence dont je suis le plus fier et la situation qui le prouve. Une anecdote, pas une déclaration.⟩',
    '⟨À REMPLIR : **ce que je dois encore consolider**, dit franchement. Un bilan honnête vaut mieux qu’un bilan lisse.⟩',
    '⟨À REMPLIR : **ce que le BUT a changé**, une manière de travailler, un réflexe, une façon de poser un problème.⟩',
  ],
  /** Phrase d’accroche affichée en grand, 3 lignes maximum. */
  statement: '⟨À REMPLIR : ma phrase-bilan en une ligne.⟩',
};

export const postBut = {
  chapo:
    'Après le BUT, la suite. Voici où je vais et pourquoi cette formation m’y emmène.',
  /** Deux voies possibles, une seule est la mienne. */
  voies: [
    {
      id: 'ecole',
      libelle: 'Poursuite d’études',
      detail:
        '⟨À REMPLIR : l’école, la formation, la durée, et ce que j’y cherche précisément.⟩',
      actif: false,
    },
    {
      id: 'emploi',
      libelle: 'Insertion professionnelle',
      detail:
        '⟨À REMPLIR : le poste visé, le secteur, et ce que je sais déjà de ce métier.⟩',
      actif: true,
    },
  ],
  /**
   * L'argumentaire d'adéquation : c'est le bonus de +0,5.
   * Formule-le compétence par compétence, en reliant une exigence du
   * métier d'après-IUT à un apprentissage précis du BUT.
   */
  adequation: [
    {
      id: 'c1',
      competence: 'Réaliser',
      texte:
        '⟨À REMPLIR : une exigence du poste visé et l’apprentissage C1 qui y répond.⟩',
    },
    {
      id: 'c2',
      competence: 'Optimiser',
      texte:
        '⟨À REMPLIR : une exigence du poste visé et l’apprentissage C2 qui y répond.⟩',
    },
    {
      id: 'c3',
      competence: 'Administrer',
      texte:
        '⟨À REMPLIR : une exigence du poste visé et l’apprentissage C3 qui y répond.⟩',
    },
    {
      id: 'c4',
      competence: 'Gérer',
      texte:
        '⟨À REMPLIR : une exigence du poste visé et l’apprentissage C4 qui y répond.⟩',
    },
    {
      id: 'c5',
      competence: 'Conduire',
      texte:
        '⟨À REMPLIR : une exigence du poste visé et l’apprentissage C5 qui y répond.⟩',
    },
    {
      id: 'c6',
      competence: 'Collaborer',
      texte:
        '⟨À REMPLIR : une exigence du poste visé et l’apprentissage C6 qui y répond.⟩',
    },
  ],
};
