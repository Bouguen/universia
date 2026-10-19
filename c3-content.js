// Modules rédactionnels originaux C3. Les cas sont fictifs et ne prétendent à aucune étude empirique.
export const c3Content={
  "formations": [
    [
      "Formation 1 — Préparer un cours avec l’IA",
      "Enseignement",
      "75 min",
      "Partir d’un acquis mesurable, demander plusieurs activités, les comparer à un référentiel et construire une séance accessible.",
      "Plan de séance avec acquis, activités, temps, supports et vérifications.",
      "Comparer deux consignes générées, repérer une incohérence et expliquer sa correction.",
      "L’enseignant contrôle les références, la difficulté et les contraintes d’accès."
    ],
    [
      "Formation 2 — Concevoir une évaluation robuste",
      "Évaluation",
      "90 min",
      "Construire un sujet authentique, une grille critériée et des consignes transparentes concernant l’IA.",
      "Sujet contextualisé, grille sur 20 et questions de soutenance.",
      "Identifier deux critères ambigus dans une grille et les remplacer par des critères observables.",
      "L’évaluation et les décisions disciplinaires restent régies par l’établissement."
    ],
    [
      "Formation 3 — Rechercher et vérifier les sources",
      "Recherche",
      "90 min",
      "Décomposer une question de recherche, tenir un journal documentaire et vérifier les références avant citation.",
      "Matrice concepts–requêtes et tableau de vérification bibliographique.",
      "Classer trois notices candidates : vérifiée, hors sujet ou à vérifier, en justifiant chaque choix.",
      "Ne jamais inventer une requête exécutée, une référence ou un DOI."
    ],
    [
      "Formation 4 — Rédiger de façon intègre",
      "Publication",
      "75 min",
      "Séparer les résultats observés, les interprétations et les suggestions d’un assistant de rédaction.",
      "Plan d’article et déclaration factuelle des usages IA.",
      "Réviser un paragraphe contenant une généralisation non étayée et préciser la preuve manquante.",
      "Les auteurs assument les données, les citations et les décisions éditoriales."
    ]
  ],
  "cas": [
    [
      "Sciences de l’ingénieur",
      "Sécuriser une API universitaire",
      "Une équipe étudiante doit tester des droits d’accès sur une API fictive.",
      "Rédiger un protocole de six tests, comparer résultats attendus et observés puis discuter des limites.",
      "Cahier de tests avec preuves reproductibles.",
      "Ne pas utiliser de vraies données ou comptes d’étudiants."
    ],
    [
      "Sciences humaines et sociales",
      "Analyser des entretiens simulés",
      "Un corpus fictif de huit extraits décrit des pratiques numériques d’apprentissage.",
      "Définir quatre codes, relever les contre-exemples et documenter les désaccords.",
      "Codebook argumenté et tableau de codage.",
      "Les extraits fictifs ne permettent aucune inférence sur une population réelle."
    ],
    [
      "Santé et sciences du vivant",
      "Examiner un protocole expérimental",
      "Un protocole fictif de culture cellulaire contient des informations manquantes.",
      "Repérer hypothèses, contrôles, variables, risques et validations nécessaires.",
      "Grille de revue méthodologique.",
      "Ne pas remplacer les autorisations ni les protocoles de sécurité locaux."
    ],
    [
      "Droit et sciences politiques",
      "Argumenter un cas juridique hypothétique",
      "Un cas de droit fictif soulève deux qualifications possibles.",
      "Établir les faits, confronter les qualifications et identifier les textes à vérifier à la source.",
      "Note contradictoire distinguant droit établi et hypothèses.",
      "Ne pas fabriquer de jurisprudence ni présenter le cas comme conseil juridique."
    ],
    [
      "Économie et gestion",
      "Tester une décision stratégique",
      "Une organisation fictive envisage deux scénarios de développement.",
      "Comparer hypothèses, coûts, risques et sensibilité à des paramètres explicités.",
      "Matrice de décision documentée.",
      "Les projections ne sont pas des données de marché vérifiées."
    ],
    [
      "Lettres, arts et langues",
      "Comparer des traductions",
      "Deux traductions pédagogiques inventées divergent sur un choix de modalité.",
      "Repérer les divergences, commenter l’effet sur le sens et argumenter une proposition alternative.",
      "Analyse comparative avec justification linguistique.",
      "Utiliser le texte original autorisé et distinguer interprétation de fait."
    ]
  ],
  "outils": [
    [
      "Plan de cours",
      "Renseigner public, prérequis, durée et compétences ; générer une proposition ; contrôler l’alignement entre objectifs et évaluation.",
      "Tableau acquis / séances / évaluations validé par l’enseignant."
    ],
    [
      "Grille critériée",
      "Définir quatre critères observables, niveaux explicites et pondération ; tester sur deux productions fictives.",
      "Grille de notation dont la somme et les descripteurs sont cohérents."
    ],
    [
      "Revue de littérature",
      "Définir une question et les bases envisagées ; produire une stratégie candidate ; exécuter puis tracer manuellement les recherches.",
      "Journal documentaire daté et protocole amendé après vérification."
    ],
    [
      "Rédaction scientifique",
      "Insérer uniquement les résultats disponibles ; demander une structure argumentative ; vérifier chaque affirmation et référence.",
      "Plan scientifique annoté par statut de preuve."
    ]
  ],
  "integrity": [
    [
      "Transparence",
      "Déclarer les fonctions réellement utilisées : plan, synthèse, révision linguistique, génération de code ou analyse.",
      "Journal outil–date–usage–contrôle et déclaration adaptée au règlement.",
      "Ne jamais déclarer de vérification qui n’a pas eu lieu."
    ],
    [
      "Références et sources",
      "Contrôler existence, métadonnées, pertinence et citations à partir d’une source primaire ou d’une notice officielle.",
      "Tableau référence proposée / source vérifiée / décision.",
      "Un DOI existant ne démontre pas que l’article appuie l’affirmation."
    ],
    [
      "Confidentialité",
      "Identifier données personnelles, données de recherche confidentielles et contraintes contractuelles avant toute transmission.",
      "Matrice sensibilité–finalité–outil–autorisation.",
      "Ne pas assimiler pseudonymisation et anonymisation."
    ],
    [
      "Évaluation",
      "Communiquer les règles d’usage IA en amont ; évaluer la démarche, les preuves et la compréhension.",
      "Consignes et critères explicites accessibles aux étudiants.",
      "Un détecteur de texte IA ne suffit pas à établir une fraude."
    ],
    [
      "Responsabilité scientifique",
      "Maintenir le contrôle humain sur les méthodes, les résultats et les conclusions.",
      "Registre de décisions et vérifications réalisées.",
      "Un outil IA n’est pas auteur responsable d’une publication."
    ],
    [
      "Droits d’auteur",
      "Vérifier licences, permissions de réutilisation et attribution des contenus et images.",
      "Liste des œuvres et conditions de réutilisation.",
      "Le caractère généré d’un contenu ne garantit pas l’absence de droits de tiers."
    ]
  ]
};
