import {deepGuides} from './deep-guides.js';
const safe=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderDeepGuide(id){
 const g=deepGuides[id];if(!g)return '';
 return `<section class="deep-guide" aria-label="Atelier pratique approfondi"><div class="deep-guide-head"><h4>Atelier guidé — mise en pratique</h4><span class="deep-guide-time">Durée indicative : ${safe(g.duration)}</span></div>
 <p><b>Situation pédagogique fictive :</b> ${safe(g.context)}</p>
 <p><b>Travail à réaliser :</b> ${safe(g.task)}</p>
 <div class="deep-guide-example"><b>Exemple commenté de production</b><p>${safe(g.example)}</p></div>
 <div class="deep-guide-prompt"><h4>Prompt personnalisable</h4><label for="prompt-${safe(id)}" class="deep-guide-hint">Adaptez les champs entre crochets avant de copier le modèle.</label><textarea id="prompt-${safe(id)}" readonly rows="6">${safe(g.prompt)}</textarea><button type="button" class="deep-guide-copy" data-deep-copy="${safe(id)}">Copier ce prompt</button><span class="deep-guide-copystatus" data-deep-status="${safe(id)}" role="status"></span></div>
 <h4>Grille de contrôle avant utilisation</h4><ul class="deep-guide-checklist">${g.checks.map(x=>`<li>${safe(x)}</li>`).join('')}</ul><p class="deep-guide-note">Exemple fictif proposé à titre pédagogique ; adapter aux procédures et aux sources effectivement vérifiées.</p></section>`;
}
export function enableDeepGuideCopy(root){
 root.addEventListener('click',async event=>{
  const button=event.target.closest('button[data-deep-copy]');if(!button)return;
  const id=button.dataset.deepCopy;
  const input=[...root.querySelectorAll('textarea')].find(x=>x.id==='prompt-'+id);
  const message=[...root.querySelectorAll('[data-deep-status]')].find(x=>x.dataset.deepStatus===id);
  if(!input)return;
  try{await navigator.clipboard.writeText(input.value);if(message)message.textContent='Prompt copié.';}
  catch{input.focus();input.select();if(message)message.textContent='Sélectionnez et copiez le texte manuellement.';}
 });
}
