# UNIVERS·IA — prototype indépendant (v0.1)

Portail francophone dédié à l'intelligence artificielle dans l'enseignement supérieur, inspiré fonctionnellement de SCOLAR·IA sans en modifier les fichiers, le dépôt ou la production.

## Démarrer

Prérequis : Node.js 20+.

```bash
npm install
npm run dev
```

Ouvrir l'URL indiquée par Vite (normalement http://localhost:5173).

Production : `npm run build` produit `dist/`.

## Déploiement Vercel

Importer le dossier dans un nouveau projet Vercel (ne pas remplacer scolaria.site). Framework : Vite ; Build command : `npm run build` ; Output directory : `dist`. Un domaine distinct peut être configuré ultérieurement.

## Fonctionnalités existantes
- Page d'accueil responsive, 6 parcours universitaires.
- Bibliothèque de 14 ressources **descriptives / démonstration**, recherche par texte et catégorie.
- Favoris persistés **uniquement dans le navigateur** via localStorage.
- Générateur local de prompts : 6 modèles personnalisables, sortie copiée dans le presse-papiers.
- Principes d'usage responsable et liens directs à des références institutionnelles UNESCO.
- Navigation au clavier, labels de formulaires et contrastes prévus dans le design.

## Limites explicites de cette V0.1
Le projet est un **prototype fonctionnel côté navigateur**, et non une plateforme éditoriale complète : pas d'authentification, de CMS, de base PostgreSQL, de flux RSS automatisé, de backend IA, de moteur de recherche serveur, de contenus scientifiques approuvés ou de déploiement effectif. Les 14 fiches sont des *descriptions* et doivent être enrichies en ressources complètes avec sources/dates/responsables. Les prompts sont générés par assemblage déterministe et n'appellent pas de service externe. Une revue d'accessibilité WCAG et des tests utilisateurs restent nécessaires.

## Proposition de feuille de route
1. Valider nom, publics, charte, pays/référentiels, politique éditoriale.
2. Installer un CMS (Payload), PostgreSQL, rôles d'édition et journal de révisions.
3. Structurer et enrichir les ressources (auteur, source, date, domaine, niveau, limites, date de révision).
4. Développer les vrais générateurs de syllabus, TD, grilles et protocoles de recherche.
5. Ajouter parcours de formation, annuaire d'outils, flux IA universitaire vérifié et observatoire des politiques institutionnelles.
6. Ajouter FR/EN/AR après relecture humaine, tests d'accessibilité, previews et domaine de production.

## Principes éditoriaux
- Ne jamais présenter des sources inventées comme vérifiées.
- Vérifier manuellement citations, références et données scientifiques.
- Respecter les règles de chaque établissement et les exigences de confidentialité.
- Rendre les limites des outils explicites.

## Références de départ
- https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research
- https://www.unesco.org/en/articles/ai-competency-framework-teachers
