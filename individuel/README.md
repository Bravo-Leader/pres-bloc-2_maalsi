# Présentation — Piloter un portefeuille, pas onze projets

Support de restitution du travail individuel d'évaluation de bloc, orienté
**gestion de portefeuille** : pourquoi créer une PMO, pourquoi un Responsable
PMO au sein de la cellule, et ce que les instruments rendent décidable.
**21 slides**, architecture modulaire (une slide = un fichier HTML). Calibré
pour une restitution de **10 minutes**.

Une seconde version, au style différent (fichier unique, sans serveur), est
disponible dans `../individuel-v2/`.

## Lancer

Un serveur HTTP est nécessaire (les slides sont chargées par `fetch`) :

```bash
# Node (Python n'est pas requis)
npx serve ..
# puis ouvrir http://localhost:3000/individuel/
```

## Naviguer

| Action | Commande |
|---|---|
| Slide suivante / précédente | `→` / `←`, ou les boutons en haut à droite |
| Aller à une slide | clic sur les pastilles en bas |
| Plein écran | touche `F` (ou premier clic dans la page) |
| Changer de thème | bouton 🎨 — 8 thèmes disponibles |
| Zoomer un schéma | clic sur l'icône de zoom d'un diagramme |
| Glossaire | survol (ou focus) d'un terme souligné en pointillés — touche `G` pour masquer les infobulles |

Les définitions des infobulles sont dans `js/glossaire.js` (même liste que
`../oral/glossaire.md`). Le dossier `../oral/` contient le kit de préparation
de l'oral : conformité à la grille, notes de parole, script complet,
questions du jury, glossaire — et `kit-oral.html` qui les rassemble.

## Plan — 21 slides, calibré pour 10 minutes

Environ 30 secondes par slide. Une idée par slide, peu de texte.

| # | Slide | Bloc |
|---|---|---|
| 1 | Titre | — |
| 2 | Le portefeuille en quatre chiffres | Contexte |
| 3 | Ce n'est pas un problème de projets | Contexte |
| 4 | Pourquoi créer une PMO ? | Pourquoi une PMO |
| 5 | Ce que la PMO fait — et ne fait pas | Pourquoi une PMO |
| 6 | Pourquoi un Responsable PMO au sein de la cellule ? | Pourquoi une PMO |
| 7 | Mon mandat | Pourquoi une PMO |
| 8 | Arbitrer au nom de quoi : la stratégie SI | Les instruments |
| 9 | La vraie contrainte : la capacité | Les instruments |
| 10 | Instrument n°1 — le référentiel | Les instruments |
| 11 | Le contrat documentaire — Office 365 en instancie 14 sur 26 | Les instruments |
| 12 | Instrument n°2 — la grille : 6 critères | Les instruments |
| 13 | Le classement stratégique | Les instruments |
| 14 | Et si on classait à la rentabilité seule ? | Les instruments |
| 15 | Ce que seule la lecture du portefeuille révèle | Le pilote |
| 16 | Le pilote Office 365 en une page | Le pilote |
| 17 | Le risque qui dépasse le projet | Le pilote |
| 18 | De l'indicateur à la décision | Le pilote |
| 19 | Clore proprement — et rendre le suivant meilleur | Le pilote |
| 20 | Prouver que la PMO produit des effets | Décision |
| 21 | Ce que je demande (a, b) | Décision |

## Cohérence avec le dossier rendu

- Le référentiel compte **26 modèles vierges** (`02_referentiel_templates_vides/`).
- Le dossier PMP Office 365 (`03_dossier_pmp_office365/`) en instancie **14** :
  P1-01, P1-02, P1-03, P1-04, P2-05, P2-06, P2-07, P2-08, P2-09, P2-10, P4-16,
  P5-19, P5-20, P5-23. Les 12 autres restent prévus pour Office 365 ; la
  slide 11 explique pourquoi ils n'ont pas été utilisés cette fois-ci :
  9 pas encore réalisés (6 documents de vie produits pendant l'exécution,
  3 documents de clôture produits à J6), 2 pas encore mis en place
  (cahier des charges P1-02ter, plan de conduite du changement P2-11),
  1 pas nécessaire (PBS).
- Le point (c) de l'ancienne slide de conclusion (« trancher trois points ») a
  été retiré : la demande se limite à (a) la confirmation dans le rôle de
  Responsable PMO et (b) le caractère obligatoire du référentiel.

## Structure

```
individuel/
├── index.html            # coquille : navigation, thèmes, zoom
├── slides/
│   ├── index.json        # index des 21 slides
│   └── slide-NN-*.html   # une slide par fichier
├── css/                  # 8 modules (variables, base, slides, layouts,
│                         #   composants, navigation, zoom, thèmes)
└── js/                   # 6 modules ES6 (main, slideLoader, slideManager,
                          #   indicatorManager, inputManager, zoomManager)
```

**Ajouter une slide** : créer `slides/slide-22-xxx.html` (structure
`.slide > .slide-header + .slide-content + .slide-footer`), puis
l'ajouter à `slides/index.json` et incrémenter `total`.

Moteur de présentation repris du support de groupe, contenu entièrement
réécrit pour le travail individuel.
