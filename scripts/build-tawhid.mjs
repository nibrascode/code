// content/tawhid/ar.txt + az.txt + meta.mjs -> api/_tawhid/entries.js
// İstifadə: node scripts/build-tawhid.mjs        (yenidən yaradır)
//           node scripts/build-tawhid.mjs --check (fayl köhnəlibsə xəta ilə çıxır)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { META, TOPIC_TITLES_FALLBACK, TOPIC_AR_FALLBACK } from "../content/tawhid/meta.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "api/_tawhid/entries.js");

const AZ_ORD = { birinci: 1, ikinci: 2, "üçüncü": 3, "dördüncü": 4, "beşinci": 5, "altıncı": 6, yeddinci: 7, "səkkizinci": 8, doqquzuncu: 9, onuncu: 10, onbirinci: 11 };
const AR_Q = /^س(?=[\s:：0-9۰-۹٠-٩])/;
const AR_Q_STRIP = /^س(?:\s*[0-9۰-۹٠-٩]+)?\s*[:：]?\s*/;

function parseAr(text) {
  const topics = {};
  let topic = 1;
  let cur = null;
  const ensure = (n) => (topics[n] ||= { title: null, questions: [] });
  ensure(1);
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("إعداد وتنسيق")) {
      cur = null;
      continue;
    }
    if (line.startsWith("الموضوع")) {
      topic += 1;
      ensure(topic).title = line.replace(/^الموضوع[^:：]*[:：]\s*/, "").trim();
      cur = null;
      continue;
    }
    if (AR_Q.test(line)) {
      cur = { text: line.replace(AR_Q_STRIP, "").trim(), lines: [] };
      ensure(topic).questions.push(cur);
      continue;
    }
    if (cur) cur.lines.push(line);
  }
  return topics;
}

function parseAz(text) {
  const topics = {};
  let topic = 0;
  let cur = null;
  for (const raw of text.split("\n")) {
    const line = raw.replace(/\s+$/, "");
    const tm = line.match(/^(\S+) mövzu: (.*)$/);
    if (tm && AZ_ORD[tm[1].toLocaleLowerCase("az")]) {
      topic = AZ_ORD[tm[1].toLocaleLowerCase("az")];
      topics[topic] = { title: tm[2].trim(), questions: [] };
      cur = null;
      continue;
    }
    if (line.startsWith("[Qalan") || line.startsWith("[Davamı")) break;
    if (!topic) continue;
    const qm = line.match(/^Sual(?:\s+\d+)?:\s*(.*)$/);
    if (qm) {
      cur = { text: qm[1].trim(), lines: [] };
      topics[topic].questions.push(cur);
      continue;
    }
    if (cur) cur.lines.push(line);
  }
  return topics;
}

function trimBlank(lines) {
  let a = 0;
  let b = lines.length;
  while (a < b && !lines[a].trim()) a++;
  while (b > a && !lines[b - 1].trim()) b--;
  return lines.slice(a, b);
}

function block(topics, t, spec, where) {
  const q = topics[t]?.questions[spec.q - 1];
  if (!q) throw new Error(`${where}: ${t}-ci mövzu ${spec.q}-ci sual tapılmadı`);
  const ls = q.lines;
  let start = 0;
  if (spec.from) {
    start = ls.findIndex((l) => l.trim().startsWith(spec.from));
    if (start < 0) throw new Error(`${where}: from tapılmadı: ${spec.from}`);
    if (spec.skipFrom) start += 1;
  }
  let end = ls.length;
  if (spec.to) {
    const rel = ls.slice(start + 1).findIndex((l) => l.trim().startsWith(spec.to));
    if (rel < 0) throw new Error(`${where}: to tapılmadı: ${spec.to}`);
    end = start + 1 + rel;
  }
  return trimBlank(ls.slice(start, end));
}

export function build() {
  const ar = parseAr(fs.readFileSync(path.join(ROOT, "content/tawhid/ar.txt"), "utf8"));
  const az = parseAz(fs.readFileSync(path.join(ROOT, "content/tawhid/az.txt"), "utf8"));
  const topics = [];
  for (let n = 1; n <= 11; n++) {
    const azTitle = az[n]?.title || null;
    topics.push({
      n,
      title_az: azTitle || TOPIC_TITLES_FALLBACK[n],
      title_az_translated: Boolean(azTitle),
      title_ar: ar[n]?.title || TOPIC_AR_FALLBACK[n],
    });
  }
  const seen = new Set();
  const entries = META.map((m) => {
    if (seen.has(m.id)) throw new Error("təkrar id: " + m.id);
    seen.add(m.id);
    const arQ = ar[m.t]?.questions[m.ar.q - 1];
    if (!arQ) throw new Error(`${m.id}: ərəbcə sual tapılmadı`);
    const a_ar = block(ar, m.t, m.ar, m.id + " (ar)").join("\n");
    let a_az = null;
    let a_az_partial = null;
    let q_az = null;
    if (m.az) {
      const lines = block(az, m.t, m.az, m.id + " (az)");
      const hasGap = lines.some((l) => l.trim() === "[...]");
      const text = trimBlank(lines.filter((l) => l.trim() !== "[...]")).join("\n");
      if (m.partial || hasGap) a_az_partial = text;
      else a_az = text;
      q_az = m.az.qText || az[m.t]?.questions[m.az.q - 1]?.text || null;
    }
    if (m.partial && !m.az) throw new Error(m.id + ": partial üçün az lazımdır");
    return {
      id: m.id,
      topic: m.t,
      main: !m.ar.from,
      label: m.label,
      q_ar: arQ.text,
      q_az,
      a_ar,
      a_az,
      a_az_partial,
      core: m.core,
      opt: m.opt || [],
      not: m.not || [],
      amb: m.amb || null,
      ask: Boolean(m.ask),
      triggers: { az: m.trig.az, tr: m.trig.tr, ar: m.trig.ar },
    };
  });
  const body =
    "// AVTOMATİK YARANIB: node scripts/build-tawhid.mjs (mənbə: content/tawhid/ar.txt, az.txt, meta.mjs). Əl ilə dəyişməyin.\n" +
    "export const TOPICS = " + JSON.stringify(topics, null, 1) + ";\n\n" +
    "export const ENTRIES = " + JSON.stringify(entries, null, 1) + ";\n";
  return body;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const body = build();
  if (process.argv.includes("--check")) {
    const cur = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
    if (cur !== body) {
      console.error("api/_tawhid/entries.js köhnəlib: node scripts/build-tawhid.mjs işlədin");
      process.exit(1);
    }
    console.log("entries.js aktualdır");
  } else {
    fs.writeFileSync(OUT, body);
    console.log("yazıldı:", OUT, body.length, "simvol");
  }
}
