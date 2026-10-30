import { translations, LANGS } from "../src/lib/i18n";
import { STUDIO_APPS } from "../src/lib/apps";
import { NOTE_PRIVACY } from "../src/lib/note-privacy";
import { NOVA_PRIVACY } from "../src/lib/nova-privacy";
import { PDF_PRIVACY } from "../src/lib/pdf-privacy";
import { PLANS_PRIVACY } from "../src/lib/plans-privacy";
import { QR_PRIVACY } from "../src/lib/qr-privacy";
import { SCAN_PRIVACY } from "../src/lib/scan-privacy";
import { ARABIC_PRIVACY } from "../src/lib/arabic-privacy";
import { DOCS_PRIVACY } from "../src/lib/docs-privacy";
import { NIBRAS_PDF_ABOUT } from "../src/lib/nibras-pdf-about";
import facts from "../src/data/play-facts.json";
const priv:any={"nibras-note":NOTE_PRIVACY,"nibras-nova":NOVA_PRIVACY,"nibras-pdf":PDF_PRIVACY,"nibras-plans":PLANS_PRIVACY,"nibras-qr":QR_PRIVACY,"nibras-scan":SCAN_PRIVACY,"nibras-arabic":ARABIC_PRIVACY,"nibras-docs":DOCS_PRIVACY};
const out:any={langs:LANGS,apps:[],pdfAbout:NIBRAS_PDF_ABOUT,facts};
for (const a of STUDIO_APPS){ const t:any={}; for(const l of LANGS){ const d:any=translations[l]; t[l]={lead:d[a.leadKey],body:d[a.bodyKey],features:a.features.map(k=>d[k])}; } out.apps.push({slug:a.slug,name:a.name,icon:a.icon,play:a.playStoreUrl,huawei:(a as any).huaweiStoreUrl||null,shots:a.shots,t,privacy:priv[a.slug]||null}); }
console.log(JSON.stringify(out));
