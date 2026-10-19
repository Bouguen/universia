// C4 — Parcours d'apprentissage universitaires approfondis. Exemples fictifs, non certificatifs.
export const academyTracks = [
  {
    "id": "fondements",
    "title": "Comprendre et évaluer l’IA générative",
    "audience": "Tous les personnels universitaires",
    "level": "Débutant",
    "duration": "4 modules · 4 à 6 h",
    "lessons": [
      {
        "title": "Ce que produit réellement un modèle",
        "concept": "Un modèle de langage prédit du texte selon des régularités apprises. Il peut produire une explication utile sans disposer de preuves ou de compréhension disciplinaire vérifiable. Distinguer génération, recherche de documents et calcul scientifique est essentiel.",
        "example": "Un résumé contient une référence à un article plausible mais introuvable : la fluidité du paragraphe n’établit pas l’existence de cet article.",
        "exercise": "Sur une réponse générée, identifier trois affirmations à vérifier : définition, statistique et source citée.",
        "correction": "Correction attendue : pour chaque affirmation, indiquer une source primaire accessible, la date de vérification et un statut confirmé, incertain ou faux.",
        "check": "Une réponse rédigée sans erreur de grammaire est-elle nécessairement factuellement correcte ? Non : l’expression et la véracité sont distinctes."
      },
      {
        "title": "Choisir un usage approprié",
        "concept": "Commencer par une tâche à faible risque et dont le résultat peut être contrôlé : brouillon de plan, reformulation ou comparaison d’options. Les décisions médicales, juridiques ou disciplinaires imposent un contrôle humain renforcé et les règles applicables.",
        "example": "Proposer trois plans de séance est réversible ; transmettre des verbatims d’entretien non autorisés à un service extérieur ne l’est pas.",
        "exercise": "Classer quatre usages universitaires selon impact, confidentialité et facilité de vérification.",
        "correction": "Correction : faible risque pour idées de plan fictives ; risque élevé pour notes personnelles, décisions de jury ou diagnostics ; conditionner tout usage à une politique autorisée.",
        "check": "La possibilité technique de saisir des données équivaut-elle à une autorisation ? Non."
      },
      {
        "title": "Comparer des résultats et rechercher des erreurs",
        "concept": "Tester différentes formulations de la même demande et confronter les réponses aux documents réels. Utiliser une grille : exactitude, omissions, biais, transparence des sources et pertinence pédagogique.",
        "example": "Deux réponses donnent des résultats opposés sur l’efficacité d’une méthode pédagogique ; seul un examen des études pertinentes permet de trancher.",
        "exercise": "Comparer deux réponses fictives à une question de cours et rédiger une grille de cinq critères.",
        "correction": "Corrigé : repérer les preuves manquantes, les généralisations abusives et les limites ; justifier le jugement avec des extraits de référence.",
        "check": "La majorité des réponses d’IA suffit-elle à confirmer un fait ? Non."
      },
      {
        "title": "Mettre en œuvre un protocole de vérification",
        "concept": "Enregistrer la tâche, le type de données, l’outil, les opérations et les vérifications réalisées. Une déclaration d’usage IA doit décrire des faits, et non donner une garantie imaginaire d’exactitude.",
        "example": "Pour un syllabus, indiquer que l’IA a proposé un plan, puis que les compétences et références ont été vérifiées par l’enseignant.",
        "exercise": "Rédiger un mini-journal d’usage en quatre champs et une déclaration de 50 mots.",
        "correction": "Correction : tâche et date explicites, catégories de données autorisées, sources contrôlées, responsable nommé ; ne jamais affirmer de contrôle non exécuté.",
        "check": "Une déclaration remplace-t-elle la vérification scientifique ? Non."
      }
    ]
  },
  {
    "id": "prompts",
    "title": "Prompt engineering académique avancé",
    "audience": "Enseignants, doctorants et chercheurs",
    "level": "Intermédiaire",
    "duration": "4 modules · 5 à 7 h",
    "lessons": [
      {
        "title": "Décomposer un prompt robuste",
        "concept": "Un prompt réutilisable précise rôle fonctionnel, tâche, public, contexte, données autorisées, contraintes, format de sortie et critères d’évaluation. Séparer instructions et documents sources réduit les ambiguïtés.",
        "example": "« Fais un cours sur l’IA » devient « Construis un plan de TD de 90 min pour L3, avec prérequis, trois objectifs et quatre exercices vérifiables » ; l’enseignant fournit les contenus de référence.",
        "exercise": "Transformer trois consignes vagues en prompts comportant huit composantes explicites.",
        "correction": "Corrigé : objectif observable, contraintes réalistes, public précis, références apportées par l’utilisateur et demande explicite de signalement des inconnues.",
        "check": "Un rôle tel que « expert mondial » garantit-il la qualité ? Non."
      },
      {
        "title": "Exemples, contre-exemples et formats",
        "concept": "Les exemples montrent le type de réponse attendu mais peuvent aussi ancrer la production dans un biais. Demander tableaux, rubriques ou JSON structuré uniquement lorsque ce format sert la tâche.",
        "example": "Une grille d’évaluation gagne à comporter colonnes critère, niveau, description et preuve ; un texte libre seul favorise les formulations imprécises.",
        "exercise": "Écrire un prompt demandant une rubrique à quatre critères avec un exemple positif et un cas limite.",
        "correction": "Corrigé : colonnes, échelles et descriptions définies ; une ligne d’exemple contrôlée ; interdiction d’inventer des notes réelles.",
        "check": "Un tableau bien présenté remplace-t-il des critères pertinents ? Non."
      },
      {
        "title": "Itération et tests de prompts",
        "concept": "Évaluer un prompt sur plusieurs situations représentatives avant sa réutilisation. Mesurer les erreurs factuelles, la conformité au format, les omissions et la nécessité de correction humaine.",
        "example": "Le même modèle de prompt est testé sur un cours scientifique, un atelier juridique et un exercice de langues ; ses limites sont documentées.",
        "exercise": "Construire une matrice de trois jeux de tests et quatre critères notés : exactitude, complétude, traçabilité, niveau.",
        "correction": "Correction : journal version du prompt, entrées fictives, sortie observée, erreur, révision ; ne pas transformer une note subjective en certification.",
        "check": "Un seul essai satisfaisant prouve-t-il la robustesse ? Non."
      },
      {
        "title": "Prompts scientifiques sous contraintes",
        "concept": "Exiger que l’assistant différencie les faits du corpus fourni, les hypothèses et les points à vérifier. Interdire explicitement la fabrication de DOI, de résultats, de citations et d’observations.",
        "example": "Pour une revue, demander uniquement une stratégie de recherche candidate, puis exécuter et documenter les requêtes dans des bases réelles.",
        "exercise": "Concevoir un prompt de revue avec périmètre, bases candidates, critères d’inclusion, limites et journal à compléter.",
        "correction": "Corrigé : formulation « je n’ai pas exécuté la recherche », champ DOI à confirmer et séparation nette entre méthode proposée et résultats obtenus.",
        "check": "Le modèle peut-il affirmer qu’il a interrogé une base qui n’a pas été consultée ? Non."
      }
    ]
  },
  {
    "id": "enseigner",
    "title": "Scénariser et transformer les enseignements",
    "audience": "Enseignants du supérieur",
    "level": "Intermédiaire",
    "duration": "4 modules · 6 à 8 h",
    "lessons": [
      {
        "title": "Définir les acquis d’apprentissage",
        "concept": "Partir des compétences et des preuves de maîtrise, pas de la liste des outils. Les verbes observables (analyser, justifier, concevoir) orientent les activités et les évaluations.",
        "example": "« Comprendre la cybersécurité » devient « identifier et justifier trois vulnérabilités dans un scénario fictif » ; une production attestera ce résultat.",
        "exercise": "Reformuler quatre objectifs généraux en acquis mesurables associés à une preuve.",
        "correction": "Corrigé : niveau de maîtrise explicite, observation possible, critères de réussite et prérequis réalistes.",
        "check": "« Connaître » suffit-il à décrire la preuve d’apprentissage ? Non."
      },
      {
        "title": "Alignement constructif et progression",
        "concept": "Pour chaque acquis, définir activité, ressource, évaluation et temps nécessaire. La matrice d’alignement détecte les compétences enseignées mais non évaluées, ou inversement.",
        "example": "Un résultat sur l’argumentation scientifique appelle une discussion de preuves et une grille de justification, pas un simple questionnaire de vocabulaire.",
        "exercise": "Produire un tableau de quatre séances avec objectif, activité active, preuve et évaluation.",
        "correction": "Corrigé : une correspondance vérifiable par ligne, progression du guidé à l’autonome et charge de travail équilibrée.",
        "check": "Une activité attrayante est-elle nécessairement alignée sur les acquis ? Non."
      },
      {
        "title": "Différenciation et accessibilité",
        "concept": "Prévoir des alternatives équivalentes pour les formats et outils, une aide aux prérequis et des modalités de participation. Les solutions automatiques doivent être relues et testées avec les personnes concernées.",
        "example": "Un schéma de protocole est accompagné d’une explication textuelle des étapes et des valeurs mesurées ; le TD reste faisable sans compte commercial.",
        "exercise": "Adapter un TD pour un accès mobile limité et un besoin de lecture d’écran.",
        "correction": "Correction : consigne structurée, formats accessibles, activité hors ligne possible et critères inchangés.",
        "check": "Un texte alternatif généré est-il validé sans contrôle ? Non."
      },
      {
        "title": "Évaluer et améliorer une séance",
        "concept": "Recueillir des indices concrets d’apprentissage : production courte, erreurs typiques, retour de l’étudiant et temps passé. Réviser le dispositif avant de conclure à son efficacité.",
        "example": "Après un TD, trois réponses anonymisées montrent que la notion de variable de contrôle reste ambiguë ; une activité corrective est prévue.",
        "exercise": "Concevoir un ticket de sortie à trois questions et un plan de remédiation.",
        "correction": "Correction : questions liées aux acquis, décision pédagogique définie pour chaque type de réponse et collecte respectueuse des données.",
        "check": "Le taux de satisfaction démontre-t-il seul l’apprentissage ? Non."
      }
    ]
  },
  {
    "id": "evaluer",
    "title": "Évaluer les apprentissages à l’ère de l’IA",
    "audience": "Enseignants et responsables pédagogiques",
    "level": "Avancé",
    "duration": "4 modules · 6 à 8 h",
    "lessons": [
      {
        "title": "Évaluations authentiques",
        "concept": "Choisir une situation professionnelle plausible dans laquelle plusieurs décisions peuvent être défendues. Exiger preuves, justification et réflexion sur les limites plutôt qu’une simple production de texte.",
        "example": "En gestion, un étudiant défend deux scénarios à partir de données fictives et répond aux objections en séance.",
        "exercise": "Rédiger un sujet d’évaluation avec situation, documents, livrable et justificatifs attendus.",
        "correction": "Correction : situation réaliste, données autorisées, résolution faisable, plusieurs critères observables et modalités annoncées.",
        "check": "Une tâche longue est-elle automatiquement authentique ? Non."
      },
      {
        "title": "Grilles critériées et cohérence",
        "concept": "Chaque critère possède une définition, plusieurs niveaux de qualité et des descripteurs spécifiques. La pondération reflète l’importance des acquis et le barème est connu des étudiants.",
        "example": "Sur 20 : rigueur méthodologique 6, argumentation 6, preuves 5, communication 3 ; chaque niveau indique ce qui distingue l’excellent du suffisant.",
        "exercise": "Créer une grille de quatre critères sur 20 et l’éprouver avec une copie fictive.",
        "correction": "Corrigé : somme exacte, critères non redondants, niveaux évaluables et décision reproductible.",
        "check": "Un score automatique sans critères permet-il une évaluation fiable ? Non."
      },
      {
        "title": "Traces de démarche et oral",
        "concept": "Demander des étapes raisonnables : choix documentés, vérifications, versions de travail et discussion contradictoire. Cela aide à apprécier la maîtrise sans surveiller de manière disproportionnée les étudiants.",
        "example": "Une soutenance demande pourquoi une statistique a été retenue et ce qui changerait la conclusion si elle était retirée.",
        "exercise": "Préparer six questions orales graduées reliées aux acquis du cours.",
        "correction": "Corrigé : questions sur faits, choix, alternatives, limites et sources ; règles d’usage IA communiquées en amont.",
        "check": "Un détecteur d’IA suffit-il à établir une fraude ? Non."
      },
      {
        "title": "Feedback et équité",
        "concept": "Une rétroaction formative relie un constat précis, un critère et une action réalisable. Vérifier équité, accessibilité et cohérence des décisions selon les procédures d’établissement.",
        "example": "« Mauvaise analyse » devient « Les variables ne sont pas justifiées ; reprenez les critères de sélection et fournissez deux alternatives »",
        "exercise": "Transformer trois commentaires vagues en feedbacks actionnables sans jugement sur la personne.",
        "correction": "Corrigé : constat vérifiable, conseil pratique, invitation à révision ; contrôle enseignant avant diffusion.",
        "check": "La fluidité du texte doit-elle être le seul critère ? Non."
      }
    ]
  },
  {
    "id": "bibliographie",
    "title": "Recherche documentaire et revue de littérature",
    "audience": "Doctorants et chercheurs",
    "level": "Avancé",
    "duration": "4 modules · 7 à 10 h",
    "lessons": [
      {
        "title": "Formuler une question de revue",
        "concept": "Choisir explicitement le type de revue (systématique, exploratoire ou narrative) selon l’objectif. Définir population, phénomènes, concepts et résultats attendus sans confondre question et hypothèse.",
        "example": "Question exploratoire : « Quels dispositifs de retour automatisé sont étudiés en licence ? » plutôt que « L’IA améliore-t-elle tous les apprentissages ? »",
        "exercise": "Écrire deux questions et justifier le type de revue correspondant.",
        "correction": "Correction : portée, population, concepts, période et faisabilité documentés ; les exclusions ne doivent pas découler du résultat souhaité.",
        "check": "PRISMA est-il un outil qui exécute la recherche ? Non, c’est un cadre de compte rendu."
      },
      {
        "title": "Équations de recherche et journaux",
        "concept": "Construire un tableau concepts–synonymes–langues, adapter les opérateurs à chaque base et enregistrer la recherche exécutée : date, plateforme, syntaxe, filtres et résultats.",
        "example": "Concept « higher education » peut être combiné avec « formative feedback » mais une équation adaptée à Scopus n’est pas identique à une requête Google Scholar.",
        "exercise": "Écrire une équation bilingue et un modèle de journal pour deux bases à consulter.",
        "correction": "Corrigé : parenthèses, variantes terminologiques, champs et filtres documentés ; pas de nombre de résultats inventé.",
        "check": "Une équation candidate doit-elle être présentée comme exécutée ? Non."
      },
      {
        "title": "Sélection et extraction reproductibles",
        "concept": "Définir des critères avant la sélection et conserver motifs d’exclusion et doublons. Un tableau d’extraction doit reprendre les caractéristiques qui permettront une synthèse honnête.",
        "example": "Colonnes : auteurs, année, contexte, méthode, échantillon, résultats rapportés, limites, statut de lecture ; diagramme de flux basé sur décomptes réels.",
        "exercise": "Créer cinq critères d’inclusion et une grille d’extraction adaptée à la question.",
        "correction": "Corrigé : critères contrôlables et indépendants de la conclusion, décisions tracées et limites de langue ou d’accès mentionnées.",
        "check": "Les résumés seuls suffisent-ils à une évaluation définitive de toutes les études ? Non."
      },
      {
        "title": "Bibliographies et DOI vérifiés",
        "concept": "Un DOI authentique confirme un identifiant, pas la pertinence. Croiser éditeur, Crossref, bases bibliographiques et article réellement consulté pour contrôler chaque affirmation.",
        "example": "Une notice existe mais le texte traite d’enseignement secondaire : elle peut être vraie et inadaptée à un protocole universitaire.",
        "exercise": "Évaluer cinq références candidates dans une matrice de vérification et trier celles hors sujet.",
        "correction": "Corrigé : métadonnées recoupées, décision justifiée, source primaire consultée et DOI non fabriqué.",
        "check": "Une citation bibliographique générée est-elle vérifiée par défaut ? Non."
      }
    ]
  },
  {
    "id": "recherche",
    "title": "Méthodologie de recherche et données",
    "audience": "Doctorants et équipes de recherche",
    "level": "Avancé",
    "duration": "4 modules · 7 à 10 h",
    "lessons": [
      {
        "title": "Hypothèses, variables et conception",
        "concept": "Séparer ce que l’étude cherche à démontrer, les observations disponibles, les variables de confusion et les instruments. Des choix méthodologiques ne se déduisent pas d’une réponse générée.",
        "example": "Pour une étude sur un atelier numérique, la différence entre deux groupes ne suffit pas à démontrer que l’outil cause le progrès.",
        "exercise": "Définir question, variables, hypothèses concurrentes et principaux biais d’un protocole fictif.",
        "correction": "Corrigé : préciser comparateurs, mesure, facteurs de confusion, limites causales et conditions éthiques.",
        "check": "Une corrélation suffit-elle à établir une causalité ? Non."
      },
      {
        "title": "Approches qualitatives",
        "concept": "L’analyse qualitative exige un cadre explicite, un guide d’entretien non orienté et un codebook qui rend les catégories discutables et révisables. L’IA peut suggérer, pas valider le sens.",
        "example": "Code « accès technique » inclut interruptions de connexion mais exclut difficultés de compréhension disciplinaire ; contre-exemples documentés.",
        "exercise": "Créer quatre codes et leurs critères d’inclusion, d’exclusion et un contre-exemple fictif.",
        "correction": "Corrigé : définitions non redondantes, extraits autorisés, journal des modifications et traitement des désaccords.",
        "check": "Une grille de codes proposée automatiquement remplace-t-elle une validation humaine ? Non."
      },
      {
        "title": "Approches quantitatives",
        "concept": "Documenter unités, échantillonnage, valeurs manquantes, choix de modèles et traitement des résultats. Distinguer analyse exploratoire et test confirmé pour limiter les surinterprétations.",
        "example": "Un graphique en pourcentages sans dénominateur peut être trompeur ; un intervalle de confiance ne garantit pas l’absence de biais.",
        "exercise": "Auditer une table fictive et décrire les étapes nécessaires avant toute statistique.",
        "correction": "Corrigé : dictionnaire, contrôle de données, hypothèses, méthode et justification des traitements.",
        "check": "Un graphique issu d’un code généré prouve-t-il un résultat expérimental ? Non."
      },
      {
        "title": "Traçabilité, versionnement et partage",
        "concept": "La reproductibilité dépend de la provenance des données, des versions logicielles, des paramètres, des licences et des commandes. Les principes FAIR aident à structurer les métadonnées sans imposer la diffusion de données sensibles.",
        "example": "Un dépôt de recherche peut publier un script et un dictionnaire tout en restreignant l’accès aux données contractuelles.",
        "exercise": "Rédiger un README de réplication avec arborescence, environnement, paramètres et politique de données.",
        "correction": "Corrigé : versions, instructions testables, source et licence, limites, contrôle des accès et journal de changements.",
        "check": "FAIR signifie-t-il que toutes les données doivent être ouvertes ? Non."
      }
    ]
  }
];
