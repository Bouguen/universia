# UNIVERS·IA V1 — plateforme universitaire indépendante

Prototype web francophone consacré à l'IA pour l'enseignement supérieur. Projet indépendant de SCOLAR·IA : aucun fichier, dépôt, domaine ou environnement de production SCOLAR·IA n'est modifié.

## Fonctionnalités disponibles

- Accueil responsive et six parcours thématiques.
- Bibliothèque de 14 ressources de démonstration, recherche, filtres et favoris persistés localement.
- Atelier initial de 6 prompts personnalisables.
- **V1 : huit générateurs** : syllabus, grille critériée, évaluation authentique, revue de littérature, article scientifique, réponse aux évaluateurs, suivi de mémoire/thèse, feedback pédagogique.
- **V1 : promptothèque de 24 cas d'usage** organisés par discipline d'activité, avec recherche et accès direct au générateur pertinent.
- **V1 : quatre formations autonomes** : fondamentaux, enseigner/évaluer, recherche et encadrement. Suivi de progression local et question d'autoévaluation par parcours.
- Export TXT des prompts et d'une attestation déclarative **non certifiante** de suivi (aucun diplôme, aucun crédit ECTS, aucune vérification d'identité).

## Exécution

Prérequis : Node.js 20+ et npm.

```bash
npm install
npm run dev
```

Ouvrir l'adresse indiquée par Vite. Pour une construction de production :

```bash
npm run build
npm run preview
```

Déploiement possible sur un **nouveau** projet Vercel distinct, avec framework Vite, build `npm run build`, dossier de sortie `dist`. Ne pas associer le domaine `scolaria.site`.

## Architecture

- `index.html` : point d'entrée
- `src.js`, `data.js` : structure et fonctionnalités du prototype initial
- `v1-ui.js`, `v1-data.js` : générateurs, promptothèque, formations
- `style.css` : styles responsive
- `package.json` : commandes Vite

Les données de favoris et de progression sont conservées dans le `localStorage` du navigateur. Elles ne sont pas synchronisées et peuvent disparaître si le stockage est effacé. Les prompts se génèrent dans le navigateur ; **aucune connexion à un fournisseur de modèle IA** et aucun stockage serveur n'ont été ajoutés.

## Limites et étapes recommandées

V1 constitue un **prototype fonctionnel statique**, non une plateforme de production dotée d'un CMS. La bibliothèque actuelle est éditorialement limitée et contient des fiches démonstratives. Les parcours comportent des objectifs d'apprentissage et exercices d'autoévaluation simples, mais pas encore de vrais modules pédagogiques longs ni de certifications vérifiables. Ajouter pour V1.1 : comptes facultatifs, CMS éditorial, base PostgreSQL, validation et datation des sources, formation approfondie avec contenus et banques de questions, accessibilité auditée WCAG, tests de navigateur, multilingue FR/EN/AR selon besoin, protection des données et pages légales.

Les modèles de prompts demandent systématiquement une validation humaine et interdisent les références, DOI, résultats et données inventés.

## Séparation SCOLAR·IA

Le projet ne contient aucun lien d'intégration, secret, configuration de domaine ni service partagé avec SCOLAR·IA. Le futur dépôt suggéré est `universia` (ou `universia-v1`) et le futur projet Vercel `universia-web`. Les noms restent des propositions : aucun dépôt, projet distant ou déploiement n'a été créé dans cette livraison.

## Extension V1.1 (18 octobre 2026)

Six modules d'atelier supplémentaires sont proposés dans `v11-data.js` et rendus par `v11-ui.js` : enseignement, évaluation, recherche documentaire, publication, encadrement doctoral et formation des collègues. Chaque module inclut objectifs, quatre exercices avec cases de suivi, livrable, critère d'autoévaluation, avertissement et export TXT. Suivi dans `localStorage`, non synchronisé.

Le fichier `EDITORIAL-AND-DEPLOYMENT.md` spécifie les quatre collections et le workflow Payload à implémenter. Le CMS et PostgreSQL ne sont **pas installés** dans cette version statique. Toute Preview Vercel et tout dépôt GitHub doivent être créés indépendamment.

## Extension V1.2 — studio académique et formations (18 octobre 2026)

La V1.2 ajoute **quatre workflows guidés** (conception de cours, évaluation, revue de littérature, préparation d'article), adaptés à **six disciplines** avec exemples explicites et contraintes d'intégrité. Les champs sont préremplissables par un **exemple fictif** ; chaque changement actualise le prompt. Les prompts peuvent être copiés ou exportés en TXT. Aucune requête vers un fournisseur IA n'est effectuée.

La promptothèque V1 de 24 cas est conservée et enrichie de **15 scénarios disciplinaires** consultables par recherche et filtres, avec transfert direct vers le nouveau studio. Quatre parcours approfondis proposent **12 leçons**, chacune comportant un cas, une question et un corrigé explicatif. Seules les réponses correctes des autoévaluations sont enregistrées localement ; la progression n'est ni vérifiée ni certifiante.

### Développement et vérification

- `v12-data.js` : disciplines, workflows, cas et cours approfondis.
- `v12-core.js` : composition des prompts et validation pure, sans accès au DOM.
- `v12-ui.js`, `v12.css` : interface responsive et interactive.
- `v12.test.mjs` : six suites de tests sans dépendance supplémentaire.
- `npm run test` : tests V1.2 + contrôles structuraux V1.
- `npm run build` : construction Vite ; dépend d'une installation npm réussie.

Le chemin `base: '/universia/'` de `vite.config.js` vise **uniquement** GitHub Pages pour `Bouguen/universia`. Aucun fichier de SCOLAR·IA ni configuration partagée n'est modifié. La publication sur `main` doit attendre l'examen de la Pull Request. Le CMS, la base de données, l'authentification, les certificats vérifiables et l'intégration à un modèle IA ne font pas partie de cette extension.
