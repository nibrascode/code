// POST /api/translate  { text, from?, to, ui?, parallel? }  |  { texts: [...], to }   (GET: xidmət məlumatı)
// Modelsiz tərcümə xidməti (api/_translate = /workspace/translate-core vendor nüsxəsi). Sənəd: api/_translate/README.md
import handler from "./_translate/http.js";

export const config = { maxDuration: 30 };
export default handler;
