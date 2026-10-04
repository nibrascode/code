// «Növbəti ayə»: ثم / davam / sonra / next / дальше … — son göstərilən ayədən sonrakı ayə (təfsir olubsa eyni kitabla), AI-siz.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import handler from "../api/chat.js";
import { isContinue } from "../api/_next.js";
import { tafsirReply, withTafsirSuggest } from "../api/_tafsir.js";
import { ayahReply, compactHistory, stripAyahMarkup, AYAH_COUNT } from "../api/_ayah.js";
import { hasNotice } from "../api/_notice.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
async function chat(body) {
  const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const real = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try { await handler({ method: "POST", body }, res); } finally { globalThis.fetch = real; }
  return res.body;
}
const head = (r) => [...r.matchAll(/^::(ayah [\d:-]+|tafsir \w+)::$/gm)].map((m) => m[1]);
/** Müştəri kimi söhbət: hər mesajda əvvəlki tarixçəni göndərir. */
function convo(opts = {}) {
  const msgs = [];
  return async (q) => {
    msgs.push({ role: "user", text: q });
    const r = await chat({ message: q, messages: msgs.slice(-8), noticeShown: true, ...opts });
    msgs.push({ role: "assistant", text: r.reply });
    return r;
  };
}

test("davam sözləri: bütün dillər tanınır; adi söz və cümlələr tanınmır", () => {
  for (const q of ["ثم", "التالي", "التالية", "الآية التالية", "تابع", "أكمل", "استمر", "بعده", "sonra", "davam", "davam et", "növbəti", "növbəti ayə", "irəli", "devam", "sonraki", "ileri", "next", "continue", "more", "Next verse", "дальше", "далее", "следующий", "продолжай", "Davam!", "ثم؟", "sonrakı ayə"]) assert.ok(isContinue(q), q);
  for (const q of ["ثم قال", "sonra gələrəm", "davam edən proses nədir", "next week we go", "more info about tawhid", "salam", "Bəqərə 255", "", "continue the story about a king in 3 pages"]) assert.ok(!isContinue(q), q);
});

test("ayə → «ثم» / «davam» / «sonra»: ardıcıl növbəti ayələr, hər biri təfsir düymələri ilə; AI-siz", async () => {
  const say = convo();
  const r0 = await say("Bəqərə 255");
  assert.match(r0.reply, /^::ayah 2:255::/);
  for (const [w, a] of [["ثم", 256], ["davam", 257], ["sonra", 258], ["davam", 259], ["ثم", 260]]) {
    const r = await say(w);
    assert.equal(r.usedAI, false, w);
    assert.ok(r.reply.startsWith(`::ayah 2:${a}::`), `${w}: ${r.reply.slice(0, 30)}`);
    assert.match(r.reply, /::tr:: Mənaca tərcümə \(Azərbaycan dili\):/, "az mənası dil davam edir");
    assert.equal((r.reply.match(/^::sb:: /gm) || []).length, 3, "təfsir düymələri");
    assert.match(r.reply, new RegExp(`::sb:: Müyəssər \\| Müyəssər təfsiri Bəqərə ${a}$`, "m"));
  }
});

test("surə sonu: növbəti surənin 1-ci ayəsi; 114:6-dan sonra nəzakətli dayanma (5 dildə)", async () => {
  const say = convo();
  await say("Bəqərə 285");
  assert.ok((await say("davam")).reply.startsWith("::ayah 2:286::"));
  assert.ok((await say("davam")).reply.startsWith("::ayah 3:1::"));
  const ends = [["Nas 6 ayə", "davam", /son ayəsi/], ["Kur'an 114:6", "devam", /son âyetiydi/], ["The Quran 114:6", "next", /last verse/], ["сура Ан-Нас аят 6", "дальше", /последний аят/], ["سورة الناس الآية 6", "التالي", /آخر آية/]];
  for (const [q, w, re] of ends) {
    const s2 = convo();
    const a = await s2(q);
    assert.match(a.reply, /^::ayah 114:6::/, q);
    const b = await s2(w);
    assert.match(b.reply, re, q);
    assert.doesNotMatch(b.reply, /::ayah/, q);
    assert.equal(b.usedAI, false);
  }
  // bütün surələrin sonu: s:last → növbəti surə 1
  for (const s of [1, 2, 18, 36, 67, 112, 113]) {
    const s3 = convo();
    await s3(`${s}:${AYAH_COUNT[s - 1]}`);
    assert.ok((await s3("davam")).reply.startsWith(`::ayah ${s + 1}:1::`), "surə " + s);
  }
});

test("təfsirdən sonra: eyni kitabla növbəti ayə + təfsiri (interleaved); dil davam edir; təklif düymələri olmur", async () => {
  const say = convo();
  const r0 = await say("Bəqərə 255 təfsiri");
  assert.deepEqual(head(r0.reply), ["ayah 2:255", "tafsir muyassar"]);
  for (const [w, a] of [["davam", 256], ["ثم", 257], ["sonra", 258]]) {
    const r = await say(w);
    assert.deepEqual(head(r.reply), [`ayah 2:${a}`, "tafsir muyassar"], w);
    assert.doesNotMatch(r.reply, /::sug::/);
    assert.match(r.reply, /::tl:: Təfsir əl-Müyəssər \(ərəbcə\)/);
  }
  const s2 = convo();
  await s2("Sədi təfsiri 2:8");
  const sd = await s2("davam");
  assert.equal(head(sd.reply)[0], "ayah 2:9");
  assert.equal(head(sd.reply)[1], "tafsir saadi");
  // tr/en/ru dil və kitab davam edir
  for (const [q, w, label] of [["Kur'an Bakara 255 tefsiri", "devam", /Tefsîr el-Müyesser/], ["Tafsir of Ayat al-Kursi", "next", /Tafsir al-Muyassar/], ["тафсир Ибн Касир 2:256", "дальше", /Тафсир Ибн Касир/]]) {
    const s3 = convo();
    await s3(q);
    const b = await s3(w);
    assert.match(b.reply, label, q);
    assert.ok(b.reply.includes("ayah 2:25") || /^::ayah 2:25/m.test(b.reply) || /::tafsir/.test(b.reply), q);
  }
});

test("hissə qalıbsa «davam» eyni təfsirin növbəti hissəsini verir; sonuncu hissədən sonra növbəti ayə", async () => {
  const say = convo();
  const r1 = await say("İbn Kəsir təfsiri 2:255");
  const N = Number(r1.reply.match(/hissə 1\/(\d+)/)[1]);
  assert.ok(N > 3);
  for (let p = 2; p <= N; p++) {
    const r = await say("davam et");
    assert.match(r.reply, new RegExp(`hissə ${p}/${N}`), "hissə " + p);
    assert.doesNotMatch(r.reply, /^::ayah /m, "davam hissədə ayə təkrar olunmur");
  }
  const nx = await say("davam et");
  assert.deepEqual(head(nx.reply).slice(0, 2), ["ayah 2:256", "tafsir ibnkathir"]);
  assert.match(nx.reply, /hissə 1\//);
  // aralıq sorğusu: «تفسير الملك 1-10» → 2-ci hissə → 11
  const s2 = convo();
  await s2("تفسير الملك 1-10");
  const p2 = await s2("ثم");
  assert.deepEqual(head(p2.reply), ["ayah 67:9", "tafsir muyassar", "ayah 67:10", "tafsir muyassar"]);
  const p3 = await s2("ثم");
  assert.deepEqual(head(p3.reply), ["ayah 67:11", "tafsir muyassar"]);
  // tərcümə ərəb dilində: ərəbcə etiket və «ثم» davam edir
  assert.match(p3.reply, /::tl:: التفسير الميسر/);
});

test("kontekst olmadan və ya köməkçi ayə cavabı olmayanda davam sözü adi söhbətdir (ayə verilmir)", async () => {
  const a = await chat({ message: "davam" });
  assert.doesNotMatch(String(a.reply), /^::ayah/);
  const hist = [{ role: "user", text: "salam" }, { role: "assistant", text: "Salam! Mən Nibras AI-yam. Necə kömək edim?" }, { role: "user", text: "sonra" }];
  const b = await chat({ message: "sonra", messages: hist });
  assert.doesNotMatch(String(b.reply), /^::ayah/);
  // ayə cavabından sonra başqa cavab gəlibsə, «sonra» ona aid deyil
  const c = await chat({ message: "sonra", messages: [{ role: "user", text: "Bəqərə 255" }, { role: "assistant", text: ayahReply("Bəqərə 255") }, { role: "user", text: "salam" }, { role: "assistant", text: "Salam!" }, { role: "user", text: "sonra" }] });
  assert.doesNotMatch(String(c.reply), /^::ayah 2:256/);
});

test("köhnə mesajlar (ctx olmadan): sonuncu ayə başlığından davam edir", async () => {
  const old = ayahReply("Bəqərə 255");
  const r = await chat({ message: "davam", messages: [{ role: "user", text: "Bəqərə 255" }, { role: "assistant", text: old }, { role: "user", text: "davam" }], noticeShown: true });
  assert.ok(r.reply.startsWith("::ayah 2:256::"));
  assert.match(r.reply, /Mənaca tərcümə/);
});

test("ctx gizli sətri: AI tarixçəsinə və markup təmizləməyə düşmür; ilk dini cavab bildirişi dəyişmir", async () => {
  const r = withTafsirSuggest(ayahReply("Bəqərə 255"), "Bəqərə 255");
  assert.match(r, /^::ctx:: 2:255-255 - 1\/1 az$/m);
  assert.doesNotMatch(compactHistory(r), /ctx|2:255-255|::/);
  assert.doesNotMatch(stripAyahMarkup(r), /::ctx::/);
  const t = await tafsirReply("Bəqərə 255 təfsiri");
  assert.match(t, /^::ctx:: 2:255-255 muyassar 1\/1 az$/m);
  assert.doesNotMatch(compactHistory(t), /ctx|::/);
  // ayə və «davam» daxili mənbədir: noticeShown:false olsa da bildiriş yoxdur
  const first = await chat({ message: "Bəqərə 255", noticeShown: false });
  assert.ok(!hasNotice(first.reply) && !first.notice && first.reply.startsWith("::ayah 2:255::"));
  const nx = await chat({ message: "davam", messages: [{ role: "assistant", text: first.reply }], noticeShown: false });
  assert.ok(!hasNotice(nx.reply) && !nx.notice && nx.reply.startsWith("::ayah 2:256::"));
  const nx2 = await chat({ message: "davam", messages: [{ role: "assistant", text: first.reply }], noticeShown: true });
  assert.ok(!hasNotice(nx2.reply) && nx2.reply.startsWith("::ayah 2:256::"));
  // AI-yə gedən sorğuda ctx yoxdur
  const realFetch = globalThis.fetch;
  const prevKey = process.env.GROQ_API_KEY;
  process.env.GROQ_API_KEY = "test-key";
  const sent = [];
  globalThis.fetch = async (url, init) => { sent.push(JSON.parse(init.body)); return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: "Salam." } }] }) }; };
  try {
    const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
    await handler({ method: "POST", body: { message: "Mənə hikmətli söz de", messages: [{ role: "assistant", text: r }, { role: "user", text: "Mənə hikmətli söz de" }], noticeShown: true } }, res);
    assert.doesNotMatch(JSON.stringify(sent), /ctx|::sug::|2:255-255/);
  } finally {
    globalThis.fetch = realFetch;
    if (prevKey === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = prevKey;
  }
});

// ------------------------------------------------------------------ səhifə (jsdom)
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(path.join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const HTML = fs.readFileSync(path.join(ROOT, "public/ai/index.html"), "utf8");
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));

function makePage() {
  const sent = [];
  const dom = new JSDOM(HTML, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      w.TextEncoder = TextEncoder;
      w.fetch = async (url, init = {}) => {
        const u = new URL(url, "https://nibrascode.com");
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/chat") {
          const req = JSON.parse(init.body);
          sent.push(req);
          const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
          const real = globalThis.fetch;
          globalThis.fetch = async () => { throw new Error("AI yoxdur"); };
          try { await handler({ method: "POST", body: req }, res); } finally { globalThis.fetch = real; }
          return out(200, res.body);
        }
        if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
        return out(200, { ok: true });
      };
    },
  });
  const d = dom.window.document;
  const send = async (t) => {
    d.querySelector("#inp").value = t;
    d.querySelector("#btn").click();
    await wait(150);
  };
  return { d, send, sent };
}

test("səhifə: ayə sonra «ثم», «davam», «sonra» dəfələrlə — hər dəfə növbəti ayə, ctx görünmür, düymələr işləyir, göndər düyməsi açıq qalır", { skip }, async () => {
  const { d, send, sent } = makePage();
  await send("Bəqərə 255");
  for (const [w, a] of [["ثم", 256], ["davam", 257], ["sonra", 258], ["ثم", 259], ["davam", 260]]) {
    await send(w);
    const bots = d.querySelectorAll("#msgs .msg.b");
    const last = bots[bots.length - 1];
    assert.match(last.textContent, new RegExp(`Bəqərə surəsi, ${a}-c[iıuü] ayə`), w);
    assert.ok(last.querySelector(".ay"), w);
    assert.doesNotMatch(last.textContent, /ctx|::/, "gizli sətir görünmür");
    assert.equal(last.querySelectorAll(".sg button.chip").length, 3, "təfsir düymələri");
    assert.equal(d.querySelector("#btn").disabled, false);
  }
  // göndərilən tarixçədə ctx var (server üçün), lakin ekranda yox
  assert.match(JSON.stringify(sent.at(-1)), /::ctx:: 2:259-259 - 1\/1 az/);
  // düyməni klik: təfsir; sonra «davam» eyni kitabla növbəti ayə + təfsir
  const bots = d.querySelectorAll("#msgs .msg.b");
  bots[bots.length - 1].querySelectorAll(".sg button.chip")[1].click();
  await wait(200);
  assert.equal(sent.at(-1).message, "Sədi təfsiri Bəqərə 260");
  await send("davam");
  const all = d.querySelectorAll("#msgs .msg.b");
  const lastBot = all[all.length - 1];
  assert.ok(lastBot.querySelector(".tf"), "təfsir də gəlir");
  assert.match(lastBot.querySelector(".ay").textContent, /Bəqərə surəsi, 261-c[iıuü] ayə/);
  assert.equal(lastBot.querySelectorAll(".sg").length, 0);
  assert.equal(d.querySelectorAll("#msgs .nt").length, 0, "ayə/təfsir daxili mənbədir: bildiriş yoxdur");
});
