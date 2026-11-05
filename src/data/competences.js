/**
 * Les six compétences du BUT Informatique : libellés, définitions et
 * apprentissages critiques repris du programme national (niveau 3).
 *
 * Source officielle : annexe du BUT Informatique, IUT de Lannion.
 * https://www.enseignementsup-recherche.gouv.fr/ (annexe-2, licence pro BUT)
 *
 * L'ordre du tableau suit volontairement la grille d'évaluation du portfolio
 * (parcours A) : les trois compétences communes d'abord, puis les trois
 * compétences de parcours. L'index `cam` pilote l'état de caméra 3D.
 *
 * Ce fichier est importé à la fois par le plugin de build (Node) et par le
 * navigateur : il ne doit contenir aucun import.
 */

/** Les trois compétences communes aux deux parcours. */
export const COMMUNES = ['c3', 'c4', 'c5'];
/** Les trois compétences spécifiques du parcours A. */
export const PARCOURS_A = ['c1', 'c2', 'c6'];

export const competences = [
  {
    id: 'c3',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: 'Des systèmes qui tiennent debout tout seuls',
    num: '03',
    cam: 1,
    /** Le mot-clé imposé par la consigne. */
    motCle: 'Administrer',
    slug: 'administrer',
    parcours: 'commune',
    /** Intitulé officiel du niveau 3. */
    level3:
      'Faire évoluer et maintenir un système informatique communicant en conditions opérationnelles',
    /** Définition de la compétence, valable tous niveaux. */
    definition:
      'Installer, régler et surveiller les serveurs, les réseaux et les services d’une organisation, pour que tout fonctionne et reste sûr au quotidien.',
    acs: [
      {
        code: 'AC33.01',
        texte: 'Créer des processus de traitement automatisé (gestion de configuration et de parc, intégration et déploiement continu)',
      },
      {
        code: 'AC33.02',
        texte: 'Configurer un serveur et des services réseau de manière avancée (virtualisation)',
      },
      {
        code: 'AC33.03',
        texte: 'Appliquer une politique de sécurité au niveau de l’infrastructure',
      },
      {
        code: 'AC33.04',
        texte: 'Déployer et maintenir un réseau d’organisation en fonction de ses besoins',
      },
    ],
    /** Compétences reliées dans le réseau 3D : une arête = un projet commun. */
    edges: ['c1', 'c6'],
    /** Preuves : identifiants de projets, voir projets.js */
    projets: [],
    /** Mon auto-évaluation de l'acquisition. */
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR : mon vrai niveau sur les 4 AC, avec une réalisation précise⟩',
    },
    /** Ce que cette compétence m'a appris, hors preuves. */
    apports:
      '⟨À REMPLIR : ce que l’infrastructure m’a appris qu’aucun cours ne m’aurait appris⟩',
  },

  {
    id: 'c4',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: 'Des données qui font prendre les bonnes décisions',
    num: '04',
    cam: 2,
    motCle: 'Gérer',
    slug: 'gerer',
    parcours: 'commune',
    level3:
      'Administrer une base de données, concevoir et réaliser des systèmes d’informations décisionnels',
    definition:
      'Organiser, stocker et exploiter les données d’une entreprise, pour aider ses responsables à prendre de bonnes décisions.',
    acs: [
      {
        code: 'AC34.01',
        texte: 'Capturer et stocker des ensembles volumineux et complexes de données hétérogènes',
      },
      { code: 'AC34.02', texte: 'Préparer et extraire les données pour l’exploitation' },
      {
        code: 'AC34.03',
        texte: 'Appliquer des méthodes d’exploration et d’exploitation des données (apprentissage, informatique décisionnelle ou fouille de données)',
      },
      {
        code: 'AC34.04',
        texte: 'Mettre en production et optimiser le système de gestion de données de l’entreprise',
      },
    ],
    edges: ['c1'],
    projets: [],
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR : la décision métier que mes données ont permis de prendre⟩',
    },
    apports:
      '⟨À REMPLIR : le lien entre la donnée et une décision concrète⟩',
  },

  {
    id: 'c5',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: 'Garder le cap quand le planning bouge',
    num: '05',
    cam: 3,
    motCle: 'Conduire',
    slug: 'conduire',
    parcours: 'commune',
    level3: 'Participer à la conception et à la mise en œuvre d’un projet système d’information',
    definition:
      'Comprendre ce dont les utilisateurs ont besoin, puis organiser et piloter un projet informatique du début à la fin.',
    acs: [
      {
        code: 'AC35.01',
        texte: 'Mesurer les impacts économiques, sociétaux et technologiques d’un projet informatique',
      },
      {
        code: 'AC35.02',
        texte: 'Savoir intégrer un projet informatique dans le système d’information d’une organisation',
      },
      { code: 'AC35.03', texte: 'Savoir adapter un système d’information' },
    ],
    edges: ['c6', 'c1'],
    projets: [],
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR : une décision que j’ai prise en alternance, avec ses conséquences⟩',
    },
    apports:
      '⟨À REMPLIR : ce que je fais quand le planning ou le périmètre bouge⟩',
  },

  {
    id: 'c1',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: 'Du code livré, utilisé, maintenu',
    num: '01',
    cam: 4,
    motCle: 'Réaliser',
    slug: 'realiser',
    parcours: 'parcours-a',
    level3: 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)',
    definition:
      'Créer une solution informatique pour un client : l’imaginer, la programmer, la tester et la mettre en service.',
    acs: [
      { code: 'AC31.01', texte: 'Choisir et implémenter les architectures adaptées' },
      { code: 'AC31.02', texte: 'Faire évoluer une application existante' },
      {
        code: 'AC31.03',
        texte: 'Intégrer des solutions dans un environnement de production',
      },
    ],
    edges: ['c2', 'c4', 'c5', 'c6', 'c3'],
    projets: [],
    acr: {
      level: 'acquis',
      label: 'Acquis',
      note: '⟨À REMPLIR : l’application en entreprise dont je suis le plus fier, et pourquoi elle est propre⟩',
    },
    apports:
      '⟨À REMPLIR : ce que je fais autrement depuis le début du BUT⟩',
  },

  {
    id: 'c2',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: 'Des gains mesurés, pas supposés',
    num: '02',
    cam: 5,
    motCle: 'Optimiser',
    slug: 'optimiser',
    parcours: 'parcours-a',
    level3: 'Analyser et optimiser des applications',
    definition:
      'Rendre une application plus rapide, plus précise et plus économe, en mesurant ce qu’on gagne vraiment.',
    acs: [
      {
        code: 'AC32.01',
        texte: 'Anticiper les résultats de diverses métriques (temps d’exécution, occupation mémoire, montée en charge)',
      },
      { code: 'AC32.02', texte: 'Profiler, analyser et justifier le comportement d’un code existant' },
      {
        code: 'AC32.03',
        texte: 'Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d’application',
      },
    ],
    edges: ['c1'],
    projets: [],
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR : une optimisation **mesurée**, avec le chiffre avant / après⟩',
    },
    apports:
      '⟨À REMPLIR : mesurer avant d’optimiser, ce que ça change dans ma façon de travailler⟩',
  },

  {
    id: 'c6',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: 'Faire avancer l’équipe, pas seulement le code',
    num: '06',
    cam: 6,
    motCle: 'Collaborer',
    slug: 'collaborer',
    parcours: 'parcours-a',
    level3: 'Manager une équipe informatique',
    definition:
      'Savoir travailler efficacement en équipe : s’organiser, partager ce qu’on sait, accompagner le changement.',
    acs: [
      {
        code: 'AC36.01',
        texte: 'Organiser et partager une veille technologique et informationnelle',
      },
      {
        code: 'AC36.02',
        texte: 'Identifier les enjeux de l’économie de l’innovation numérique',
      },
      {
        code: 'AC36.03',
        texte: 'Guider la conduite du changement informatique au sein d’une organisation',
      },
      { code: 'AC36.04', texte: 'Accompagner le management de projet informatique' },
    ],
    edges: ['c1', 'c5', 'c3'],
    projets: [],
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR : un désaccord avec un collègue et comment je l’ai résolu. Un exemple, pas une généralité⟩',
    },
    apports:
      '⟨À REMPLIR : ce que je fais autrement en équipe depuis mon passage en entreprise⟩',
  },
];

export const parId = Object.fromEntries(competences.map((c) => [c.id, c]));

/** Les six entrées, dans l'ordre de la grille d'évaluation. */
export const ordreEvaluation = [
  ...COMMUNES.map((id) => parId[id]),
  ...PARCOURS_A.map((id) => parId[id]),
];

/** Arêtes du réseau, déduites des `edges` (dédupliquées). */
export function arees() {
  const set = new Set();
  for (const c of competences) {
    for (const autre of c.edges) {
      const cle = [c.id, autre].sort().join('|');
      set.add(cle);
    }
  }
  return [...set].map((cle) => cle.split('|'));
}
