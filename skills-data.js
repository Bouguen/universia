// Catalogue éditorial original UNIVERS·IA — 32 skills sans code exécutable.
// Les procédures sont des aides méthodologiques ; elles nécessitent une validation humaine.
export const skillFamilies = [
  {
    "id": "enseignement",
    "name": "Enseignement et pédagogie",
    "icon": "📚",
    "intro": "Préparer des situations d’apprentissage adaptées aux étudiants."
  },
  {
    "id": "evaluation",
    "name": "Évaluation et accompagnement",
    "icon": "✅",
    "intro": "Concevoir des évaluations explicites et des retours utiles."
  },
  {
    "id": "recherche",
    "name": "Recherche scientifique",
    "icon": "🔬",
    "intro": "Structurer les démarches de recherche et leur traçabilité."
  },
  {
    "id": "publication",
    "name": "Rédaction et publication",
    "icon": "✍️",
    "intro": "Améliorer la production et la communication scientifiques."
  },
  {
    "id": "donnees",
    "name": "Analyse de données",
    "icon": "📊",
    "intro": "Préparer, examiner et communiquer des données fiables."
  },
  {
    "id": "informatique",
    "name": "Informatique et développement",
    "icon": "💻",
    "intro": "Développer, vérifier et documenter des solutions techniques."
  },
  {
    "id": "gouvernance",
    "name": "Administration universitaire",
    "icon": "🏛️",
    "intro": "Accompagner les missions de gestion et d’assurance qualité."
  },
  {
    "id": "ethique",
    "name": "Éthique et intégrité",
    "icon": "🛡️",
    "intro": "Renforcer les contrôles, la transparence et la confidentialité."
  }
];
export const academicSkills = [
  {
    "id": "syllabus-aligne",
    "title": "Construire un syllabus aligné",
    "category": "enseignement",
    "level": "Fondamentaux",
    "goal": "Définir un syllabus cohérent entre acquis, activités et évaluations.",
    "example": "Niveau Master, module de 24 heures, 30 étudiants.",
    "deliverable": "Syllabus structuré et matrice d’alignement.",
    "steps": [
      "Recueillir objectifs, durée, prérequis et contraintes",
      "Formuler quatre acquis observables",
      "Associer à chaque acquis une activité et une preuve",
      "Élaborer une progression séance par séance",
      "Prévoir accessibilité et vérification par l’enseignant"
    ],
    "checks": [
      "Chaque acquis dispose d’une évaluation",
      "Durées et charges réalistes"
    ],
    "caution": "Ne pas présumer le règlement de l’établissement.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "classe-inversee",
    "title": "Préparer une classe inversée",
    "category": "enseignement",
    "level": "Intermédiaire",
    "goal": "Transformer un chapitre en séquences préparatoires et activités actives.",
    "example": "Cours d’algorithmes, Licence 2, séance de deux heures.",
    "deliverable": "Plan avant, pendant et après la séance.",
    "steps": [
      "Identifier le concept et les difficultés fréquentes",
      "Proposer deux supports courts à vérifier",
      "Concevoir une activité de résolution en groupe",
      "Prévoir un contrôle formatif individuel",
      "Définir une alternative sans outil IA"
    ],
    "checks": [
      "Préparation réalisable",
      "L’activité évalue la compréhension"
    ],
    "caution": "Ne pas inventer de ressources ou de liens pédagogiques.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "td-differencie",
    "title": "Créer un TD différencié",
    "category": "enseignement",
    "level": "Avancé",
    "goal": "Décliner un objectif en exercices de plusieurs niveaux.",
    "example": "Analyse de données, Licence 3, trois niveaux de maîtrise.",
    "deliverable": "TD progressif avec indices et corrections.",
    "steps": [
      "Préciser objectifs et prérequis",
      "Concevoir un diagnostic rapide",
      "Élaborer trois parcours vers le même acquis",
      "Rédiger les indices et corrigés justifiés",
      "Vérifier l’équité des critères"
    ],
    "checks": [
      "Objectif commun identifiable",
      "Corrections explicites"
    ],
    "caution": "Éviter de déduire le niveau réel d’un étudiant à partir de données sensibles.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "projet-interdisciplinaire",
    "title": "Concevoir un projet interdisciplinaire",
    "category": "enseignement",
    "level": "Fondamentaux",
    "goal": "Organiser un projet partagé entre plusieurs disciplines.",
    "example": "Écoconception, informatique et gestion, projet sur quatre semaines.",
    "deliverable": "Cahier de projet, livrables et jalons.",
    "steps": [
      "Identifier les contributions disciplinaires",
      "Définir une problématique commune",
      "Fixer livrables et responsabilités",
      "Planifier les revues intermédiaires",
      "Décrire les critères d’évaluation collective et individuelle"
    ],
    "checks": [
      "Rôles clairement attribués",
      "Livrables démontrables"
    ],
    "caution": "Ne pas inventer de partenariats institutionnels.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "grille-criteriee",
    "title": "Élaborer une grille critériée",
    "category": "evaluation",
    "level": "Intermédiaire",
    "goal": "Construire un barème transparent à niveaux de maîtrise.",
    "example": "Rapport de stage, 20 points, quatre critères.",
    "deliverable": "Rubrique d’évaluation pondérée.",
    "steps": [
      "Lister les compétences observables",
      "Définir critères et preuves attendues",
      "Décrire quatre niveaux mesurables par critère",
      "Calculer des pondérations cohérentes",
      "Tester sur deux copies fictives"
    ],
    "checks": [
      "Total des points exact",
      "Descripteurs distinctifs"
    ],
    "caution": "Une notation officielle nécessite validation par l’enseignant.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "evaluation-authentique",
    "title": "Concevoir une évaluation authentique",
    "category": "evaluation",
    "level": "Avancé",
    "goal": "Créer une tâche ancrée dans une situation professionnelle.",
    "example": "Génie informatique, projet API, cycle ingénieur.",
    "deliverable": "Énoncé, livrables, critères et soutenance.",
    "steps": [
      "Identifier la compétence visée",
      "Définir un contexte professionnel plausible",
      "Prévoir des traces de démarche et une démonstration",
      "Ajouter oral de vérification et grille critériée",
      "Préciser les règles d’usage de l’IA"
    ],
    "checks": [
      "Preuves individuelles identifiables",
      "Barème compatible avec les objectifs"
    ],
    "caution": "Ne pas supposer une fraude à partir de l’utilisation d’une IA.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "feedback-formatif",
    "title": "Rédiger un feedback formatif",
    "category": "evaluation",
    "level": "Fondamentaux",
    "goal": "Préparer un retour constructif fondé sur des observations.",
    "example": "Dissertation anonymisée, Licence 1, commentaires de l’enseignant.",
    "deliverable": "Feedback en forces, améliorations et actions.",
    "steps": [
      "Demander la production et les critères disponibles",
      "Séparer observations et interprétations",
      "Formuler deux points forts argumentés",
      "Donner trois améliorations opérationnelles",
      "Terminer par un exercice court de progression"
    ],
    "checks": [
      "Aucun fait inventé",
      "Ton professionnel et respectueux"
    ],
    "caution": "Ne pas traiter de données nominatives sans autorisation.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "quiz-diagnostique",
    "title": "Créer un quiz diagnostique",
    "category": "evaluation",
    "level": "Intermédiaire",
    "goal": "Repérer les prérequis par des questions ciblées.",
    "example": "Biologie cellulaire, 10 questions, premier cours.",
    "deliverable": "Quiz avec corrigé motivé et interprétation prudente.",
    "steps": [
      "Préciser les notions et pièges connus",
      "Construire des questions à réponses non ambiguës",
      "Vérifier cohérence des distracteurs",
      "Rédiger explications et niveaux de difficulté",
      "Suggérer remédiations sans diagnostic individuel automatique"
    ],
    "checks": [
      "Une seule bonne réponse par QCM",
      "Corrigés justifiables"
    ],
    "caution": "Les résultats d’un quiz ne suffisent pas à étiqueter les étudiants.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "question-recherche",
    "title": "Formuler une question de recherche",
    "category": "recherche",
    "level": "Avancé",
    "goal": "Transformer une idée large en question vérifiable.",
    "example": "Usages de l’IA en enseignement supérieur, étude exploratoire.",
    "deliverable": "Question de recherche, hypothèses et limites.",
    "steps": [
      "Clarifier phénomène, population et contexte",
      "Lister ce qui est établi et inconnu",
      "Proposer trois formulations distinctes",
      "Identifier variables et méthode compatibles",
      "Choisir une formulation avec limites explicites"
    ],
    "checks": [
      "Question examinable avec des données",
      "Distinction entre faits et hypothèses"
    ],
    "caution": "Ne pas présenter une hypothèse comme un résultat.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "strategie-bibliographique",
    "title": "Préparer une recherche bibliographique",
    "category": "recherche",
    "level": "Fondamentaux",
    "goal": "Produire une stratégie documentaire reproductible.",
    "example": "Évaluation formative assistée par IA, période 2020–2026.",
    "deliverable": "Chaînes de recherche et journal de collecte vierge.",
    "steps": [
      "Décomposer la question en concepts",
      "Proposer synonymes FR et EN",
      "Construire chaînes booléennes adaptées aux bases",
      "Définir critères et période",
      "Préparer un tableau de journal de recherche"
    ],
    "checks": [
      "Requêtes copiables et datables",
      "Critères explicites"
    ],
    "caution": "Ne jamais prétendre avoir interrogé une base sans y avoir accès.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "revue-exploratoire",
    "title": "Planifier une revue exploratoire",
    "category": "recherche",
    "level": "Intermédiaire",
    "goal": "Décrire les étapes d’une scoping review rigoureuse.",
    "example": "Pratiques pédagogiques avec IA, corpus à constituer.",
    "deliverable": "Protocole de sélection et grille d’extraction.",
    "steps": [
      "Définir question et périmètre",
      "Identifier sources potentielles à vérifier",
      "Énoncer critères d’inclusion et d’exclusion",
      "Décrire tri en étapes et journal des décisions",
      "Préparer extraction des preuves et limites"
    ],
    "checks": [
      "Décisions de sélection auditables",
      "Aucune étude fictive"
    ],
    "caution": "Ne pas fabriquer de références ou de diagramme de sélection.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "protocole-experimental",
    "title": "Auditer un protocole expérimental",
    "category": "recherche",
    "level": "Avancé",
    "goal": "Identifier menaces de validité avant une collecte.",
    "example": "Étude comparative de deux modalités de TD.",
    "deliverable": "Matrice risques, variables et améliorations.",
    "steps": [
      "Relever objectifs et population",
      "Identifier variables, biais et facteurs confondants",
      "Vérifier taille d’échantillon à justifier",
      "Examiner éthique et consentement",
      "Proposer améliorations et vérifications"
    ],
    "checks": [
      "Limites clairement priorisées",
      "Mesures reproductibles"
    ],
    "caution": "Ne pas qualifier un protocole d’approuvé par un comité d’éthique.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "plan-imrad",
    "title": "Structurer un article IMRaD",
    "category": "publication",
    "level": "Fondamentaux",
    "goal": "Organiser un manuscrit scientifique sans résultats inventés.",
    "example": "Article empirique, données collectées, cible à préciser.",
    "deliverable": "Plan annoté Introduction Méthodes Résultats Discussion.",
    "steps": [
      "Recueillir question, méthode et données disponibles",
      "Formuler contribution vérifiable",
      "Organiser les quatre parties principales",
      "Signaler figures et preuves à insérer",
      "Prévoir une checklist de conformité à la revue"
    ],
    "checks": [
      "Aucune valeur fabriquée",
      "Chaque affirmation demande sa source"
    ],
    "caution": "Ne pas inventer DOI, résultats ou exigences de revue.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "resume-scientifique",
    "title": "Améliorer un résumé scientifique",
    "category": "publication",
    "level": "Intermédiaire",
    "goal": "Clarifier un abstract à partir d’un manuscrit réel.",
    "example": "Résumé français de 250 mots, recherche qualitative.",
    "deliverable": "Résumé structuré avec contrôle de fidélité.",
    "steps": [
      "Lire l’objectif, méthode et résultats réellement transmis",
      "Séparer éléments connus et manquants",
      "Réduire redondances et jargon",
      "Produire une version concise et des mots-clés",
      "Comparer chaque affirmation au manuscrit"
    ],
    "checks": [
      "Longueur respectée",
      "Aucun résultat supplémentaire"
    ],
    "caution": "Refuser les formulations qui surestiment la portée scientifique.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "reponses-reviewers",
    "title": "Répondre aux évaluateurs",
    "category": "publication",
    "level": "Avancé",
    "goal": "Structurer une réponse point par point aux commentaires reçus.",
    "example": "Rapports anonymisés de deux reviewers.",
    "deliverable": "Tableau commentaire, réponse, modification et emplacement.",
    "steps": [
      "Classer les commentaires sans les déformer",
      "Relever modifications réellement apportées",
      "Formuler une réponse respectueuse à chaque point",
      "Indiquer passages et pages à vérifier",
      "Lister les désaccords argumentés"
    ],
    "checks": [
      "Aucune modification imaginée",
      "Commentaires intégralement couverts"
    ],
    "caution": "Ne pas affirmer avoir effectué une expérience non réalisée.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "communication-scientifique",
    "title": "Préparer une communication scientifique",
    "category": "publication",
    "level": "Fondamentaux",
    "goal": "Adapter un travail de recherche à une présentation orale.",
    "example": "Présentation de colloque de 12 minutes.",
    "deliverable": "Storyboard de diapositives et notes d’oral.",
    "steps": [
      "Identifier contribution et public",
      "Choisir trois messages importants",
      "Construire progression problème-méthode-preuves",
      "Proposer visuels à partir de données disponibles",
      "Prévoir timing et questions critiques"
    ],
    "checks": [
      "Timing plausible",
      "Graphiques fondés sur données réelles"
    ],
    "caution": "Aucune image ou donnée présentée comme authentique sans preuve.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "nettoyage-donnees",
    "title": "Préparer un plan de nettoyage de données",
    "category": "donnees",
    "level": "Intermédiaire",
    "goal": "Décrire contrôles et transformations sans altérer les originaux.",
    "example": "CSV d’enquête anonymisée, valeurs manquantes.",
    "deliverable": "Dictionnaire de variables et journal de nettoyage.",
    "steps": [
      "Décrire structure, unités et provenance",
      "Repérer doublons et valeurs aberrantes selon règles",
      "Proposer traitement des manquants avec justification",
      "Documenter transformations reproductibles",
      "Conserver la source et comparer les effectifs"
    ],
    "checks": [
      "Journal réversible",
      "Aucune correction silencieuse"
    ],
    "caution": "Ne jamais exposer d’identifiants personnels.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "analyse-statistique",
    "title": "Planifier une analyse statistique",
    "category": "donnees",
    "level": "Avancé",
    "goal": "Choisir une analyse adaptée à une question et aux données.",
    "example": "Comparaison de deux groupes indépendants.",
    "deliverable": "Plan d’analyse et hypothèses à vérifier.",
    "steps": [
      "Identifier variable cible et plan d’étude",
      "Vérifier échelles et hypothèses statistiques",
      "Proposer méthodes principales et alternatives",
      "Définir tailles d’effet et incertitude",
      "Préparer interprétation sans causalité indue"
    ],
    "checks": [
      "Hypothèses des tests explicites",
      "Limites mentionnées"
    ],
    "caution": "Ne pas générer de p-value ou de résultat sans calcul réel.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "visualisation-donnees",
    "title": "Concevoir des visualisations responsables",
    "category": "donnees",
    "level": "Fondamentaux",
    "goal": "Associer questions analytiques et graphiques lisibles.",
    "example": "Tableau d’indicateurs de réussite par semestre.",
    "deliverable": "Spécification de graphiques et légendes.",
    "steps": [
      "Préciser question et population",
      "Choisir graphique selon nature des variables",
      "Vérifier axes, échelles et unités",
      "Concevoir légende et texte alternatif",
      "Identifier biais visuels et incertitudes"
    ],
    "checks": [
      "Échelles non trompeuses",
      "Accessibilité vérifiée"
    ],
    "caution": "Éviter les représentations trompeuses de petits effectifs.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "reproductibilite-analyse",
    "title": "Documenter la reproductibilité",
    "category": "donnees",
    "level": "Intermédiaire",
    "goal": "Préparer un dossier de méthode et de provenance.",
    "example": "Projet Python ou R, analyse d’enquête.",
    "deliverable": "Checklist de reproduction et fiche de provenance.",
    "steps": [
      "Inventorier données, environnement et versions",
      "Décrire préparation et paramètres",
      "Préciser aléas, graines et dépendances",
      "Élaborer commandes à vérifier localement",
      "Proposer procédure de contrôle des sorties"
    ],
    "checks": [
      "Chemin de reproduction explicite",
      "Sources sensibles exclues"
    ],
    "caution": "Ne pas prétendre que le code a été exécuté.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "revue-code",
    "title": "Conduire une revue de code",
    "category": "informatique",
    "level": "Avancé",
    "goal": "Évaluer un changement logiciel sur des critères explicites.",
    "example": "Pull request JavaScript, tests existants.",
    "deliverable": "Revue priorisée avec tests suggérés.",
    "steps": [
      "Recueillir exigences et fichiers modifiés",
      "Examiner correction, lisibilité et gestion d’erreurs",
      "Identifier surface de sécurité et données exposées",
      "Proposer tests unitaires et cas limites",
      "Classer constats avec preuves et niveau de confiance"
    ],
    "checks": [
      "Chaque critique s’appuie sur du code",
      "Séparer problème avéré et hypothèse"
    ],
    "caution": "Ne pas exécuter de commande non approuvée.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "tests-logiciels",
    "title": "Élaborer des tests logiciels",
    "category": "informatique",
    "level": "Fondamentaux",
    "goal": "Dériver une couverture de tests depuis des exigences.",
    "example": "Application web Vite, parcours de création de compte fictif.",
    "deliverable": "Plan de tests, cas limites et critères d’acceptation.",
    "steps": [
      "Identifier les comportements attendus",
      "Lister cas normaux, limites et erreurs",
      "Définir données synthétiques non sensibles",
      "Proposer automatisation et tests d’accessibilité",
      "Hiérarchiser les tests de non-régression"
    ],
    "checks": [
      "Chaque test possède un oracle",
      "Aucun secret dans les données d’essai"
    ],
    "caution": "Ne pas exécuter de test destructif sans accord.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "documentation-api",
    "title": "Documenter une API",
    "category": "informatique",
    "level": "Intermédiaire",
    "goal": "Créer une documentation fiable à partir d’une interface décrite.",
    "example": "API REST interne, endpoints fournis.",
    "deliverable": "Référence d’API, exemples et erreurs.",
    "steps": [
      "Inventorier endpoints et authentification",
      "Décrire paramètres, réponses et codes",
      "Construire exemples synthétiques",
      "Identifier limites de débit et sécurité à confirmer",
      "Mettre en évidence les éléments non documentés"
    ],
    "checks": [
      "Tous les paramètres proviennent des sources",
      "Exemples sans tokens réels"
    ],
    "caution": "Ne pas inventer des endpoints ou garanties de sécurité.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "audit-accessibilite",
    "title": "Préparer un audit d’accessibilité",
    "category": "informatique",
    "level": "Avancé",
    "goal": "Organiser une vérification ergonomique et WCAG.",
    "example": "Portail universitaire responsive.",
    "deliverable": "Checklist d’audit, défauts et priorités.",
    "steps": [
      "Lister parcours clavier et lecteurs d’écran",
      "Définir vérifications contrastes et focus",
      "Contrôler labels, titres et messages",
      "Prévoir essais multi-écrans et navigation",
      "Décrire corrections et critères de réussite"
    ],
    "checks": [
      "Tests manuels explicités",
      "Critères liés aux problèmes"
    ],
    "caution": "Ne pas annoncer une conformité WCAG sans audit réel.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "rapport-pedagogique",
    "title": "Rédiger un rapport pédagogique",
    "category": "gouvernance",
    "level": "Fondamentaux",
    "goal": "Structurer le bilan d’un module à partir de faits validés.",
    "example": "Bilan semestriel, indicateurs anonymisés.",
    "deliverable": "Rapport factuel, limites et recommandations.",
    "steps": [
      "Réunir objectifs et indicateurs disponibles",
      "Identifier données absentes et anomalies",
      "Construire constats sourcés",
      "Distinguer résultats et interprétations",
      "Prioriser actions et responsables"
    ],
    "checks": [
      "Indicateurs traçables",
      "Recommandations proportionnées"
    ],
    "caution": "Ne pas fabriquer statistiques ni citations d’étudiants.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "pilotage-formation",
    "title": "Planifier le pilotage d’une formation",
    "category": "gouvernance",
    "level": "Intermédiaire",
    "goal": "Transformer des objectifs de programme en plan d’action.",
    "example": "Cycle ingénieur, revue annuelle du programme.",
    "deliverable": "Tableau de bord de suivi et jalons.",
    "steps": [
      "Recueillir objectifs et instances concernées",
      "Définir indicateurs et périodicités",
      "Associer responsables et échéances",
      "Prévoir mécanisme de remontée des risques",
      "Formaliser une revue et décisions documentées"
    ],
    "checks": [
      "Responsabilités explicites",
      "Indicateurs mesurables"
    ],
    "caution": "Éviter les indicateurs utilisant des données personnelles inutiles.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "dossier-accreditation",
    "title": "Préparer un dossier d’accréditation",
    "category": "gouvernance",
    "level": "Avancé",
    "goal": "Organiser les pièces justificatives et la traçabilité.",
    "example": "Programme universitaire, référentiel à fournir.",
    "deliverable": "Matrice exigence, preuve, statut et action.",
    "steps": [
      "Demander le référentiel officiel applicable",
      "Cartographier exigences et pièces existantes",
      "Repérer pièces manquantes et incohérences",
      "Proposer calendrier de validation",
      "Préparer synthèse des écarts avec propriétaires"
    ],
    "checks": [
      "Chaque preuve possède une source",
      "Aucune conformité supposée"
    ],
    "caution": "Ne pas inventer de norme ou d’avis d’autorité.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "analyse-reglement",
    "title": "Analyser un règlement des études",
    "category": "gouvernance",
    "level": "Fondamentaux",
    "goal": "Comparer des clauses institutionnelles à un cas documenté.",
    "example": "Règlement officiel et situation académique anonymisée.",
    "deliverable": "Tableau clauses, interprétations et incertitudes.",
    "steps": [
      "Recueillir version et date du texte",
      "Extraire clauses pertinentes avec références",
      "Distinguer littéral, interprétation et pratique",
      "Signaler contradictions et informations manquantes",
      "Rédiger questions à soumettre à l’autorité compétente"
    ],
    "checks": [
      "Citations fidèles",
      "Dates et version établies"
    ],
    "caution": "L’analyse ne remplace pas une décision juridique ou administrative.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "protection-donnees",
    "title": "Contrôler les données sensibles",
    "category": "ethique",
    "level": "Intermédiaire",
    "goal": "Évaluer le risque de divulgation avant usage d’une IA.",
    "example": "Corpus d’entretiens pédagogiques.",
    "deliverable": "Plan de minimisation et d’anonymisation.",
    "steps": [
      "Identifier catégories et finalités de données",
      "Chercher identifiants directs et indirects",
      "Proposer minimisation et pseudonymisation",
      "Vérifier autorisations et conservation",
      "Documenter risques résiduels et décisions"
    ],
    "checks": [
      "Risque de réidentification évalué",
      "Finalité légitime"
    ],
    "caution": "Ne jamais coller de données brutes sensibles dans un agent non autorisé.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "declaration-usage-ia",
    "title": "Rédiger une déclaration d’usage de l’IA",
    "category": "ethique",
    "level": "Avancé",
    "goal": "Documenter de manière transparente une assistance IA.",
    "example": "Manuscrit avec aide à la reformulation.",
    "deliverable": "Déclaration factuelle adaptable aux politiques réelles.",
    "steps": [
      "Recueillir outils, dates et tâches réellement réalisés",
      "Distinguer assistance et contribution scientifique",
      "Vérifier politique de l’établissement ou de la revue",
      "Rédiger une déclaration proportionnée",
      "Prévoir contrôle et responsabilité de l’auteur"
    ],
    "checks": [
      "Aucun usage dissimulé",
      "Politique locale explicitement vérifiée"
    ],
    "caution": "Ne pas prétendre que le texte est accepté par une revue sans vérification.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "audit-references",
    "title": "Vérifier des références bibliographiques",
    "category": "ethique",
    "level": "Fondamentaux",
    "goal": "Préparer un contrôle systématique de l’existence des sources.",
    "example": "Liste de DOI, auteurs, titres et années.",
    "deliverable": "Tableau vérification, incohérences et corrections.",
    "steps": [
      "Normaliser les références fournies",
      "Vérifier chaque identifiant dans une source primaire accessible",
      "Comparer auteur, titre, date et contenu",
      "Signaler données absentes ou non vérifiées",
      "Produire une liste de corrections sans invention"
    ],
    "checks": [
      "Chaque validation accompagnée d’une preuve",
      "Statuts vérifié/non vérifié distingués"
    ],
    "caution": "Ne jamais inférer qu’un DOI est authentique à partir de sa forme.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  },
  {
    "id": "risques-skill",
    "title": "Auditer un skill avant installation",
    "category": "ethique",
    "level": "Intermédiaire",
    "goal": "Évaluer instructions, scripts, provenance et permissions.",
    "example": "Dossier SKILL.md externe à analyser hors exécution.",
    "deliverable": "Grille de risque et décision d’installation.",
    "steps": [
      "Identifier auteur, licence et version",
      "Lire toutes les instructions et ressources liées",
      "Repérer injections, exfiltration et permissions excessives",
      "Examiner scripts, dépendances et effets de bord sans exécution",
      "Consigner risques, corrections et décision humaine"
    ],
    "checks": [
      "Aucun script exécuté pendant l’audit",
      "Permissions minimales explicitées"
    ],
    "caution": "Ne jamais installer un skill externe par simple confiance dans sa description.",
    "compatibility": "Agent Skills / environnements prenant en charge SKILL.md",
    "origin": "UNIVERS·IA · rédaction originale",
    "reviewed": "2026-10-20",
    "kind": "Instructions uniquement · aucun script"
  }
];
