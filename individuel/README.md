# Présentation — Superviser le portefeuille projets de la DSI

Support de restitution du travail individuel d'évaluation de bloc.
**16 slides**, architecture modulaire (une slide = un fichier HTML).

## Lancer

Un serveur HTTP est nécessaire (les slides sont chargées par `fetch`) :

```bash
cd presentation
python -m http.server 8000
# puis ouvrir http://localhost:8000/index.html
```

## Naviguer

| Action | Commande |
|---|---|
| Slide suivante / précédente | `→` / `←`, ou les boutons en haut à droite |
| Aller à une slide | clic sur les pastilles en bas |
| Plein écran | touche `F` (ou premier clic dans la page) |
| Changer de thème | bouton 🎨 — 8 thèmes disponibles |
| Zoomer un schéma | clic sur l'icône de zoom d'un diagramme |

## Plan

| # | Slide | Compétence |
|---|---|---|
| 1 | Titre | — |
| 2 | Contexte : un problème de portefeuille, pas de projets | — |
| 3 | Démarche : 4 questions, 6 livrables | — |
| 4 | Stratégie SI en 4 axes et contrainte capacitaire | C1 |
| 5 | Référentiel documentaire : 26 modèles, 5 phases | C1 |
| 6 | Contrat documentaire : matrice projets × livrables | C1 |
| 7 | Grille de priorisation : 6 critères pondérés | C1 |
| 8 | Tableau de bord n°1 — priorisation stratégique | C1 |
| 9 | Tableau de bord n°2 — rentabilité seule et sa divergence | C1 |
| 10 | Trois lectures radar (SVG natif) | C1 |
| 11 | Choix du projet Office 365 et cadrage | C2 |
| 12 | Plan de management (1/2) : objectifs, WBS, planning | C2 |
| 13 | Plan de management (2/2) : budget, risques, communication | C2 |
| 14 | Tableau de bord de suivi et décision d'arbitrage | C2 |
| 15 | Recette, PV et documents de clôture | C3 |
| 16 | Capitalisation, mesure de l'impact et conclusion | C3 |

## Structure

```
presentation/
├── index.html            # coquille : navigation, thèmes, zoom
├── slides/
│   ├── index.json        # index des 16 slides
│   └── slide-NN-*.html   # une slide par fichier
├── css/                  # 8 modules (variables, base, slides, layouts,
│                         #   composants, navigation, zoom, thèmes)
└── js/                   # 6 modules ES6 (main, slideLoader, slideManager,
                          #   indicatorManager, inputManager, zoomManager)
```

**Ajouter une slide** : créer `slides/slide-17-xxx.html` (structure
`.slide > .slide-header + .slide-content + .slide-footer`), puis
l'ajouter à `slides/index.json` et incrémenter `total`.

Moteur de présentation repris du support de groupe, contenu entièrement
réécrit pour le travail individuel.
