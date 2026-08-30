# Glossaire — acronymes et termes techniques

Définitions courtes, dans le sens où elles sont employées dans le dossier et la présentation. Les mêmes définitions apparaissent en infobulle au survol des termes dans les deux présentations (touche `G` pour masquer).

## Gouvernance et portefeuille

| Terme | Définition |
|---|---|
| **PMO** | Project Management Office — cellule garante de la méthode, du référentiel et du reporting consolidé ; elle consolide, alerte et arbitre *entre* projets. Chez Time'Eats : 5 chefs de projet. |
| **Responsable PMO** | Personne désignée qui porte le référentiel, la revue de portefeuille et les risques transverses — un mandat, un nom, une redevabilité. |
| **Portefeuille** | Ensemble des projets gérés comme un tout — priorisés, consolidés, arbitrés ensemble. 11 projets, 1 700 K€, 2 320 j/h. |
| **Programme** | Groupe de projets liés par un objectif commun (ex. le lot S1 : Web, apps, CRM). Entre le projet et le portefeuille. |
| **DSI** | Direction des Systèmes d'Information — 21 personnes ; son directeur est aussi RSSI. |
| **RSSI** | Responsable de la Sécurité des Systèmes d'Information. |
| **DPO** | Délégué à la Protection des Données — valide rétention, partage externe et registre des traitements (RGPD). |
| **RGPD** | Règlement Général sur la Protection des Données — art. 5 (minimisation, conservation) et 32 (sécurité). |
| **Sponsor** | Décideur qui autorise le projet et engage budget, périmètre, date, mise en production. Pour Office 365 : le DSI / RSSI. |
| **MOA / MOE** | Maîtrise d'ouvrage (exprime le besoin, prononce la recette fonctionnelle : DRH, direction générale) / maîtrise d'œuvre (conçoit et réalise : pôle Infrastructure). |
| **ESN** | Entreprise de Services du Numérique — prestataire externe. Ici Capgemini, forfait 120 j/h. |
| **COPIL** | Comité de pilotage — mensuel, sponsor + MOA + chef de projet : valide les jalons, arbitre, escalade (CR P4-18). |
| **Comité Stratégique** | Instance de direction mensuelle : reçoit le tableau de bord de portefeuille n°1, révise la pondération au T1, traite les menaces sur les Go-Live. |
| **Revue de portefeuille** | Réunion hebdomadaire animée par la PMO : arbitrage entre projets concurrents sur les mêmes ressources, confirmation des dates. |
| **Double commande** | Situation où un chef de projet reçoit des instructions de deux autorités — première cause de rejet des PMO. Évitée par la circulation ascendante. |
| **Agrégats de portefeuille** | Indicateurs consolidés par la PMO à partir des IPC / IPD : part des projets dans le budget, part des projets dans les délais. |
| **Référentiel documentaire** | Catalogue de 26 documents-types sur 5 phases, identifiant Pn-NN, un modèle vierge chacun ; obligatoire dès mai 2026. |
| **Contrat documentaire** | Matrice projets × livrables annexée à chaque charte : obligatoire (•), recommandé (◦) ou sans objet (–) pour chaque projet. |
| **Socle** | Les 12 documents obligatoires sur les 11 projets sans exception — ce qui rend le portefeuille consolidable. |
| **Droit de retrait** | Tout chef de projet peut demander la suppression d'un document jugé sans valeur ; la PMO répond sous 15 jours. |
| **NPS** | Net Promoter Score — indicateur de satisfaction (promoteurs − détracteurs). Cible ≥ +30 auprès des 5 chefs de projet, dépouillé par la DRH. |
| **PMBOK** | Project Management Body of Knowledge (PMI) — référentiel de bonnes pratiques dont sont issus les 5 groupes de processus. |
| **Run / MCO** | Maintien en condition opérationnelle : le service courant, sanctuarisé à 30 % du temps de la DSI. |
| **j/h** | Jour-homme : une personne pendant une journée. 200 € en interne, 400 € en ESN (hypothèses). |
| **K€** | Kilo-euro : 1 000 €. |

## Priorisation

| Terme | Définition |
|---|---|
| **Critère pondéré** | Critère noté de 1 à 5 et multiplié par un poids ; la somme des poids fait 100 %. Score S ∈ [1 ; 5]. |
| **Cotation** | Note factuelle attribuée selon une échelle écrite (ex. C3 : projets aval bloqués 0 → 1, 1 → 2, … ≥ 4 → 5). |
| **C1 – Alignement stratégique** | 30 % — 1 confort interne, 3 contribue à un axe, 5 conditionne un objectif d'entreprise. |
| **C2 – Rentabilité attendue** | 20 % — 1 aucun retour, 3 gains de productivité, 5 contribution directe au CA. |
| **C3 – Criticité des dépendances** | 20 % — nombre de projets aval bloqués. Office 365 : 4 projets → 5. |
| **C4 – Maîtrise des risques** | 15 % — 1 technologie non maîtrisée, 3 appui externe requis, 5 compétence interne établie. |
| **C5 – Conformité** | 10 % — 1 aucune contrainte, 3 exigence indirecte (RGPD art. 32), 5 obligation légale datée. |
| **C6 – Soutenabilité capacitaire** | 5 % — charge ≤ 80 j/h → 5 … > 350 j/h → 1. « La capacité ordonnance, elle ne sélectionne pas. » |
| **RAG (Vert / Ambre / Rouge)** | Code de statut. Priorisation : Vert ≥ 3,50 engagement immédiat, Ambre 2,75–3,49 sous condition de capacité, Rouge < 2,75 à réexaminer. |
| **Test de sensibilité** | Vérification que le classement résiste à une variation des poids (±5 points sur C1 : trio de tête et dernier inchangés). |
| **Indice R/B** | Rentabilité rapportée au budget — départage les projets de même cotation dans le tableau n°2. |
| **Règle de sauvegarde** | Le classement à la rentabilité seule ne peut jamais déclasser un projet réglementaire (C5 = 5) ni à dépendance maximale (C3 = 5). |
| **Graphe de dépendances** | Représentation « qui bloque qui » entre projets — fondement du critère C3. |
| **Dépendance circulaire** | CRM, Refonte Web et applications mobiles se déclarent mutuellement prérequis ; levée par le contrat d'interface. |
| **Contrat d'interface (API)** | Accord sur une interface figée entre projets, avant le 30/06, pour développer en parallèle sans s'attendre. |
| **Radar** | Diagramme à 6 axes qui montre la *forme* d'un projet sur les critères, là où le score ne donne qu'un nombre. Trois lectures : projet vs moyenne, profils opposés, familles. |

## Documents du référentiel (Pn-NN)

| Réf. | Document | Objet |
|---|---|---|
| P1-01 | Charte projet | Acte de naissance : autorise le projet, nomme le chef de projet, engage le sponsor sur objectifs et budget. |
| P1-02 | Note de cadrage | Contexte, enjeux, périmètre IN / OUT, options étudiées, option retenue. |
| P1-02bis | PBS | Product Breakdown Structure — décomposition du produit en composants livrables (le « quoi »). |
| P1-02ter | Cahier des charges (CDC) | Exigences fonctionnelles et non fonctionnelles avec critère d'acceptation — 62 exigences, base contractuelle du forfait. |
| P1-03 | Fiche d'identification | Carte d'identité normalisée (budget, dates, cotations, dépendances) — source du cockpit de portefeuille. |
| P1-04 | Matrice RACI | Qui Réalise, Approuve, est Consulté, Informé, pour chaque activité. |
| P2-05 | Plan de management (PMP) | Document pivot : agrège les plans subsidiaires et fixe les baselines. |
| P2-06 | WBS | Work Breakdown Structure — découpage du travail en lots et work packages chiffrés (8 lots, 40 work packages). |
| P2-07 | Planning (Gantt) | Ordonnancement, jalons, chemin critique, baseline de délais. |
| P2-08 | Budget prévisionnel | Ventilation par poste et par mois, baseline de coûts, réserve pour aléas. |
| P2-09 | Registre des risques | Identification, cotation P × I, stratégie de réponse, porteur, échéance. |
| P2-10 | Plan de communication | Parties prenantes, messages, canaux, fréquences, émetteurs. |
| P2-11 | Plan de conduite du changement | Analyse d'impact métier, réseau de key users, formation. |
| P3-12 | Compte rendu de réunion | Décisions, actions, porteurs, échéances — trace opposable. |
| P3-13 | Rapport d'avancement | Photographie mensuelle : avancement, consommé, jalons, risques. |
| P3-14 | Demande de changement | Formalise toute évolution de périmètre : impact délai / coût / qualité. |
| P3-15 | Log des anomalies | Suivi des défauts : sévérité, statut, correction, retest. |
| P4-16 | Tableau de bord projet | KPI coûts / délais / qualité / adoption, valeur acquise, statut RAG. |
| P4-17 | Rapport d'écarts | Déclenché sur franchissement de seuil : cause, options, plan de rattrapage. |
| P4-18 | CR de COPIL | Décisions du comité de pilotage, arbitrages, escalades. |
| P5-19 | PV de recette fonctionnelle | Prononce la conformité aux exigences métier ; réserves et délai de levée. |
| P5-20 | PV de recette technique | Prononce la conformité technique, sécurité, exploitabilité. |
| P5-21 | Rapport de clôture | Bilan : périmètre livré, budget consommé, écarts, décision de clôture. |
| P5-22 | PV de transfert en exploitation | Passage de relais au Run : DAT, runbook, astreinte, niveaux de service. |
| P5-23 | Fiche REX | Retour d'expérience structuré : ce qui a marché, ce qui a échoué, actions. |
| P5-24 | Lettre de fin de mission ESN | Solde le forfait, acte la levée des réserves, restitue accès et livrables. |

## Pilotage de projet

| Terme | Définition |
|---|---|
| **Baseline** | Référence validée (périmètre, délais, coûts) contre laquelle tout écart est mesuré ; modifiable seulement par demande de changement approuvée. |
| **Jalon** | Événement daté dont le franchissement est conditionné (charte signée, PV signés…). 7 jalons J0 → J6 sur Office 365. |
| **Chemin critique** | Suite de tâches sans marge : tout retard décale la fin (Audit → Tenant → Migration → Recette). |
| **Marge** | Temps disponible avant qu'un retard n'impacte la date finale. Seule marge réelle : J5 – J6, deux semaines. |
| **Go-Live** | Mise en production, bascule des utilisateurs — 17/07/2026. |
| **Objectifs SMART** | Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis — 6 objectifs dans la charte Office 365. |
| **Périmètre IN / OUT** | Ce que le projet livre / ce qu'il exclut explicitement. Toute zone grise est tranchée dans la charte. |
| **Cycle en V** | Exécution séquentielle à périmètre figé : cadrage → conception → réalisation → recette. Retenu pour Office 365. |
| **Forfait / Régie** | Forfait : prix fixe, engagement de résultat, risque de dérive chez le prestataire. Régie : facturation au temps passé. |
| **Réserve pour aléas** | Budget non affecté (2 K€) mobilisable sur décision du sponsor. |
| **KPI** | Key Performance Indicator — indicateur chiffré rattaché à un objectif, avec cible et seuil d'alerte. |
| **Valeur acquise** | Valeur du travail réellement réalisé, mesurée sur la baseline de coûts (earned value). |
| **IPC (CPI)** | Indice de performance des coûts = valeur acquise / coût réel. < 1 : le projet coûte plus que la valeur produite. |
| **IPD (SPI)** | Indice de performance des délais = valeur acquise / valeur planifiée. < 1 : le projet est en retard. |
| **EAC** | Estimate At Completion — coût final estimé, réestimé à chaque relevé (105 K€ fin mai → 99 K€). |
| **P × I** | Cotation d'un risque : probabilité × impact (1 à 5). ≤ 6 accepté, 7–12 réduit avec plan nommé, > 12 critique escaladé sous 48 h. |
| **Seuil d'alerte** | Valeur fixée à l'avance au-delà de laquelle une règle d'escalade s'applique sans discussion. |
| **Escalade** | Remontée d'un problème à l'instance supérieure selon une règle écrite (Ambre → CP, Rouge → sponsor, etc.). |
| **Arbitrage de périmètre** | Sur budget plafonné, la variable d'ajustement : on sort un élément du périmètre plutôt que d'augmenter l'enveloppe. |
| **Key user** | Utilisateur référent d'un site ou d'un métier — 10 pour Office 365, 2 par site — relais des usages et testeur. |
| **Conduite du changement** | Accompagnement des utilisateurs : 26 j/h sur 220 (12 %), délibérément élevé. |

## Recette et clôture

| Terme | Définition |
|---|---|
| **Recette** | Vérification formelle que le livré est conforme aux exigences ; fonctionnelle (MOA) et technique (MOE / RSSI). |
| **Plan de test** | 136 cas : 6 campagnes techniques T1–T6 (78) + 8 scénarios fonctionnels F1–F8 (58) ; 100 % des 62 exigences. |
| **Matrice de traçabilité** | Table exigence → cas de test qui prouve la couverture. |
| **Critères d'entrée / sortie** | Conditions pour commencer une campagne / pour la prononcer réussie (ex. 100 % des cas critiques, 0 bloquante). |
| **Test négatif** | Vérifie qu'une action interdite échoue bien (partage externe bloqué par la DLP). |
| **Anomalie bloquante / majeure / mineure** | Bloquante : recette refusée, correction 24 h. Majeure : réserve, 5 jours. Mineure : avant fin de VSR. |
| **Réserve** | Non-conformité acceptée à la signature, avec échéance et porteur. Sans date, requalifiée bloquante. |
| **PV de recette** | Procès-verbal : sans réserve / avec réserves / refusée — et ce que la signature déclenche (80 % du forfait). |
| **Go / No-Go** | Décision formelle de bascule, prise le 15/07, deux jours avant le Go-Live — point de non-retour (DNS). |
| **Retour arrière** | Procédure pour revenir à l'ancien système ; testée en campagne T6, pas seulement rédigée. |
| **VSR** | Vérification de Service Régulier — 30 jours d'observation après mise en production avant de solder l'ESN. |
| **Décommissionnement** | Arrêt et retrait de l'ancien système (Exchange 2016). |
| **DAT / runbook** | Dossier d'architecture technique / procédures d'exploitation remis au Run lors du transfert. |

## Capitalisation

| Terme | Définition |
|---|---|
| **REX** | Retour d'expérience — fiche P5-23, format unique, enseignements transformés en actions datées. |
| **Instruction (étape 4)** | La PMO qualifie chaque enseignement : transposable ? impose-t-il une évolution du référentiel, de la méthode, d'un modèle ? |
| **Registre des enseignements** | Liste SharePoint : projet d'origine, catégorie, action, porteur, échéance, statut. |
| **Base de connaissance** | « PMO — Savoir-faire » : procédures éprouvées, pièges connus, fiches permanentes (contraintes par site). |
| **Bibliothèque d'estimation** | Charges réelles par type de tâche, alimentée à chaque clôture — après 3 projets, on estime sur données maison. |
| **Rétrospective** | Atelier de 2 h à J6 + 5, animé par un chef de projet extérieur au projet. |
| **PDCA** | Plan – Do – Check – Act : définir la méthode, l'appliquer, mesurer, réviser. |
| **Situation de référence** | Mesure initiale des 6 indicateurs d'amélioration, figée en mai 2026 avant le déploiement. |

## Technique — Office 365 et infrastructure

| Terme | Définition |
|---|---|
| **Tenant** | Instance Microsoft 365 propre à une organisation — 200 licences E3, hébergement France. |
| **Microsoft 365 E3** | Édition entreprise : Exchange Online, SharePoint, OneDrive, Teams, Apps bureautiques, sécurité. |
| **Exchange** | Serveur de messagerie. Exchange 2016 on-premise à Rennes → Exchange Online, 200 boîtes ≈ 4 To. |
| **SharePoint / OneDrive / Teams** | Espaces documentaires d'équipe (5 sites) / espace personnel synchronisé / collaboration et réunions (12 équipes). |
| **AD (Active Directory)** | Annuaire des comptes et des droits. Son nettoyage a coûté 9 j/h au lieu de 4. |
| **Entra ID** | Annuaire et identité Microsoft cloud, synchronisé avec l'AD local (Entra ID Connect). |
| **SSO** | Single Sign-On — authentification unique. |
| **MFA** | Authentification multifacteur — sur 100 % des comptes à privilèges dans Office 365 ; généralisée par le projet MFA. |
| **DLP** | Data Loss Prevention — politiques contre la fuite de données ; 8 scénarios testés. |
| **Rétention** | Règles de conservation / suppression des données, validées par le DPO. |
| **PST** | Format d'export de boîte aux lettres Outlook — garantie de réversibilité. |
| **DNS / SPF / DKIM / DMARC** | Enregistrements de domaine ; leur bascule engage 48 h de propagation. SPF / DKIM / DMARC authentifient les courriels. |
| **CRM** | Customer Relationship Management — progiciel de relation client, référentiel client du site et des apps. |
| **CI/CD** | Intégration et livraison continues — chaîne automatisée de build, test, déploiement. |
| **Azure** | Cloud Microsoft ; migration des serveurs métiers Windows Server 2016 / .NET 4.6.2 hébergés à Rennes. |
| **Pipeline de build** | Enchaînement automatisé de compilation et de tests — périmètre réduit du projet CI/CD au T2. |
