import { translations, LANGS } from "../src/lib/i18n";
import { STUDIO_APPS } from "../src/lib/apps";
const out:any={langs:LANGS,apps:[]};
for (const a of STUDIO_APPS){ const t:any={}; for(const l of LANGS){ const d:any=translations[l]; t[l]={lead:d[a.leadKey],body:d[a.bodyKey],features:a.features.map(k=>d[k])}; } out.apps.push({slug:a.slug,name:a.name,icon:a.icon,play:a.playStoreUrl,huawei:a.huaweiStoreUrl||null,shots:a.shots,t}); }
console.log(JSON.stringify(out));
