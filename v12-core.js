import {workflows,disciplines,cases,advancedCourses} from './v12-data.js';
export function getWorkflow(id){return workflows.find(w=>w.id===id)||workflows[0]}
export function getDiscipline(id){return disciplines.find(d=>d.id===id)||disciplines[0]}
export function normalizeInput(raw){return String(raw??'').replace(/\s+/g,' ').trim().slice(0,1600)}
export function composeV12({workflowId='course',disciplineId='ingenierie',values={},notes=''}){
  const w=getWorkflow(workflowId),d=getDiscipline(disciplineId);
  const facts=w.fields.map(([key,label])=>`${label} : ${normalizeInput(values[key])||'[À compléter]'}`);
  return `RÔLE\nTu es un spécialiste de ${d.name.toLowerCase()} et de méthodologie universitaire, agissant comme assistant de préparation — pas comme auteur des décisions finales.\n\nOBJECTIF\n${w.goal}.\n\nCONTEXTE FOURNI\nDomaine : ${d.name}\n${facts.join('\n')}\nPrécisions de l’utilisateur : ${normalizeInput(notes)||'[Aucune précision]'}\n\nDÉMARCHE ATTENDUE\n${w.steps.map((s,i)=>`${i+1}. ${s}`).join('\n')}\n\nADAPTATION DISCIPLINAIRE\nPrivilégie la méthode suivante : ${d.method}.\nExige des preuves adaptées : ${d.evidence}.\n\nRÈGLES D’INTÉGRITÉ\n- N’invente aucune publication, citation, DOI, loi, jurisprudence, donnée, analyse ou résultat.\n- Ne prétends pas avoir consulté des bases de données ni exécuté une recherche si ce n’est pas le cas.\n- Distingue clairement observations, hypothèses, propositions et informations à vérifier.\n- N’exige aucune donnée personnelle, médicale ou confidentielle.\n- Demande les informations manquantes avant les choix à fort impact.\n- Invite à vérifier les règles de l’établissement, de la revue ou du laboratoire.\n\nFORMAT SOUHAITÉ\n${w.format}\nTermine par une checklist de vérification humaine et les points qui doivent être confirmés.`;
}
export function validateV12({workflowId,disciplineId,values={}}){const w=getWorkflow(workflowId),d=getDiscipline(disciplineId);const missing=w.fields.filter(([key])=>!normalizeInput(values[key])).map(([,label])=>label);return {missing,ready:missing.length===0,workflow:w.name,discipline:d.name};}
export function resolveCase(id){return cases.find(c=>c.id===id)||null}
export function resolveLesson(courseId,index){const c=advancedCourses.find(x=>x.id===courseId);return c?.lessons[index]||null}
export function isCorrect(courseId,index,answer){const l=resolveLesson(courseId,index);return Boolean(l && Number.isInteger(answer) && l.answer===answer)}
export function courseProgress(course,answers){const correct=course.lessons.filter((l,i)=>answers?.[`${course.id}:${i}`]===l.answer).length;return {correct,total:course.lessons.length,percent:Math.round(correct/course.lessons.length*100)};}
