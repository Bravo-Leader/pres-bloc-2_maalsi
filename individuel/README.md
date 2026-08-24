# Présentation — Superviser le portefeuille projets de la DSI

Support de restitution du travail individuel d'évaluation de bloc.
**21 slides**, architecture modulaire (une slide = un fichier HTML). Calibré pour une restitution de **10 minutes**.

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

## Plan — 21 slides, calibré pour 10 minutes

Environ 30 secondes par slide. Une idée par slide, peu de texte.

| # | Slide | Bloc |
|---|---|---|
| 1 | Titre | — |
| 2 | Le portefeuille en 4 chiffres | Contexte |
| 3 | Ce n'est pas un problème de projets | Contexte |
| 4 | Mon mandat | Contexte |
| 5 | Deux instruments, un projet pilote | Proposition |
| 6 | La stratégie SI en 4 axes | C1 |
| 7 | La vraie contrainte : la capacité | C1 |
| 8 | Le référentiel : 26 documents, 5 phases | C1 |
| 9 | Chaque document a son modèle vierge | C1 |
| 10 | Le contrat documentaire | C1 |
| 11 | La grille : 6 critères pondérés | C1 |
| 12 | Le classement stratégique | C1 |
| 13 | La rentabilité seule et sa divergence | C1 |
| 14 | Le radar : la forme d'un projet | C1 |
| 15 | Le pilote : Office 365, et pourquoi | C2 |
| 16 | Périmètre : dedans / dehors | C2 |
| 17 | Planning : 7 jalons, 16 semaines | C2 |
| 18 | Budget et risque critique | C2 |
| 19 | L'indicateur qui déclenche la décision | C2 |
| 20 | Clôture et capitalisation | C3 |
| 21 | Ce que je demande | Conclusion |

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
