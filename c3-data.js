// UNIVERS·IA C3 — scénarios fictifs, conseils éditoriaux à adapter au contexte institutionnel.
export const generatorGuides={
  "syllabus": {
    "scenario": "Cycle ingénieur : concevoir une unité de 24 heures sur les API et les documents structurés.",
    "inputs": "Niveau, effectif, prérequis, compétences, calendrier, contraintes d’accessibilité et modalités de contrôle.",
    "sample": "Acquis : valider une structure JSON contre un schéma ; activité : comparer deux jeux d’entrées ; preuve : rapport de validation commenté ; critère : erreurs détectées et corrections justifiées.",
    "checks": [
      "Chaque acquis est observable et évalué",
      "Les heures annoncées correspondent au calendrier réel",
      "Une alternative sans service externe est prévue"
    ]
  },
  "rubric": {
    "scenario": "Master 1 : évaluer un dossier de recherche et sa soutenance.",
    "inputs": "Compétences, niveau attendu, critères, pondération, preuves admissibles, règles de déclaration d’IA.",
    "sample": "Exemple fictif sur 20 : méthode 6, justification des résultats 6, limites 4, communication 4 ; pour chaque critère : quatre descripteurs observables.",
    "checks": [
      "La somme des pondérations est cohérente",
      "Les critères reposent sur des preuves et non sur le style",
      "La grille a été testée sur un exemple fictif"
    ]
  },
  "assessment": {
    "scenario": "Projet de conception d’un prototype informatique avec justification individuelle.",
    "inputs": "Acquis, durée, ressources autorisées, mode de travail, livrables et dispositif oral.",
    "sample": "Livrables : prototype, journal de cinq décisions, 3 tests reproductibles, défense individuelle de cinq minutes ; la grille évalue la maîtrise plutôt que la simple élégance du code.",
    "checks": [
      "La tâche reste faisable sans abonnement à une IA",
      "Le barème distingue travail collectif et acquis individuels",
      "Les règles d’usage de l’IA sont annoncées avant l’épreuve"
    ]
  },
  "review": {
    "scenario": "Revue exploratoire sur les usages de l’IA générative à l’université.",
    "inputs": "Question de recherche, type de revue, concepts bilingues, bases effectivement accessibles, langues, période et critères.",
    "sample": "Journal de recherche : base | date | requête exacte | filtres | nombre de résultats réellement observé ; prévoir une grille population, méthode, limites.",
    "checks": [
      "Aucun résultat bibliographique n’est inventé",
      "La stratégie est adaptée à chaque base",
      "Les procédures de sélection sont documentées"
    ]
  },
  "article": {
    "scenario": "Article empirique sur une activité pédagogique évaluée auprès d’une cohorte.",
    "inputs": "Contribution, données disponibles, méthode, résultats mesurés, consignes de la revue et limites.",
    "sample": "Structure : problématique, méthodes, résultats vérifiables, limites et interprétation ; chaque conclusion renvoie à un tableau ou une observation disponible.",
    "checks": [
      "Aucune donnée ou citation fictive n’est créée",
      "La distinction résultat/interprétation est explicite",
      "Les consignes de la revue sont consultées à leur source"
    ]
  },
  "reviewers": {
    "scenario": "Révision d’un article après un rapport portant sur le protocole et les biais.",
    "inputs": "Commentaires exacts, modifications vraiment effectuées, pages/sections finales et désaccords fondés.",
    "sample": "Commentaire : « Préciser les critères de sélection ». Réponse : « Les critères ont été ajoutés en section 2.2 » uniquement si la modification a réellement été intégrée.",
    "checks": [
      "Chaque commentaire reçoit une réponse identifiable",
      "Les renvois correspondent au document révisé",
      "Les modifications non réalisées ne sont pas revendiquées"
    ]
  },
  "thesis": {
    "scenario": "Suivi d’un mémoire de master sur la classification de textes.",
    "inputs": "Question de recherche, calendrier, données autorisées, méthode, jalons, responsabilités et risques.",
    "sample": "Jalon 1 : question et protocole ; jalon 2 : corpus autorisé ; jalon 3 : expériences reproductibles ; jalon 4 : rédaction et discussion des limites.",
    "checks": [
      "Les livrables sont datés et vérifiables",
      "La confidentialité des données est respectée",
      "Le calendrier respecte les règles de l’établissement"
    ]
  },
  "feedback": {
    "scenario": "Retour formatif sur la solution d’un exercice de statistique.",
    "inputs": "Critères communiqués, observations sur une copie fictive, niveau, objectifs de reprise.",
    "sample": "Constat : « L’hypothèse d’indépendance n’est pas justifiée ». Action : « Identifier les événements puis reprendre le calcul en expliquant cette hypothèse ». La décision finale appartient à l’enseignant.",
    "checks": [
      "Le retour s’appuie sur des observations fournies",
      "Aucune note ni jugement personnel n’est inventé",
      "La personne enseignante vérifie le message avant envoi"
    ]
  }
};
export const modulePracticals={
  "teach": {
    "mission": "Créer une séance de deux heures sur les données structurées.",
    "process": [
      "Rédiger trois acquis observables",
      "Proposer un TD et ses critères de correction",
      "Comparer deux scénarios avec et sans IA"
    ],
    "sample": "Acquis « diagnostiquer un document XML » → exercice de validation sur un jeu fictif → grille de correction : erreurs identifiées, justification, solution.",
    "reflection": "La preuve produite par les étudiants mesure-t-elle les acquis annoncés ?",
    "checks": [
      "Alignement explicite acquis–activité–preuve",
      "Consignes compréhensibles pour un débutant",
      "Contrôle disciplinaire réalisé"
    ]
  },
  "assess": {
    "mission": "Remplacer une restitution de définitions par un exercice contextualisé.",
    "process": [
      "Définir une compétence individuelle mesurable",
      "Créer un dossier fictif et des consignes d’usage de l’IA",
      "Prévoir soutenance ou journal de décisions"
    ],
    "sample": "Étude de cas : analyser deux solutions techniques et défendre un choix, plutôt que demander uniquement une définition.",
    "reflection": "Une personne qui reproduit une sortie IA sans la comprendre peut-elle réussir cette épreuve ?",
    "checks": [
      "Évaluation des raisonnements",
      "Traçabilité proportionnée",
      "Équité d’accès aux outils"
    ]
  },
  "review": {
    "mission": "Préparer une revue exploratoire sans prétendre avoir interrogé les bases.",
    "process": [
      "Décomposer la question en concepts bilingues",
      "Fixer critères et variables à extraire",
      "Établir un journal de requêtes réellement exécutées"
    ],
    "sample": "Tableau à remplir : date, base, requête, filtres, nombre réel de notices, motif de sélection.",
    "reflection": "Une autre personne pourrait-elle reproduire les recherches avec les informations fournies ?",
    "checks": [
      "Type de revue justifié",
      "Requêtes et décisions documentées",
      "Références vérifiées dans les sources"
    ]
  },
  "article": {
    "mission": "Auditer le plan d’un article scientifique en préparation.",
    "process": [
      "Relier la contribution à des données disponibles",
      "Distinguer résultats et interprétation",
      "Créer une matrice des commentaires à traiter"
    ],
    "sample": "Affirmation « la méthode améliore la précision » → joindre la mesure comparative observée et sa limite ; sinon reformuler en hypothèse.",
    "reflection": "Chaque assertion importante possède-t-elle une preuve primaire accessible ?",
    "checks": [
      "Aucune référence inventée",
      "Limites de méthode déclarées",
      "Consignes de revue respectées"
    ]
  },
  "thesis": {
    "mission": "Tenir une revue de progrès doctoral fondée sur quatre livrables.",
    "process": [
      "Fixer un jalon daté avec preuve attendue",
      "Identifier risques et choix scientifiques",
      "Documenter le suivi et la déclaration d’usage IA"
    ],
    "sample": "Jalon : protocole d’annotation et dix essais pilotes documentés ; risque : ambiguïté des catégories ; décision : réunion de calibration.",
    "reflection": "La progression reflète-t-elle une contribution scientifique réelle et attribuable ?",
    "checks": [
      "Responsabilités identifiées",
      "Choix de méthode justifiés",
      "Données de recherche protégées"
    ]
  },
  "train": {
    "mission": "Préparer un atelier de sensibilisation pour dix collègues.",
    "process": [
      "Identifier deux besoins concrets",
      "Faire tester un prompt sur des données fictives",
      "Organiser une revue critique des sorties obtenues"
    ],
    "sample": "Déroulé fictif : 15 min diagnostic, 20 min démonstration, 30 min travail en binômes, 15 min restitution critique, 10 min suivi.",
    "reflection": "Les participants savent-ils expliquer les limites de l’outil après l’atelier ?",
    "checks": [
      "Participation active",
      "Alternative sans service payant",
      "Évaluation pratique non certifiante"
    ]
  }
};
export const advancedPracticals={
  "pedagogie": {
    "task": "Reconcevoir une activité d’apprentissage en reliant objectif, preuve et critère.",
    "example": "Objectif : justifier le choix d’une méthode ; preuve : note argumentée avec limites ; critère : justification contrôlable.",
    "checks": [
      "Objectif observable",
      "Preuve authentique",
      "Alternative accessible"
    ]
  },
  "evaluation": {
    "task": "Réviser un barème pour mesurer le raisonnement plutôt que la présentation.",
    "example": "Distinguer qualité des hypothèses, sources vérifiées et défense orale dans la pondération.",
    "checks": [
      "Pondération explicite",
      "Preuves individuelles",
      "Règles IA annoncées"
    ]
  },
  "recherche": {
    "task": "Documenter le contrôle de deux notices bibliographiques candidates.",
    "example": "Enregistrer titre, auteurs, DOI vérifié et motif de pertinence dans un tableau daté.",
    "checks": [
      "Source primaire",
      "Données réellement consultées",
      "Limites documentées"
    ]
  },
  "publication": {
    "task": "Préparer une matrice de révision après une évaluation scientifique.",
    "example": "Pour chaque commentaire : réponse, action effective, section du manuscrit et éventuel désaccord argumenté.",
    "checks": [
      "Réponse traçable",
      "Aucun changement fictif",
      "Vérification des renvois"
    ]
  }
};
export const casePracticals={
  "i1": [
    "Définir une règle d’autorisation et deux scénarios d’accès",
    "Créer des entrées fictives et des tests de statut",
    "Confronter chaque échec à la règle prévue",
    "Tableau endpoint–risque–test–preuve"
  ],
  "i2": [
    "Distinguer robustesse du prototype et compréhension individuelle",
    "Imposer un journal de décisions daté",
    "Comparer mesures réelles et alternatives de conception",
    "Grille technique et grille orale séparées"
  ],
  "i3": [
    "Formuler une question exploratoire sur WebXR",
    "Décomposer standards, systèmes et usages en concepts",
    "Archiver les requêtes réellement lancées",
    "Matrice de recherche traçable par base"
  ],
  "s1": [
    "Définir trois codes avec critères d’inclusion",
    "Tester sur des extraits fictifs",
    "Documenter les interprétations contradictoires",
    "Codebook et tableau de désaccords"
  ],
  "s2": [
    "Justifier le choix méthodologique d’une revue de portée",
    "Définir l’extraction par publics et pratiques",
    "Documenter limites et types de preuve",
    "Grille question–méthode–résultat–limites"
  ],
  "s3": [
    "Séparer verbatims réels autorisés et interprétations",
    "Assurer l’absence de citations fabriquées",
    "Discuter les explications concurrentes",
    "Plan de manuscrit appuyé sur un journal de preuves"
  ],
  "h1": [
    "Distinguer hypothèse, protocole et observation",
    "Identifier sources de biais et conditions de sécurité",
    "Proposer des critères de révision avant expérimentation",
    "Grille des risques méthodologiques"
  ],
  "h2": [
    "Définir population, test évalué et référence comparative",
    "Documenter les bases réellement consultées",
    "Comparer indicateurs et qualité méthodologique",
    "Matrice tests–échantillons–limites"
  ],
  "d1": [
    "Identifier la question de droit et les faits pertinents",
    "Consulter les textes et décisions officiels en vigueur",
    "Séparer règle juridique, application et interprétation",
    "Note de cas avec références primaires vérifiées"
  ],
  "d2": [
    "Formuler une thèse doctrinale et les objections",
    "Contrôler la jurisprudence à sa source officielle",
    "Définir le plan et les limites temporelles",
    "Plan problématisé et tableau des sources vérifiées"
  ],
  "g1": [
    "Choisir une situation stratégique fictive",
    "Construire deux scénarios avec hypothèses",
    "Documenter les indicateurs et les risques",
    "Matrice scénarios–hypothèses–décisions"
  ],
  "g2": [
    "Définir variables et protocole d’analyse",
    "Consigner la provenance des données autorisées",
    "Distinguer corrélation et interprétation causale",
    "Plan de résultats et fichier de reproductibilité"
  ],
  "l1": [
    "Réunir deux traductions légalement réutilisables",
    "Identifier les choix lexicaux et stylistiques",
    "Justifier les divergences par le texte original",
    "Tableau passage–variante–justification"
  ],
  "l2": [
    "Construire un portfolio de trois versions",
    "Annoter les choix et les hésitations",
    "Définir des critères de révision et d’autoévaluation",
    "Portfolio avec commentaires critiques"
  ],
  "l3": [
    "Énoncer une proposition interprétative réfutable",
    "Appuyer l’analyse sur des passages authentifiés",
    "Discuter deux lectures alternatives",
    "Plan d’essai avec preuves textuelles"
  ]
};
export const integritySituations=[
  {
    "id": "sources",
    "title": "Une référence scientifique introuvable",
    "situation": "Un modèle propose un article crédible avec DOI, mais le titre et les auteurs ne correspondent pas à la notice officielle.",
    "decision": "Ne pas citer la référence telle quelle ; contrôler DOI, métadonnées et texte primaire, puis écarter ou corriger la notice.",
    "checks": [
      "Rechercher la publication à la source",
      "Comparer titre, auteurs, année et DOI",
      "Documenter la décision de citation"
    ],
    "warning": "Un DOI valide ne prouve pas la pertinence d’un contenu."
  },
  {
    "id": "transparence",
    "title": "Une aide à la rédaction non déclarée",
    "situation": "Un mémoire utilise une IA pour restructurer plusieurs chapitres, alors que la déclaration de méthodes mentionne uniquement un correcteur orthographique.",
    "decision": "Tenir un journal d’usage factuel, préciser les opérations réellement effectuées et consulter le règlement du cursus avant la remise.",
    "checks": [
      "Décrire les tâches réellement assistées",
      "Distinguer contribution humaine et automatisation",
      "Valider avec les consignes locales"
    ],
    "warning": "Les règles de déclaration varient selon l’établissement et la revue."
  },
  {
    "id": "confidentialite",
    "title": "Des données d’étudiants dans un outil externe",
    "situation": "Un enseignant souhaite envoyer des copies identifiables à un service IA sans accord ni vérification contractuelle.",
    "decision": "Suspendre le transfert ; utiliser des données fictives ou un dispositif autorisé après validation par les personnes compétentes.",
    "checks": [
      "Évaluer sensibilité et finalité",
      "Examiner fournisseur et conditions de traitement",
      "Conserver uniquement les données nécessaires"
    ],
    "warning": "Une simple suppression des noms peut laisser des indices de réidentification."
  },
  {
    "id": "evaluation",
    "title": "Un soupçon d’usage de l’IA fondé sur le style",
    "situation": "Une copie contient des formulations inhabituelles ; un détecteur automatisé signale une probabilité élevée d’IA.",
    "decision": "Ne pas conclure à une fraude à partir du style ou d’un score ; appliquer les procédures institutionnelles avec éléments vérifiables et garanties contradictoires.",
    "checks": [
      "Consulter les règles annoncées à l’étudiant",
      "Examiner des preuves et explications vérifiables",
      "Garantir une procédure humaine et équitable"
    ],
    "warning": "Les détecteurs d’IA peuvent produire des faux positifs."
  }
];
