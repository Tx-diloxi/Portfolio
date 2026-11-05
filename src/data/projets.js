/**
 * Les projets, décrits en STAR (Situation → Tâche → Action → Résultat),
 * plus les informations clés habituelles d'une fiche projet.
 *
 * Les six SAÉ de BUT1 sont réelles et reprennent l'ancien portfolio.
 * Les preuves du BUT2, du BUT3 et de l'alternance sont des gabarits
 * `⟨À REMPLIR⟩` : remplace le contenu, garde la structure.
 *
 * `media` pointe vers `public/files/media/`. Un média de type `video`
 * accepte un `.mp4` ; la Poster de la vidéo est une image.
 */

export const projets = [
  /* ── BUT 1 ─────────────────────────────────────────────────────────── */
  {
    id: 'p-sae-101',
    ref: 'SAÉ 1.01',
    titre: 'Snake en C',
    sousTitre: 'Un jeu vidéo classique, créé de zéro',
    periode: 'BUT 1, semestre 1',
    annee: '2024',
    competences: ['c1'],
    motsCle: ['C', 'Algorithmique', 'Programmation', 'Gestion mémoire'],
    resume:
      'Le jeu du serpent, programmé de A à Z, avec des tests pour vérifier qu’il marche.',
    star: {
      situation:
        'C’était mon premier vrai projet. Il fallait créer un petit jeu complet, sans modèle de départ.',
      tache:
        'Livrer un jeu qui fonctionne, facile à faire évoluer, et prouver qu’il marche.',
      action:
        'J’ai d’abord dessiné à quoi le jeu devait ressembler, avant de programmer quoi que ce soit. Puis j’ai découpé le code en petites parties, chacune avec un rôle précis. Enfin j’ai écrit une liste de vérifications à passer une par une, pour repérer les erreurs.',
      resultat:
        'Un jeu qui marche, un code bien rangé, et des erreurs trouvées et corrigées avant le rendu.',
      chiffre: null,
    },
    organisation: 'Travail seul',
    duree: '4 semaines',
    livrables: ['Programme C', 'Fichiers ODS', 'Documentation'],
    media: [
      { type: 'image', src: 'files/media/p-sae-101.webp', alt: 'Capture du jeu Snake en C' },
    ],
    liens: [
      { label: 'Dépôt GitHub', href: 'https://github.com/Tx-diloxi/Snake-C' },
    ],
  },

  {
    id: 'p-sae-102',
    ref: 'SAÉ 1.02',
    titre: 'Comparaison d’algorithmes',
    sousTitre: 'Un serpent qui joue tout seul, mesuré en chiffres',
    periode: 'BUT 1, semestre 1',
    annee: '2024',
    competences: ['c2', 'c1'],
    motsCle: ['C', 'Algorithmes', 'Analyse de performances', 'Recherche de chemin'],
    resume:
      'J’ai appris au serpent à jouer seul, puis j’ai comparé quatre méthodes pour savoir laquelle est la meilleure.',
    star: {
      situation:
        'Dans la suite du projet précédent, le serpent devait jouer sans moi. Plusieurs méthodes étaient possibles : il fallait choisir avec des preuves, pas au hasard.',
      tache:
        'Programmer plusieurs façons de jouer, puis les comparer pour désigner la meilleure.',
      action:
        'J’ai construit quatre versions, de plus en plus malignes : aller vers la pomme la plus proche, gérer plusieurs pommes, éviter les obstacles, puis tout combiner. Les parties se déroulaient toujours dans les mêmes conditions, pour que la comparaison soit juste. J’ai mesuré le nombre de pas et le temps de calcul.',
      resultat:
        'Quatre méthodes comparées avec des résultats chiffrés. J’en retiens qu’une amélioration non mesurée n’est qu’une impression.',
      chiffre: null,
    },
    organisation: 'Binôme',
    duree: '4 semaines',
    livrables: ['Programme C', 'Fichiers de résultats', 'Documentation'],
    media: [
      { type: 'image', src: 'files/media/p-sae-102.webp', alt: 'Capture du Snake autonome' },
    ],
    liens: [
      { label: 'Dépôt GitHub', href: 'https://github.com/Tx-diloxi/Snake-C-Auto' },
    ],
  },

  {
    id: 'p-sae-103',
    ref: 'SAÉ 1.03',
    titre: 'Poste de développement',
    sousTitre: 'Un poste de travail prêt à l’emploi, réinstallable en un clic',
    periode: 'BUT 1, semestre 1',
    annee: '2024',
    competences: ['c3'],
    motsCle: ['Docker', 'Virtualisation', 'Linux', 'Conteneurisation', 'Automatisation'],
    resume:
      'Un ordinateur de développeur complet, qui se réinstalle à l’identique grâce à des scripts.',
    star: {
      situation:
        'Un poste de développeur, ce n’est pas juste un éditeur de code : il faut aussi suivre les versions, tester, documenter et isoler les outils.',
      tache:
        'Créer un environnement de travail complet que l’on peut refaire à l’identique, à tout moment.',
      action:
        'J’ai listé les outils indispensables et ceux qui sont simplement utiles. Puis j’ai mis en place des « boîtes » isolées pour chaque outil, et j’ai écrit des scripts qui installent tout automatiquement. J’ai enfin testé plusieurs cas d’usage réels.',
      resultat:
        'Un poste que l’on peut réinstaller en cas de panne, ou transmettre à un collègue, sans rien refaire à la main.',
      chiffre: null,
    },
    organisation: 'Équipe de 4',
    duree: '5 semaines',
    livrables: ['Scripts de configuration', 'Documentation', 'Page web', 'PDF'],
    media: [
      { type: 'image', src: 'files/media/p-sae-103.webp', alt: 'Capture de l’environnement Docker et des scripts' },
      { type: 'image', src: 'files/media/p-sae-103-liste.webp', alt: 'Arborescence des fichiers du poste de développement' },
      { type: 'image', src: 'files/media/p-sae-103-etapes.webp', alt: 'Les quatre étapes de la configuration et des tests' },
    ],
    liens: [],
  },

  {
    id: 'p-sae-104',
    ref: 'SAÉ 1.04',
    titre: 'Base de données football',
    sousTitre: 'Ranger les résultats du football français dans une base de données',
    periode: 'BUT 1, semestre 1',
    annee: '2024',
    competences: ['c4'],
    motsCle: ['SQL', 'Modélisation', 'UML', 'Dépendances fonctionnelles'],
    resume:
      'Une base de données qui garde les résultats des championnats de football, hommes et femmes, et permet de les consulter.',
    star: {
      situation:
        'Il fallait stocker clubs, équipes, joueurs, matchs et résultats. Beaucoup d’informations qui se ressemblent, avec un risque de doublons.',
      tache:
        'Dessiner un modèle fidèle au monde du football, puis le construire et poser des questions à la base.',
      action:
        'Je suis parti du cahier des charges pour repérer les éléments importants et leurs liens, que j’ai dessinés sur un schéma. J’ai ensuite évité les doublons en organisant bien les informations, puis traduit le schéma en vraie base de données, que j’ai testée.',
      resultat:
        'Une base bien organisée, sans doublons. On y pose des questions de football, sans se soucier de la technique.',
      chiffre: null,
    },
    organisation: 'Binôme',
    duree: '3 semaines',
    livrables: ['Diagrammes UML', 'Script SQL', 'Rapport PDF', 'Base REL'],
    media: [
      { type: 'image', src: 'files/media/p-sae-104.webp', alt: 'Diagramme de classes UML du modèle football' },
      { type: 'image', src: 'files/media/p-sae-104-schema.webp', alt: 'Schéma relationnel obtenu à partir du modèle conceptuel' },
    ],
    liens: [],
  },

  {
    id: 'p-sae-105',
    ref: 'SAÉ 1.05',
    titre: 'Site web JO Paris 2024',
    sousTitre: 'Un site web pour le comité des Jeux de Paris 2024',
    periode: 'BUT 1, semestre 1',
    annee: '2024',
    competences: ['c5', 'c1'],
    motsCle: ['HTML', 'CSS', 'JavaScript', 'UX/UI', 'Responsivité', 'Recueil des besoins'],
    resume:
      'Un site web créé pour un vrai client, à partir de ses besoins.',
    star: {
      situation:
        'La commande venait de Tony Estanguet, président du comité d’organisation des Jeux de Paris 2024. Le plus dur n’était pas la technique : il fallait d’abord comprendre ce qu’il voulait.',
      tache:
        'Comprendre les besoins, créer une identité visuelle, dessiner les écrans, puis réaliser un site en plusieurs langues qui s’adapte aux téléphones.',
      action:
        'J’ai résumé les entretiens pour lister ce qui était attendu. Le groupe a ensuite choisi le sport à mettre en avant. J’ai défini les couleurs et le style, dessiné les écrans pour ordinateur et téléphone, puis programmé le site, en suivant les modifications avec Git.',
      resultat:
        'Un site en ligne sur quatre niveaux de pages, livré avec les maquettes, un diaporama et un rapport.',
      chiffre: null,
    },
    organisation: '4 étudiants',
    duree: '3 mois',
    livrables: ['Site web', 'Maquettage Figma', 'Diaporama', 'Rapport PDF'],
    media: [
      { type: 'image', src: 'files/media/p-sae-105.webp', alt: 'Page d’accueil du site des JO Paris 2024' },
      { type: 'image', src: 'files/media/p-sae-105-arborescence.webp', alt: 'Arborescence du site, à trois niveaux maximum' },
    ],
    liens: [
      {
        label: 'Dépôt GitHub',
        href: 'https://github.com/Arthurchvl/website-J0-Paris-2024',
      },
    ],
  },

  {
    id: 'p-sae-106',
    ref: 'SAÉ 1.06',
    titre: 'Environnement économique',
    sousTitre: 'Étudier une entreprise et défendre son avis',
    periode: 'BUT 1, semestre 1',
    annee: '2024',
    competences: ['c6'],
    motsCle: ['Veille', 'Analyse économique', 'Travail d’équipe', 'RSE', 'Présentation'],
    resume:
      'Une entreprise étudiée sous l’angle de l’économie et de l’écologie, en équipe, puis présentée à l’oral.',
    star: {
      situation:
        'Le sujet était ouvert : choisir une entreprise, décider de l’angle d’étude, et présenter une analyse solide à l’oral.',
      tache:
        'Comprendre comment fonctionne une entreprise et ce qu’elle fait pour la société et la planète, puis le présenter.',
      action:
        'En équipe, nous avons choisi nos outils et réparti le travail. J’ai cherché des sources fiables et trié les informations utiles, surtout sur la transition écologique. J’ai ensuite rédigé ma partie et préparé le support de présentation.',
      resultat:
        'Une analyse avec ses sources et un exposé oral. Le vrai gain : avoir défendu un avis devant un jury.',
      chiffre: null,
    },
    organisation: '4 étudiants',
    duree: '2 semaines',
    livrables: ['Supports de présentation', 'Rapport PDF'],
    media: [
      { type: 'image', src: 'files/media/p-sae-106.webp', alt: 'Support de présentation de l’analyse d’entreprise' },
      { type: 'image', src: 'files/media/p-sae-106-presentation.webp', alt: 'Planche de synthèse sur la responsabilité sociétale' },
    ],
    liens: [],
  },

  /* ── Alternance et BUT 2 / 3 : gabarits à compléter ─────────────────── */
  {
    id: 'p-appli-entreprise',
    ref: '⟨SAE / application⟩',
    titre: '⟨Application en entreprise⟩',
    sousTitre: '⟨Une ligne : le produit, pas la technique⟩',
    periode: '⟨Alternance, période⟩',
    annee: '2026',
    competences: ['c1'],
    motsCle: ['⟨Stack⟩', '⟨⟩'],
    resume:
      '⟨À REMPLIR : la preuve principale de la compétence Réaliser. Nom du produit, ton rôle exact, ce que tu as écrit toi-même⟩',
    star: {
      situation: '⟨À REMPLIR : le problème concret, écrit comme un client l’aurait formulé⟩',
      tache: '⟨À REMPLIR : ce qu’on attendait de toi, pas ce que tu voulais faire⟩',
      action: '⟨À REMPLIR : les choix techniques concrets que tu as tranchés, et pourquoi⟩',
      resultat: '⟨À REMPLIR : le résultat observable : ce qui tourne, ce qui a changé pour l’équipe⟩',
      chiffre: null,
    },
    organisation: '⟨Équipe⟩',
    duree: '⟨durée⟩',
    livrables: ['⟨⟩'],
    media: [],
    liens: [],
  },

  {
    id: 'p-infra',
    ref: '⟨SAE / infrastructure⟩',
    titre: '⟨Infrastructure et déploiement⟩',
    sousTitre: '⟨Une ligne⟩',
    periode: '⟨Alternance, période⟩',
    annee: '2026',
    competences: ['c3'],
    motsCle: ['⟨Docker⟩', '⟨CI/CD⟩', '⟨Linux⟩'],
    resume: '⟨À REMPLIR : la preuve principale de la compétence Administrer⟩',
    star: {
      situation: '⟨À REMPLIR : l’état initial : à la main, cassé, non reproductible ?⟩',
      tache: '⟨À REMPLIR : l’objectif d’exploitation ou de sécurité visé⟩',
      action: '⟨À REMPLIR : ce que tu as automatisé, virtualisé, sécurisé⟩',
      resultat: '⟨À REMPLIR : le gain concret : temps de mise en production, fréquence, incidents⟩',
      chiffre: null,
    },
    organisation: '⟨Équipe⟩',
    duree: '⟨durée⟩',
    livrables: ['⟨⟩'],
    media: [],
    liens: [],
  },

  {
    id: 'p-donnees',
    ref: '⟨SAE / données⟩',
    titre: '⟨Base de données et restitution⟩',
    sousTitre: '⟨Une ligne⟩',
    periode: '⟨Alternance / BUT 2⟩',
    annee: '2026',
    competences: ['c4'],
    motsCle: ['⟨SQL⟩', '⟨PostgreSQL⟩', '⟨Visualisation⟩'],
    resume: '⟨À REMPLIR : la preuve principale de la compétence Gérer⟩',
    star: {
      situation: '⟨À REMPLIR : la donnée existe mais n’est pas exploitable.⟩',
      tache: '⟨À REMPLIR : le modèle ou la restitution attendue⟩',
      action: '⟨À REMPLIR : modélisation, requêtes, index, visualisation⟩',
      resultat: '⟨À REMPLIR : la décision métier que la donnée a permis de prendre. C’est ce point qui vaut le point⟩',
      chiffre: null,
    },
    organisation: '⟨Équipe⟩',
    duree: '⟨durée⟩',
    livrables: ['⟨⟩'],
    media: [],
    liens: [],
  },

  {
    id: 'p-pilotage',
    ref: '⟨SAE / projet⟩',
    titre: '⟨Pilotage de projet⟩',
    sousTitre: '⟨Une ligne⟩',
    periode: '⟨Alternance⟩',
    annee: '2026',
    competences: ['c5'],
    motsCle: ['⟨Agile⟩', '⟨Jira⟩', '⟨Roadmap⟩'],
    resume: '⟨À REMPLIR : la preuve principale de la compétence Conduire⟩',
    star: {
      situation: '⟨À REMPLIR : le projet, son périmètre, qui le finance⟩',
      tache: '⟨À REMPLIR : ton rôle de pilotage : décider, estimer, arbitrer⟩',
      action: '⟨À REMPLIR : la méthode, les rituels, l’outil. ce que j’ai mis en place⟩',
      resultat: '⟨À REMPLIR : le jalon tenu, le périmètre renégocié, la décision assumée⟩',
      chiffre: null,
    },
    organisation: '⟨Équipe⟩',
    duree: '⟨durée⟩',
    livrables: ['⟨⟩'],
    media: [],
    liens: [],
  },

  {
    id: 'p-perf',
    ref: '⟨SAE / performance⟩',
    titre: '⟨Optimisation mesurée⟩',
    sousTitre: '⟨Une ligne : quelle métrique ?⟩',
    periode: '⟨Alternance / BUT 3⟩',
    annee: '2026',
    competences: ['c2'],
    motsCle: ['⟨Profiling⟩', '⟨Lighthouse⟩', '⟨Cache⟩'],
    resume:
      '⟨À REMPLIR : la preuve principale de la compétence Optimiser. Sans chiffre avant/après, ce n’est pas démontré⟩',
    star: {
      situation: '⟨À REMPLIR : la lenteur constatée, et comment tu l’as mesurée⟩',
      tache: '⟨À REMPLIR : la métrique cible et le seuil visé⟩',
      action: '⟨À REMPLIR : le profilage, la cause identifiée, le correctif⟩',
      resultat: '⟨À REMPLIR : le chiffre final. Formats : 2,4 s → 0,6 s · 180 Mo → 42 Mo⟩',
      chiffre: null,
    },
    organisation: '⟨Équipe⟩',
    duree: '⟨durée⟩',
    livrables: ['⟨⟩'],
    media: [],
    liens: [],
  },

  {
    id: 'p-equipe-entreprise',
    ref: '⟨Expérience⟩',
    titre: '⟨Vie d’équipe⟩',
    sousTitre: '⟨Une ligne : l’équipe, l’outil, la résolution⟩',
    periode: '⟨Alternance⟩',
    annee: '2026',
    competences: ['c6'],
    motsCle: ['⟨Git⟩', '⟨Revue de code⟩', '⟨Intégration continue⟩'],
    resume: '⟨À REMPLIR : la preuve principale de la compétence Collaborer⟩',
    star: {
      situation: '⟨À REMPLIR : l’équipe, sa composition, son fonctionnement⟩',
      tache: '⟨À REMPLIR : ta place et ta mission dans l’équipe⟩',
      action: '⟨À REMPLIR : l’exemple concret : un désaccord, une revue, un décalage de planning⟩',
      resultat: '⟨À REMPLIR : comment ça s’est terminé, et ce que tu en as tiré⟩',
      chiffre: null,
    },
    organisation: '⟨Équipe⟩',
    duree: '⟨durée⟩',
    livrables: ['⟨⟩'],
    media: [],
    liens: [],
  },
];

export const parId = Object.fromEntries(projets.map((p) => [p.id, p]));

/** Les projets rattachés à une compétence, dans l’ordre du tableau. */
export function projetsDe(competenceId) {
  return projets.filter((p) => p.competences.includes(competenceId));
}
