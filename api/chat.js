const SYSTEM = [
  "Sən Nibras AI-san, Nibras Code saytının köməkçisisən.",
  "Cavabların qısa, aydın və nəzakətli olsun. İstifadəçi hansı dildə yazırsa, o dildə cavab ver.",
  "Tibbi, hüquqi və maliyyə məsləhəti vermə.",
  "Layihənin adı Nibras Code-dur. NibrasCodr yazma. Sahibi Mahir Əliyevdir. Bu faktı dəyişmə, başqa adam adı uydurma.",
  "Nibras Code böyük şirkət deyil. Sadə, faydalı və istifadəsi rahat tətbiqlər üzərində çalışan müstəqil şəxsi layihədir.",
  "Tətbiqlər: Nibras Arabic hazırdır. Nibras PDF və Nibras Plans tezliklədir. Nibras Docs hazırlanır.",
  "Pulsuz tətbiqlərdə də reklam yoxdur. Premium olsa belə, əsas funksiyalar pulsuz qalır.",
  "Əlaqə: nibrascode@gmail.com. Sayt: nibrascode.com.",
].join(" ");

export const config = { maxDuration: 25 };

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ success: false, reply: "Yalnız POST sorğusu qəbul olunur." });
    return;
  }

  try {
    const body = await readJson(req);
    const message = String(body.message || "").trim().slice(0, 800);
    if (!message) {
      res.status(400).json({ success: false, reply: "Mesaj boş ola bilməz." });
      return;
    }
    const ready = brandReply(message);
    if (ready) {
      res.status(200).json({ success: true, reply: ready });
      return;
    }
    const history = normalizeHistory(body.messages, message);
    const order = pickOrder(message);
    const notes = [];
    const started = Date.now();

    for (const name of order) {
      if (Date.now() - started > 18000) break;
      const result = await ask(name, history, message);
      if (result.skipped) continue;
      if (result.ok) {
        res.status(200).json({ success: true, reply: result.reply });
        return;
      }
      notes.push(name + ": " + String(result.detail || "xəta").slice(0, 140));
      if (notes.length >= 12) break;
    }

    res.status(200).json({
      success: false,
      reply: "İndi cavab alınmadı. Bir az sonra yenidən yoxlayın.",
    });
  } catch {
    res.status(200).json({
      success: false,
      reply: "Server xətası. Bir az sonra yenidən cəhd edin.",
    });
  }
}

function fold(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ə/g, "e")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g");
}

function replyLang(text) {
  if (/[\u0600-\u06FF]/.test(text)) return "ar";
  if (/[\u0400-\u04FF]/.test(text)) return "ru";
  const q = fold(text);
  if (/[əğıöüçş]/i.test(text)) return "az";
  if (/\b(uygulama|ucretsiz|hakkinda|degildir|lutfen|merhaba|tesekkur|kurucusu|yakinda|projen)\b/.test(q)) return "tr";
  if (/\b(who|what|owner|owns|about|contact|free|company|is|the)\b/.test(q)) return "en";
  return "az";
}

export function brandReply(message) {
  const raw = String(message || "");
  const q = fold(raw);
  const brand = /nibras\s*cod|nibrascod|nibrascode|nibras\s*ai|nibras\s*arabic|nibras\s*pdf|nibras\s*plans|nibras\s*docs|\bnibras\b|mahir/.test(q);
  const self = /seni kim|sen kim|who are you|kim yarat|seni yarad|who made you|sen kimesen|sen kimsən/.test(q);
  if (!brand && !self) return null;
  if (/(kod yaz|kodu yaz|kod numune|write code|script yaz)/.test(q)) return null;

  const lang = replyLang(raw);
  const who = /(kimindir|kimin dir|kimdir|sahibi|sahib|owner|owns|founder|kurucu|aittir|aitdir|belongs|whose|who owns|кому принадл|чей |владел|صاحب|لمن)/.test(q) || /mahir/.test(q) || self;
  const contact = /(elaqe|email|e-poct|gmail|contact|mail|почт|связ|تواصل|بريد)/.test(q);
  const ads = /(reklam|ads|advert|реклам|إعلان)/.test(q);
  const price = /(pulsuz|odenis|premium|qiymet|free|ücret|ucret|платн|бесплат|مجاني|سعر)/.test(q);
  const company = /(sirket|company|şirkət|компания|شركة)/.test(q);
  const arabic = /arabic|ereb|arapca|араб/.test(q);
  const pdf = /\bpdf\b/.test(q);
  const plans = /plans|plan\b/.test(q);
  const docs = /\bdocs\b|sened/.test(q);
  const ai = /nibras\s*ai|nibrasai|yapay|komekci/.test(q) || self;
  const apps = /(tetbiq|uygulama|apps|приложен|تطبيق)/.test(q);

  const pack = {
    az: {
      who: "Nibras Code Mahir Əliyevin layihəsidir.\n\nNibras Code sadə, faydalı və istifadəsi rahat tətbiqlər üzərində çalışan müstəqil şəxsi layihədir. Böyük şirkət deyil. Məqsəd gündəlik ehtiyacı aydın interfeys və lazım olan funksiyalarla, reklamsız həll etməkdir.\n\nHazırda Nibras Arabic açıqdır. Nibras PDF və Nibras Plans tezliklə, Nibras Docs isə hazırlanır. Pulsuz tətbiqlərdə də reklam yoxdur.\n\nƏlaqə: nibrascode@gmail.com\nSayt: nibrascode.com",
      about: "Nibras Code Mahir Əliyevin müstəqil şəxsi layihəsidir. Böyük şirkət deyil.\n\nSadə ideyaları faydalı və rahat tətbiqlərə çevirir. Pulsuz tətbiqlərdə də reklam yoxdur. Nibras Arabic hazırdır. Nibras PDF və Nibras Plans tezliklə, Nibras Docs isə hazırlanır.\n\nƏlaqə: nibrascode@gmail.com",
      contact: "Nibras Code ilə əlaqə: nibrascode@gmail.com\nSayt: nibrascode.com\nLayihə Mahir Əliyevindir.",
      ads: "Nibras Code tətbiqlərində, pulsuz olanlarda da, reklam yoxdur. Layihə Mahir Əliyevindir.",
      price: "Tətbiqlərin hamısı pullu deyil. Pulsuz planda da reklam olmur. Premium olsa, əsas funksiyalar pul ödəmədən qalır. Premium daha çox istifadə edənlər üçün kiçik aylıq seçimdir.",
      company: "Xeyr. Nibras Code böyük şirkət deyil. Mahir Əliyevin başladığı müstəqil şəxsi layihədir.",
      arabic: "Nibras Arabic, Nibras Code-un ərəb dilini sadə və praktik öyrədən tətbiqidir. Hərflərlə yanaşı isimlər, feillər, sifətlər, saylar, dialoqlar, testlər, flash kartlar və feil babları var. Layihə Mahir Əliyevindir.",
      pdf: "Nibras PDF telefonunda PDF və şəkillərlə işləmək üçündür. Hazırda tezliklədir. Sənəd əsasən cihazda qalır. Layihə Nibras Code, yəni Mahir Əliyevindir.",
      plans: "Nibras Plans hələ tezliklədir. Nibras Code layihəsinin tətbiqlərindən biridir. Layihə Mahir Əliyevindir.",
      docs: "Nibras Docs hazırlanma mərhələsindədir. Nibras Code layihəsinə aiddir. Layihə Mahir Əliyevindir.",
      ai: "Mən Nibras AI-yam, Nibras Code saytının köməkçisiyəm. Nibras Code Mahir Əliyevin müstəqil layihəsidir.",
      apps: "Nibras Arabic hazırdır. Nibras PDF və Nibras Plans tezliklə, Nibras Docs isə hazırlanır. Hamısı Nibras Code, yəni Mahir Əliyevin layihəsidir. Pulsuz tətbiqlərdə reklam yoxdur.",
    },
    en: {
      who: "Nibras Code belongs to Mahir Əliyev.\n\nIt is an independent personal project, not a large company. It makes simple, useful apps that are comfortable to use, with no ads even on the free ones.\n\nNibras Arabic is available. Nibras PDF and Nibras Plans are coming soon. Nibras Docs is in preparation.\n\nContact: nibrascode@gmail.com\nSite: nibrascode.com",
      about: "Nibras Code is Mahir Əliyev's independent personal project. It is not a large company.\n\nIt turns simple ideas into useful, comfortable apps. Free apps have no ads. Nibras Arabic is ready. Nibras PDF and Nibras Plans are coming soon. Nibras Docs is in preparation.\n\nContact: nibrascode@gmail.com",
      contact: "Contact Nibras Code at nibrascode@gmail.com\nSite: nibrascode.com\nThe project belongs to Mahir Əliyev.",
      ads: "Nibras Code apps do not show ads, including the free ones. The project belongs to Mahir Əliyev.",
      price: "Not every app is paid. The free plan has no ads. If Premium exists, the main features stay usable without paying. Premium is a small monthly option for heavier use.",
      company: "No. Nibras Code is not a large company. It is Mahir Əliyev's independent personal project.",
      arabic: "Nibras Arabic is Nibras Code's app for learning Arabic in a simple, practical way. Besides letters it includes nouns, verbs, adjectives, numbers, dialogues, tests, flashcards, and verb forms. The project belongs to Mahir Əliyev.",
      pdf: "Nibras PDF is for working with PDFs and images on the phone. It is marked as coming soon. Files stay mainly on the device. It is part of Nibras Code, Mahir Əliyev's project.",
      plans: "Nibras Plans is coming soon. It is one of the Nibras Code apps. The project belongs to Mahir Əliyev.",
      docs: "Nibras Docs is still in preparation. It belongs to Nibras Code, Mahir Əliyev's project.",
      ai: "I am Nibras AI, the assistant on the Nibras Code site. Nibras Code is Mahir Əliyev's independent project.",
      apps: "Nibras Arabic is available. Nibras PDF and Nibras Plans are coming soon. Nibras Docs is in preparation. They all belong to Nibras Code, Mahir Əliyev's project. Free apps have no ads.",
    },
    tr: {
      who: "Nibras Code, Mahir Əliyev'in projesidir.\n\nBüyük bir şirket değildir. Sade, faydalı ve kullanımı rahat uygulamalar üzerinde çalışan bağımsız bir kişisel projedir. Ücretsiz uygulamalarda da reklam yoktur.\n\nNibras Arabic hazır. Nibras PDF ve Nibras Plans yakında. Nibras Docs hazırlanıyor.\n\nİletişim: nibrascode@gmail.com\nSite: nibrascode.com",
      about: "Nibras Code, Mahir Əliyev'in bağımsız kişisel projesidir. Büyük bir şirket değildir.\n\nSade fikirleri faydalı ve rahat uygulamalara çevirir. Ücretsiz uygulamalarda reklam yoktur. Nibras Arabic hazır. Nibras PDF ve Nibras Plans yakında, Nibras Docs hazırlanıyor.\n\nİletişim: nibrascode@gmail.com",
      contact: "İletişim: nibrascode@gmail.com\nSite: nibrascode.com\nProje Mahir Əliyev'indir.",
      ads: "Nibras Code uygulamalarında, ücretsiz olanlarda da, reklam yoktur. Proje Mahir Əliyev'indir.",
      price: "Uygulamaların hepsi ücretli değildir. Ücretsiz planda da reklam olmaz. Premium olsa bile temel işlevler ödemesiz kalır.",
      company: "Hayır. Nibras Code büyük bir şirket değildir. Mahir Əliyev'in başlattığı bağımsız kişisel projedir.",
      arabic: "Nibras Arabic, Arapçayı sade ve pratik öğreten Nibras Code uygulamasıdır. Harflerin yanında isimler, fiiller, sıfatlar, sayılar, diyaloglar, testler ve fiil babları vardır. Proje Mahir Əliyev'indir.",
      pdf: "Nibras PDF telefonda PDF ve görsellerle çalışmak içindir. Şimdilik yakında olarak yazılır. Proje Mahir Əliyev'indir.",
      plans: "Nibras Plans henüz yakında. Nibras Code projesine aittir. Proje Mahir Əliyev'indir.",
      docs: "Nibras Docs hazırlık aşamasındadır. Nibras Code projesine aittir. Proje Mahir Əliyev'indir.",
      ai: "Ben Nibras AI'yım, Nibras Code sitesinin yardımcısıyım. Nibras Code, Mahir Əliyev'in bağımsız projesidir.",
      apps: "Nibras Arabic hazır. Nibras PDF ve Nibras Plans yakında, Nibras Docs hazırlanıyor. Hepsi Nibras Code, yani Mahir Əliyev'in projesidir.",
    },
    ru: {
      who: "Nibras Code принадлежит Махиру Алиеву (Mahir Əliyev).\n\nЭто не большая компания, а независимый личный проект: простые, полезные и удобные приложения. В бесплатных приложениях тоже нет рекламы.\n\nNibras Arabic уже доступен. Nibras PDF и Nibras Plans скоро. Nibras Docs готовится.\n\nСвязь: nibrascode@gmail.com\nСайт: nibrascode.com",
      about: "Nibras Code — независимый личный проект Махира Алиева. Это не большая компания.\n\nОн превращает простые идеи в полезные и удобные приложения. В бесплатных нет рекламы. Nibras Arabic готов. Nibras PDF и Nibras Plans скоро, Nibras Docs готовится.\n\nСвязь: nibrascode@gmail.com",
      contact: "Связь с Nibras Code: nibrascode@gmail.com\nСайт: nibrascode.com\nПроект принадлежит Махиру Алиеву.",
      ads: "В приложениях Nibras Code, в том числе бесплатных, нет рекламы. Проект принадлежит Махиру Алиеву.",
      price: "Не все приложения платные. В бесплатном плане нет рекламы. Если есть Premium, основные функции остаются без оплаты.",
      company: "Нет. Nibras Code — не большая компания. Это независимый личный проект Махира Алиева.",
      arabic: "Nibras Arabic — приложение Nibras Code для простого и практичного изучения арабского. Кроме букв есть имена, глаголы, прилагательные, числа, диалоги, тесты и породы глагола. Проект Махира Алиева.",
      pdf: "Nibras PDF — для работы с PDF и изображениями на телефоне. Пока отмечен как скоро. Это часть Nibras Code, проекта Махира Алиева.",
      plans: "Nibras Plans пока скоро. Это одно из приложений Nibras Code. Проект Махира Алиева.",
      docs: "Nibras Docs ещё готовится. Он относится к Nibras Code, проекту Махира Алиева.",
      ai: "Я Nibras AI, помощник сайта Nibras Code. Nibras Code — независимый проект Махира Алиева.",
      apps: "Nibras Arabic доступен. Nibras PDF и Nibras Plans скоро, Nibras Docs готовится. Всё это Nibras Code, проект Махира Алиева. В бесплатных приложениях нет рекламы.",
    },
    ar: {
      who: "Nibras Code مشروع ماهِر علييف (Mahir Əliyev).\n\nليس شركة كبيرة، بل مشروع شخصي مستقل يصنع تطبيقات بسيطة ومفيدة وسهلة الاستخدام. لا توجد إعلانات حتى في التطبيقات المجانية.\n\nNibras Arabic متاح الآن. Nibras PDF وNibras Plans قريبًا. Nibras Docs قيد الإعداد.\n\nالتواصل: nibrascode@gmail.com\nالموقع: nibrascode.com",
      about: "Nibras Code مشروع شخصي مستقل لماهِر علييف. ليس شركة كبيرة.\n\nيحوّل الأفكار البسيطة إلى تطبيقات مفيدة ومريحة. لا إعلانات في التطبيقات المجانية. Nibras Arabic جاهز. Nibras PDF وNibras Plans قريبًا، وNibras Docs قيد الإعداد.\n\nالتواصل: nibrascode@gmail.com",
      contact: "التواصل مع Nibras Code: nibrascode@gmail.com\nالموقع: nibrascode.com\nالمشروع لماهِر علييف.",
      ads: "لا توجد إعلانات في تطبيقات Nibras Code، حتى المجانية. المشروع لماهِر علييف.",
      price: "ليست كل التطبيقات مدفوعة. الخطة المجانية بلا إعلانات. وإن وُجد Premium تبقى الوظائف الأساسية بدون دفع.",
      company: "لا. Nibras Code ليست شركة كبيرة. إنه مشروع شخصي مستقل لماهِر علييف.",
      arabic: "Nibras Arabic تطبيق من Nibras Code لتعلّم العربية ببساطة وبشكل عملي. إلى جانب الحروف فيه أسماء وأفعال وصفات وأعداد وحوارات واختبارات وبطاقات وأبواب الفعل. المشروع لماهِر علييف.",
      pdf: "Nibras PDF للعمل مع ملفات PDF والصور على الهاتف. يظهر حاليًا كـ«قريبًا». وهو جزء من مشروع ماهِر علييف.",
      plans: "Nibras Plans ما زال قريبًا. وهو أحد تطبيقات Nibras Code. المشروع لماهِر علييف.",
      docs: "Nibras Docs قيد الإعداد. وهو تابع لـ Nibras Code، مشروع ماهِر علييف.",
      ai: "أنا Nibras AI، مساعد موقع Nibras Code. Nibras Code مشروع مستقل لماهِر علييف.",
      apps: "Nibras Arabic جاهز. Nibras PDF وNibras Plans قريبًا، وNibras Docs قيد الإعداد. كلها من Nibras Code، مشروع ماهِر علييف. لا إعلانات في التطبيقات المجانية.",
    },
  };

  const text = pack[lang] || pack.az;
  if (self && !/nibras/.test(q)) return text.ai;
  if (contact) return text.contact;
  if (ads) return text.ads;
  if (price) return text.price;
  if (company) return text.company;
  if (arabic) return text.arabic;
  if (pdf) return text.pdf;
  if (plans && !/plan\b.*python|python/.test(q)) return text.plans;
  if (docs) return text.docs;
  if (apps && !ai) return text.apps;
  if (who) return text.who;
  if (ai && !/kod yaz|kod nümun|write code/.test(q)) return text.ai;
  if (brand) return text.about;
  return null;
}

function pickOrder(message) {
  const q = message.toLowerCase();
  if (/(python|javascript|typescript|\bjava\b|c#|c\+\+|sql|html|css|\bkod\b|funksiya|function|\bbug\b|algoritm|regex|proqramlaş|react|node\.?js)/i.test(q)) {
    return ["mistral-code", "deepseek", "groq", "cerebras", "github", "nvidia", "openrouter", "gemini", "sambanova", "xai", "hf"];
  }
  if (/(niyə|nədən|neden|почему|hesabla|hesab|riyaz|riyazi|isbat|müqayisə|fərqi|analiz|\d+\s*[\+\-\*\/]\s*\d+|explain|solve|vur|vurma|çarp|multiply)/i.test(q)) {
    return ["xai", "deepseek", "groq-reason", "cerebras", "mistral", "openrouter", "gemini", "nvidia", "hf"];
  }
  if (/(bu gün|bugün|today|xəbər|xeber|hava |qiymət|latest|dünən|sabah)/i.test(q)) {
    return ["xai", "openrouter", "groq", "gemini", "deepseek", "hf"];
  }
  if (/(şeir|hekayə|şer|yazı yaz|poem|story|yaradıcı)/i.test(q)) {
    return ["mistral", "xai", "groq", "gemini", "deepseek", "openrouter", "ollama"];
  }
  return ["groq", "xai", "deepseek", "mistral", "gemini", "cerebras", "openrouter", "nvidia", "sambanova", "scaleway", "ollama", "llm7", "airforce", "hf", "github"];
}

async function ask(name, history, message) {
  if (name === "groq" || name === "groq-reason") return askGroq(history);
  if (name === "xai") return askXai(history);
  if (name === "mistral") return askMistral(history, ["mistral-small-latest", "codestral-latest"]);
  if (name === "mistral-code") return askMistral(history, ["codestral-latest", "mistral-small-latest"]);
  if (name === "openrouter") return askOpenRouter(history);
  if (name === "hf") return askHf(history);
  if (name === "gemini") return askGemini(message);
  if (name === "github") return askGithub(history);
  if (name === "deepseek") return askDeepSeek(history);
  if (name === "nvidia") return askNvidia(history);
  if (name === "cerebras") return askCerebras(history);
  if (name === "sambanova") return askSambaNova(history);
  if (name === "scaleway") return askScaleway(history);
  if (name === "ollama") return askOllama(history);
  if (name === "llm7") return askLlm7(history);
  if (name === "airforce") return askAirforce(history);
  return { skipped: true };
}

function env(name) {
  const hit = Object.keys(process.env).find((key) => key.toUpperCase() === name.toUpperCase());
  return hit ? String(process.env[hit] || "").trim().replace(/^Bearer\s+/i, "").replace(/^["']|["']$/g, "") : "";
}

const GROQ_MODELS = ["openai/gpt-oss-120b", "openai/gpt-oss-20b", "llama-3.1-8b-instant", "llama-3.3-70b-versatile"];
let groqCached = "";

async function askGroq(history) {
  const apiKey = env("GROQ_API_KEY");
  if (!apiKey) return { skipped: true };
  const models = groqCached ? [groqCached, ...GROQ_MODELS] : GROQ_MODELS;
  const seen = new Set();
  let last = { ok: false, detail: "Groq cavab vermədi." };
  for (const model of models) {
    if (seen.has(model)) continue;
    seen.add(model);
    last = await complete({
      url: "https://api.groq.com/openai/v1/chat/completions",
      apiKey,
      model,
      history,
    });
    if (last.ok) {
      groqCached = model;
      return last;
    }
    if (!/does not exist|not have access|decommissioned|model/i.test(last.detail || "")) return last;
  }
  return last;
}

async function askXai(history) {
  const apiKey = env("XAI_API_KEY");
  if (!apiKey) return { skipped: true };
  const modern = await xaiResponses(apiKey, history);
  if (modern.ok) return modern;
  for (const model of ["grok-4.7", "grok-4.5", "grok-3-mini", "grok-3"]) {
    const result = await complete({
      url: "https://api.x.ai/v1/chat/completions",
      apiKey,
      model,
      history,
    });
    if (result.ok) return result;
    if (!/model|not found|does not exist|unsupported/i.test(result.detail || "")) return result;
  }
  return { ok: false, detail: "xAI cavab vermədi." };
}

async function xaiResponses(apiKey, history) {
  const upstream = await fetch("https://api.x.ai/v1/responses", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + apiKey },
    signal: AbortSignal.timeout(8000),
    body: JSON.stringify({
      model: "grok-4.7",
      input: [
        { role: "system", content: SYSTEM },
        ...history.map((item) => ({ role: item.role, content: item.text })),
      ],
    }),
  });
  const data = await upstream.json().catch(() => ({}));
  const reply = stripThink(responseText(data));
  if (upstream.ok && reply) return { ok: true, reply };
  return { ok: false, detail: "xAI responses" };
}

function responseText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  const parts = Array.isArray(data.output) ? data.output : [];
  return parts
    .map((item) => (Array.isArray(item.content) ? item.content.map((part) => part.text || "").join("") : item.text || ""))
    .join("");
}

async function askChain(history, keys, url, models) {
  const apiKey = keys.map((name) => env(name)).find(Boolean);
  if (!apiKey) return { skipped: true };
  let last = { ok: false, detail: "cavab vermədi." };
  for (const model of models) {
    last = await complete({ url, apiKey, model, history });
    if (last.ok) return last;
    if (!/model|not found|does not exist|unknown|invalid|unavailable|no longer|not supported/i.test(String(last.detail || ""))) {
      return last;
    }
  }
  return last;
}

function askDeepSeek(history) {
  return askChain(history, ["DEEPSEEK_API_KEY"], "https://api.deepseek.com/chat/completions", [
    "deepseek-v4-flash",
    "deepseek-flash",
    "deepseek-chat",
  ]);
}

function askNvidia(history) {
  return askChain(history, ["NVIDIA_API_KEY", "NGC_API_KEY"], "https://integrate.api.nvidia.com/v1/chat/completions", [
    "meta/llama-3.3-70b-instruct",
    "nvidia/llama-3.1-nemotron-70b-instruct",
  ]);
}

function askCerebras(history) {
  return askChain(history, ["CEREBRAS_API_KEY"], "https://api.cerebras.ai/v1/chat/completions", [
    "gpt-oss-120b",
    "qwen-3.8-27b",
  ]);
}

function askSambaNova(history) {
  return askChain(history, ["SAMBANOVA_API_KEY"], "https://api.sambanova.ai/v1/chat/completions", [
    "Meta-Llama-3.3-70B-Instruct",
    "gpt-oss-120b",
  ]);
}

function askScaleway(history) {
  return askChain(history, ["SCALEWAY_SECRET_KEY", "SCALEWAY_API_KEY"], "https://api.scaleway.ai/v1/chat/completions", [
    "llama-3.3-70b-instruct",
    "gemma-4-26b-a4b-it",
  ]);
}

function askOllama(history) {
  return askChain(history, ["OLLAMA_API_KEY"], "https://ollama.com/v1/chat/completions", ["gemma4:31b", "gpt-oss:20b"]);
}

function askLlm7(history) {
  return askChain(history, ["LLM7_API_KEY"], "https://api.llm7.io/v1/chat/completions", ["fast", "default"]);
}

function askAirforce(history) {
  return askChain(history, ["AIRFORCE_API_KEY"], "https://api.airforce/v1/chat/completions", ["gpt-4.1-mini", "gpt-4o-mini"]);
}

async function askMistral(history, models) {
  const apiKey = env("MISTRAL_API_KEY");
  if (!apiKey) return { skipped: true };
  let last = { ok: false, detail: "Mistral cavab vermədi." };
  for (const model of models) {
    last = await complete({
      url: "https://api.mistral.ai/v1/chat/completions",
      apiKey,
      model,
      history,
    });
    if (last.ok) return last;
    if (!/model|not found|unknown|invalid/i.test(last.detail || "")) return last;
  }
  return last;
}

async function askOpenRouter(history) {
  const apiKey = env("OPENROUTER_API_KEY");
  if (!apiKey) return { skipped: true };
  return complete({
    url: "https://openrouter.ai/api/v1/chat/completions",
    apiKey,
    model: "meta-llama/llama-3.3-70b-instruct",
    history,
    extraHeaders: {
      "HTTP-Referer": "https://www.nibrascode.com",
      "X-Title": "Nibras AI",
    },
  });
}

async function askHf(history) {
  const apiKey = env("HF_TOKEN");
  if (!apiKey) return { skipped: true };
  return complete({
    url: "https://router.huggingface.co/v1/chat/completions",
    apiKey,
    model: "meta-llama/Llama-3.3-70B-Instruct",
    history,
  });
}

async function askGithub(history) {
  const apiKey = env("GITHUB_MODELS_TOKEN") || env("GH_MODELS_TOKEN") || env("GITHUB_TOKEN");
  if (!apiKey) return { skipped: true };
  return complete({
    url: "https://models.github.ai/inference/chat/completions",
    apiKey,
    model: "openai/gpt-4.1-mini",
    history,
  });
}

async function askGemini(message) {
  const apiKey = env("GEMINI_API_KEY");
  if (!apiKey) return { skipped: true };
  const models = ["gemini-3.8-flash", "gemini-2.0-flash", "gemini-flash-latest"];
  let detail = "Gemini cavab vermədi.";
  for (const model of models) {
    const upstream = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        signal: AbortSignal.timeout(6000),
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM }] },
          contents: [{ role: "user", parts: [{ text: message }] }],
          generationConfig: { temperature: 0.5, maxOutputTokens: 700 },
        }),
      },
    );
    const data = await upstream.json().catch(() => ({}));
    const reply = (data.candidates?.[0]?.content?.parts || []).map((part) => part.text || "").join("").trim();
    if (upstream.ok && reply) return { ok: true, reply };
    detail = String(data.error?.message || detail);
    if (!/high demand|unavailable|not found|no longer available|overloaded|quota/i.test(detail)) break;
  }
  return { ok: false, detail };
}

async function complete({ url, apiKey, model, history, extraHeaders }) {
  const upstream = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
      ...(extraHeaders || {}),
    },
    signal: AbortSignal.timeout(8000),
    body: JSON.stringify({
      model,
      temperature: 0.4,
      max_tokens: 700,
      messages: [
        { role: "system", content: SYSTEM },
        ...history.map((item) => ({ role: item.role, content: item.text })),
      ],
    }),
  });
  const data = await upstream.json().catch(() => ({}));
  const reply = stripThink(String(data.choices?.[0]?.message?.content || ""));
  if (upstream.ok && reply) return { ok: true, reply };
  const detail = data.error?.message || data.error || data.message || upstream.status;
  return { ok: false, detail: typeof detail === "string" ? detail : JSON.stringify(detail) };
}

function stripThink(text) {
  return text.replace(/<think>[\s\S]*?<\/think>/gi, "").trim();
}

function normalizeHistory(raw, message) {
  const list = Array.isArray(raw) ? raw : [];
  const cleaned = list
    .map((item) => ({
      role: item && item.role === "assistant" ? "assistant" : "user",
      text: String((item && item.text) || "").trim().slice(0, 800),
    }))
    .filter((item) => item.text)
    .slice(-8);
  if (!cleaned.length || cleaned[cleaned.length - 1].text !== message) {
    cleaned.push({ role: "user", text: message });
  }
  return cleaned;
}

async function readJson(req) {
  const body = req.body;
  if (body && typeof body === "object" && !Buffer.isBuffer(body)) return body;
  if (typeof body === "string") return JSON.parse(body || "{}");
  if (Buffer.isBuffer(body)) return JSON.parse(body.toString("utf8") || "{}");
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}
