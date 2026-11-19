import {academicSkills} from './skills-data.js';
export const normalizeSkillText = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('fr').trim();

export function skillById(id) {
 return academicSkills.find(skill => skill.id === id) || null;
}
export function filterAcademicSkills({query='',category='toutes',level='tous'}={}) {
 const q=normalizeSkillText(query);
 return academicSkills.filter(skill =>
   (category==='toutes'||skill.category===category) &&
   (level==='tous'||skill.level===level) &&
   (!q||normalizeSkillText([skill.id,skill.title,skill.goal,skill.example,skill.deliverable,skill.category,...skill.steps].join(' ')).includes(q))
 );
}
export function skillSlug(value) {
 return normalizeSkillText(value).replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').replace(/-+/g,'-').slice(0,64).replace(/-+$/,'') || 'skill-academique';
}
const yamlString = value => JSON.stringify(String(value ?? '').replace(/[\r\n]+/g,' ').trim());
const cleanText = value => String(value ?? '').replace(/\r/g,'').trim();
const bullet = value => cleanText(value).replace(/\n/g,'\n  ').replace(/^[-*]\s*/,'');

export function toSkillMarkdown(skill) {
 if(!skill||!skill.id||!skill.goal||!skill.title||!Array.isArray(skill.steps)||skill.steps.length<2)throw new Error('Skill incomplet');
 const id=skillSlug(skill.id);
 const trigger="À utiliser lorsqu’un enseignant, étudiant, chercheur ou agent universitaire souhaite "+skill.goal.charAt(0).toLowerCase()+skill.goal.slice(1);
 const steps=skill.steps.map((step,i)=>String(i+1)+'. '+bullet(step)).join('\n');
 const controls=(skill.checks||[]).map(x=>'- '+bullet(x)).join('\n');
 return [
   '---',
   'name: '+id,
   'description: '+yamlString(trigger),
   'compatibility: '+yamlString('Instructions textuelles compatibles avec le format Agent Skills (SKILL.md). Aucun script inclus ; disponibilité selon l’agent.'),
   'metadata:',
   '  author: '+yamlString('UNIVERS-IA'),
   '  version: "1.0"',
   '---',
   '',
   '# '+cleanText(skill.title),
   '',
   '## Quand utiliser ce skill',
   cleanText(skill.goal),
   '',
   '## Informations à demander',
   '- Mission et domaine universitaire précis.',
   '- Public, niveau, contexte et contraintes locales.',
   '- Sources, données ou documents réellement disponibles.',
   '- Format et niveau de détail attendus.',
   '',
   'Exemple de demande : '+cleanText(skill.example),
   '',
   '## Procédure',
   steps,
   '',
   '## Livrable attendu',
   cleanText(skill.deliverable),
   '',
   '## Contrôles qualité',
   controls,
   '- Signaler les informations manquantes et les limites.',
   '- Ne jamais fabriquer de sources, résultats, citations, DOI ou références.',
   '- Préserver les données confidentielles ; validation humaine finale indispensable.',
   '',
   '## Vigilance spécifique',
   cleanText(skill.caution),
   '',
   '## Limites techniques',
   'Ce skill est un workflow éditorial, sans script, accès réseau ni exécution automatique. Son import doit être vérifié dans chaque environnement cible.',
   ''
 ].join('\n');
}
export function validateCustomSkill(values) {
 const errors=[];
 if(cleanText(values.title).length<5)errors.push('Indiquez un titre d’au moins cinq caractères.');
 if(cleanText(values.description).length<20)errors.push('Précisez quand utiliser le skill (20 caractères minimum).');
 if(cleanText(values.deliverable).length<5)errors.push('Décrivez le livrable attendu.');
 const steps=cleanText(values.steps).split('\n').map(x=>x.trim()).filter(Boolean);
 if(steps.length<2)errors.push('Prévoyez au moins deux étapes sur des lignes distinctes.');
 return {ready:errors.length===0,errors,steps};
}
export function customSkillMarkdown(values) {
 const validation=validateCustomSkill(values);
 if(!validation.ready)throw new Error(validation.errors.join(' '));
 const name=skillSlug(values.title);
 const checks=cleanText(values.checks).split('\n').map(x=>x.trim()).filter(Boolean);
 return [
  '---',
  'name: '+name,
  'description: '+yamlString(values.description),
  'compatibility: '+yamlString('Agent Skills — instructions textuelles. Vérifier le support dans chaque agent.'),
  '---',
  '',
  '# '+cleanText(values.title),
  '',
  '## Quand utiliser',
  cleanText(values.description),
  '',
  '## Contexte',
  cleanText(values.context)||'À préciser lors de l’utilisation.',
  '',
  '## Étapes',
  ...validation.steps.map((step,i)=>String(i+1)+'. '+bullet(step)),
  '',
  '## Résultat attendu',
  cleanText(values.deliverable),
  '',
  '## Points de contrôle',
  ...(checks.length?checks.map(x=>'- '+bullet(x)):['- Vérifier les faits et les sources primaires.','- Documenter les incertitudes.']),
  '- Ne pas inventer de données ou de références.',
  '- Ne pas transmettre d’informations sensibles sans autorisation.',
  '- Exiger une validation humaine avant diffusion.',
  '',
  '## Sécurité',
  'Ce fichier contient uniquement des instructions, aucun script. Examiner toute modification ultérieure avant installation.',
  ''
 ].join('\n');
}
