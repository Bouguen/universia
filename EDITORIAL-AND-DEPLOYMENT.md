# UNIVERS·IA — Plan d’intégration V1.1

## Isolation impérative

Créer un nouveau dépôt `Bouguen/universia-v1`, un nouveau projet Vercel `universia-web`, et une nouvelle base de données. Ne pas importer de secrets, ne pas lier le domaine `scolaria.site`, ne pas utiliser les bases ou ressources administratives de SCOLAR·IA.

## Livraison actuelle

Site Vite statique : 8 générateurs, 24 cas de prompts, quatre parcours de suivi et six modules supplémentaires avec exercices, objectifs, fichiers exportables et progression locale. Aucun compte, aucune base, aucun CMS actif, aucune garantie de certification. Le contenu des modules sert de point de départ éditorial, pas de norme institutionnelle.

## CMS : contrat des collections à intégrer dans Payload

Collection `resources`: title, summary, discipline, audience, sourceUrl, sourceName, publishedAt, reviewedAt, verificationStatus, language, tags.

Collection `prompts`: title, category, discipline, template, inputFields, safetyNotes, version, reviewedAt.

Collection `courses`: title, audience, objectives, estimatedMinutes, lessons, assessment, status, reviewedAt.

Collection `news`: title, sourceUrl, sourceName, publishedAt, summary, verificationStatus.

Workflow cible : brouillon → révision scientifique → validation éditoriale → publication → révision périodique. Implémenter des contrôles de rôle, du journal d'audit, des sauvegardes et de la validation des liens avant d'ouvrir le CMS au public.

## Déploiement du prototype

1. Créer le dépôt indépendant et y transférer ces fichiers.
2. Exécuter `npm ci` (avec lockfile) ou `npm install` puis `npm run build`.
3. Créer un projet Vercel dédié connecté à ce dépôt (framework Vite, build `npm run build`, sortie `dist`).
4. Tester d'abord en Preview, vérifier les liens, mobile, clavier, générateurs et export .txt.
5. Ne publier sur un domaine définitif qu'après validation.

## Backend future phase

Pour un véritable backoffice Payload / PostgreSQL, prévoir une application serveur séparée ou migrer vers un framework compatible Payload. Ajouter `DATABASE_URL`, `PAYLOAD_SECRET`, stockage médias, authentification et migrations uniquement dans les variables sécurisées du nouveau projet. Ne pas présenter les données statiques comme gérées par Payload avant l'intégration réelle.

## Qualité scientifique

Chaque notice documentaire doit avoir une source primaire, une date de contrôle et un responsable éditorial. Aucune bibliographie ou DOI ne doit être inventé. Toute attestation actuelle est déclarative et non certifiante.
