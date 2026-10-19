import {defineConfig} from 'vite';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('.',import.meta.url));
const pages=['bibliotheque','ressources','recherche','outils','prompts','formations','cas-pratiques','integrite','skills','skills'];
export default defineConfig({
 base:process.env.VERCEL==='1'?'/':'/universia/',
 build:{rollupOptions:{input:Object.fromEntries([
  ['accueil',resolve(root,'index.html')],
  ...pages.map(name=>[name,resolve(root,name,'index.html')])
 ])}}
});
