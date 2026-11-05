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
    'Je crée, programme et teste des applications',
  parcours: 'Parcours A',
  annee: '3ᵉ année',
  etablissement: 'IUT de Lannion, Université de Rennes',
  parcoursLabel: 'BUT Informatique',
  statut: 'Alternant en 3ᵉ année',
  email: 'marceaulesech@gmail.com',
  baseline:
    'Je crée des applications fiables, de l’idée jusqu’à leur mise en ligne',
  situation: {
    chapo:
      'Alternant en 3ᵉ année de BUT Informatique à l’IUT de Lannion, je passe mes semaines entre salle de cours et vrai code en production.',
    corps: [
      '⟨À REMPLIR : **l’entreprise**, son nom, son secteur, sa taille, ce qu’elle fait. Une phrase suffit.⟩',
      '⟨À REMPLIR : **le rythme de l’alternance**, la fréquence en entreprise, l’équipe, le produit. C’est ce que le jury veut voir : comment le BUT s’articule avec le travail réel.⟩',
      '⟨À REMPLIR : **ce que l’alternance a changé** par rapport à la formation initiale, avec un exemple concret.⟩',
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
