// UNIVERS·IA Lot B : exemples inventés pour l'enseignement (non études empiriques).
// Références externes officielles consultées lors de la préparation ; aucun contenu automatique ni conformité attestée.
export const academicReferences=[
  {
    "id": "unesco-genai",
    "title": "UNESCO — Guidance for generative AI in education and research",
    "url": "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research",
    "kind": "Guide institutionnel (2023)",
    "scope": "Usage humain, éthique et responsable de l’IA en éducation et recherche"
  },
  {
    "id": "prisma-2020",
    "title": "PRISMA 2020 — Statement et checklists",
    "url": "https://www.prisma-statement.org/prisma-2020",
    "kind": "Guide de rapport de revue systématique (2020)",
    "scope": "Transparence du compte rendu des revues systématiques ; adapter aux autres types de revues"
  },
  {
    "id": "crossref-api",
    "title": "Crossref — REST API de métadonnées",
    "url": "https://www.crossref.org/documentation/retrieve-metadata/rest-api/",
    "kind": "Documentation officielle",
    "scope": "Consultation de notices et DOI ; ne garantit pas seule la pertinence scientifique"
  },
  {
    "id": "fair",
    "title": "Wilkinson et al. (2016) — Principes FAIR",
    "url": "https://doi.org/10.1038/sdata.2016.18",
    "kind": "Article scientifique, DOI vérifié",
    "scope": "Findability, Accessibility, Interoperability, Reusability"
  },
  {
    "id": "wcag22",
    "title": "W3C — WCAG 2.2",
    "url": "https://www.w3.org/TR/WCAG22/",
    "kind": "Norme Web officielle",
    "scope": "Recommandations d’accessibilité pour les contenus Web"
  }
];
export const disciplinaryExamples=[
  {
    "id": "concevoir-cours",
    "discipline": "Ingénierie",
    "context": "Cycle ingénieur, API Web et sécurité ; TD de 2 heures, étudiants en binômes",
    "activity": "Faire concevoir un endpoint et justifier trois tests de contrôle d’accès.",
    "output": "Tableau acquis–tests–preuve et mini-grille de correction."
  },
  {
    "id": "td-critique",
    "discipline": "Lettres et langues",
    "context": "Licence 2, comparaison de traductions littéraires",
    "activity": "Soumettre une comparaison IA à l’examen de deux passages originaux autorisés.",
    "output": "Fiche d’annotations sur les omissions et les interprétations discutables."
  },
  {
    "id": "eval-authentique",
    "discipline": "Économie et gestion",
    "context": "Master 1, analyse d’un plan stratégique sur données fictives",
    "activity": "Faire soutenir un scénario, une analyse de sensibilité et les décisions prises.",
    "output": "Rapport de décision et grille individuelle d’argumentation."
  },
  {
    "id": "strategie-documentaire",
    "discipline": "Sciences humaines et sociales",
    "context": "Master 2, usages numériques des étudiants",
    "activity": "Construire une équation de recherche bilingue et un journal de collecte sans inventer de résultats.",
    "output": "Matrice concept–synonymes–base–date–requête."
  },
  {
    "id": "verification-references",
    "discipline": "Santé et sciences du vivant",
    "context": "Master 1, bibliographie de protocole expérimental",
    "activity": "Vérifier cinq notices fournies par l’enseignant en comparant DOI et métadonnées.",
    "output": "Tableau notice annoncée / source originale / conclusion."
  },
  {
    "id": "declaration-ia",
    "discipline": "Droit et sciences politiques",
    "context": "Mémoire de master sur un sujet juridique",
    "activity": "Distinguer aide stylistique, recherche de doctrine et validation juridique humaine.",
    "output": "Déclaration circonstanciée des usages et limites."
  },
  {
    "id": "protocole-revue",
    "discipline": "Sciences humaines et sociales",
    "context": "Doctorat, revue systématique d’interventions pédagogiques",
    "activity": "Distinguer protocole, sélection documentée et compte rendu conforme au cadre retenu.",
    "output": "Tableau de critères et plan de rapport méthodologique."
  },
  {
    "id": "figure-scientifique",
    "discipline": "Sciences et ingénierie",
    "context": "Article expérimental, mesures de latence sur un prototype",
    "activity": "Comparer échelle, unités et mesures réelles d’une figure proposée.",
    "output": "Légende avec source, traitement et limites."
  },
  {
    "id": "protocole-entretien",
    "discipline": "Santé et sciences du vivant",
    "context": "Recherche qualitative sur l’acceptabilité d’un parcours de soins fictif",
    "activity": "Préparer des relances neutres et une procédure de confidentialité.",
    "output": "Guide pilote et feuille de revue éthique."
  },
  {
    "id": "choix-revue",
    "discipline": "Lettres et langues",
    "context": "Premier article en analyse du discours",
    "activity": "Comparer périmètre scientifique, instructions et preuves d’indexation.",
    "output": "Tableau argumenté de trois revues potentielles."
  },
  {
    "id": "accessibilite-cours",
    "discipline": "Droit et sciences politiques",
    "context": "Licence 1, support numérique d’introduction au droit",
    "activity": "Structurer titres, descriptions de schémas et navigation au clavier.",
    "output": "Version accessible et checklist de contrôles."
  },
  {
    "id": "reproductibilite",
    "discipline": "Économie et gestion",
    "context": "Étude quantitative en finance sur jeu de données autorisé",
    "activity": "Documenter scripts, hypothèses, version des jeux de données et limites.",
    "output": "README de réplication et journal de paramètres."
  }
];
export const relatedReferences={
  "concevoir-cours": [
    "unesco-genai"
  ],
  "td-critique": [
    "unesco-genai"
  ],
  "eval-authentique": [
    "unesco-genai"
  ],
  "declaration-ia": [
    "unesco-genai"
  ],
  "strategie-documentaire": [
    "prisma-2020"
  ],
  "verification-references": [
    "crossref-api"
  ],
  "protocole-revue": [
    "prisma-2020"
  ],
  "plan-article": [
    "prisma-2020"
  ],
  "protection-donnees": [
    "unesco-genai"
  ],
  "reproductibilite": [
    "fair"
  ],
  "gestion-bibliographie": [
    "crossref-api"
  ],
  "accessibilite-cours": [
    "wcag22"
  ],
  "charte-laboratoire": [
    "unesco-genai"
  ],
  "figure-scientifique": [
    "fair"
  ]
};
