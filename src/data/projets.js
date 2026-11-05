/**
 * Les projets, décrits en STAR (Situation → Tâche → Action → Résultat),
 * plus les informations clés habituelles d'une fiche projet.
 *
 * Les projets de la formation (BUT 1 à BUT 3) sont réels, tirés des dossiers
 * de cours et de l'historique Git. Les preuves de l'alternance restent des
 * gabarits `⟨À REMPLIR⟩` : remplace le contenu, garde la structure.
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

  /* ── BUT 1 (suite), BUT 2 et BUT 3 : projets de la formation ───────── */
  {
    id: "p-sae-204",
    ref: "SAÉ 2.04",
    titre: "Admissions en DUT Informatique",
    sousTitre: "Une base de données, puis une étude pour tester une idée absurde",
    periode: "BUT 1, semestre 2",
    annee: "2025",
    competences: ["c4", "c2"],
    motsCle: ["SQL", "Python", "Statistiques", "Régression linéaire", "Nettoyage de données"],
    resume:
      "Une base de données de candidatures et de résultats d’étudiants, puis une étude statistique de 12 843 lignes pour tester une question volontairement absurde.",
    star: {
      situation:
        "Le sujet fournissait des fichiers de candidatures, d’inscriptions et de résultats d’étudiants, avec des incohérences entre eux. Il fallait en faire une base propre, puis l’exploiter.",
      tache:
        "Construire la base et la remplir, puis mener en binôme une étude complète sur une question imposée : l’initiale du prénom influence-t-elle la moyenne, le code postal, la mention au bac et le niveau d’études ?",
      action:
        "La base a été construite à partir du schéma fourni, puis remplie depuis huit fichiers de données dont il a fallu corriger les incohérences. Pour l’étude, nous avons extrait une vue de 12 843 lignes, normalisé les valeurs, tracé des diagrammes et calculé les corrélations. La régression linéaire multiple a été codée à la main avec la formule matricielle, puis vérifiée avec la bibliothèque scikit-learn.",
      resultat:
        "Le modèle explique 2,03 % de la variation (R² = 0,0203) : il n’existe aucune relation. Le rapport de 14 pages conclut avec un regard critique : un calcul peut tout à fait donner un chiffre sans rien prouver.",
      chiffre: null,
    },
    organisation: "Binôme pour l’étude statistique",
    duree: "5 jours pour l’étude (16 au 20 juin 2025)",
    livrables: ["Base de données SQL", "Scripts Python", "Rapport PDF de 14 pages", "4 diagrammes"],
    media: [{"type": "image", "src": "files/media/p-sae-204.webp", "alt": "Diagramme en bâtons de la moyenne des étudiants selon l’initiale de leur prénom"}],
    liens: [{"label": "Dépôt GitHub", "href": "https://github.com/Tx-diloxi/SAE_2.04"}],
  },

  {
    id: "p-alizon",
    ref: "SAÉ 3 et 4",
    titre: "Alizon, la marketplace de COBREC",
    sousTitre: "Une boutique en ligne bretonne, côté clients et côté vendeurs",
    periode: "BUT 2, 2025 à 2026",
    annee: "2026",
    competences: ["c6", "c1", "c4", "c3"],
    motsCle: ["PHP", "PostgreSQL", "Docker", "SCSS", "Travail d’équipe"],
    resume:
      "Une place de marché en ligne pour une coopérative bretonne, construite en équipe. J’ai pris en charge le catalogue et la page vendeur.",
    star: {
      situation:
        "La coopérative bretonne COBREC voulait une plateforme de vente en ligne : un site pour les clients et un espace pour les vendeurs, de l’analyse du besoin jusqu’à la réalisation.",
      tache:
        "Concevoir et réaliser, en équipe, les deux faces de la boutique, en gardant une qualité commune à plusieurs développeurs sur le même code.",
      action:
        "Le code est partagé sur GitHub, avec des critères de fin (DoD) et une relecture des modifications. De mon côté, j’ai construit le catalogue et les promotions pour les vendeurs, la page publique du vendeur avec sa carte, l’import et l’export de produits, et la mise en route du serveur avec Docker. Le projet comprend aussi un petit transporteur écrit en C, qui met à jour les commandes dans la base.",
      resultat:
        "Une boutique complète : catalogue, panier, commande avec suivi, connexion sécurisée par code à usage unique, espace vendeur avec statistiques. Avec au moins 49 commits, soit environ la moitié de l’historique disponible, je suis le contributeur le plus actif.",
      chiffre: null,
    },
    organisation: "Équipe d’une demi-douzaine d’étudiants",
    duree: "⟨À REMPLIR : durée⟩",
    livrables: ["Application web", "Base PostgreSQL", "Transporteur en C", "Documentation"],
    media: [],
    liens: [],
  },

  {
    id: "p-pokemon",
    ref: "R4.10",
    titre: "Pokédex interactif",
    sousTitre: "Chercher, trier et filtrer des centaines de Pokémon",
    periode: "BUT 2, semestre 4",
    annee: "2026",
    competences: ["c1", "c6"],
    motsCle: ["JavaScript", "jQuery", "SASS", "Responsive", "Tests"],
    resume:
      "Une application web qui affiche, recherche, trie et filtre des Pokémon et leurs attaques, sans framework.",
    star: {
      situation:
        "Projet noté de programmation web, en binôme, avec des contraintes strictes : jQuery sans CDN, SASS, aucun framework, des classes imposées et des données qui viennent d’un fichier JSON.",
      tache:
        "Livrer une application complète, qui s’adapte à tous les écrans et se prend en main facilement.",
      action:
        "Avec mon binôme, j’ai écrit le JavaScript autour des classes imposées, la recherche, le tri et les filtres, et le style SASS adapté aux petits écrans. Des tests automatiques vérifient le code, et nous avons travaillé par petits commits réguliers sur GitHub.",
      resultat:
        "Une application utilisable sur ordinateur comme sur téléphone, avec près de 900 images. Sur les 136 commits du projet, 112 sont les miens, d’après l’historique Git.",
      chiffre: null,
    },
    organisation: "Binôme",
    duree: "4 semaines (17 mars au 12 avril 2026)",
    livrables: ["Application web", "Tests automatiques", "Code SASS"],
    media: [],
    liens: [{"label": "Dépôt GitHub", "href": "https://github.com/Tx-diloxi/Pok-mon"}],
  },

  {
    id: "p-galette",
    ref: "Stage de 2ᵉ année",
    titre: "Site vitrine J’aime la Galette",
    sousTitre: "Un site complet pour un producteur de crêpes et galettes bretonnes",
    periode: "BUT 2, stage",
    annee: "2026",
    competences: ["c1","c3","c4","c2"],
    motsCle: ["PHP","MySQL","Docker","SEO","Performance","Mise en ligne"],
    resume:
      "Le site d’un producteur de crêpes et galettes bretonnes : une douzaine de pages, un espace d’administration et la mise en ligne sur un hébergement mutualisé.",
    star: {
      situation:
        "Pendant mon stage de 2ᵉ année, le groupe J’aime la Galette, producteur artisanal de crêpes et de galettes bretonnes (marques J’aime la Galette et Be Good’n), avait besoin d’un site vitrine. Ses équipes devaient pouvoir le faire vivre sans toucher au code.",
      tache:
        "Réaliser le site de A à Z : les pages publiques, un espace d’administration pour les équipes, et sa mise en ligne.",
      action:
        "J’ai construit les pages en PHP à partir de 30 morceaux réutilisables, alimentés par une base de 61 tables, le tout dans Docker. L’espace d’administration permet de gérer les produits, les marques, les sites de production, la FAQ, les offres d’emploi, les candidatures, les messages de contact et le contenu des pages. Pour la vitesse, j’ai converti les images en WebP, activé le cache et la compression, et chargé la carte seulement quand on en a besoin. J’ai aussi travaillé le référencement, l’accessibilité, les pages légales, la protection des CV des candidats et l’envoi des formulaires par e-mail. Enfin, j’ai écrit un script et un guide pour la mise en ligne sur un hébergement LWS.",
      resultat:
        "Un site de 14 pages avec un espace d’administration complet, prêt à être publié par les équipes grâce au guide pas à pas, avec le HTTPS obligatoire en production. 28 commits sur le dépôt.",
      chiffre: null,
    },
    organisation: "Seul sur le développement",
    duree: "⟨À REMPLIR : durée du stage⟩",
    livrables: ["Site PHP et espace d’administration","Base MySQL (schéma et données)","Environnement Docker","Guide de mise en ligne","Documentation d’utilisation"],
    media: [],
    liens: [{"label": "Dépôt GitHub", "href": "https://github.com/Tx-diloxi/SITE-GALETTE"}],
  },

  {
    id: "p-ticketing",
    ref: "R4.01",
    titre: "Gestion de tickets",
    sousTitre: "Une API propre, découpée pour être testée et modifiée sans casse",
    periode: "BUT 2, semestre 4",
    annee: "2026",
    competences: ["c1"],
    motsCle: ["Python", "FastAPI", "Architecture hexagonale", "Tests automatiques"],
    resume:
      "Une application de gestion de tickets organisée en couches indépendantes, avec des tests à chaque niveau.",
    star: {
      situation:
        "Le cours part d’un projet de départ fourni par l’enseignant, à compléter en respectant une architecture où les règles métier ne dépendent d’aucune technique.",
      tache:
        "Ajouter les fonctions de l’application (créer, assigner et démarrer un ticket, créer un utilisateur) sans mélanger règles métier, base de données et web.",
      action:
        "J’ai séparé le métier (les règles et les cas d’usage) des branchements techniques (API web, base SQLite). Chaque cas d’usage a ses tests, des plus petits jusqu’au test de bout en bout, et des outils contrôlent la qualité du code à chaque commit.",
      resultat:
        "Une API testée sur 12 fichiers de tests, conçue pour qu’on puisse changer la base ou la partie web sans toucher aux règles métier.",
      chiffre: null,
    },
    organisation: "Seul",
    duree: "Environ 11 semaines (janvier à mars 2026)",
    livrables: ["API REST", "Tests automatiques", "Documentation d’architecture"],
    media: [],
    liens: [{"label": "Dépôt GitHub", "href": "https://github.com/Tx-diloxi/ticketing"}],
  },

  {
    id: "p-bench",
    ref: "R5.A.04",
    titre: "Chercher vite : trois méthodes mesurées",
    sousTitre: "Un facteur 580 entre la méthode simple et la méthode maline",
    periode: "BUT 3, semestre 5",
    annee: "2026",
    competences: ["c2"],
    motsCle: ["C", "Complexité", "Mesure de performance", "Arbre binaire de recherche"],
    resume:
      "Trois façons de retrouver un élément dans une liste, chronométrées. Sur 20 000 éléments, la plus simple est environ 580 fois plus lente que la dichotomie.",
    star: {
      situation:
        "Trois méthodes de recherche existent : parcourir les éléments un à un, couper la liste en deux à chaque étape, ou utiliser un arbre binaire de recherche. La théorie dit laquelle gagne, mais il fallait le vérifier.",
      tache:
        "Mesurer le temps de chaque méthode pour différentes tailles de données, puis comparer les résultats aux prévisions.",
      action:
        "J’ai écrit un programme en C qui chronomètre chaque méthode sur des listes de plus en plus longues, et enregistre les temps dans un fichier de résultats.",
      resultat:
        "Pour 20 000 éléments : 1,49 × 10⁻⁵ s pour la recherche un à un, 2,56 × 10⁻⁸ s pour la dichotomie et 2,30 × 10⁻⁸ s pour l’arbre. La recherche simple est environ 580 fois plus lente que la dichotomie.",
      chiffre: null,
    },
    organisation: "TP encadré",
    duree: "Un TP",
    livrables: ["Programme C", "Fichier de mesures"],
    media: [],
    liens: [],
  },

  {
    id: "p-spring",
    ref: "R5.A.08",
    titre: "Itinéraire le plus court",
    sousTitre: "Une API de calcul d’itinéraire, améliorée jusqu’à l’algorithme A*",
    periode: "BUT 3, semestre 5",
    annee: "2026",
    competences: ["c2", "c1"],
    motsCle: ["Java", "Spring Boot", "A*", "Tests", "Intégration continue"],
    resume:
      "Une API web qui calcule le plus court chemin sur un graphe, améliorée étape par étape jusqu’à l’algorithme A*.",
    star: {
      situation:
        "Le TD part d’une base d’API fournie par l’enseignant, à améliorer pas à pas sur la qualité du code et sa vitesse.",
      tache:
        "Améliorer le code par petites étapes, chacune validée, jusqu’à un calcul d’itinéraire plus rapide.",
      action:
        "En 16 étapes (commits) : création des sommets et des arcs, prise en compte de la forme réelle des routes, indexation des arcs, chargement plus rapide du graphe, extraction d’un constructeur d’arbre de chemins, puis algorithme A* et choix de la méthode de calcul directement dans l’API.",
      resultat:
        "Une API qui calcule un itinéraire avec A*, dans un projet testé avec JUnit. ⟨À REMPLIR : le gain de temps mesuré, avant et après⟩",
      chiffre: null,
    },
    organisation: "Seul",
    duree: "Une semaine (25 septembre au 1er octobre 2026)",
    livrables: ["API Java Spring Boot", "Tests automatiques"],
    media: [],
    liens: [],
  },

  {
    id: "p-stage-suivi",
    ref: "Projet personnel",
    titre: "Suivi de mes candidatures de stage",
    sousTitre: "Un outil pour ne laisser passer aucune relance",
    periode: "BUT 2, décembre 2025",
    annee: "2025",
    competences: ["c4", "c1"],
    motsCle: ["PHP", "PostgreSQL", "MVC"],
    resume:
      "Mon propre tableau de bord pour suivre mes candidatures : entreprises visées, contacts, étapes et relances.",
    star: {
      situation:
        "Je cherchais un stage et je ciblais 72 entreprises. Je voulais savoir à tout moment où en était chaque candidature.",
      tache:
        "Créer un petit outil qui garde les entreprises, les contacts, les candidatures, les documents et l’historique.",
      action:
        "J’ai conçu la base PostgreSQL (entreprises, contacts, candidatures avec leur étape et leur date de relance, documents, historique), puis codé l’application en PHP selon le modèle MVC, avec un tableau de bord qui compte les candidatures par étape.",
      resultat:
        "Un outil fonctionnel, écrit en une semaine, que j’ai rempli avec mes 72 entreprises ciblées.",
      chiffre: null,
    },
    organisation: "Seul",
    duree: "Une semaine (9 au 16 décembre 2025)",
    livrables: ["Application PHP", "Base PostgreSQL"],
    media: [],
    liens: [{"label": "Dépôt GitHub", "href": "https://github.com/Tx-diloxi/STAGE"}],
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

];

export const parId = Object.fromEntries(projets.map((p) => [p.id, p]));

/** Les projets rattachés à une compétence, dans l’ordre du tableau. */
export function projetsDe(competenceId) {
  return projets.filter((p) => p.competences.includes(competenceId));
}
