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
