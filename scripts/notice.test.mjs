// Dini suallarda ilk cavabın başındakı bildiriş («süni intellektdən din öyrənilməz» + İbn Sirin): yalnız söhbətin İLK dini cavabında.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import handler from "../api/chat.js";
import { noticeBlock, withNotice, hasNotice, NOTICE_AR, OLD_AZ_NOTICE } from "../api/_notice.js";
import { isReligious } from "../api/_religious.js";
import { compactHistory, stripAyahMarkup } from "../api/_ayah.js";
import { tawhidReply } from "../api/_tawhid.js";
import { cannedReply } from "../api/_canned.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const AZ_SPEC = "İlk olaraq: süni intellektdən din öyrənilməz. İbn Sirin رحمه الله demişdir: «Həqiqətən, bu elm sizin dininizdir; dininizi kimdən aldığınıza diqqət edin.»";

async function run(body, ai = null) {
  const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const realFetch = globalThis.fetch;
  const prev = process.env.GROQ_API_KEY;
  const sent = [];
  if (ai) {
    process.env.GROQ_API_KEY = "test-key";
    globalThis.fetch = async (url, init) => {
      sent.push(JSON.parse(init.body));
      return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: ai } }] }) };
    };
  } else {
    globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  }
  try {
    await handler({ method: "POST", body }, res);
  } finally {
    globalThis.fetch = realFetch;
    if (prev === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = prev;
  }
  return { ...res.body, sent };
}
const lines = (b) => b.split("\n");
const noticeOf = (r) => r.split("\n::/notice::")[0];

test("mətn: az bildiriş istifadəçinin sözü ilə eynidir; hər dildə, ərəbcə hədis mətni və mənbə ilə", () => {
  const az = noticeBlock("az");
  const [open, lead, quote, ar, src, close] = lines(az);
  assert.equal(open, "::notice::");
  assert.equal(lead + " " + quote, AZ_SPEC);
  assert.equal(ar, "::ar:: " + NOTICE_AR);
  assert.equal(NOTICE_AR, "إنَّ هذا العلمَ دِينٌ، فانظروا عمَّن تأخذون دينكم");
  assert.match(src, /^::src:: Mənbə: Müslim/);
  assert.equal(close, "::/notice::");
  const expect = {
    tr: /Öncelikle: din, yapay zekâdan öğrenilmez\. İbn Sîrîn رحمه الله şöyle demiştir:/,
    en: /First of all: religion is not learned from artificial intelligence\. Ibn Sirin رحمه الله said:/,
    ru: /Прежде всего: религию не изучают у искусственного интеллекта\. Ибн Сирин رحمه الله сказал:/,
    ar: /أولًا: لا يُؤخذ الدين من الذكاء الاصطناعي\. قال ابن سيرين رحمه الله:/,
  };
  for (const [l, re] of Object.entries(expect)) {
    const b = noticeBlock(l);
    assert.match(b, re, l);
    assert.ok(b.includes("::src::"), l);
    if (l === "ar") {
      assert.equal((b.match(/إنَّ هذا العلمَ دِينٌ/g) || []).length, 1, "ərəbcədə hədis bir dəfə");
      assert.match(b, /رواه مسلم في مقدمة صحيحه/);
      assert.ok(!b.includes("::ar::"));
    } else {
      assert.ok(b.includes("::ar:: " + NOTICE_AR), l);
    }
  }
  assert.ok(hasNotice(az) && hasNotice(OLD_AZ_NOTICE) && !hasNotice("salam"));
});

test("withNotice təkrarsızdır; köhnə mətn təmizlənir", () => {
  const once = withNotice("Cavab", "az");
  assert.equal(withNotice(once, "az"), once);
  assert.ok(once.startsWith("::notice::") && once.endsWith("\n\nCavab"));
  const dup = withNotice(OLD_AZ_NOTICE + "\n\nCavab mətni", "az");
  assert.equal((dup.match(/süni intellektdən din öyrənilməz/g) || []).length, 1);
  assert.ok(dup.endsWith("Cavab mətni"));
  assert.equal(withNotice(OLD_AZ_NOTICE, "az"), noticeBlock("az"));
});

test("dini / qeyri-dini aşkarlama", () => {
  const rel = ["Allah haqqında danış", "namaz necə qılınır", "oruc tutmaq", "can you explain Islam", "ما حكم الصلاة", "что такое намаз", "Ramazan ayında nə edim", "iman nədir", "hadis nədir", "Fatihə 1-3"];
  for (const q of rel.slice(0, 9)) assert.equal(isReligious(q), true, q);
  const non = ["salam", "2+2", "saat neçədir", "python kod yaz", "Nibras Code kimindir", "hava necədir", "javascript massiv", "Mahir Əliyev kimdir", "mənə salat resepti ver", "necəsən"];
  for (const q of non) assert.equal(isReligious(q), false, q);
  assert.equal(isReligious("namaz vaxtını hesablayan kod yaz", "code"), false);
  assert.equal(isReligious("namaz vaxtı üçün python kod", "chat"), false);
});

// Əl ilə yazılmış hazır cavablar: bildiriş davranışı dəyişməyib
const RELIGIOUS_FIXED = [
  ["hazır dini cavab (cannedReply)", "Sələfilik nədir"],
  ["dinReply", "namaz necə qılınır"],
  ["dinReply İslam tərifi", "İslam nədir"],
];
// Daxili mənbədən gələn (AI-siz) cavablar: bildiriş HEÇ VAXT verilmir
const SOURCE_BASED = [
  ["tövhid (tawhidReply)", "Şirk neçə qismə bölünür"],
  ["ayə (ayahReply)", "Bəqərə 255"],
  ["Ayətül-Kürsi", "Ayətül Kürsi"],
  ["surə", "İxlas surəsi"],
  ["mənaca tərcümə (tr)", "Bakara suresi 255"],
  ["Quran lüğəti (quranReply)", "Bəqərə 1-59 sözlərin izahı"],
  ["təfsir Müyəssər", "Bəqərə 255 təfsiri"],
  ["təfsir Sədi", "Sədi təfsiri 2:255"],
  ["təfsir İbn Kəsir", "İbn Kəsir təfsiri 2:255"],
  ["ərəbcə təfsir", "تفسير الفاتحة"],
];

test("server: ilk dini cavab (noticeShown:false) bildirişlə BAŞLAYIR; cavab onun altındadır; AI çağırılmır", async () => {
  for (const [name, q] of RELIGIOUS_FIXED) {
    const r = await run({ message: q, noticeShown: false });
    assert.equal(r.success, true, name);
    assert.equal(r.usedAI, false, name);
    assert.equal(r.religious, true, name);
    assert.equal(r.notice, true, name);
    assert.ok(r.reply.startsWith("::notice::\n"), name);
    assert.equal(r.reply.split("::notice::").length, 2, name + ": bildiriş bir dəfə");
    assert.equal((r.reply.match(/süni intellektdən din öyrənilməz/g) || []).length, 1, name);
    assert.equal(r.sent.length, 0);
  }
  // cavab bildirişin altında və dəyişməyib
  const c = await run({ message: "Sələfilik nədir", noticeShown: false });
  assert.equal(c.reply, noticeBlock("az") + "\n\n" + cannedReply("Sələfilik nədir"));
});

test("server: daxili mənbədən gələn cavablarda (ayə, surə, tərcümə, təfsir, tövhid, Quran lüğəti) bildiriş YOXDUR, notice:true də yoxdur", async () => {
  for (const [name, q] of SOURCE_BASED) {
    for (const extra of [{ noticeShown: false }, { noticeShown: true }, {}]) {
      const r = await run({ message: q, ...extra });
      assert.equal(r.success, true, name);
      assert.equal(r.usedAI, false, name);
      assert.equal(r.sent.length, 0, name);
      assert.equal(r.religious, true, name + ": dini bayraq qalır");
      assert.ok(!r.notice, name);
      assert.ok(!hasNotice(r.reply), name);
      assert.ok(!r.reply.includes("::notice::") && !r.reply.includes("süni intellektdən"), name);
      assert.ok(!/ibn sirin/i.test(r.reply), name);
    }
  }
  // cavab mənbə mətninin özüdür (bildiriş başlığı yoxdur)
  const t = await run({ message: "Şirk neçə qismə bölünür", noticeShown: false });
  assert.equal(t.reply, tawhidReply("Şirk neçə qismə bölünür"));
  const a = await run({ message: "Ayətül Kürsi", noticeShown: false });
  assert.ok(a.reply.startsWith("::ayah 2:255::") && a.reply.includes("::tr::") && a.reply.includes("::note::"));
  // mənbə cavabı noticeShown-u dəyişmir: sonra AI-nin dini cavabı hələ də bildirişlə başlayır
  const ai = await run({ message: "Allahın rəhməti haqqında hikmətli bir söz de", noticeShown: false }, "Allahın rəhməti hər şeyi əhatə edib.");
  assert.ok(ai.usedAI && ai.notice && ai.reply.startsWith("::notice::\n"));
  // nəzarət: bildiriş mənbə olmayan hazır cavablarda saxlanıb
  assert.equal((await run({ message: "namaz necə qılınır", noticeShown: false })).notice, true);
});

test("server: ikinci dini sual (noticeShown:true) və köhnə client (flag yoxdur) cavabı dəyişmir", async () => {
  for (const [name, q] of RELIGIOUS_FIXED) {
    const second = await run({ message: q, noticeShown: true });
    const legacy = await run({ message: q });
    assert.ok(!second.reply.includes("::notice::"), name);
    assert.ok(!legacy.reply.includes("::notice::"), name);
    assert.equal(second.religious, true, name);
    assert.ok(!second.notice, name);
  }
  assert.equal((await run({ message: "Şirk neçə qismə bölünür", noticeShown: true })).reply, tawhidReply("Şirk neçə qismə bölünür"));
  assert.equal((await run({ message: "Sələfilik nədir" })).reply, cannedReply("Sələfilik nədir"));
  // dinReply: bildiriş artıq göstərilibsə İslam tərifi bildirişsiz gəlir; sadə dini sual yenə qısa cavab alır (boş qalmır)
  const def = await run({ message: "İslam nədir", noticeShown: true });
  assert.ok(!def.reply.includes("süni intellektdən din öyrənilməz") && def.reply.includes("Qurana və səhih Sünnəyə"));
  const short = await run({ message: "namaz necə qılınır", noticeShown: true });
  assert.ok(short.reply.length > 20);
});

test("server: AI-nin cavabladığı dini sual da bildirişlə başlayır (yalnız ilk dəfə); AI çağırışı eyni qalır", async () => {
  const q = "Allahın rəhməti haqqında hikmətli bir söz de";
  const first = await run({ message: q, noticeShown: false }, "Allahın rəhməti hər şeyi əhatə edib.");
  assert.equal(first.usedAI, true);
  assert.equal(first.religious, true);
  assert.ok(first.reply.startsWith("::notice::\n"));
  assert.ok(first.reply.endsWith("\n\nAllahın rəhməti hər şeyi əhatə edib."));
  const second = await run({ message: q, noticeShown: true }, "Allahın rəhməti hər şeyi əhatə edib.");
  assert.equal(second.reply, "Allahın rəhməti hər şeyi əhatə edib.");
  // AI çağırışları dəyişmir: eyni sayda və eyni sistem/mesaj; bildiriş modelə getmir
  assert.equal(first.sent.length, second.sent.length);
  assert.deepEqual(first.sent[0], second.sent[0]);
  assert.ok(!JSON.stringify(first.sent).includes("::notice::"));
  // AI özü köhnə cümləni yazıbsa təkrar olmur
  const dup = await run({ message: q, noticeShown: false }, OLD_AZ_NOTICE);
  assert.equal((dup.reply.match(/süni intellektdən din öyrənilməz/g) || []).length, 1);
  assert.equal(dup.reply, noticeBlock("az"));
  // tarixçədəki bildiriş bloku modelə getmir
  const hist = await run({ message: q, noticeShown: true, messages: [{ role: "user", text: "namaz" }, { role: "assistant", text: noticeBlock("az") + "\n\nCavab" }, { role: "user", text: q }] }, "ok");
  assert.ok(!JSON.stringify(hist.sent).includes("Müslim"));
  assert.equal(compactHistory(noticeBlock("az") + "\n\nCavab"), "Cavab");
  assert.equal(stripAyahMarkup("a\n::notice::\nb\n::ar:: x\n::/notice::").includes("::"), false);
});

test("server: qeyri-dini cavablarda bildiriş YOXDUR (kod, salam, hesab, vaxt, snippet, brend, AI)", async () => {
  const cases = [
    { message: "salam" },
    { message: "2+2 neçədir" },
    { message: "saat neçədir" },
    { message: "python salam dünya", mode: "code" },
    { message: "html form nümunəsi yaz" },
    { message: "Nibras Code kimindir" },
    { message: "Mahir Əliyev kimdir" },
  ];
  for (const c of cases) {
    const r = await run({ ...c, noticeShown: false });
    assert.ok(!r.reply.includes("::notice::"), c.message);
    assert.ok(!r.religious, c.message);
  }
  const ai = await run({ message: "Mənə dağlar haqqında qısa hekayə yaz", noticeShown: false }, "Bir dağ vardı.");
  assert.equal(ai.reply, "Bir dağ vardı.");
  assert.ok(!ai.religious);
  const code = await run({ message: "Ramazan taymeri üçün js funksiya yaz", mode: "code", noticeShown: false }, "```js\nfunction x(){}\n```");
  assert.ok(!code.reply.includes("::notice::"));
});

test("server: bildiriş istifadəçinin dilində (az/tr/en/ru/ar) — hazır dini cavab və AI cavabı", async () => {
  const cases = [
    ["Mənə namaz haqqında de", /^::notice::\nİlk olaraq:/],
    ["что такое салафизм", /^::notice::\nПрежде всего:/],
    ["ما هي السلفية", /^::notice::\nأولًا:/],
  ];
  for (const [q, re] of cases) {
    const r = await run({ message: q, noticeShown: false });
    assert.match(r.reply, re, q);
  }
  // AI cavabı (ingilis): bildiriş istifadəçinin dilindədir
  const en = await run({ message: "Tell me a nice saying about the mercy of Allah", noticeShown: false }, "Allah's mercy encompasses all things.");
  assert.equal(en.usedAI, true);
  assert.match(en.reply, /^::notice::\nFirst of all: religion is not learned/);
  // daxili mənbədən gələn ayə cavabları hər dildə bildirişsizdir
  for (const q of ["Bakara suresi 255", "Surah Baqarah verse 255", "Бакара 255", "سورة البقرة آية 255"]) {
    const r = await run({ message: q, noticeShown: false });
    assert.ok(r.reply.includes("::ayah "), q);
    assert.ok(!r.notice && !hasNotice(r.reply), q);
  }
});

test("server: yalnız ayə sorğusu dinidir, amma bildirişsiz gəlir; qeyd və tərcümə yerindədir", async () => {
  const r = await run({ message: "Ayətül Kürsi", noticeShown: false });
  assert.equal(r.religious, true);
  assert.ok(r.reply.startsWith("::ayah 2:255::"));
  assert.ok(r.reply.includes("::tr::") && r.reply.includes("::note::"));
});

// ---------------------------------------------------------------- səhifə
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(path.join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const HTML = fs.readFileSync(path.join(ROOT, "public/ai/index.html"), "utf8");
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));

// fetch real chat.js-ə yönləndirilir ki, client-in göndərdiyi noticeShown real server davranışı ilə yoxlansın
function boot({ storage = {} } = {}) {
  const requests = [];
  const dom = new JSDOM(HTML, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      for (const [k, v] of Object.entries(storage)) w.localStorage.setItem(k, v);
      w.TextEncoder = TextEncoder;
      w.fetch = async (url, init = {}) => {
        const u = new URL(url, "https://nibrascode.com");
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/chat") {
          const req = JSON.parse(init.body);
          requests.push(req);
          const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
          await handler({ method: "POST", body: req }, res);
          return out(200, res.body);
        }
        if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
        return out(200, { ok: true });
      };
    },
  });
  const w = dom.window;
  const d = w.document;
  return {
    w, d, requests,
    async say(text) {
      d.querySelector("#inp").value = text;
      d.querySelector("#form").dispatchEvent(new w.Event("submit", { cancelable: true, bubbles: true }));
      await wait(60);
    },
    snapshot() { const o = {}; for (let i = 0; i < w.localStorage.length; i++) { const k = w.localStorage.key(i); o[k] = w.localStorage.getItem(k); } return o; },
    notices() { return d.querySelectorAll("#msgs .msg.b .nt").length; },
  };
}

test("səhifə: ai.html və ai/index.html eynidir; bildiriş üçün stil və düzgün render", () => {
  assert.equal(fs.readFileSync(path.join(ROOT, "public/ai.html"), "utf8"), HTML);
  assert.match(HTML, /\.msg \.nt \{/);
  assert.match(HTML, /\.msg \.nt \.na \{[^}]*direction: rtl/);
});

test("səhifə: ilk dini sualda bildiriş (RTL ərəbcə, escape), ikincidə yox, yenidən yükləmədən sonra yox, yeni söhbətdə yenə var", { skip }, async () => {
  const p = boot();
  await p.say("salam");
  assert.equal(p.requests.at(-1).noticeShown, false);
  assert.equal(p.notices(), 0, "qeyri-dini cavabda bildiriş yoxdur");
  await p.say("Sələfilik nədir");
  assert.equal(p.requests.at(-1).noticeShown, false, "söhbətdə hələ dini cavab olmayıb");
  assert.equal(p.notices(), 1);
  const nt = p.d.querySelector("#msgs .msg.b .nt");
  assert.equal(nt.querySelector(".nl").textContent + " " + nt.querySelector(".nq").textContent, AZ_SPEC);
  const na = nt.querySelector(".na");
  assert.equal(na.getAttribute("dir"), "rtl");
  assert.equal(na.getAttribute("lang"), "ar");
  assert.equal(na.textContent, NOTICE_AR);
  assert.ok(!p.d.querySelector("#msgs").textContent.includes("::"));
  // cavab bildirişin altındadır
  const bubble = nt.parentElement;
  assert.ok(bubble.textContent.indexOf("Sələfilik") > bubble.textContent.indexOf("Mənbə: Müslim"));
  // ikinci dini sual: bildiriş yox
  await p.say("Tətil şirki nədir");
  assert.equal(p.requests.at(-1).noticeShown, true);
  assert.equal(p.notices(), 1);
  // yenidən yükləmə (saxlanmış tarixçə): hələ də true
  const q = boot({ storage: p.snapshot() });
  assert.equal(q.notices(), 1, "köhnə mesaj bərpada bildirişlə çəkilir");
  await q.say("Allahın adları təvqifidir nə deməkdir");
  assert.equal(q.requests.at(-1).noticeShown, true);
  assert.equal(q.notices(), 1);
  // yeni söhbət: yenidən false → bildiriş yenə gəlir
  q.d.querySelector("#newchat").click();
  await wait(30);
  await q.say("Sələfilik nədir");
  assert.equal(q.requests.at(-1).noticeShown, false);
  assert.equal(q.notices(), 1);
  assert.ok(q.d.querySelector("#msgs .msg.b .nt"));
  p.w.close(); q.w.close();
});

test("səhifə: mənbə cavabları (ayə, təfsir, tövhid) bildirişsizdir və noticeShown-u dəyişmir; sonrakı hazır/AI dini cavab bildirişlə gəlir", { skip }, async () => {
  const p = boot();
  for (const q of ["Bəqərə 255", "Bəqərə 255 təfsiri", "Şirk neçə qismə bölünür"]) {
    await p.say(q);
    assert.equal(p.requests.at(-1).noticeShown, false, q + ": mənbə cavabı noticeShown-u true etmir");
    assert.equal(p.notices(), 0, q);
    assert.ok(!p.d.querySelector("#msgs").textContent.includes("süni intellektdən din öyrənilməz"), q);
    assert.ok(!p.d.querySelector("#msgs").textContent.includes("::"), q);
  }
  assert.ok(p.d.querySelectorAll("#msgs .msg.b").length >= 3);
  // ilk dini hazır cavab hələ də bildirişlə gəlir, ondan sonra yox
  await p.say("Sələfilik nədir");
  assert.equal(p.requests.at(-1).noticeShown, false);
  assert.equal(p.notices(), 1);
  await p.say("Bidət nədir");
  assert.equal(p.requests.at(-1).noticeShown, true);
  assert.equal(p.notices(), 1);
  // yenidən yükləmədən sonra da düzgün
  const q = boot({ storage: p.snapshot() });
  await q.say("Bəqərə 255");
  assert.equal(q.requests.at(-1).noticeShown, true);
  assert.equal(q.notices(), 1);
  p.w.close(); q.w.close();
});

test("səhifə: bildiriş escape olunur (HTML icra olunmur)", { skip }, async () => {
  const p = boot();
  const bad = "::notice::\n<img src=x onerror=alert(1)> lead\n<b>quote</b>\n::ar:: <script>1</script>\n::src:: <i>s</i>\n::/notice::\n\ncavab";
  // birbaşa fillBubble yoluyla: köhnə/xarici mətn
  p.w.document.querySelector("#inp").value = "x";
  const el = p.d.createElement("div");
  el.className = "msg b";
  p.d.querySelector("#msgs").appendChild(el);
  // səhifənin öz render funksiyasına çıxış yoxdur; mesajı saxta cavab kimi göndəririk
  p.w.close();
  const dom2 = boot();
  dom2.w.fetch = async (url) => {
    const u = new URL(url, "https://nibrascode.com");
    const out = (b) => ({ ok: true, status: 200, text: async () => JSON.stringify(b), json: async () => b });
    if (u.pathname === "/api/chat") return out({ success: true, reply: bad });
    return out({ ok: true, storage: false, chats: [], chat: null });
  };
  await dom2.say("test");
  const b = dom2.d.querySelector("#msgs .msg.b");
  assert.equal(b.querySelectorAll("img, script, b, i").length, 0);
  assert.ok(b.textContent.includes("<img src=x onerror=alert(1)> lead"));
  assert.equal(b.querySelectorAll(".nt").length, 1);
  dom2.w.close();
});
