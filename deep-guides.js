/* Exercices originaux et fictifs ; aucune mesure ou référence scientifique inventée. */
export const deepGuides = {
  "concevoir-cours": {
    "duration": "60–90 min",
    "context": "Sciences de l’information, licence 3 : module de 6 séances sur la qualité des données.",
    "task": "Définir trois compétences mesurables ; construire le tableau séances–activités–preuves ; prévoir un mini-diagnostic en ouverture et une activité de remédiation.",
    "example": "Compétence « contrôler un jeu de données » → séance 3 : audit de 20 lignes fictives → preuve : journal d’erreurs et justification des corrections → critère : 4 erreurs détectées et expliquées.",
    "prompt": "Agis comme ingénieur pédagogique. Pour un module de [discipline] de [niveau], [durée], propose 3 acquis observables et un alignement acquis / activité / preuve / critère / durée. Prévois une alternative sans IA et une vérification humaine. Signale explicitement les prérequis manquants.",
    "checks": [
      "Chaque acquis utilise un verbe observable et dispose d’une preuve",
      "La charge de travail et l’accessibilité sont réalistes",
      "Aucun contenu disciplinaire non vérifié n’est présenté comme certain"
    ]
  },
  "td-critique": {
    "duration": "45–75 min",
    "context": "Licence de lettres : une IA propose une interprétation d’un extrait du domaine public.",
    "task": "Distribuer deux interprétations, faire surligner cinq affirmations contrôlables et demander une réécriture fondée sur les passages exacts.",
    "example": "Extrait : « le narrateur sait tout ». Analyse : formulation trop générale ; preuve requise : deux indices textuels contradictoires ; restitution : « le narrateur semble disposer de certaines informations, mais reste limité sur… ».",
    "prompt": "Prépare un TD de [discipline] sur [texte ou question], niveau [niveau]. Donne une réponse IA volontairement plausible mais discutable, puis une grille d'analyse séparant faits, interprétations, preuves requises et incertitudes. Ne produis aucune citation supposée réelle.",
    "checks": [
      "Les étudiants disposent des textes sources",
      "La correction distingue erreur factuelle et désaccord interprétatif",
      "Les citations sont contrôlées dans la source primaire"
    ]
  },
  "eval-authentique": {
    "duration": "75 min",
    "context": "Master de management : décision d’implantation d’un service sur données fictives.",
    "task": "Distribuer un dossier court ; demander deux stratégies opposées ; organiser une soutenance de cinq minutes et une note de justification.",
    "example": "Grille sur 20 : analyse du problème 5, justification des données 5, comparaison des options 5, défense orale et limites 5 ; note de transparence IA hors barème si le règlement l’exige.",
    "prompt": "Conçois une évaluation authentique en [discipline] pour [niveau] : situation, données fictives fournies, livrables, critères observables avec pondération 20/20 et questions de soutenance. Sépare usage IA autorisé et interdit selon [règlement à préciser].",
    "checks": [
      "Les critères mesurent les acquis annoncés",
      "Le barème totalise exactement la valeur prévue",
      "Le contexte permet une résolution sans accès à un outil payant"
    ]
  },
  "declaration-ia": {
    "duration": "20–30 min",
    "context": "Mémoire de droit : un assistant a été utilisé pour améliorer la formulation et proposer un plan, sans rechercher de jurisprudence.",
    "task": "Établir un journal outil–date–usage–données saisies–contrôle, puis rédiger une déclaration qui n’exagère pas les vérifications.",
    "example": "Exemple : « Un assistant conversationnel a été utilisé en septembre pour proposer trois structures alternatives au chapitre 2. Les sources et références juridiques ont été recherchées et vérifiées séparément par l’auteur. »",
    "prompt": "Aide-moi à rédiger une déclaration d’usage de l’IA pour [travail]. Usages réels : [liste]. Outil et période : [précisions]. Vérifications humaines : [liste]. Formule un texte factuel de 80 à 120 mots, sans inventer d’opérations et en signalant les informations manquantes.",
    "checks": [
      "Le texte mentionne uniquement des usages réellement réalisés",
      "Les données confidentielles ne sont pas reproduites",
      "La version finale respecte la politique de l’établissement ou de la revue"
    ]
  },
  "strategie-documentaire": {
    "duration": "90–120 min",
    "context": "Doctorat en sciences de l’éducation : effets des rétroactions numériques en première année universitaire.",
    "task": "Décomposer la question en concepts, trouver synonymes FR/EN, tester chaque expression dans les bases effectivement accessibles, enregistrer les nombres de résultats.",
    "example": "Concept « rétroaction » → feedback OR formative assessment ; population « première année » → first-year students ; journal : base, date, syntaxe exacte, période, résultats, export, limites.",
    "prompt": "Pour la question [question], propose une matrice concepts / synonymes français et anglais et des requêtes candidates pour [bases]. Indique les opérateurs à adapter aux interfaces, les critères d’inclusion et un modèle de journal de recherche. Ne prétends pas avoir exécuté de requête.",
    "checks": [
      "Les requêtes exécutées sont enregistrées avec date et base",
      "Les décisions de sélection sont explicites",
      "Les résultats annoncés proviennent d’une recherche réellement effectuée"
    ]
  },
  "verification-references": {
    "duration": "45–60 min",
    "context": "Projet de biologie : cinq références bibliographiques fournies par un assistant génératif.",
    "task": "Comparer notices et enregistrements éditeur/Crossref ; distinguer existence, exactitude des métadonnées et pertinence scientifique.",
    "example": "Tableau : titre annoncé | titre réel | auteurs | année | DOI contrôlé | texte consulté | statut. Une notice vraie mais hors sujet est marquée « valide, non pertinente ».",
    "prompt": "Voici des notices à contrôler : [liste sans données sensibles]. Crée une grille titre exact, auteurs, année, revue, DOI, source consultée et pertinence pour [question]. Signale « à vérifier » plutôt que de compléter les champs manquants ou d’inventer des DOI.",
    "checks": [
      "Le DOI est résolu ou confirmé par la source officielle",
      "La pertinence repose sur une lecture, pas seulement un titre",
      "Les références non retrouvées sont exclues ou explicitement signalées"
    ]
  },
  "protocole-revue": {
    "duration": "120–180 min",
    "context": "Revue systématique envisagée sur l’enseignement de la programmation à l’université.",
    "task": "Définir population, intervention et résultats ; fixer exclusions, doublons, sélection à deux lecteurs si possible et extraction des résultats.",
    "example": "Protocole exemple : étudiants du supérieur, cours de programmation, études empiriques, 2018–2026 ; extraction : pays, échantillon, activité, mesures, risques de biais ; diagramme de flux basé uniquement sur nombres réels.",
    "prompt": "Élabore un protocole préliminaire de revue [type] sur [question] : question, bases à consulter, chaîne de recherche candidate, critères d’inclusion/exclusion, procédure de sélection, variables d’extraction et analyse prévue. Ne simule ni résultats ni conformité PRISMA.",
    "checks": [
      "Le type de revue correspond à la question",
      "Le protocole est daté avant l’extraction",
      "PRISMA est utilisé pour le rapport lorsqu’il est applicable, sans étiquetage automatique"
    ]
  },
  "plan-article": {
    "duration": "60–90 min",
    "context": "Article en génie informatique : étude comparative de deux algorithmes sur un jeu d’essais contrôlé.",
    "task": "Établir les revendications, associer chaque résultat à une figure réellement produite puis signaler les analyses manquantes.",
    "example": "Plan : 1 question et contribution, 2 travaux apparentés vérifiés, 3 protocole reproductible, 4 mesures avec unités, 5 discussion des limites, 6 conclusion proportionnée.",
    "prompt": "À partir de [résultats effectivement mesurés] et [méthode], construis un plan d’article pour [revue cible]. Dans chaque section, distingue preuves disponibles, affirmations à vérifier et données manquantes. N’invente ni échantillons, ni statistiques, ni références.",
    "checks": [
      "La contribution est formulée sans survente",
      "Chaque conclusion est reliée à des données disponibles",
      "Les consignes de la revue cible sont vérifiées à leur source"
    ]
  },
  "reponse-evaluateurs": {
    "duration": "90 min",
    "context": "Article de sciences sociales : un évaluateur demande de justifier la stratégie d’échantillonnage.",
    "task": "Créer une matrice commentaire, réponse, modification du manuscrit et emplacement exact, sans prétendre à un nouveau recueil.",
    "example": "Commentaire : « Clarifier le recrutement ». Réponse : « Nous avons ajouté en Méthodes, §2.2, la procédure d’invitation et les critères d’inclusion ; la taille de l’échantillon reste inchangée. »",
    "prompt": "Transforme les commentaires suivants [copie autorisée] en tableau point par point : remarque exacte, action réellement effectuée, réponse polie, emplacement vérifié, limites restantes. Si une modification n’a pas été faite, demande confirmation avant de rédiger sa réponse.",
    "checks": [
      "Aucune modification fictive n’est déclarée",
      "Tous les commentaires reçoivent une réponse traçable",
      "Les références de pages correspondent à la version révisée"
    ]
  },
  "encadrement-these": {
    "duration": "45 min par jalon",
    "context": "Suivi doctoral semestriel : thèse sur les méthodes de classification de textes.",
    "task": "Définir quatre livrables datés, distinguer tâches scientifiques et aide IA, consigner décisions et obstacles pendant chaque entretien.",
    "example": "Jalon 1 : corpus légalement exploitable + protocole d’annotation ; jalon 2 : ligne de base ; jalon 3 : validation croisée ; jalon 4 : rédaction de limites et reproductibilité.",
    "prompt": "Propose un tableau de suivi doctoral pour [sujet] et [calendrier] : objectif, preuve attendue, responsable, délai, risques et décision de réunion. Ajoute un champ « usage IA déclaré ». Ne remplace pas la charte doctorale ni les exigences de l’école doctorale.",
    "checks": [
      "Les livrables sont observables et datés",
      "Les choix scientifiques restent sous la responsabilité du doctorant",
      "Le suivi respecte la charte et les décisions d’encadrement"
    ]
  },
  "protection-donnees": {
    "duration": "45–75 min",
    "context": "Enquête auprès d’étudiants : verbatims et données d’inscription potentiellement identifiants.",
    "task": "Classer les fichiers, préparer une version fictive, cartographier le prestataire IA et décider des données transmissibles avant tout usage.",
    "example": "Grille : données publiées = usage possible sous conditions ; données pseudonymisées = risque résiduel ; verbatims sensibles = ne pas transférer sans cadre et autorisation.",
    "prompt": "À partir des catégories [description sans données réelles], construis une matrice sensibilité / finalité / tiers / risques / mesures / validation requise pour un projet universitaire. Ne demande aucun nom, identifiant ni document confidentiel.",
    "checks": [
      "Le traitement a une base et une autorisation appropriées",
      "Les données sont minimisées avant transfert",
      "La pseudonymisation n’est pas assimilée à une anonymisation garantie"
    ]
  },
  "atelier-equipe": {
    "duration": "90 min",
    "context": "Atelier d’initiation IA destiné à huit enseignants de disciplines différentes.",
    "task": "Commencer par un cas fictif commun, comparer une proposition IA à une grille de qualité, puis transférer la méthode à chaque discipline.",
    "example": "Déroulé : 15 min attentes, 20 min démonstration, 25 min exercices par binôme, 20 min vérification croisée, 10 min bilan et engagement.",
    "prompt": "Prépare un atelier de [durée] pour [public] : objectifs observables, activité d’entrée, démonstration avec données fictives, exercice en binômes, analyse des erreurs et mini-bilan. Fournis consignes et critères de réussite, sans imposer un fournisseur.",
    "checks": [
      "Chaque participant réalise une activité pratique",
      "L’atelier montre limites et vérifications, pas seulement les avantages",
      "Une alternative non connectée est disponible"
    ]
  },
  "plan-td-projet": {
    "duration": "120 min de cadrage",
    "context": "Projet interdisciplinaire économie–informatique sur une simulation de consommation énergétique.",
    "task": "Définir rôles, hypothèses et jeux de données fictifs ; fixer trois jalons et prévoir un oral individuel de justification.",
    "example": "Livrable collectif : prototype et analyse ; livrable individuel : journal de trois décisions et une limite observée ; pondération décidée avant le projet.",
    "prompt": "Conçois un projet de [discipline A] et [discipline B], sur [durée], avec données fictives : question commune, rôles, jalons, livrables, évaluation de la contribution individuelle et critères d’éthique numérique.",
    "checks": [
      "La charge de travail est répartie explicitement",
      "Les décisions individuelles restent évaluables",
      "Le jeu de données ne contient aucune information sensible"
    ]
  },
  "retroaction": {
    "duration": "30–45 min",
    "context": "Copies d’étudiants en mathématiques : résolution d’un problème de probabilités fictif.",
    "task": "Associer chaque remarque à un critère, proposer une piste d’amélioration et demander à l’étudiant de reprendre une étape précise.",
    "example": "Constat : « L’hypothèse d’indépendance n’est pas justifiée ». Action : « Indique les événements considérés et argumente l’indépendance ou corrige le calcul ». Vérification : reprise de la ligne concernée.",
    "prompt": "Reformule ces observations anonymisées [notes] en feedbacks liés à [critères] : constat vérifiable, indice d’amélioration et tâche de reprise. Pas de note calculée automatiquement ni jugement sur la personne.",
    "checks": [
      "Le feedback décrit la production, non l’étudiant",
      "Une action réalisable est proposée pour chaque difficulté",
      "L’enseignant valide et ajuste avant diffusion"
    ]
  },
  "oral-ia": {
    "duration": "45–60 min",
    "context": "Soutenance d’un mémoire utilisant un assistant pour structurer la discussion.",
    "task": "Préparer une grille de cinq questions : données, décisions, alternatives, sources primaires et limites d’usage de l’IA.",
    "example": "Question : « Quelle observation changerait votre conclusion ? » ; attendus : discussion d’un scénario alternatif et repérage de l’élément du mémoire qui fonde la réponse.",
    "prompt": "Prépare un oral de [niveau] à partir de [acquis] : cinq questions progressives exigeant preuves, choix, contre-exemples, limites et déclaration d’usage de l’IA. Fournis critères de correction sans prétendre détecter un recours à l’IA.",
    "checks": [
      "Les questions évaluent la compréhension, pas un style supposé « IA »",
      "La grille est communiquée conformément aux règles applicables",
      "Aucune accusation de fraude ne repose sur un score automatique"
    ]
  },
  "protocole-entretien": {
    "duration": "60–90 min",
    "context": "Enquête de sociologie sur l’expérience d’apprentissage à distance.",
    "task": "Formuler six questions ouvertes, relances non orientées et script de consentement ; faire tester le guide sans collecter de données sensibles.",
    "example": "Question ouverte : « Racontez une séance qui vous a aidé à apprendre » ; relance neutre : « Qu’est-ce qui vous l’a fait penser ? » ; à éviter : « L’outil vous a-t-il forcément aidé ? ».",
    "prompt": "Conçois un guide d’entretien de recherche pour [question] : six questions ouvertes, relances neutres, procédure de consentement à valider et grille de note de terrain. Ne présume pas les réponses ni les résultats.",
    "checks": [
      "Chaque question correspond à un objectif de recherche",
      "Les relances ne présupposent pas la réponse",
      "Le protocole respecte les règles éthiques de collecte"
    ]
  },
  "journal-codage": {
    "duration": "90–120 min",
    "context": "Analyse de vingt commentaires fictifs d’étudiants sur une plateforme pédagogique.",
    "task": "Définir chaque code, ses frontières et les cas négatifs ; coder cinq extraits en double puis réviser la grille.",
    "example": "Code « difficulté technique » : inclure problème de connexion explicite ; exclure inconfort lié à la pédagogie ; contre-exemple : « je trouve le cours trop rapide ».",
    "prompt": "À partir de [extraits autorisés], propose un codebook provisoire : définition, inclusion, exclusion, extrait exemple inventé et contre-exemple pour chaque code. Ajoute un journal de révisions ; ne présente pas les catégories comme validées empiriquement.",
    "checks": [
      "Les unités d’analyse sont explicites",
      "Les désaccords et changements de codes sont documentés",
      "Les citations d’enquête ne sont pas fabriquées"
    ]
  },
  "reproductibilite": {
    "duration": "120 min",
    "context": "Étude de régression sur données publiques en économie, scripts Python versionnés.",
    "task": "Créer un dossier données–scripts–sorties, décrire versions des outils et ajouter une commande unique de reproduction.",
    "example": "README : source et licence des données, version Python, dépendances, variable cible, graines aléatoires, commande d’exécution et écarts attendus.",
    "prompt": "Prépare la structure reproductible d’une étude [type] à partir de [sources autorisées] : arborescence, dictionnaire de variables, versions logicielles, contrôles de données, commande de réplication et limites de partage.",
    "checks": [
      "La provenance et la licence des données sont documentées",
      "Les versions, paramètres et commandes sont reproductibles",
      "Les données non partageables sont exclues des archives publiques"
    ]
  },
  "figure-scientifique": {
    "duration": "45–60 min",
    "context": "Article expérimental : graphique de latence du prototype en fonction du nombre de requêtes.",
    "task": "Vérifier les unités, la source des points, les intervalles d’incertitude et le sens des axes, puis écrire une légende complète.",
    "example": "Exemple de légende : « Latence médiane en ms, n=5 répétitions par charge ; les barres représentent l’intervalle interquartile ; mesures issues des essais du 12/10 ». À n’utiliser que si ces mesures existent.",
    "prompt": "Examine la description [données et figure] : contrôle unité, axes, échelle, n, traitement des valeurs manquantes, provenance et légende. Signale ce qui reste à vérifier ; ne génère pas de résultats empiriques inexistants.",
    "checks": [
      "Les unités et transformations sont explicitées",
      "Les graphiques restent fidèles aux valeurs mesurées",
      "La légende mentionne source, échantillon et limites"
    ]
  },
  "choix-revue": {
    "duration": "60 min",
    "context": "Premier article en linguistique : comparaison de revues potentielles.",
    "task": "Relever les consignes officielles, le périmètre scientifique et les frais puis confirmer l’indexation auprès des index eux-mêmes.",
    "example": "Tableau : adéquation thématique, type d’article, délais annoncés avec date de consultation, frais, politique IA, preuves d’indexation et décision motivée.",
    "prompt": "Construis une grille de choix de revue pour [discipline], à compléter manuellement : pertinence, politique éditoriale, frais vérifiés, critères d’évaluation, indexation attestée à la source et règles sur l’IA. Ne propose pas de classement inventé.",
    "checks": [
      "L’indexation est confirmée à la source primaire",
      "Les coûts et politiques sont datés",
      "La décision privilégie l’adéquation scientifique"
    ]
  },
  "gestion-bibliographie": {
    "duration": "60 min",
    "context": "Mémoire de géographie : une centaine de notices importées dans un gestionnaire.",
    "task": "Dédupliquer DOI et titres, corriger noms/auteurs, classer par thèmes puis relier chaque citation à une note de lecture.",
    "example": "Fiche de lecture : question, méthode, échantillon, résultat principal, citation vérifiée avec page et limites ; statut « texte intégral lu / résumé uniquement ».",
    "prompt": "Propose un protocole de nettoyage de [nombre] références pour [logiciel] : doublons, DOI, métadonnées, mots-clés, notes de lecture, contrôle des citations. N’invente ni dates, ni pages, ni DOI.",
    "checks": [
      "Les doublons sont documentés avant suppression",
      "Chaque citation vient d’une source réellement consultée",
      "Le format respecte les consignes bibliographiques du cursus"
    ]
  },
  "strategie-accompagnement": {
    "duration": "90 min de conception",
    "context": "Plan de formation de personnels d’une faculté sur un trimestre.",
    "task": "Segmenter débutants/intermédiaires, choisir une tâche authentique par métier et préparer un diagnostic avant/après.",
    "example": "Parcours : initiation 2 h, atelier disciplinaire 2 h, transfert en situation 1 h ; trace : un support corrigé et une note de vérification.",
    "prompt": "Crée une progression de formation IA pour [publics] sur [durée] : objectifs par niveau, activités supervisées, livrables, vérification éthique et indicateurs de transfert au travail. Ne qualifie pas une autoévaluation de certification.",
    "checks": [
      "Les objectifs correspondent aux rôles des participants",
      "Chaque étape produit une preuve de pratique",
      "Les résultats de formation sont vérifiés sans surinterprétation"
    ]
  },
  "accessibilite-cours": {
    "duration": "60–90 min",
    "context": "Support de cours universitaire avec tableaux, schémas et questionnaires numériques.",
    "task": "Revoir hiérarchie des titres, lecture tabulaire, alternatives textuelles et ordre de navigation, puis tester avec clavier.",
    "example": "Exemple : un graphique montrant une tendance doit inclure unités, sens des axes et message essentiel dans une description, pas seulement « graphique de résultats ».",
    "prompt": "Audite le support [description non confidentielle] : langue, titres, alternatives des images, tableaux, contraste, navigation clavier et sous-titres. Propose des corrections à confirmer lors d’un test humain. Ne déclare pas une conformité WCAG sans audit.",
    "checks": [
      "Les informations non visuelles transmettent le sens des figures",
      "La navigation sans souris permet les mêmes actions",
      "Un contrôle humain complète les outils automatiques"
    ]
  },
  "charte-laboratoire": {
    "duration": "120–180 min",
    "context": "Laboratoire associant doctorants, enseignants-chercheurs et données de recherche sous convention.",
    "task": "Définir usages autorisés, données interdites au transfert, obligations de déclaration et procédure de révision validée par les instances.",
    "example": "Structure : finalités, périmètre, données, vérification scientifique, attribution des responsabilités, journal des usages, incidents et revue annuelle.",
    "prompt": "Propose le plan d’une charte IA pour [laboratoire] : cas d’usage, classes de données, obligations de vérification, déclaration, responsabilités et procédure d’approbation. Marque les points nécessitant validation juridique ou institutionnelle.",
    "checks": [
      "Le texte ne remplace pas les règlements institutionnels",
      "Les responsabilités et procédures d’escalade sont précisées",
      "Les personnes concernées participent à la validation"
    ]
  }
};
