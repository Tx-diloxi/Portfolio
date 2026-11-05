# Analyse d'accessibilité et de parcours utilisateur

Date de l'analyse : 5 novembre 2026 · Version analysée : site en développement (`npm run dev`), Chrome intégré.
Mise à jour le même jour : les points 1 à 6 du plan de correction (section 10) sont corrigés et revérifiés.

## Méthode et référentiels

- **WCAG 2.2, niveaux A et AA** : la référence internationale, sur laquelle s'appuie aussi la loi européenne sur l'accessibilité.
- **RGAA 4.1** : la déclinaison française, utile pour un site d'étudiant en France.
- **Patterns WAI-ARIA (APG)** pour la fenêtre de dialogue et les liens de navigation.
- **Parcours utilisateur** : le site est lu comme le ferait un jury pendant un oral de 5 minutes (heuristiques de Nielsen : repères, retour, cohérence, prévention des erreurs).

Ces référentiels sont ceux que je connais. Je ne les ai pas rechargés depuis le web pour cette analyse. Les mesures (contrastes, tailles, focus, reflux) ont été faites en direct dans le navigateur. Les points qui dépendent d'un lecteur d'écran réel (NVDA, VoiceOver) n'ont pas été testés.

Légende : ✅ conforme · ⚠️ à améliorer · ❌ à corriger.

## Résultat en un coup d'œil

Le site a de bonnes bases (langue, titres, contrastes du texte, focus visible, modales, formulaire, préférences de mouvement). Les cinq défauts relevés à la première analyse sont **corrigés et revérifiés dans le navigateur** :

1. ✅ **Lien d'évitement** ajouté : « Aller au contenu » apparaît au premier Tab et place le focus sur `<main>`. La touche Tab suivante arrive directement sur le premier élément du contenu.
2. ✅ **Lien « Scroll »** sorti du bloc `aria-hidden` (seul le compteur « 1 / 7 » reste masqué) et nommé « Défiler vers les compétences ». Aucun élément `aria-hidden` ne contient plus d'élément focusable.
3. ✅ **Boutons « + »** : tant qu'ils ne sont pas à l'écran, ils sont hors de la tabulation et masqués aux lecteurs d'écran. Au chargement, seuls les 3 « + » du héros sont atteignables sur 17.
4. ✅ **Niveau d'acquisition** : le niveau est écrit en toutes lettres à côté de la barre, qui porte `role="meter"` avec une valeur lisible ; la barre est plus foncée (3,3:1 sur sa piste).
5. ✅ **Modales** nommées par leur titre (`aria-labelledby`).
6. ✅ **Étape active annoncée** (`aria-current`) et titre principal avec un espace avant le saut de ligne.

Reste ouvert : un test avec un lecteur d'écran réel, le bouton pour figer l'animation, le nombre de `⟨À REMPLIR⟩` encore visibles et les points marqués ⚠️ ci-dessous.

## 1. Structure et sémantique

| Critère | État | Constat |
|---|---|---|
| Langue de la page | ✅ | `lang="fr"` |
| Titre de page | ✅ | « Marceau LE SECH — Portfolio BUT Informatique » |
| Hiérarchie des titres | ✅ | un `h1`, des `h2` par section, des `h3` par carte, sans saut de niveau |
| Landmarks | ⚠️ | un `main`, deux `nav` nommés (« Sections », « Étapes »). Pas de `header`/`footer` de page, et les sections n'ont pas de nom (`aria-labelledby`) |
| Nom du `h1` | ✅ | « Marceau LE SECH » : un espace précède le saut de ligne |
| Images | ✅ | 0 image sans `alt` ; la scène 3D est `aria-hidden` |
| Boutons et liens sans nom | ✅ | aucun (carrés de navigation nommés par `aria-label`) |
| État courant de la navigation | ✅ | l'étape active porte `aria-current="true"` (carrés et barre d'étapes) |
| Contenu sans JavaScript | ⚠️ | les cartes sont générées en JS ; un `<noscript>` prévient mais le contenu manque |

## 2. Clavier et focus

| Critère | État | Constat |
|---|---|---|
| Tout est utilisable au clavier | ✅ | boutons et liens natifs, aucun `tabindex` positif, aucun piège |
| Focus visible (2.4.7) | ✅ | contour de 2 px couleur encre, décalé de 4 px, contraste d'environ 12:1 |
| Lien d'évitement (2.4.1) | ✅ | « Aller au contenu » est le premier élément focusable, visible au focus ; il déplace le focus sur `<main>` (testé au clavier) |
| Éléments `aria-hidden` focusables | ✅ | le lien « Scroll » n'est plus dans un conteneur masqué ; aucun élément `aria-hidden` ne contient d'élément focusable |
| Éléments invisibles focusables | ✅ | les « + » sont en `tabindex="-1"` et `aria-hidden` tant qu'ils ne sont pas à l'écran (leur contenu existe aussi dans les cartes et les liens) |
| Focus non masqué (2.4.11, WCAG 2.2) | ⚠️ | la barre d'étapes fixe en bas du mobile peut recouvrir l'élément focalisé : ajouter `scroll-padding-bottom` |
| Défilement lissé | ✅ | Lenis lisse la molette. Le clavier, les ancres et la tabulation gardent le défilement natif |

## 3. Fenêtres modales (dialogues)

| Critère | État | Constat |
|---|---|---|
| Élément natif `<dialog>` | ✅ | piège du focus, arrière-plan inerte, touche Échap |
| Focus à l'ouverture | ✅ | arrive sur le bouton « Fermer » |
| Focus à la fermeture | ✅ | revient sur l'élément qui l'a ouverte (testé) |
| Fermeture | ✅ | bouton, Échap, clic à l'extérieur, geste vers le bas sur mobile (le geste a une alternative simple, WCAG 2.5.1) |
| Nom accessible | ✅ | `aria-labelledby` vers le titre de la fiche (testé : « Administrer ») |
| Défilement de la page bloqué | ✅ | Lenis est arrêté pendant l'ouverture |

## 4. Formulaire de contact

| Critère | État | Constat |
|---|---|---|
| Étiquettes visibles | ✅ | `<label for>` sur les trois champs |
| Aide à la saisie (1.3.5) | ✅ | `autocomplete="name"` et `"email"` |
| Champs obligatoires | ✅ | la mention « Tous les champs sont obligatoires » précède le formulaire |
| Identification des erreurs (3.3.1) | ✅ | chaque champ invalide porte `aria-invalid="true"` et un message écrit relié par `aria-describedby` (« Indiquez votre nom », « Adresse email invalide, par exemple nom@domaine.fr »…) ; le message disparaît quand on corrige ; la bordure rouge n'est plus le seul indice |
| Retour d'état | ✅ | zone `aria-live="polite"` (« 3 champs sont à corriger », réussite, échec) ; le focus passe au premier champ invalide |
| Anti-spam | ✅ | champ piège caché (`aria-hidden`, `tabindex=-1`), pas de CAPTCHA |
| Sans quitter la page | ✅ | l'envoi garde le contexte |

## 5. Couleurs et contrastes

Mesures faites avec les couleurs réelles (papier `#efeeec`, encre `#2b2b2b`).

| Élément | Contraste | Seuil | État |
|---|---|---|---|
| Texte principal sur papier | 12,2:1 | 4,5:1 | ✅ |
| Texte secondaire (encre à 72 %) | 5,3:1 | 4,5:1 | ✅ |
| Vert foncé du texte (`#2e7a4d`) sur papier | 4,5:1 | 4,5:1 | ✅ (limite) |
| Texte sombre sur bouton vert | 7,2:1 | 4,5:1 | ✅ |
| Message d'erreur rouge | 5,7:1 | 4,5:1 | ✅ |
| Bordures des cartes et champs | 5,0:1 | 3:1 | ✅ |
| Glyphe « + » vert foncé sur blanc | 5,2:1 | 3:1 | ✅ |
| Barre de niveau (vert foncé sur sa piste) | 3,3:1 | 3:1 | ✅ (corrigé, était 1,3:1) |
| Texte encre sur trait vert de l'arbre | 7,5:1 | 4,5:1 | ✅ |
| Texte secondaire sur trait vert profond | 4,1:1 | 4,5:1 | ⚠️ cas limite |

Notes :
- Le texte se pose sur le dessin de l'arbre. Le dessin s'efface de 62 % derrière le texte des sections, ce qui limite le cas limite à de fins traits.
- Le vert `#6fcf97` seul sur papier fait 1,6:1. Il ne porte aucune information : les états importants (carré actif plein, contour de focus) ne dépendent pas de lui.
- Les préférences `prefers-contrast: more` (bordures plus nettes, gris renforcé) et `prefers-reduced-transparency` (flou supprimé) sont prises en charge. Pas de style pour le mode « Contraste forcé » de Windows : les bordures sont de vraies bordures, donc l'essentiel reste visible.

## 6. Informations transmises par la couleur ou la forme seules

| Élément | État | Constat |
|---|---|---|
| Niveaux d'acquisition du bilan | ✅ | le niveau est écrit à côté de la barre (« acquis », « en cours d'acquisition »), et la barre est un `role="meter"` avec `aria-valuetext` |
| Étape active | ✅ | carré plein et `aria-current` |
| Champ invalide | ✅ | bordure rouge + message écrit par champ |

## 7. Taille des cibles et reflux

| Critère | État | Constat |
|---|---|---|
| Cibles d'au moins 24 px (2.5.8, WCAG 2.2 AA) | ✅ | carrés de navigation 12 px visibles mais 44 px de zone cliquable ; « + » 32 px (+ marge) ; filtres 32 px ; boutons 50 px |
| Confort tactile (44 px) | ✅ | les filtres passent à 44 px sur écran tactile |
| Reflux à 320 px (1.4.10) | ✅ | pas de défilement horizontal |
| Espacement du texte (1.4.12) | ⚠️ | avec interligne 1,5, lettres +0,12 em et mots +0,16 em, la page déborde de quelques dizaines de pixels (titre du héros) |
| Unités | ✅ | polices en `rem`, 16 px de base, interligne 1,6 |
| Orientation, zoom | ✅ | pas de blocage du zoom ni de l'orientation |

## 8. Mouvement et préférences

| Critère | État | Constat |
|---|---|---|
| `prefers-reduced-motion` | ✅ | le vent des feuilles est coupé, l'arbre apparaît d'emblée, la caméra ne vole plus : elle saute d'une étape à l'autre avec un fondu, les entrées ne s'animent plus, le défilement lissé est désactivé |
| Pas de clignotement | ✅ | aucun flash |
| Mouvement automatique (2.2.2, A) | ⚠️ | le balancement des feuilles dure plus de 5 secondes sans bouton pour l'arrêter. Il est discret et s'arrête avec la préférence système, mais un bouton « Figer l'animation » rendrait le site pleinement conforme |
| Animations d'interface | ✅ | durées courtes (0,2 à 0,45 s), une seule courbe |
| Repli sans WebGL | ✅ | le contenu reste lisible et utilisable, seule la scène disparaît |
| Machines lentes | ✅ | le feuillage s'éclaircit automatiquement, et la 3D se met en pause derrière une fenêtre modale ou dans un onglet masqué |

## 9. Parcours utilisateur

Le site est lu comme un jury pendant un oral de 5 minutes.

**Ce qui fonctionne**
- L'ordre des sections suit la trame de l'oral : situation, compétences communes, compétences du parcours, preuves, bilan, après le BUT. Chaque section affiche son étape de l'arbre et ses compétences (« Les racines · C3 · C4 · C5 »).
- Trois chemins mènent au même contenu : le défilement, les carrés de navigation, les « + » sur l'arbre. Sur mobile, une barre d'étapes en bas remplace les carrés.
- Un compteur « 3 / 7 » donne la position. Retour possible à tout moment par la navigation.
- Les fiches projet suivent le format STAR et se renvoient vers les compétences concernées (et inversement).
- Le formulaire de contact et les liens (GitHub, LinkedIn, CV) sont à la dernière étape et dans le héros.

**Points d'attention**
- ⚠️ **Contenu à finir.** 65 passages `⟨À REMPLIR⟩` sont encore visibles, y compris dans des titres de cartes : un lecteur d'écran les lit tels quels, et le jury les verrait. C'est le premier point à régler avant l'oral.
- ⚠️ **Noms des carrés de navigation.** Ils n'ont pas de libellé visible sur ordinateur (nom en infobulle seulement). Un libellé au survol et au focus faciliterait le repérage.
- ⚠️ **Liens externes.** GitHub, LinkedIn et l'email s'ouvrent dans un nouvel onglet sans le dire. Ajouter « (nouvel onglet) » dans le nom accessible.
- ⚠️ **Statut « Alternant·e ».** À confirmer dans `profil.js` : l'écriture épicène avec point médian est mal lue par certains lecteurs d'écran.
- ⚠️ **Découverte des « + ».** Ils n'apparaissent qu'à l'étape voisine ; sur mobile, ils ne sont visibles que dans le héros (les cartes prennent le relais ailleurs).

## 10. Plan de correction

| # | Correction | État |
|---|---|---|
| 1 | Lien d'évitement vers `#main` | ✅ fait |
| 2 | Lien « Scroll » sorti du bloc `aria-hidden` | ✅ fait |
| 3 | « + » masqués hors de la tabulation | ✅ fait |
| 4 | Barre de niveau : texte, `role="meter"`, couleur plus foncée | ✅ fait |
| 5 | Nom accessible des modales, `aria-current`, espace dans le `h1` | ✅ fait |
| 6 | Formulaire : `aria-invalid`, erreur par champ, « obligatoire » visible | ✅ fait |
| 7 | Bouton « Figer l'animation » (arrête la 3D en mouvement) | à faire (20 min) |
| 8 | Remplir ou masquer les `⟨À REMPLIR⟩` | à faire, selon le contenu |
| 9 | Test avec un lecteur d'écran réel (NVDA sur Windows, VoiceOver sur Mac) | à faire (1 h) |
| 10 | Espacement du texte (1.4.12) : éviter le léger débordement du titre du héros | à faire (10 min) |

Les points 1 à 6 étaient les défauts bloquants pour viser le niveau **AA de WCAG 2.2**. Ils sont corrigés et vérifiés dans le navigateur (structure, ordre de tabulation, formulaire, modale). Une vraie déclaration de conformité RGAA suppose en plus un test sur lecteur d'écran et une vérification page par page, ce qui dépasse le cadre de cette analyse.
