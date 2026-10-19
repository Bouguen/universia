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
  },
  {
    "id": "publication",
    "title": "Rédaction et publication scientifiques",
    "audience": "Chercheurs et équipes éditoriales",
    "level": "Avancé",
    "duration": "4 modules · 6 à 8 h",
    "lessons": [
      {
        "title": "Rédiger sans inventer de preuves",
        "concept": "Structurer un article à partir de données réellement obtenues. Séparer explicitement constats, interprétations, hypothèses et limites, et vérifier chaque référence avant de citer.",
        "example": "Une analyse ne montre qu’une association sur un petit échantillon ; une conclusion générale sur tous les étudiants serait injustifiée.",
        "exercise": "Rédiger introduction et discussion d’un résultat fictif limité en annotant les affirmations nécessitant une source.",
        "correction": "Corrigé : contribution proportionnée, résultat non extrapolé, limites explicites et références primaires à rechercher.",
        "check": "Un texte convaincant peut-il remplacer des résultats manquants ? Non."
      },
      {
        "title": "Figures, tableaux et traçabilité",
        "concept": "Toute figure doit être reliée à des données, des unités, une méthode de transformation et des légendes qui rendent la lecture possible. Vérifier les versions et éviter toute illustration assimilable à une expérience inexistante.",
        "example": "Un graphique de latence omet les répétitions et les unités ; sa légende doit mentionner protocole, mesure et incertitude si disponible.",
        "exercise": "Auditer un tableau simulé : sources, unités, dénominateurs, axes, valeurs manquantes et risques d’erreur.",
        "correction": "Correction : six contrôles documentés, légende exacte, visualisation adaptée et absence d’ajout fictif.",
        "check": "Une image générée de laboratoire peut-elle être présentée comme photographie expérimentale ? Non."
      },
      {
        "title": "Choisir une revue et respecter les consignes",
        "concept": "Comparer adéquation scientifique, exigences de données, politiques d’IA, frais et modalités d’évaluation à partir des sites officiels. Vérifier les assertions d’indexation à leurs bases.",
        "example": "Une revue annonce une indexation : celle-ci doit être confirmée auprès de la base concernée et datée.",
        "exercise": "Construire une grille de comparaison de trois revues sans inventer leurs classements ni leurs délais.",
        "correction": "Corrigé : critères pondérés, sources consultées, coûts datés, décision fondée sur le périmètre.",
        "check": "Un bon facteur de visibilité suffit-il à garantir l’adéquation éditoriale ? Non."
      },
      {
        "title": "Répondre aux évaluateurs",
        "concept": "Conserver chaque commentaire, expliquer les modifications effectivement effectuées et identifier leur emplacement. Traiter les demandes impossibles par une réponse argumentée sans feindre de nouveaux résultats.",
        "example": "« Clarifier les critères » → section Méthodes complétée ; « ajouter 50 entretiens » → limite reconnue et analyse de sensibilité proposée si réalisable.",
        "exercise": "Rédiger une réponse point par point à deux commentaires simulés et joindre une matrice de suivi.",
        "correction": "Corrigé : ton factuel, changement précis, renvoi vérifié, limites honnêtes et aucune analyse fictive.",
        "check": "Peut-on annoncer une modification prévue comme déjà réalisée ? Non."
      }
    ]
  },
  {
    "id": "doctorat",
    "title": "Doctorat, direction de recherche et intégrité",
    "audience": "Doctorants, directeurs et encadrants",
    "level": "Avancé",
    "duration": "4 modules · 6 à 9 h",
    "lessons": [
      {
        "title": "Construire un projet doctoral faisable",
        "concept": "Définir problème, contribution, corpus légalement exploitable, moyens et calendrier. Fixer des jalons vérifiables et prévoir des risques méthodologiques plutôt qu’une feuille de route irréaliste.",
        "example": "Projet de classification de textes : jalon corpus autorisé, jalon annotation contrôlée, jalon ligne de base et jalon rédaction.",
        "exercise": "Définir quatre livrables datés et deux scénarios de mitigation des risques.",
        "correction": "Correction : ressources et responsabilités identifiées, jalons vérifiables, risques explicites.",
        "check": "Un calendrier produit par IA tient-il lieu d’accord d’encadrement ? Non."
      },
      {
        "title": "Revue de littérature doctorale critique",
        "concept": "Une revue de thèse doit expliciter les courants théoriques, différends méthodologiques et lacunes démontrables. Ne pas transformer l’absence de résultats à une requête limitée en absence de travaux.",
        "example": "Deux études de domaines voisins ne justifient pas automatiquement une lacune ; examiner bases, langues et synonymes.",
        "exercise": "Créer une matrice dix lectures réellement consultées : théorie, méthode, résultat, limite, apport au projet.",
        "correction": "Corrigé : références authentiques, points de contradiction, contexte de validité, notes de lecture traçables.",
        "check": "Une IA qui propose une « lacune » garantit-elle sa nouveauté scientifique ? Non."
      },
      {
        "title": "Méthodes, encadrement et décisions",
        "concept": "Tenir un registre de réunion où les recommandations, arbitrages et responsables sont distingués. Une IA peut structurer le compte rendu, mais ne décide pas de la validité scientifique.",
        "example": "Une proposition de nouvelle variable faite par un assistant est inscrite comme hypothèse à discuter, pas comme décision du directeur.",
        "exercise": "Préparer un ordre du jour d’encadrement et un tableau décisions–preuves–échéances.",
        "correction": "Correction : décisions prises par des personnes identifiables, alternatives évaluées, étapes datées.",
        "check": "Le suivi de progression automatique remplace-t-il le jugement d’un jury ? Non."
      },
      {
        "title": "Rédiger et soutenir sans survente",
        "concept": "La thèse doit distinguer contribution, limites, reproductibilité et pistes futures. Préparer la soutenance par des questions de contradiction plutôt que par un script de réponses stéréotypées.",
        "example": "« Pourquoi votre protocole n’exclut-il pas ce biais ? » doit appeler une réponse basée sur les limites réelles du travail.",
        "exercise": "Écrire cinq objections possibles à un résultat fictif et une réponse étayée pour chacune.",
        "correction": "Corrigé : reconnaissance de l’incertitude, renvoi aux figures et données réellement disponibles, éthique des contributions.",
        "check": "La qualité d’une présentation suffit-elle à démontrer une contribution originale ? Non."
      }
    ]
  },
  {
    "id": "ethique",
    "title": "Gouvernance, confidentialité et responsabilité",
    "audience": "Responsables, chercheurs et étudiants",
    "level": "Intermédiaire",
    "duration": "4 modules · 5 à 7 h",
    "lessons": [
      {
        "title": "Évaluer les risques avant l’usage",
        "concept": "Classer les activités selon impacts sur les personnes, confidentialité, contexte juridique, vérifiabilité et alternatives disponibles. Définir qui autorise et contrôle les usages.",
        "example": "La préparation de questions fictives est moins sensible que l’analyse de dossiers étudiants ou de données médicales.",
        "exercise": "Construire une matrice de risques de quatre cas d’usage universitaires.",
        "correction": "Correction : catégorie de données, finalité, prestataire, risque, mesure de protection et validation.",
        "check": "Un abonnement à un outil implique-t-il une autorisation institutionnelle ? Non."
      },
      {
        "title": "Données et confidentialité",
        "concept": "Réduire les données transférées, étudier finalité et durée de traitement, respecter les autorisations et contractualisations requises. Une pseudonymisation ne garantit pas l’impossibilité d’identifier les personnes.",
        "example": "Supprimer un nom d’un verbatim n’efface pas nécessairement les détails de lieu, date et situation qui identifient le participant.",
        "exercise": "Analyser un scénario de verbatim fictif et proposer des alternatives sûres.",
        "correction": "Corrigé : minimisation, données fictives, contrôles contractuels, autorisation et vérification des identifiants indirects.",
        "check": "Un document sans nom est-il nécessairement anonyme ? Non."
      },
      {
        "title": "Intégrité, attribution et déclaration",
        "concept": "L’auteur humain assume les choix scientifiques, la qualité des sources et la déclaration d’usage requise. Les outils d’IA ne doivent pas être présentés comme coauteurs responsables.",
        "example": "La reformulation d’une discussion doit être déclarée selon les exigences de la revue ; le texte reste vérifié par les auteurs.",
        "exercise": "Rédiger une déclaration d’usage limitée aux opérations réellement effectuées.",
        "correction": "Corrigé : nom de l’outil si requis, période, tâche, données, contrôle, responsabilité et limites.",
        "check": "Une formule « tout a été vérifié » sans preuve est-elle acceptable ? Non."
      },
      {
        "title": "Élaborer une politique locale",
        "concept": "Une politique doit distinguer usages autorisés, usages sous condition, exclusions, assistance technique et procédure de contestation. Prévoir accessibilité, formation, actualisation et validation institutionnelle.",
        "example": "Charte d’un département : document de travail soumis aux enseignants, étudiants, juristes et services informatiques, puis validé par les instances.",
        "exercise": "Proposer un plan de charte avec rôles, données, évaluations, incidents et comité de révision.",
        "correction": "Corrigé : champ d’application, décisions traçables, participation des parties concernées, aucune portée juridique revendiquée avant adoption.",
        "check": "Une charte rédigée automatiquement devient-elle opposable dès sa publication sur un portail ? Non."
      }
    ]
  },
  {
    "id": "accessibilite",
    "title": "Accessibilité, inclusion et équité numérique",
    "audience": "Enseignants et concepteurs de ressources",
    "level": "Intermédiaire",
    "duration": "4 modules · 5 à 7 h",
    "lessons": [
      {
        "title": "Accessibilité des contenus",
        "concept": "Utiliser des titres hiérarchiques, tableaux de données correctement structurés, contrastes adaptés et textes alternatifs qui transmettent l’information, pas uniquement la forme.",
        "example": "« Image d’un graphique » est insuffisant si la figure compare des valeurs et met en évidence une tendance.",
        "exercise": "Réécrire l’alternative textuelle d’un graphique fictif avec unité, relation et conclusion prudente.",
        "correction": "Correction : sens du graphique, échelle, étiquettes, tendance et absence d’inférence non démontrée.",
        "check": "Une alternative textuelle automatiquement proposée est-elle forcément correcte ? Non."
      },
      {
        "title": "Navigation et interaction accessibles",
        "concept": "Toutes les fonctions doivent rester utilisables au clavier, avec ordre logique de focus, messages de statut compréhensibles et absence de piège de navigation. Tester réellement les composants dynamiques.",
        "example": "Un menu déroulant s’ouvre à la souris mais ne se ferme pas au clavier : corriger l’interaction plutôt que masquer le problème.",
        "exercise": "Construire une checklist de contrôle d’un générateur avec quatre actions clavier.",
        "correction": "Corrigé : Tab, Entrée, Échap, annonce de résultat, focus après rechargement, contraste et zoom.",
        "check": "La réussite d’un test automatique suffit-elle à certifier WCAG 2.2 AA ? Non."
      },
      {
        "title": "Alternatives pédagogiques équitables",
        "concept": "Les étudiants ne disposent pas tous des mêmes appareils ou abonnements. Prévoir parcours sans compte commercial, formats exportables et soutien aux prérequis.",
        "example": "Un TD exigeant un outil payant est remplacé par un jeu de sorties fourni par l’enseignant et une grille de critique de ces sorties.",
        "exercise": "Transformer une activité dépendante d’un service tiers en une alternative gratuite et hors ligne.",
        "correction": "Corrigé : mêmes acquis, moyens équivalents, durée raisonnable, traitement de l’accessibilité.",
        "check": "Un lien libre d’accès garantit-il que tous les étudiants pourront utiliser le service ? Non."
      },
      {
        "title": "Évaluer l’équité d’un dispositif",
        "concept": "Comparer les effets possibles sur différents publics sans réduire l’analyse à des moyennes de satisfaction. Documenter les obstacles et prévoir un canal de signalement.",
        "example": "Un taux de participation global élevé masque une sous-participation de certains étudiants privés de connexion fiable.",
        "exercise": "Proposer une grille d’évaluation comprenant accessibilité, coûts, données, participation et recours.",
        "correction": "Corrigé : cinq critères, indicateurs observables, décisions de remédiation et collecte proportionnée.",
        "check": "L’absence de plainte prouve-t-elle l’absence d’obstacle ? Non."
      }
    ]
  },
  {
    "id": "ingenierie",
    "title": "IA pour l’ingénierie, le code et les systèmes",
    "audience": "Élèves-ingénieurs et enseignants scientifiques",
    "level": "Avancé",
    "duration": "4 modules · 6 à 9 h",
    "lessons": [
      {
        "title": "Concevoir un protocole technique",
        "concept": "Définir une spécification, des invariants, les conditions d’entrée et les critères d’acceptation avant de demander du code. Un modèle peut produire des programmes plausibles mais incorrects.",
        "example": "Une API de bibliothèque doit refuser l’accès aux dossiers d’autres utilisateurs ; cette exigence apparaît dans les tests d’autorisation.",
        "exercise": "Écrire la spécification d’un endpoint fictif avec cinq conditions d’acceptation.",
        "correction": "Corrigé : entrées, sorties, contrôle d’accès, cas limites et tests négatifs reproductibles.",
        "check": "Un programme qui compile est-il nécessairement correct et sécurisé ? Non."
      },
      {
        "title": "Tester le code généré",
        "concept": "Séparer relecture statique, tests automatisés, cas limites et essais sur environnement autorisé. Ne jamais exécuter aveuglément du code inconnu sur un poste sensible.",
        "example": "Une fonction de tri paraît correcte sur cinq nombres, mais échoue sur doublons, valeurs manquantes ou entrées vides.",
        "exercise": "Concevoir six tests d’une fonction fictive : nominal, vide, doublon, valeur aberrante, format et performance.",
        "correction": "Corrigé : assertions explicites, résultats attendus, contrôle humain et documentation des échecs.",
        "check": "Des tests générés par le même modèle garantissent-ils l’exhaustivité ? Non."
      },
      {
        "title": "Analyser performances et mesures",
        "concept": "Comparer performances avec matériel, versions logicielles, charge et répétitions documentées. Les gains doivent être mesurés et non attribués à un prompt ou à une optimisation supposée.",
        "example": "Un test de latence donne une médiane mais pas le nombre de répétitions ; il faut préciser protocole et variabilité avant de conclure.",
        "exercise": "Préparer un cahier de benchmark avec unités, conditions et méthodes de synthèse.",
        "correction": "Corrigé : durée, équipement, configurations, n répétitions, dispersion, biais possibles et limites.",
        "check": "Peut-on reprendre sans vérification un gain de performance annoncé par un assistant ? Non."
      },
      {
        "title": "Reproductibilité et sûreté",
        "concept": "Versionner scripts et dépendances, tracer licences et provenance, protéger les secrets et prévoir des contrôles de sécurité. Un dépôt public ne doit jamais contenir des clés API ou des données de tiers.",
        "example": "Un fichier de configuration contient un jeton ; le remplacer par une variable d’environnement et révoquer le jeton exposé.",
        "exercise": "Écrire un README d’installation et une checklist de diffusion d’un petit prototype.",
        "correction": "Corrigé : versions, commandes reproductibles, échantillons fictifs, absence de secrets et stratégie de test.",
        "check": "Un projet de démonstration peut-il diffuser des identifiants réels ? Non."
      }
    ]
  },
  {
    "id": "disciplines",
    "title": "Adapter l’IA aux disciplines universitaires",
    "audience": "Enseignants de toutes disciplines",
    "level": "Intermédiaire",
    "duration": "4 modules · 6 à 8 h",
    "lessons": [
      {
        "title": "Ingénierie, sciences et santé",
        "concept": "Les sciences requièrent protocoles, données, unités et vérifications expérimentales. En santé, distinguer exercice académique et décision clinique, soumise à des garanties renforcées.",
        "example": "Un assistant explique un protocole fictif ; les paramètres expérimentaux réels et les recommandations cliniques ne peuvent être inventés.",
        "exercise": "Créer un exercice d’analyse de protocole avec contrôles, variable, résultat fictif et limites.",
        "correction": "Corrigé : objectifs, contrôle expérimental, analyse des biais, sécurité et prudence clinique.",
        "check": "Une explication scientifique plausible permet-elle une prescription thérapeutique ? Non."
      },
      {
        "title": "Sciences humaines et sociales",
        "concept": "Distinguer sources empiriques, cadres théoriques et interprétations. Un codage proposé par IA doit être confronté aux extraits réels et aux contre-exemples.",
        "example": "Une catégorisation de discours plausible masque une opinion minoritaire ; le codebook doit inclure les cas divergents.",
        "exercise": "Construire une fiche critique d’analyse d’entretien fictif avec codes et contre-exemples.",
        "correction": "Corrigé : unités d’analyse, critères de codage, désaccords, confidentialité et limites d’interprétation.",
        "check": "Peut-on fabriquer un verbatim « représentatif » et le citer comme donnée d’enquête ? Non."
      },
      {
        "title": "Droit, économie et gestion",
        "concept": "En droit, vérifier textes et jurisprudence avec date et juridiction ; en gestion, documenter hypothèses économiques et scénarios. La fluidité d’un raisonnement n’atteste pas sa validité.",
        "example": "Un texte de loi inventé rend une note juridique inutilisable ; une estimation économique sans paramètres est un scénario, pas un résultat observé.",
        "exercise": "Comparer une argumentation juridique et une décision stratégique fictives selon leurs preuves requises.",
        "correction": "Corrigé : sources juridiques primaires, hypothèses de gestion, incertitudes et impossibilité de conclure sans données.",
        "check": "Une référence de jurisprudence produite par IA peut-elle être citée sans consultation ? Non."
      },
      {
        "title": "Lettres, langues, arts et communication",
        "concept": "Ces disciplines exigent attention au texte, au contexte historique et aux droits de réutilisation. L’IA peut soutenir comparaison et brainstorming mais ne remplace pas l’analyse des sources primaires.",
        "example": "Une traduction proposée modifie le registre : comparer deux variantes en citant le passage original licite plutôt que juger au seul style.",
        "exercise": "Créer une activité de traduction ou d’analyse d’œuvre avec deux interprétations argumentées.",
        "correction": "Corrigé : preuve dans le matériau source, distinction interprétation / fait, attribution et respect des droits.",
        "check": "Une image ou traduction générée est-elle automatiquement libre de tous droits ? Non."
      }
    ]
  }
];
