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
    periode: '2024 — 2025',
    titre: 'BUT 1',
    sousTitre: 'Les fondamentaux',
    texte:
      'Les six compétences du programme national vues une première fois : coder, modéliser, configurer, gérer un projet, travailler en équipe.',
    jalons: ['SAÉ 1.01 → 1.06', 'Premiers livrables en équipe'],
  },
  {
    id: 'but2',
    periode: '2025 — 2026',
    titre: 'BUT 2',
    sousTitre: 'L’exigence du complet',
    texte:
      '⟨À REMPLIR⟩ — ce qui a changé : du programme qui marche à l’application qui tient. Cite une SAÉ qui t’a marqué.⟩',
    jalons: ['⟨SAÉ⟩', '⟨⟩'],
  },
  {
    id: 'stage',
    periode: '2026',
    titre: 'Stage ou alternance',
    sousTitre: 'Le premier contact avec le métier',
    texte:
      '⟨À REMPLIR⟩ — le contexte, ta mission, ce que tu as découvert du fonctionnement réel d’une équipe de développement.⟩',
    jalons: ['⟨⟩'],
  },
  {
    id: 'but3',
    periode: '2026 — 2027',
    titre: 'BUT 3',
    sousTitre: 'La synthèse et l’oral',
    texte:
      '⟨À REMPLIR⟩ — le portfolio que vous êtes en train de lire, et ce qu’il démontre.⟩',
    jalons: ['Portfolio', 'Soutenance — janvier 2027'],
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
    'Trois ans de BUT Informatique, résumés par ce que j’en ai fait plutôt que par ce qu’on m’a appris.',
  corps: [
    '⟨À REMPLIR⟩ — **le point fort** : la compétence dont tu es le plus fier·e, et la situation qui le prouve. Une anecdote, pas une déclaration.',
    '⟨À REMPLIR⟩ — **le point à consolider** : ce que tu ne maîtrises pas encore, formulé franchement. Un jury préfère un bilan honnête à un bilan lisse.',
    '⟨À REMPLIR⟩ — **ce que le BUT a changé** : une manière de travailler, un réflexe, une façon de poser un problème. Le passage en alternance est le meilleur matériau pour ça.',
  ],
  /** Phrase d’accroche affichée en grand, 3 lignes maximum. */
  statement: '⟨À REMPLIR⟩ — la phrase qui résume ton BUT en une ligne.⟩',
};

export const postBut = {
  chapo:
    'Où je vais après le BUT, et pourquoi cette formation est le bon point de départ.',
  /** Deux voies possibles : coche celle qui est la tienne. */
  voies: [
    {
      id: 'ecole',
      libelle: 'Poursuite d’études',
      detail:
        '⟨À REMPLIR⟩ — école, formation, durée, et ce que tu y cherches précisément (pas « une bonne école »).⟩',
      actif: false,
    },
    {
      id: 'emploi',
      libelle: 'Insertion professionnelle',
      detail:
        '⟨À REMPLIR⟩ — le type de poste visé, le secteur, et ce que tu sais déjà de ce métier.⟩',
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
        '⟨À REMPLIR⟩ — l’exigence du poste d’après et l’apprentissage C1 qui y répond.⟩',
    },
    {
      id: 'c2',
      competence: 'Optimiser',
      texte:
        '⟨À REMPLIR⟩ — l’exigence du poste d’après et l’apprentissage C2 qui y répond.⟩',
    },
    {
      id: 'c3',
      competence: 'Administrer',
      texte:
        '⟨À REMPLIR⟩ — l’exigence du poste d’après et l’apprentissage C3 qui y répond.⟩',
    },
    {
      id: 'c4',
      competence: 'Gérer',
      texte:
        '⟨À REMPLIR⟩ — l’exigence du poste d’après et l’apprentissage C4 qui y répond.⟩',
    },
    {
      id: 'c5',
      competence: 'Conduire',
      texte:
        '⟨À REMPLIR⟩ — l’exigence du poste d’après et l’apprentissage C5 qui y répond.⟩',
    },
    {
      id: 'c6',
      competence: 'Collaborer',
      texte:
        '⟨À REMPLIR⟩ — l’exigence du poste d’après et l’apprentissage C6 qui y répond.⟩',
    },
  ],
};
