# Présentation v2 — Piloter un portefeuille, pas onze projets

Seconde version du support de restitution individuelle, écrite **from scratch**
dans un style différent (éditorial : typographie serif, fond papier, rail de
sections). Même déroulé de **21 slides** et même calibrage **10 minutes** que
`../individuel/`, mais un seul fichier autonome : `index.html` embarque le
contenu, le style et le moteur.

## Lancer

Aucun serveur n'est nécessaire : double-clic sur `index.html` suffit
(fonctionne aussi hors ligne, avec des polices de repli si Google Fonts est
inaccessible). En production, la page est servie sur `/individuel-v2/`
(`index-dynamic.html` redirige vers `index.html` pour respecter la
configuration nginx du site).

## Naviguer

| Action | Commande |
|---|---|
| Slide suivante / précédente | `→` `Espace` `Pg↓` / `←` `Pg↑` — boutons en bas — balayage tactile |
| Première / dernière slide | `Home` / `End` |
| Aller à une section | pastilles du rail gauche (survol : nom de la section) |
| Vue d'ensemble | `O` ou bouton ▦ — clic sur une slide pour y aller |
| Thème | `T` ou bouton ◐ — 6 thèmes (Papier, Encre, CESI, Ardoise, Sépia, Contraste) ; `Maj+T` fait défiler |
| Plein écran | `F` |
| Chrono 10 min | `S` démarre / met en pause (ou clic sur le chrono), `R` remet à zéro ; affiche l'avance ou le retard par rapport au déroulé |
| Glossaire | survol d'un terme souligné en pointillés — `G` pour masquer les infobulles |
| Aide | `?` ou bouton ? |
| Lien direct | `index.html#12` ouvre la slide 12 |

Le thème choisi est mémorisé dans le navigateur (`localStorage`).

## Glossaire

Le bloc `<!-- GLOSSAIRE:start -->` … `<!-- GLOSSAIRE:end -->` est une copie de
`../individuel/js/glossaire.js` (le fichier doit rester autonome). Après une
modification de `glossaire.js`, le regénérer avec le script
`sync-glossaire-v2.mjs` (ou recopier le bloc à la main).

## Modifier

Chaque slide est une `<section class="slide" data-section="…">` dans
`index.html`. Composants disponibles : `.figures/.fig` (grands chiffres),
`.cols.cols-2|3|4` + `.card` (cartes, variantes `.accent .alt .good .bad`),
`table` (`tr.hl` pour surligner, `.tag.good|warn|bad`), `.steps/.step`
(séquence), `.list`, `.quote` (phrase clé), `.note`. Le rail et la vue
d'ensemble se construisent automatiquement à partir des sections et des
titres.
