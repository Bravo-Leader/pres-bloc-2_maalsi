# Questions probables du jury — et réponses

Le jury est orienté gestion de projet et portefeuille. Les questions sont classées par thème, des plus probables aux plus pointues. Chaque réponse tient en 20 à 40 secondes ; les chiffres viennent du dossier.

Méthode de réponse : reformuler la question en une phrase, donner **la** réponse, puis un chiffre ou un exemple du dossier. Ne jamais inventer une donnée : « ce n'est pas dans le contexte, j'ai posé l'hypothèse que… ».

---

## A. Gouvernance et PMO

**1. Quelle différence entre projet, programme et portefeuille ?**
Un projet livre un résultat unique avec un début et une fin. Un programme regroupe des projets liés par un objectif commun — chez nous, le lot S1 : Refonte Web, applications mobiles, CRM. Le portefeuille est l'ensemble des projets de la DSI gérés comme un tout : priorisés ensemble, consolidés ensemble, arbitrés ensemble. Le pilotage de portefeuille répond à « faisons-nous les bons projets, dans le bon ordre, avec les ressources que nous avons ? ».

**2. Quel type de PMO proposez-vous : support, contrôle ou directif ?**
Une PMO de contrôle, pas directive. Elle impose un référentiel et des seuils, elle consolide et alerte, mais elle ne pilote pas les projets à la place des chefs de projet. La circulation est ascendante : le projet nourrit le portefeuille, le portefeuille n'impose pas d'action au projet. C'est un choix délibéré : la double commande est la première cause de rejet des PMO.

**3. Comment évitez-vous que la PMO soit vécue comme une bureaucratie ?**
Trois mécanismes. Le contrat documentaire : on n'impose pas 26 documents à un projet de 50 j/h. Le droit de retrait : tout chef de projet peut demander la suppression d'un document, la PMO répond sous 15 jours. Et la mesure : taux d'usage réel audité chaque trimestre, NPS des chefs de projet dépouillé par la DRH, cible ≥ +30. Plus le pré-remplissage des rubriques d'identification à partir de la fiche P1-03 : personne ne saisit deux fois la même donnée.

**4. Pourquoi un Responsable PMO et pas une animation tournante entre les cinq chefs de projet ?**
Parce qu'une responsabilité tournante n'a pas de propriétaire. Le référentiel doit être versionné et révisé chaque semestre ; les REX doivent être instruits — c'est l'étape 4 qui fait la différence ; les risques transverses ont besoin d'un porteur ; et la revue de portefeuille demande une continuité de lecture. Un mandat, un nom, une redevabilité. Sinon, la vue transverse n'appartient à personne.

**5. Quelle autorité a le Responsable PMO sur les chefs de projet ?**
Aucune autorité hiérarchique — et c'est voulu. Il a une autorité de méthode : le référentiel est obligatoire, les seuils et les règles d'escalade s'appliquent sans discussion. Il a une autorité d'arbitrage entre projets, exercée en revue de portefeuille et validée par le sponsor ou le Comité Stratégique. Le chef de projet reste seul responsable de l'exécution de son projet.

**6. Comment gérez-vous un conflit de ressources entre deux chefs de projet ?**
En revue de portefeuille hebdomadaire, sur la base du classement : le projet le mieux classé a priorité, sauf règle de sauvegarde (réglementaire ou dépendance maximale). Exemple concret : en juin, les 3 administrateurs systèmes sont sollicités par Office 365 et CI/CD ; CI/CD a été réduit à un pipeline de build unique au T2, le volet multi-environnements reporté au T3.

**7. Que se passe-t-il si un chef de projet refuse d'appliquer le référentiel ?**
D'abord comprendre : c'est souvent un document sans valeur pour son projet, et le droit de retrait existe pour ça. Ensuite, le référentiel est une décision du comité de direction — c'est ma demande (b) — donc un projet hors référentiel n'entre pas dans les agrégats et n'est pas présenté au Comité Stratégique. Un projet invisible du portefeuille n'obtient pas d'arbitrage en sa faveur.

**8. Qui décide, au final : la PMO ou la direction ?**
La direction. Les deux tableaux de bord ne disent pas ce qu'elle doit décider ; ils lui montrent ce qu'elle décide réellement quand elle privilégie un critère plutôt qu'un autre. La PMO rend la décision possible et traçable.

## B. Priorisation et stratégie

**9. Pourquoi ces poids ? Qui les a fixés ?**
Trois apports : l'atelier de cadrage des 5 chefs de projet, le cadrage du DSI — stratégie avant rentabilité avant risques —, et le PMI Standard for Portfolio Management. L'alignement domine à 30 % sans être majoritaire : un projet non aligné ne doit pas être financé, quel que soit son ROI. Les poids sont révisés chaque année au T1 en Comité Stratégique.

**10. Votre classement est-il robuste à la pondération ?**
Oui, testé : faire varier le poids de l'alignement de ±5 points ne modifie ni le trio de tête ni le dernier. Et l'écart entre le premier et le dernier n'est que de 1,30 point : le classement se lit comme un ordre d'engagement, pas comme un couperet.

**11. Pourquoi la capacité ne pèse-t-elle que 5 % alors que vous dites qu'elle est la vraie contrainte ?**
Parce que la capacité ordonnance, elle ne sélectionne pas. Un projet stratégique lourd ne doit pas être écarté parce qu'il est lourd ; il doit être placé au bon moment. Les 5 % départagent deux projets équivalents ; l'ordonnancement réel se fait dans le tableau n°1 avec la colonne Départ et les points de vigilance — la saturation d'avril, par exemple.

**12. Qui cote ? Comment évitez-vous les biais du chef de projet qui cote son propre projet ?**
C1, C2 et C4 viennent des fiches de cadrage fournies par la direction. C3, C5 et C6 sont construits par la PMO à partir de faits : le graphe de dépendances, l'obligation légale, la charge. Chaque critère a une échelle écrite : deux personnes cotant le même projet trouvent le même score. Et les cotations sont revues collectivement en atelier.

**13. Pourquoi Office 365 comme pilote et pas la Refonte Web, classée première ?**
D'abord parce que la Refonte Web est le projet imposé du travail de groupe, donc exclue. Ensuite parce qu'Office 365 illustre exactement ce qu'apporte un PMO : 6e au classement, 10e à la rentabilité, toute lecture spontanée le dépriorise, alors qu'il conditionne quatre projets et 900 K€. Enfin parce qu'il démarre en avril et qu'il est le plus transverse.

**14. Que faites-vous de la dépendance circulaire entre le CRM, le Web et les applications mobiles ?**
Elle est insoluble en l'état : chacun se déclare prérequis des autres. Elle est levée par une décision de PMO — un contrat d'interface, une API figée avant le 30/06 — qui permet de développer en parallèle contre une interface stable plutôt que d'attendre les livraisons les uns des autres. C'est aussi la contre-mesure au risque R8.

**15. Si la direction plafonne l'enveloppe à 1 000 K€, que se passe-t-il ?**
La colonne Cumul du tableau n°1 répond : la ligne de coupe passe entre le rang 5 et le rang 6, à 950 K€. La discussion porte alors sur les exceptions à justifier — Office 365, qui ne peut pas être coupé parce qu'il conditionne 900 K€ de projets, et la Paie, obligation légale. Le classement transforme un arbitrage politique en discussion sur des exceptions argumentées.

**16. Le classement à la rentabilité seule est-il utilisé ?**
C'est un outil de simulation, activé sur demande en cas de tension budgétaire ou de retournement de marché. Il ne peut jamais déclasser un projet réglementaire ni un projet à dépendance maximale — c'est la règle de sauvegarde. Sept projets sur onze bougent de trois rangs ou plus : c'est le résultat le plus important du chapitre, il montre qu'on perdrait de la rentabilité en poursuivant la rentabilité.

**17. Comment actualisez-vous le classement dans l'année ?**
Les cotations sont portées par la fiche d'identification P1-03, mise à jour mensuellement par chaque chef de projet ; le cockpit régénère le classement et les radars sans ressaisie. Le tableau n°1 est présenté chaque mois au Comité Stratégique ; les poids, eux, ne bougent qu'une fois par an.

**18. Vous avez relevé des incohérences dans les données d'entrée ?**
Deux. Office 365 est annoncé sur 2 mois dans le texte et 3 mois dans le tableau : j'ai retenu 3 mois, cohérent avec 220 j/h. La Migration Azure est annoncée en juillet et en août : j'ai retenu août. Je les ai signalées à la direction — c'est précisément le rôle de la fiche d'identification normalisée de rendre ces contradictions visibles.

## C. Plan de management du pilote

**19. Pourquoi un cycle en V et pas de l'agile ?**
Parce que le périmètre est figé et connu — 200 boîtes, 5 sites, 12 équipes —, que la migration est technique, et que le forfait exige un périmètre contractuel. Le référentiel reste compatible avec l'agile : un projet Scrum conserve le démarrage, la planification allégée, la maîtrise et la clôture, et remplace l'exécution séquentielle par des itérations. Les projets de développement du portefeuille le feront.

**20. Pourquoi un forfait plutôt qu'une régie ?**
Le forfait transfère le risque de dérive de charge au prestataire : 120 j/h à 400 €, engagement de résultat, pénalités. Son coût : une incertitude sur la disponibilité des intervenants — c'est l'enseignement E3, qui impose désormais une clause de nommage et de continuité dans le cahier des charges.

**21. Une réserve pour aléas de 2 % seulement, n'est-ce pas trop peu ?**
C'est un plafond ferme posé par la direction, pas une estimation. La réserve n'est pas la variable d'ajustement : sur un budget plafonné, la variable est le périmètre. Fin mai, l'écart de 5 K€ a été traité par un arbitrage de périmètre, pas par la réserve. Et le forfait absorbe la dérive de charge prestataire.

**22. Comment tenez-vous le pic de juin avec trois administrateurs, également mobilisés par CI/CD ?**
Trois choix de planification : l'audit lancé dès la semaine 16, avant la fin du cadrage ; la migration pilote qui démarre dès la synchronisation validée, recouvrant le lot précédent de deux semaines ; et l'arbitrage de portefeuille sur CI/CD — pipeline unique au T2, multi-environnements au T3. Le pic est identifié comme point à surveiller dans le budget mensuel.

**23. Que se passe-t-il si l'audit J1 révèle un annuaire inexploitable ?**
C'est le risque R2, coté 12. L'hypothèse de cadrage prévoit +15 j/h et un report de J2. Il s'est partiellement matérialisé : 9 j/h au lieu de 4. D'où l'enseignement E1 : une rubrique « qualité des données d'entrée » obligatoire dans la note de cadrage et 2 j/h d'audit préalable sur tout projet touchant à l'annuaire — MFA et Stockage en bénéficient.

**24. Et si le périmètre ne peut plus être réduit ?**
Alors la décision remonte au sponsor : la charte fixe qu'un engagement portant le coût final au-delà de 102 K€ relève de lui, pas du chef de projet. Ce serait une demande de changement à impact financier, arbitrée en COPIL, avec information immédiate des projets aval. Mais sur Office 365, les exclusions possibles sont identifiées dès le cadrage — l'archivage en ligne, la téléphonie Teams, Power BI.

**25. Pourquoi 12 % de la charge en conduite du changement ?**
Parce que le passage de l'existant à la cible change la manière de travailler de 200 personnes sur 5 sites. Un projet techniquement réussi dont personne n'utilise Teams est un échec métier : c'est l'objectif O4, le seul qui se mesure après la fin du projet, à J5 + 30 jours. Et la mesure la plus efficace ne coûte rien : communiquer par l'outil que l'on déploie, puis fermer les anciens partages.

## D. Indicateurs et pilotage

**26. Que sont l'IPC et l'IPD ?**
Les indices de performance des coûts et des délais, issus de la valeur acquise. IPC = valeur acquise / coût réel : en dessous de 1, le projet coûte plus que la valeur produite. IPD = valeur acquise / valeur planifiée : en dessous de 1, le projet est en retard. Fin mai : IPC 0,95 au seuil, IPD 0,91 en Ambre. Ce sont les deux indicateurs qui alimentent les agrégats de portefeuille.

**27. Pourquoi un axe adoption dans le tableau de bord ?**
Les douze premiers indicateurs suffiraient à déclarer le projet réussi — budget, jalons, migration sans erreur — sans rien dire de l'essentiel : les 200 salariés travaillent-ils différemment ? Les indicateurs K13 à K16 sont les seuls qui mesurent la valeur réellement livrée, et les seuls relevés après la clôture.

**28. Que déclenche exactement un indicateur en Rouge ?**
Un rapport d'écarts sous 5 jours ouvrés adressé au sponsor, avec cause racine et options chiffrées. C'est ce qui s'est passé fin mai sur le coût final estimé. Un Ambre est traité par le chef de projet en point hebdomadaire ; deux mois consécutifs en Ambre déclenchent un COPIL extraordinaire ; une menace sur le Go-Live est communiquée aux quatre projets aval avant toute autre diffusion.

**29. Un relevé mensuel suffit-il sur un projet de trois mois ?**
Non — c'est l'enseignement E5 : le franchissement du seuil sur le coût final a été détecté trois semaines après son apparition réelle. Désormais, les indicateurs de coût passent en relevé bimensuel sur tout projet de moins de quatre mois.

## E. Recette et clôture

**30. Qui prononce la recette ?**
Le recetteur n'est jamais le réalisateur. La recette fonctionnelle est prononcée par la MOA — le référent DRH —, la recette technique par l'architecte et le RSSI. Capgemini présente, assiste, mais ne prononce jamais. Le comité de recette se réunit deux fois par semaine pendant les campagnes.

**31. Pourquoi un test négatif ?**
Parce que recetter uniquement ce qui doit fonctionner laisse passer les défauts de sécurité, qui se manifestent quand quelque chose fonctionne alors que ça ne devrait pas. Le scénario F4 tente un partage externe qui doit échouer ; il a révélé une politique DLP mal appliquée, invisible des tests positifs. C'est l'enseignement E6 : au moins un test négatif par campagne de sécurité, généralisé au plan de test type.

**32. Qu'est-ce qu'une réserve acceptable ?**
Une réserve datée, portée par un responsable nommé, sans effet sur la continuité de service. Toute réserve sans échéance est requalifiée en anomalie bloquante et la recette est refusée. Il n'existe pas de « recette sous condition » : une condition est une réserve, et elle se date. Sur Office 365, la réserve n°1 conditionne la bascule ; la n°2 ne la conditionne pas.

**33. Pourquoi la VSR conditionne-t-elle le solde du prestataire ?**
Parce que la recette ne s'arrête pas au Go-Live : 30 jours de vérification de service régulier, aucune bloquante sur 30 jours consécutifs, adoption au vert. 80 % du forfait sont libérés à la signature du PV, 20 % après la VSR. Le PV rend explicite ce que la signature déclenche financièrement.

**34. Quels documents de clôture oublie-t-on le plus souvent ?**
Deux, et ce sont les plus coûteux : l'attestation de restitution des accès — sans elle, des comptes prestataires à privilèges restent actifs des mois — et la clause de réversibilité adossée au transfert de propriété — sans elle, on ne peut ni changer de prestataire ni internaliser. Les deux sont désormais des conditions bloquantes du solde de facturation.

## F. Capitalisation et mesure des effets

**35. Comment garantissez-vous que les REX servent vraiment ?**
Par l'étape 4 : l'instruction par la PMO. La plupart des organisations s'arrêtent à la rédaction ; les fiches sont archivées et jamais relues. Chez nous, chaque enseignement est qualifié — transposable ? impose-t-il une évolution du référentiel ? — et devient une action avec porteur et échéance. La clôture n'est prononcée qu'une fois l'étape 4 réalisée. Résultat sur Office 365 : trois modèles révisés, une règle de pilotage modifiée, deux fiches en base de connaissance.

**36. Donnez un exemple d'amélioration concrète pour un projet futur.**
E2 : les débits des sites de production de Morlaix et Concarneau n'étaient documentés nulle part ; la mesure a été faite dans l'urgence en semaine 16. Une fiche permanente « contraintes d'infrastructure par site » entre en base de connaissance, réutilisable par Stockage et Sauvegarde Cloud. Cinq des six enseignements bénéficient à des projets pas encore lancés.

**37. Comment prouverez-vous que la PMO a produit des effets ?**
En figeant une situation de référence en mai 2026, avant le déploiement, sur six indicateurs : usage du référentiel, jalons tenus, écart budgétaire, écart de charge, anomalies après mise en production, NPS des chefs de projet. Relevés à 6 et 12 mois. Sans référence initiale, aucun progrès n'est démontrable. Et les biais sont traités : enquête dépouillée par la DRH, usage réel audité sur deux projets tirés au sort, projets sans baseline exclus des agrégats.

**38. Quel est le ROI de la PMO elle-même ?**
Trois gains chiffrables : 3 à 5 jours de chef de projet par projet, gagnés par les modèles — soit 30 à 50 jours sur le portefeuille ; les dérives détectées avant qu'elles ne deviennent des faits accomplis — 5 K€ sur Office 365, traités en trois semaines ; et l'arbitrage Office 365 lui-même, qui protège 900 K€ de projets aval. Le vrai ROI, c'est la qualité des décisions rendues possibles.

## G. Questions pièges

**39. Vous annoncez 26 documents et vous n'en avez produit que 14.**
Les 26 sont le référentiel ; les 14 sont ceux qu'Office 365 a produits à ce jour, en cadrage et planification. Les 12 autres restent prévus : 9 sont des documents de vie ou de clôture qui n'existent pas encore parce que le projet n'en est pas là, 2 ne sont pas encore mis en place, 1 n'est pas nécessaire. Le contrat documentaire dit lesquels, et quand.

**40. Votre méthode est-elle applicable à un projet de 50 j/h comme la Paie ?**
Oui, et c'est le test : la Paie conserve le socle complet malgré ses 50 j/h, parce que son caractère réglementaire impose une traçabilité intégrale — mais pas de PBS, pas de conduite du changement lourde, pas de lettre ESN. Le contrat documentaire adapte la charge au projet.

**41. Qu'est-ce qui vous a le plus manqué dans le contexte fourni ?**
Les dépendances et la capacité : les fiches de cadrage donnent l'importance, la rentabilité et la maîtrise des risques, mais rien sur l'ordonnancement ni sur la soutenabilité. C'est pour ça que trois critères sur six sont construits par la PMO — et c'est l'apport d'analyse propre de la cellule.

**42. Si vous deviez ne garder qu'une seule chose de votre dossier ?**
La lecture du portefeuille : Office 365, 6e au classement et 10e à la rentabilité, doit passer en tête de planning parce qu'il conditionne 900 K€. Aucune lecture projet par projet ne produit cette décision. Tout le reste — référentiel, indicateurs, REX — existe pour rendre ce type de décision possible et répétable.
