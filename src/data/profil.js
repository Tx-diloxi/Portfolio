/**
 * Identité, situation actuelle et liens.
 * Aucun import : ce fichier est lu par le plugin de build (Node).
 */

export const profil = {
  prenom: 'Marceau',
  nom: 'LE SECH',
  /** Le mot géant affiché en arrière-plan du hero. */
  wordmark: 'LE SECH',
  initials: 'LS',
  titre:
    'Réalisation d’applications : conception, développement, validation',
  parcours: 'Parcours A',
  annee: '3ᵉ année',
  etablissement: 'IUT de Lannion — Université de Rennes',
  parcoursLabel: 'BUT Informatique',
  statut: 'Alternant·e en 3ᵉ année',
  email: 'marceaulesech@gmail.com',
  baseline:
    'Développer des applications qui tiennent la route — de l’architecture au déploiement',
  situation: {
    chapo:
      'Je suis alternant·e en 3ᵉ année de BUT Informatique à l’IUT de Lannion, sur le parcours Réalisation d’applications.',
    corps: [
      '⟨À REMPLIR⟩ — **l’entreprise** : nom, secteur, taille, ce qu’elle fait. Une phrase suffit.',
      '⟨À REMPLIR⟩ — **l’organisation de l’alternance** : à quelle fréquence es-tu en entreprise, avec quelle équipe, sur quel produit. C’est le point que le jury cherche : comment le BUT s’articule avec ton travail réel.',
      '⟨À REMPLIR⟩ — **ce que l’alternance a changé** par rapport à la formation initiale : un exemple concret, pas une intention.',
    ],
    entreprise: '⟨À REMPLIR⟩',
    frequence: '⟨À REMPLIR⟩',
    equipe: '⟨À REMPLIR⟩',
    produit: '⟨À REMPLIR⟩',
  },
  diplome: {
    libelle: 'Baccalauréat général, mention Bien',
    etablissement: 'Lycée Auguste Pavie',
    annee: '⟨année⟩',
  },
  liens: [
    { label: 'GitHub', href: 'https://github.com/Tx-diloxi', court: 'GH' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/marceau-le-sech-38a60b353/',
      court: 'in',
    },
    { label: 'Email', href: 'mailto:marceaulesech@gmail.com', court: '@' },
  ],
  cv: 'files/CV_Marceau_LE_SECH.pdf',
};
