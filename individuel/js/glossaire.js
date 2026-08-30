/**
 * Glossaire — infobulles au survol des acronymes et termes techniques.
 *
 * - Première occurrence de chaque terme par slide (pour ne pas surcharger).
 * - Survol ou focus clavier : la définition s'affiche dans une bulle.
 * - Touche G : afficher / masquer les soulignés et les bulles (utile en présentation).
 *
 * Les définitions sont les mêmes que dans ../oral/glossaire.md.
 * La même liste est recopiée dans ../individuel-v2/index.html (fichier autonome) :
 * modifier les deux ensemble.
 */
export const GLOSSAIRE = [
    ['Responsable PMO', 'Personne désignée qui porte le référentiel, la revue de portefeuille et les risques transverses — un mandat, un nom, une redevabilité.'],
    ['PMO', 'Project Management Office — cellule garante de la méthode, du référentiel et du reporting consolidé ; elle consolide, alerte et arbitre entre projets. Chez Time\'Eats : 5 chefs de projet.'],
    ['portefeuille', 'Ensemble des projets de la DSI gérés comme un tout : 11 projets, 1 700 K€, 2 320 j/h — priorisés, consolidés et arbitrés ensemble.'],
    ['DSI', 'Direction des Systèmes d\'Information — 21 personnes chez Time\'Eats ; son directeur est aussi RSSI.'],
    ['RSSI', 'Responsable de la Sécurité des Systèmes d\'Information.'],
    ['DPO', 'Délégué à la Protection des Données — valide rétention, partage externe et registre des traitements (RGPD).'],
    ['RGPD', 'Règlement Général sur la Protection des Données — art. 5 (minimisation, conservation) et 32 (sécurité).'],
    ['DRH', 'Direction des Ressources Humaines — maîtrise d\'ouvrage d\'Office 365 avec la direction générale ; dépouille l\'enquête de satisfaction des chefs de projet.'],
    ['ESN', 'Entreprise de Services du Numérique — prestataire externe. Ici Capgemini, forfait de 120 j/h à engagement de résultat.'],
    ['Capgemini', 'ESN partenaire retenue pour la migration Office 365, au forfait de 120 j/h (48 K€).'],
    ['MOA', 'Maîtrise d\'ouvrage — exprime le besoin et prononce la recette fonctionnelle (DRH, direction générale).'],
    ['MOE', 'Maîtrise d\'œuvre — conçoit et réalise (pôle Infrastructure de la DSI, administrateur systèmes sénior).'],
    ['COPIL', 'Comité de pilotage — mensuel, sponsor + MOA + chef de projet : valide les jalons, arbitre, escalade (CR P4-18).'],
    ['Comité Stratégique', 'Instance de direction mensuelle : reçoit le tableau de bord de portefeuille n°1, révise les pondérations au T1, traite les menaces sur les Go-Live.'],
    ['revue de portefeuille', 'Réunion hebdomadaire animée par la PMO : arbitrage entre projets concurrents sur les mêmes ressources, confirmation des dates.'],
    ['sponsor', 'Décideur qui autorise le projet et engage budget, périmètre, date et mise en production — pour Office 365, le DSI / RSSI.'],
    ['double commande', 'Situation où un chef de projet reçoit des instructions de deux autorités (PMO et sponsor) — première cause de rejet des PMO.'],
    ['agrégats', 'Indicateurs de portefeuille consolidés par la PMO à partir des IPC / IPD des projets : part des projets dans le budget, part des projets dans les délais.'],
    ['référentiel', 'Catalogue de 26 documents-types sur 5 phases (identifiant Pn-NN) avec un modèle vierge pour chacun ; obligatoire sur tout projet dès mai 2026.'],
    ['contrat documentaire', 'Matrice projets × livrables annexée à chaque charte : quels documents sont obligatoires, recommandés ou sans objet pour ce projet.'],
    ['socle', 'Les 12 documents obligatoires sur les 11 projets sans exception — ce qui rend le portefeuille consolidable.'],
    ['droit de retrait', 'Tout chef de projet peut demander la suppression d\'un document jugé sans valeur ; la PMO répond sous 15 jours.'],
    ['NPS', 'Net Promoter Score — indicateur de satisfaction (promoteurs − détracteurs). Cible ≥ +30 auprès des 5 chefs de projet, dépouillé par la DRH.'],
    ['Run', 'Maintien en condition opérationnelle : le service courant, sanctuarisé à 30 % du temps de la DSI.'],
    ['j/h', 'Jour-homme : une personne pendant une journée. Hypothèses : 200 € en interne, 400 € en ESN.'],
    ['K€', 'Kilo-euro : 1 000 €.'],
    ['baselines', 'Références validées (périmètre, délais, coûts) contre lesquelles tout écart est mesuré ; modifiables seulement par demande de changement approuvée.'],
    ['baseline', 'Référence validée (périmètre, délais, coûts) contre laquelle tout écart est mesuré ; modifiable seulement par demande de changement approuvée.'],
    ['IPC', 'Indice de performance des coûts (CPI) = valeur acquise / coût réel. En dessous de 1, le projet coûte plus que la valeur produite.'],
    ['IPD', 'Indice de performance des délais (SPI) = valeur acquise / valeur planifiée. En dessous de 1, le projet est en retard.'],
    ['Coût final estimé', 'EAC — Estimate At Completion : coût total prévu à la fin du projet, réestimé à chaque relevé (105 K€ fin mai → 99 K€ après arbitrage).'],
    ['Indice de performance des délais', 'IPD (SPI) = valeur acquise / valeur planifiée ; 0,91 fin mai = 4 jours de décalage sur le lot L3.'],
    ['KPI', 'Key Performance Indicator — indicateur chiffré rattaché à un objectif, avec cible et seuil d\'alerte.'],
    ['indicateurs', 'Mesures chiffrées rattachées aux objectifs (16 KPI sur 4 axes pour Office 365), avec cible, seuil d\'alerte et règle d\'escalade.'],
    ['Vert', 'Statut RAG : objectif tenu. En priorisation, score ≥ 3,50 = engagement immédiat.'],
    ['Ambre', 'Statut RAG : écart sous le seuil d\'alerte, traité par le chef de projet en point hebdomadaire. En priorisation, 2,75 – 3,49 = sous condition de capacité.'],
    ['Rouge', 'Statut RAG : seuil franchi → rapport d\'écarts au sponsor sous 5 jours ouvrés. En priorisation, < 2,75 = à réexaminer ou phaser.'],
    ['jalons', 'Événements datés dont le franchissement est conditionné (charte signée, PV signés…) — 7 jalons J0 → J6 sur Office 365.'],
    ['jalon', 'Événement daté dont le franchissement est conditionné (charte signée, PV signés…) — 7 jalons J0 → J6 sur Office 365.'],
    ['chemin critique', 'Suite de tâches sans marge : tout retard sur l\'une décale la fin du projet (Audit → Tenant → Migration → Recette).'],
    ['marge', 'Temps disponible avant qu\'un retard n\'impacte la date finale ; seule marge réelle : les 2 semaines entre J5 et J6.'],
    ['Go-Live', 'Mise en production : bascule des utilisateurs sur la nouvelle solution — 17/07/2026 pour Office 365.'],
    ['forfait', 'Contrat à prix fixe et engagement de résultat : le risque de dérive de charge est porté par le prestataire (à l\'inverse de la régie, facturée au temps passé).'],
    ['plafond ferme', 'Budget non révisable posé en contrainte de cadrage : toute demande de changement à impact financier passe par un arbitrage de périmètre, jamais par une rallonge.'],
    ['réserve pour aléas', 'Enveloppe non affectée (2 K€), mobilisable sur décision du sponsor pour absorber les imprévus.'],
    ['P×I', 'Cotation d\'un risque : Probabilité × Impact (1 à 5 chacun). ≤ 6 accepté, 7–12 réduit avec plan nommé, > 12 critique escaladé au sponsor sous 48 h.'],
    ['15 / 25', 'Score du risque R8 : probabilité 3 × impact 5 — seul risque critique (> 12) du registre.'],
    ['demande de changement', 'Document P3-14 formalisant toute évolution de périmètre avec son impact délai / coût / qualité ; approuvée en COPIL.'],
    ['rapport d\'écarts', 'Document P4-17 déclenché au franchissement d\'un seuil : cause racine, options chiffrées, plan de rattrapage — sous 5 jours ouvrés.'],
    ['arbitrage de périmètre', 'Sur budget plafonné, la variable d\'ajustement : on sort un élément du périmètre plutôt que d\'augmenter l\'enveloppe.'],
    ['contrat d\'interface', 'Accord sur une interface (API) figée entre CRM, Refonte Web et applications mobiles, avant le 30/06, pour développer en parallèle sans s\'attendre.'],
    ['API', 'Interface de programmation : contrat technique par lequel deux applications échangent des données.'],
    ['criticité des dépendances', 'Critère C3 (20 %) : nombre de projets aval bloqués — 0 → 1, 1 → 2, 2 → 3, 3 → 4, ≥ 4 → 5. Office 365 bloque 4 projets (900 K€).'],
    ['dépendances', 'Liens « qui bloque qui » entre projets ; fondement du critère C3. Office 365 conditionne le CRM, la Refonte Web et les deux applications mobiles.'],
    ['soutenabilité capacitaire', 'Critère C6 (5 %) : charge du projet rapportée à la capacité — ≤ 80 j/h → 5 … > 350 j/h → 1. La capacité ordonnance, elle ne sélectionne pas.'],
    ['alignement stratégique', 'Critère C1 (30 %) : 1 confort interne, 3 contribue à un axe, 5 conditionne un objectif d\'entreprise.'],
    ['rentabilité attendue', 'Critère C2 (20 %) : 1 aucun retour, 3 gains de productivité, 5 contribution directe au chiffre d\'affaires.'],
    ['maîtrise des risques', 'Critère C4 (15 %) : 1 technologie non maîtrisée, 3 appui externe requis, 5 compétence interne établie.'],
    ['conformité réglementaire', 'Critère C5 (10 %) : 1 aucune contrainte, 3 exigence indirecte (RGPD art. 32), 5 obligation légale datée.'],
    ['échelle de cotation', 'Barème écrit de 1 à 5 propre à chaque critère : deux personnes cotant le même projet trouvent le même score.'],
    ['règle de sauvegarde', 'Le classement à la rentabilité seule ne peut jamais déclasser un projet réglementaire (C5 = 5) ni à dépendance maximale (C3 = 5).'],
    ['radar', 'Diagramme à 6 axes qui montre la forme d\'un projet sur les critères, là où le score ne donne qu\'un nombre.'],
    ['WBS', 'Work Breakdown Structure — découpage du travail en lots et work packages chiffrés (8 lots, 40 work packages pour Office 365).'],
    ['PBS', 'Product Breakdown Structure — décomposition du produit en composants livrables (le « quoi »). Recommandé seulement pour Office 365.'],
    ['RACI', 'Matrice des responsabilités : qui Réalise, Approuve, est Consulté, Informé, pour chaque activité (P1-04).'],
    ['PMP', 'Plan de Management de Projet (P2-05) — document pivot qui agrège les plans subsidiaires et fixe les baselines.'],
    ['Gantt', 'Diagramme de planning : tâches en barres sur une échelle de temps, jalons et chemin critique (P2-07).'],
    ['cahier des charges', 'P1-02ter — exigences fonctionnelles et non fonctionnelles avec critère d\'acceptation ; 62 exigences, base contractuelle du forfait et référentiel de la recette.'],
    ['note de cadrage', 'P1-02 — contexte, enjeux, périmètre IN / OUT, options étudiées et option retenue.'],
    ['charte', 'P1-01 Charte projet — acte de naissance : autorise le projet, nomme le chef de projet, engage le sponsor sur objectifs et budget. Signée le 13/04/2026.'],
    ['fiche d\'identification', 'P1-03 — carte d\'identité normalisée du projet (budget, dates, cotations, dépendances), source du cockpit de portefeuille.'],
    ['plan de communication', 'P2-10 — parties prenantes, messages, canaux, fréquences, émetteurs ; 9 actions pour Office 365.'],
    ['conduite du changement', 'P2-11 — analyse d\'impact métier, réseau de key users, formation ; 26 j/h sur 220 pour Office 365 (12 %).'],
    ['registre des risques', 'P2-09 — identification, cotation P × I, stratégie de réponse, porteur, échéance ; 10 risques pour Office 365.'],
    ['tableau de bord', 'P4-16 — 16 KPI sur 4 axes avec cible, seuil, valeur et statut RAG, publié chaque mois.'],
    ['CR de COPIL', 'P4-18 — décisions du comité de pilotage, arbitrages, escalades.'],
    ['CR de réunion', 'P3-12 — décisions, actions, porteurs, échéances : trace opposable des arbitrages.'],
    ['CR', 'Compte rendu (de réunion P3-12 ou de COPIL P4-18) — décisions, actions, porteurs, échéances.'],
    ['rapport d\'avancement', 'P3-13 — photographie mensuelle : avancement, consommé, jalons, risques.'],
    ['log d\'anomalies', 'P3-15 — suivi des défauts : sévérité, statut, correction, retest par le déclarant.'],
    ['rapport de clôture', 'P5-21 — bilan : périmètre livré, budget consommé, écarts, décision de clôture.'],
    ['PV de transfert', 'P5-22 — passage de relais au Run : dossier d\'architecture, procédures, astreinte, niveaux de service.'],
    ['lettre de fin de mission', 'P5-24 — solde le forfait ESN, acte la levée des réserves, restitue accès et livrables.'],
    ['PV recette fonctionnelle', 'P5-19 — prononce la conformité aux exigences métier (MOA) ; réserves et délai de levée.'],
    ['PV recette technique', 'P5-20 — prononce la conformité technique, de sécurité et d\'exploitabilité (architecte, RSSI).'],
    ['PV', 'Procès-verbal de recette : sans réserve, avec réserves datées, ou refusée — et ce que la signature déclenche (80 % du forfait).'],
    ['REX', 'Retour d\'expérience — fiche P5-23 : ce qui a marché, ce qui a échoué, enseignements transformés en actions datées.'],
    ['Fiche REX', 'P5-23 — retour d\'expérience structuré, format unique sur les 11 projets, instruit par la PMO avant clôture.'],
    ['recette', 'Vérification formelle que le livré est conforme aux exigences ; fonctionnelle (MOA) et technique (MOE / RSSI). Le recetteur n\'est jamais le réalisateur.'],
    ['cas de test', 'Vérification unitaire rattachée à une exigence ; 136 cas = 78 techniques (T1–T6) + 58 métier (F1–F8), 100 % des 62 exigences.'],
    ['test négatif', 'Cas de test qui vérifie qu\'une action interdite échoue bien (ex. partage externe bloqué par la DLP) — révèle les défauts de sécurité invisibles des tests positifs.'],
    ['anomalies bloquantes', 'Défauts qui empêchent un usage essentiel ou exposent des données ; correction sous 24 h, recette refusée tant qu\'il en reste.'],
    ['VSR', 'Vérification de Service Régulier — 30 jours d\'observation après mise en production avant de solder le prestataire.'],
    ['30 jours de service', 'La VSR : vérification de service régulier de 30 jours après le Go-Live ; le solde du forfait (20 %) n\'est libéré qu\'à son terme.'],
    ['enseignements', 'Constats issus du REX, qualifiés par la PMO et transformés en actions datées (6 pour Office 365, dans 3 familles : référentiel, méthode, communication).'],
    ['capitalisation', 'Processus en 5 étapes et 6 outils qui transforme l\'expérience d\'un projet en amélioration pour les suivants ; un projet n\'est pas clos tant que son REX n\'est pas instruit.'],
    ['situation de référence', 'Mesure initiale des 6 indicateurs d\'amélioration, figée en mai 2026 avant le déploiement du référentiel, pour pouvoir prouver un progrès.'],
    ['key users', 'Utilisateurs référents d\'un site ou d\'un métier (10 pour Office 365, 2 par site) qui relaient les usages et testent sur données réelles.'],
    ['tenant', 'Instance Microsoft 365 propre à une organisation — 200 licences E3, hébergement en France.'],
    ['Tenant', 'Instance Microsoft 365 propre à une organisation — 200 licences E3, hébergement en France.'],
    ['Entra ID', 'Annuaire et service d\'identité Microsoft cloud, synchronisé avec l\'Active Directory local.'],
    ['annuaire', 'Active Directory : base des comptes et des droits de l\'entreprise ; son nettoyage a coûté 9 j/h au lieu de 4 (risque R2).'],
    ['SSO', 'Single Sign-On — authentification unique sur toutes les applications Microsoft.'],
    ['MFA', 'Authentification multifacteur — mot de passe + second facteur ; sur 100 % des comptes à privilèges dans Office 365, généralisée par le projet MFA.'],
    ['DLP', 'Data Loss Prevention — politiques qui empêchent la fuite de données (8 scénarios testés sans fuite).'],
    ['Teams', 'Outil de collaboration Microsoft 365 : réunions, canaux par projet et par site — 12 équipes.'],
    ['SharePoint', 'Espaces documentaires d\'équipe Microsoft 365 (5 sites) — héberge aussi le référentiel PMO.'],
    ['Office 365', 'Projet pilote : migration vers Microsoft 365 E3 — 100 K€, 220 j/h, 200 boîtes, 5 sites, Go-Live 17/07/2026.'],
    ['CRM', 'Customer Relationship Management — progiciel de relation client, référentiel client du site web et des applications mobiles.'],
    ['CI/CD', 'Intégration et livraison continues — chaîne automatisée de build, test et déploiement.'],
    ['Azure', 'Cloud Microsoft ; projet de migration des serveurs métiers Windows Server 2016 / .NET 4.6.2 hébergés à Rennes.'],
    ['Migration Azure', 'Migration des serveurs métiers vers le cloud Microsoft — 200 K€, 300 j/h, dernier du classement (2,45), maîtrise des risques 1/5.'],
    ['Stockage', 'Projet Stockage & Fichiers — solution centralisée de gestion des fichiers avec droits par population (octobre, 100 K€, 80 j/h).'],
    ['Sauvegarde Cloud', 'Projet de sauvegarde automatisée dans le cloud pour la continuité de service (octobre, 100 K€, 100 j/h).'],
    ['Outils de paie', 'Mise à jour réglementaire des outils de paie — 50 K€, 50 j/h ; obligation légale : jamais arbitrable, socle documentaire complet.'],
    ['Paie', 'Mise à jour réglementaire des outils de paie — 50 K€, 50 j/h ; obligation légale : jamais arbitrable.'],
    ['Refonte Web', 'Remplacement du site par une application web moderne — 300 K€, 400 j/h, 1er du classement (3,75). Projet du travail de groupe.'],
    ['cycle en V', 'Mode d\'exécution séquentiel à périmètre figé : cadrage → conception → réalisation → recette.'],
    ['objectifs SMART', 'Spécifiques, Mesurables, Atteignables, Réalistes, Temporellement définis — 6 objectifs contractualisés dans la charte Office 365.'],
    ['PDCA', 'Plan – Do – Check – Act : définir la méthode, l\'appliquer, mesurer, réviser.'],
    ['PMBOK', 'Project Management Body of Knowledge (PMI) — référentiel de bonnes pratiques dont sont issus les 5 groupes de processus.']
];

const escapeRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function compiler() {
    return GLOSSAIRE.map(([t, d]) => {
        const acronyme = /[A-Z]/.test(t) && !/[a-z]/.test(t);
        let src = escapeRe(t);
        if (!acronyme && !/s$/.test(t)) src += 's?';
        const re = new RegExp('(?<![\\p{L}\\p{N}])(' + src + ')(?![\\p{L}\\p{N}])', acronyme ? 'u' : 'iu');
        return { t, d, re };
    }).sort((a, b) => b.t.length - a.t.length);
}

function envelopper(node, termes, vus) {
    let texte = node.nodeValue;
    let courant = node;
    for (;;) {
        let meilleur = null;
        for (const terme of termes) {
            if (vus.has(terme.t)) continue;
            const m = terme.re.exec(texte);
            if (m && (meilleur === null || m.index < meilleur.index)) {
                meilleur = { index: m.index, len: m[1].length, terme };
            }
        }
        if (!meilleur) return;
        const avant = texte.slice(0, meilleur.index);
        const trouve = texte.slice(meilleur.index, meilleur.index + meilleur.len);
        const apres = texte.slice(meilleur.index + meilleur.len);
        const span = document.createElement('span');
        span.className = 'gl-term';
        span.textContent = trouve;
        span.dataset.term = meilleur.terme.t;
        span.dataset.def = meilleur.terme.d;
        span.setAttribute('tabindex', '0');
        const suite = document.createTextNode(apres);
        courant.nodeValue = avant;
        courant.after(span, suite);
        vus.add(meilleur.terme.t);
        texte = apres;
        courant = suite;
    }
}

let bulle = null;

function placer(el) {
    const r = el.getBoundingClientRect();
    const pad = 10;
    bulle.style.left = '0px';
    bulle.style.top = '0px';
    const w = bulle.offsetWidth, h = bulle.offsetHeight;
    let left = r.left + r.width / 2 - w / 2;
    left = Math.max(pad, Math.min(window.innerWidth - w - pad, left));
    let top = r.bottom + 8;
    if (top + h > window.innerHeight - pad) top = r.top - h - 8;
    bulle.style.left = left + 'px';
    bulle.style.top = top + 'px';
}

function installerBulle() {
    if (bulle) return;
    bulle = document.createElement('div');
    bulle.id = 'gl-tip';
    bulle.setAttribute('role', 'tooltip');
    bulle.innerHTML = '<b></b><span></span>';
    document.body.appendChild(bulle);

    const montrer = el => {
        if (document.body.classList.contains('gl-off')) return;
        bulle.firstChild.textContent = el.dataset.term;
        bulle.lastChild.textContent = el.dataset.def;
        bulle.classList.add('show');
        placer(el);
    };
    const cacher = () => bulle.classList.remove('show');
    const cible = e => (e.target && e.target.closest ? e.target.closest('.gl-term') : null);

    document.addEventListener('mouseover', e => { const el = cible(e); if (el) montrer(el); });
    document.addEventListener('mouseout', e => { if (cible(e)) cacher(); });
    document.addEventListener('focusin', e => { const el = cible(e); if (el) montrer(el); });
    document.addEventListener('focusout', cacher);
    document.addEventListener('keydown', e => {
        if ((e.key === 'g' || e.key === 'G') && !e.ctrlKey && !e.metaKey && !e.altKey) {
            document.body.classList.toggle('gl-off');
            cacher();
        }
    });
}

/**
 * Applique le glossaire à toutes les slides d'un conteneur.
 * @param {Element} root conteneur des slides
 * @param {{slideSelector?: string, skip?: string}} options
 */
export function appliquerGlossaire(root, options = {}) {
    const slideSelector = options.slideSelector || '.slide';
    const skip = options.skip || 'script,style,svg,.gl-term,.slide-number,.slide-footer,h1,h2,.big-number,.stat-number';
    const termes = compiler();
    root.querySelectorAll(slideSelector).forEach(slide => {
        const vus = new Set();
        const walker = document.createTreeWalker(slide, NodeFilter.SHOW_TEXT, {
            acceptNode(n) {
                if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                const p = n.parentElement;
                return p && p.closest(skip) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
            }
        });
        const noeuds = [];
        while (walker.nextNode()) noeuds.push(walker.currentNode);
        noeuds.forEach(n => envelopper(n, termes, vus));
    });
    installerBulle();
    console.log('[GLOSSAIRE] termes annotés :', root.querySelectorAll('.gl-term').length);
}
