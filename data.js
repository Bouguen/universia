export const themes = [
 {id:'enseignement',icon:'◈',title:'Enseigner avec l’IA',tag:'Enseignants',desc:'Concevoir un cours, varier les activités et accompagner les apprentissages.',items:['Planifier un module','Créer des travaux dirigés','Adapter les supports','Évaluer les acquis']},
 {id:'recherche',icon:'✳',title:'Recherche scientifique',tag:'Chercheurs',desc:'Explorer la littérature, structurer une recherche et améliorer la rédaction.',items:['Revue de littérature','Méthodologie','Rédaction scientifique','Vérification des références']},
 {id:'etudiants',icon:'◇',title:'Apprendre à l’université',tag:'Étudiants',desc:'Étudier avec méthode et développer une autonomie intellectuelle.',items:['Comprendre un concept','Réviser activement','Rédiger avec intégrité','Préparer un mémoire']},
 {id:'evaluation',icon:'▤',title:'Évaluation & intégrité',tag:'Enseignants',desc:'Évaluer les raisonnements, encadrer les usages et expliciter les règles.',items:['Grilles critériées','Évaluation authentique','Déclaration d’usage IA','Oral et portfolio']},
 {id:'gouvernance',icon:'⌘',title:'Gouvernance universitaire',tag:'Responsables',desc:'Établir des politiques institutionnelles et accompagner les équipes.',items:['Charte IA','Protection des données','Formation du personnel','Audit des pratiques']},
 {id:'disciplines',icon:'⊞',title:'Disciplines universitaires',tag:'Tous publics',desc:'Exemples adaptés aux sciences, lettres, ingénierie, santé et gestion.',items:['Sciences & ingénierie','SHS & lettres','Économie & gestion','Santé & droit']}
];
export const resources = [
 {title:'Construire le plan d’un cours semestriel',kind:'Prompt',group:'enseignement',level:'Débutant',desc:'Objectifs, compétences, séquencement et modalités d’évaluation.'},
 {title:'Créer un TD avec plusieurs niveaux de difficulté',kind:'Scénario',group:'enseignement',level:'Intermédiaire',desc:'Exercices gradués et feedback formatif.'},
 {title:'Transformer un cours magistral en classe inversée',kind:'Guide',group:'enseignement',level:'Intermédiaire',desc:'Activités avant, pendant et après la séance.'},
 {title:'Cartographier une littérature scientifique',kind:'Méthode',group:'recherche',level:'Intermédiaire',desc:'Stratégies de recherche, critères d’inclusion et traçabilité.'},
 {title:'Vérifier des références bibliographiques proposées par l’IA',kind:'Guide',group:'recherche',level:'Débutant',desc:'Contrôler DOI, auteurs, titres et existence des publications.'},
 {title:'Préparer une réponse aux évaluateurs',kind:'Prompt',group:'recherche',level:'Avancé',desc:'Tableau de réponses et traçabilité des changements.'},
 {title:'Réviser par questions socratiques',kind:'Scénario',group:'etudiants',level:'Débutant',desc:'Comprendre plutôt que mémoriser une réponse automatique.'},
 {title:'Déclarer l’utilisation d’une IA dans un mémoire',kind:'Modèle',group:'etudiants',level:'Débutant',desc:'Exemple de transparence à adapter aux règles de l’établissement.'},
 {title:'Créer une grille d’évaluation critériée',kind:'Générateur',group:'evaluation',level:'Débutant',desc:'Critères, niveaux de maîtrise et indicateurs observables.'},
 {title:'Concevoir une évaluation authentique',kind:'Scénario',group:'evaluation',level:'Intermédiaire',desc:'Soutenance, journal de démarche et preuves d’apprentissage.'},
 {title:'Préparer une charte institutionnelle d’usage de l’IA',kind:'Modèle',group:'gouvernance',level:'Avancé',desc:'Gouvernance, responsabilités, confidentialité et révision.'},
 {title:'Politique de données pour un usage académique',kind:'Guide',group:'gouvernance',level:'Intermédiaire',desc:'Risques et vérifications avant l’utilisation de services tiers.'},
 {title:'IA pour les TP d’ingénierie',kind:'Scénario',group:'disciplines',level:'Intermédiaire',desc:'Débogage, analyse de résultats et validation expérimentale.'},
 {title:'IA en sciences humaines et sociales',kind:'Scénario',group:'disciplines',level:'Intermédiaire',desc:'Analyse critique de corpus et explicitation de méthode.'}
];
export const prompts = [
 {id:'cours',label:'Plan de cours universitaire',role:'Tu es un conseiller en ingénierie pédagogique universitaire.',task:'Propose un plan de cours structuré',details:'Indique les acquis d’apprentissage mesurables, les prérequis, les séances, les activités et les évaluations.'},
 {id:'td',label:'Création de TD',role:'Tu es un enseignant universitaire expérimenté.',task:'Conçois un TD progressif',details:'Prévois des exercices de trois niveaux, des consignes et un corrigé argumenté séparé.'},
 {id:'article',label:'Structure d’article scientifique',role:'Tu es un assistant de rédaction scientifique méthodologiquement rigoureux.',task:'Propose une structure d’article académique',details:'Distingue faits fournis, hypothèses et éléments à vérifier. N’invente aucune citation ni résultat.'},
 {id:'revue',label:'Revue de littérature',role:'Tu es un méthodologiste de la recherche.',task:'Élabore un protocole de revue de littérature',details:'Définis les questions, chaînes de recherche, bases, critères d’inclusion, extraction et limites. Ne fabrique pas de références.'},
 {id:'rubrique',label:'Grille d’évaluation',role:'Tu es spécialiste de l’évaluation dans l’enseignement supérieur.',task:'Élabore une grille critériée',details:'Produis des critères observables, niveaux de maîtrise, pondérations et modalités de feedback.'},
 {id:'these',label:'Encadrement de mémoire',role:'Tu es un directeur de recherche pédagogique.',task:'Propose un plan d’accompagnement de mémoire',details:'Précise jalons, questions de recherche, livrables, validations humaines et règles d’intégrité.'}
];
export const sources = [
 {name:'UNESCO — Guidance for generative AI in education and research',url:'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research'},
 {name:'UNESCO — AI competency framework for teachers',url:'https://www.unesco.org/en/articles/ai-competency-framework-teachers'}
];
