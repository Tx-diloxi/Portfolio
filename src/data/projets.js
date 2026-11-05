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
    sousTitre: 'Conception et implémentation d’un jeu classique',
    periode: 'BUT 1 — semestre 1',
    annee: '2024',
    competences: ['c1'],
    motsCle: ['C', 'Algorithmique', 'Programmation', 'Gestion mémoire'],
    resume:
      'Un jeu Snake fonctionnel en C, conçu depuis une maquette jusqu’à un cahier de tests.',
    star: {
      situation:
        'Premier projet de développement du BUT : il fallait concevoir puis coder un jeu de grille classique, en partant d’une simple idée de sujet et sans squelette fourni.',
      tache:
        'Produire une version jouable et maintenable de Snake, et prouver qu’elle fonctionne par des tests.',
      action:
        'J’ai commencé par une maquette qui fixait l’interface et les interactions, avant d’écrire la moindre ligne. Le serpent et la grille sont représentés par des tableaux et des structures, la détection de collisions est isolée dans des fonctions dédiées, et le code est organisé par modules plutôt que dans un main unique. J’ai ensuite rédigé un cahier de tests couvrant chaque fonctionnalité et les tests d’intégration, que j’ai exécuté pour corriger les anomalies.',
      resultat:
        'Un jeu fonctionnel documenté, avec un code segmenté par responsibility et une campagne de tests qui a fait remonter les bugs avant la rendu.',
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
    sousTitre: 'Snake autonome et analyse de performance',
    periode: 'BUT 1 — semestre 1',
    annee: '2024',
    competences: ['c2', 'c1'],
    motsCle: ['C', 'Algorithmes', 'Analyse de performances', 'Recherche de chemin'],
    resume:
      'Rendre le serpent autonome puis comparer quatre stratégies sur le nombre de déplacements et le temps CPU.',
    star: {
      situation:
        'Suite directe de la SAÉ 1.01 : le serpent devient autonome. Le problème est qu’il existe plusieurs façons de le programmer et qu’il fallait choisir en arguing, pas au hasard.',
      tache:
        'Implémenter des algorithmes de déplacement, puis mesurer их pour demonstrating lequel est le meilleur.',
      action:
        'J’ai construit le projet en quatre versions croissantes, chacune servant de référence à la suivante : viser la pomme la plus proche sans obstacle, puis gérer plusieurs pommes simultanées, puis contourner des obstacles statiques, puis combiner le tout avec des optimisations. L’environnement est volontairement déterministe — placement des pommes identique à chaque partie — sinon la comparaison n’aurait rien/signifié. J’ai mesuré deux grandeurs : le nombre de déplacements pour manger toutes les pommes, et le temps CPU.',
      resultat:
        'Quatre algorithmes comparés sur des métriques, avec des fichiers de résultats chiffrés. C’est le projet qui m’a appris qu’une optimisation non mesurée est une intuition.',
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
    sousTitre: 'Configuration et optimisation d’un environnement de travail professionnel',
    periode: 'BUT 1 — semestre 1',
    annee: '2024',
    competences: ['c3'],
    motsCle: ['Docker', 'Virtualisation', 'Linux', 'Conteneurisation', 'Automatisation'],
    resume:
      'Installer un poste de développement complet, reproductible, à partir de scripts d’automatisation.',
    star: {
      situation:
        'L’installateur d’un poste de développement réel ne se résume pas à un IDE et un compilateur : il faut versionner, tester, documenter, isoler.',
      tache:
        'Construire un environnement de travail complet, reproductible et adapté au développement moderne.',
      action:
        'J’ai d’abord listé les composants nécessaires en séparant les outils indispensables (IDE, compilateur, gestionnaire de paquets, versionnement) des outils utiles (tests, analyse de code). J’ai ensuite posé l’infrastructure avec Docker et la virtualisation, puis j’ai scripté l’installation et la configuration de chaque outil. Enfin j’ai partagé les fichiers entre l’hôte et les conteneurs et vérifié plusieurs scénarios d’utilisation réels.',
      resultat:
        'Un poste reproductible : le script rejoue l’installation à l’identique, ce qui rend le poste récupérable en cas de panne et transmissible à un collègue.',
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
    sousTitre: 'Conception et implantation d’une base relationnelle',
    periode: 'BUT 1 — semestre 1',
    annee: '2024',
    competences: ['c4'],
    motsCle: ['SQL', 'Modélisation', 'UML', 'Dépendances fonctionnelles'],
    resume:
      'Concevoir la base de résultats des championnats français, masculins et féminins, du modèle conceptuel au SQL.',
    star: {
      situation:
        'Le cahier des charges demandait de gérer les clubs, équipes, joueurs, matchs et résultats : beaucoup d’entités, des relations qui se ressemblent et un fort risque de redondance.',
      tache:
        'Produire un modèle de données fidèle au métier, puis l’implémenter et l’interroger.',
      action:
        'Je suis parti du cahier des charges pour identifier les entités et leurs relations, puis j’ai modélisé le système avec un diagramme de classes UML sous Visual Paradigm. J’ai ensuite identifié les dépendances fonctionnelles fortes et faibles, pour normaliser la structure et supprimer la redondance plutôt que de la constater après coup. La transformation du modèle conceptuel en schéma relationnel a fixé les clés primaires et étrangères, avant l’implémentation SQL et les tests de validation.',
      resultat:
        'Un schéma normalisé, sans redondance, interrogeable : les requêtes reflètent le métier du football plutôt que la structure de la base.',
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
    sousTitre: 'Recueil des besoins, conception et réalisation d’un site olympique',
    periode: 'BUT 1 — semestre 1',
    annee: '2024',
    competences: ['c5', 'c1'],
    motsCle: ['HTML', 'CSS', 'JavaScript', 'UX/UI', 'Responsivité', 'Recueil des besoins'],
    resume:
      'Concevoir et réaliser un site web pour un commanditaire réel, en partant d’une analyse de ses besoins.',
    star: {
      situation:
        'La commande venait de Tony Estanguet, président du comité d’organisation des Jeux de Paris 2024. Le besoin n’était pas technique : il fallait d’abord comprendre ce qu’il attendait.',
      tache:
        'Recueillir les besoins, construire une identité visuelle, maquetter puis développer un site multilingue et responsive.',
      action:
        'J’ai synthétisé les entretiens pour rédiger une synthèse des besoins fonctionnels et techniques, puis le groupe a choisi la catégorie et la discipline sportive à mettre en avant. J’ai ensuite défini la charte graphique dans l’univers olympique et parisien, réalisé les maquettes desktop et smartphone, et développé le site en HTML, CSS et JavaScript avec flexbox et media queries, versionné sous Git.',
      resultat:
        'Un site de quatre niveaux d’arborescence mis en production, avec maquettage, diaporama et rapport PDF livrés en plus du site lui-même.',
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
    sousTitre: 'Analyse d’entreprise et responsabilité sociétale',
    periode: 'BUT 1 — semestre 1',
    annee: '2024',
    competences: ['c6'],
    motsCle: ['Veille', 'Analyse économique', 'Travail d’équipe', 'RSE', 'Présentation'],
    resume:
      'Analyser une entreprise sous l’angle économique et RSE, en équipe, jusqu’à la soutenance orale.',
    star: {
      situation:
        'Un sujet ouvert, sans livrable imposé : il fallait choisir une entreprise, cadrer un angle et produire une analyse défendable à l’oral.',
      tache:
        'Comprendre l’organisation d’une entreprise et sa politique de responsabilité sociétale, et le présenter oralement.',
      action:
        'En équipe, nous avons mis en place les outils de travail collaboratif et réparti les tâches avant de commencer la recherche. J’ai défini les mots-clés, identifié les sources fiables et filtré les informations pertinentes sur l’organisation et la RSE, en me concentrant sur la transition écologique. J’ai ensuite rédigé ma synthèse et construit un support de présentation.',
      resultat:
        'Une analyse sourcée et un exposé oral. Le principal acquis n’est pas le contenu : c’est d’avoir dû défendre un point de vue devant un jury.',
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

  /* ── Alternance et BUT 2 / 3 — gabarits à compléter ─────────────────── */
  {
    id: 'p-appli-entreprise',
    ref: '⟨SAE / application⟩',
    titre: '⟨Application en entreprise⟩',
    sousTitre: '⟨Une ligne : le produit, pas la technique⟩',
    periode: '⟨Alternance — période⟩',
    annee: '2026',
    competences: ['c1'],
    motsCle: ['⟨Stack⟩', '⟨⟩'],
    resume:
      '⟨À REMPLIR⟩ — la preuve principale de la compétence Réaliser. Nom du produit, ton rôle exact, ce que tu as écrit toi-même.⟩',
    star: {
      situation: '⟨À REMPLIR⟩ — le problème concret, écrit comme un client l’aurait formulé.⟩',
      tache: '⟨À REMPLIR⟩ — ce qu’on attendait de toi, pas ce que tu voulais faire.⟩',
      action: '⟨À REMPLIR⟩ — les choix techniques concrets que tu as tranchés, et pourquoi.⟩',
      resultat: '⟨À REMPLIR⟩ — le résultat observable : ce qui tourne, ce qui a changé pour l’équipe.⟩',
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
    periode: '⟨Alternance — période⟩',
    annee: '2026',
    competences: ['c3'],
    motsCle: ['⟨Docker⟩', '⟨CI/CD⟩', '⟨Linux⟩'],
    resume: '⟨À REMPLIR⟩ — la preuve principale de la compétence Administrer.⟩',
    star: {
      situation: '⟨À REMPLIR⟩ — l’état initial : à la main, cassé, non reproductible ?⟩',
      tache: '⟨À REMPLIR⟩ — l’objectif d’exploitation ou de sécurité visé.⟩',
      action: '⟨À REMPLIR⟩ — ce que tu as automatisé, virtualisé, sécurisé.⟩',
      resultat: '⟨À REMPLIR⟩ — le gain concret : temps de mise en production, fréquence, incidents.⟩',
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
    resume: '⟨À REMPLIR⟩ — la preuve principale de la compétence Gérer.⟩',
    star: {
      situation: '⟨À REMPLIR⟩ — la donnée existe mais n’est pas exploitable. Commentaire ?⟩',
      tache: '⟨À REMPLIR⟩ — le modèle ou la restitution attendue.⟩',
      action: '⟨À REMPLIR⟩ — modélisation, requêtes, index, visualisation.⟩',
      resultat: '⟨À REMPLIR⟩ — la décision métier que la donnée a permis de prendre. C’est ce point qui vaut le point.⟩',
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
    resume: '⟨À REMPLIR⟩ — la preuve principale de la compétence Conduire.⟩',
    star: {
      situation: '⟨À REMPLIR⟩ — le projet, son périmètre, qui le finance.⟩',
      tache: '⟨À REMPLIR⟩ — ton rôle de pilotage : décider, estimer, arbitrer.⟩',
      action: '⟨À REMPLIR⟩ — la méthode, les rituels, l’outil. Ce que tu as fait warper.⟩',
      resultat: '⟨À REMPLIR⟩ — le jalon tenu, le périmètre renegocié, la décision assumée.⟩',
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
      '⟨À REMPLIR⟩ — la preuve principale de la compétence Optimiser. Sans chiffre avant/après, ce n’est pas démontré.⟩',
    star: {
      situation: '⟨À REMPLIR⟩ — la lenteur constatée, et comment tu l’as mesurée.⟩',
      tache: '⟨À REMPLIR⟩ — la métrique cible et le seuil visé.⟩',
      action: '⟨À REMPLIR⟩ — le profilage, la cause identifiée, le correctif.⟩',
      resultat: '⟨À REMPLIR⟩ — le chiffre final. Formats : 2,4 s → 0,6 s · 180 Mo → 42 Mo.⟩',
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
    resume: '⟨À REMPLIR⟩ — la preuve principale de la compétence Collaborer.⟩',
    star: {
      situation: '⟨À REMPLIR⟩ — l’équipe, sa composition, son fonctionnement.⟩',
      tache: '⟨À REMPLIR⟩ — ta place et ta mission dans l’équipe.⟩',
      action: '⟨À REMPLIR⟩ — l’exemple concret : un désaccord, une revue, un décalage de planning.⟩',
      resultat: '⟨À REMPLIR⟩ — comment ça s’est terminé, et ce que tu en as tiré.⟩',
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
