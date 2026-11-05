/**
 * Les six compétences du BUT Informatique — libellés, définitions et
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
    titre: "Qu'est-ce qui doit tenir debout, et tout seul ?",
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
      'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux, et optimiser le système informatique d’une organisation.',
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
    projets: ['p-infra'],
    /** Mon auto-évaluation de l'acquisition. */
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR⟩ — en what niveau es-tu vraiment sur les 4 AC ? Cite une réalisation précise.⟩',
    },
    /** Ce que cette compétence m'a appris, hors preuves. */
    apports:
      '⟨À REMPLIR⟩ — une phrase. Qu’est-ce que l’infrastructure t’a appris qu’aucune cours ne t’aurait appris ?⟩',
  },

  {
    id: 'c4',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: 'Quelle donnée a permis quelle décision ?',
    num: '04',
    cam: 2,
    motCle: 'Gérer',
    slug: 'gerer',
    parcours: 'commune',
    level3:
      'Administrer une base de données, concevoir et réaliser des systèmes d’informations décisionnels',
    definition:
      'Concevoir, gérer, administrer et exploiter les données de l’entreprise et mettre à disposition toutes les informations pour un bon pilotage de l’entreprise.',
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
    projets: ['p-donnees'],
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR⟩ — quelle décision métier tes données ont-elles permise de prendre ?⟩',
    },
    apports:
      '⟨À REMPLIR⟩ — une phrase. Le lien entre la donnée et une décision concrète.⟩',
  },

  {
    id: 'c5',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: "Qu'ai-je décidé quand le planning a bougé ?",
    num: '05',
    cam: 3,
    motCle: 'Conduire',
    slug: 'conduire',
    parcours: 'commune',
    level3: 'Participer à la conception et à la mise en œuvre d’un projet système d’information',
    definition:
      'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.',
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
    projets: ['p-pilotage'],
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR⟩ — quelle décision as-tu prise seul·e en alternance, avec ses conséquences ?⟩',
    },
    apports:
      '⟨À REMPLIR⟩ — une phrase. Pilotage : ce que tu fais quand le planning ou le périmètre bouge.⟩',
  },

  {
    id: 'c1',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: "Qu'ai-je livré, et qui l'utilise aujourd'hui ?",
    num: '01',
    cam: 4,
    motCle: 'Réaliser',
    slug: 'realiser',
    parcours: 'parcours-a',
    level3: 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)',
    definition:
      'Développer — c’est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.',
    acs: [
      { code: 'AC31.01', texte: 'Choisir et implémenter les architectures adaptées' },
      { code: 'AC31.02', texte: 'Faire évoluer une application existante' },
      {
        code: 'AC31.03',
        texte: 'Intégrer des solutions dans un environnement de production',
      },
    ],
    edges: ['c2', 'c4', 'c5', 'c6', 'c3'],
    projets: ['p-sae-105', 'p-sae-101', 'p-appli-entreprise'],
    acr: {
      level: 'acquis',
      label: 'Acquis',
      note: '⟨À REMPLIR⟩ — quelle application en entreprise es-tu fier·e delivrer, et pourquoi elle est propre ?⟩',
    },
    apports:
      '⟨À REMPLIR⟩ — une phrase. Ce que tu fais différemment depuis le début du BUT.⟩',
  },

  {
    id: 'c2',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: 'Combien ont gagné mes optimisations ?',
    num: '02',
    cam: 5,
    motCle: 'Optimiser',
    slug: 'optimiser',
    parcours: 'parcours-a',
    level3: 'Analyser et optimiser des applications',
    definition:
      'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d’exécution, précision, consommation de ressources…',
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
    projets: ['p-sae-102', 'p-perf'],
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR⟩ — quelle optimisation as-tu **mesurée** ? Chiffre avant / après, sinon ce n’est pas démontré.⟩',
    },
    apports:
      '⟨À REMPLIR⟩ — une phrase. Mesurer avant d’optimiser : ce que ça change dans ta façon de travailler.⟩',
  },

  {
    id: 'c6',
    /** Un titre court, en question. L'intitulé officiel du niveau 3
     *  reste affiché séparément : il est long, il ne fait pas un titre. */
    titre: "Comment ai-je fait avancer l'équipe ?",
    num: '06',
    cam: 6,
    motCle: 'Collaborer',
    slug: 'collaborer',
    parcours: 'parcours-a',
    level3: 'Manager une équipe informatique',
    definition:
      'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
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
    projets: ['p-sae-106', 'p-equipe-entreprise'],
    acr: {
      level: 'encours',
      label: 'En cours d’acquisition',
      note: '⟨À REMPLIR⟩ — un désaccord avec un·e collègue et comment tu l’as résolu. Un exemple, pas une généralité.⟩',
    },
    apports:
      '⟨À REMPLIR⟩ — une phrase. Ce que tu fais différemment dans une équipe depuis ton passage en entreprise.⟩',
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
