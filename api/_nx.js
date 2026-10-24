// NX Studio əlavə bölmələri (söhbətlər, AI provayderləri, kitabxana, tətbiqlər, üz qabıqları, yerləşdirmələr).
// Bu funksiyalar yalnız api/admin.js-dən, verifyAdmin uğurlu olandan SONRA çağırılır.
// Açar və tokenlər heç vaxt cavaba yazılmır: yalnız "qoşulub/işləyir" vəziyyəti, status kodu və cavab müddəti qaytarılır.

const TIMEOUT_MS = 8000;
const OWNER = "nibrascode";
const SITE_REPO = "nibrascode/code";
const COVER_REPO = "nibrascode/cover-gen";
const LIBRARY_REPO = "mmuxax-bot/mektebe";
const RELEASE_REPOS = [
  { repo: "nibrascode/docs", slug: "nibras-docs" },
  { repo: "nibrascode/pdfeditor", slug: "nibras-office" },
  { repo: "nibrascode/qr", slug: "nibras-qr" },
  { repo: "nibrascode/quran-tartil", slug: "" },
];
const SLUG_RE = /^[a-z0-9-]{2,40}$/;
const COVER_RE = /^[0-9]{4}-[0-9]{2}-[0-9]{2}\/[A-Za-z0-9_-]{4,80}\.(webp|png|jpe?g)$/;

const envOf = (env, ...keys) => {
  for (const k of keys) {
    const v = String(env[k] || "").trim();
    if (v) return v;
  }
  return "";
};

async function timed(url, init = {}, fetchImpl = globalThis.fetch, timeout = TIMEOUT_MS) {
  const t0 = Date.now();
  try {
    const res = await fetchImpl(url, { ...init, signal: AbortSignal.timeout(timeout) });
    return { res, ms: Date.now() - t0 };
  } catch {
    return { res: null, ms: Date.now() - t0 };
  }
}

const memo = new Map();
async function cached(key, ttl, load) {
  const hit = memo.get(key);
  if (hit && Date.now() - hit.at < ttl) return hit.value;
  const value = await load();
  if (memo.size > 100) memo.clear();
  memo.set(key, { at: Date.now(), value });
  return value;
}
export function dropCache(prefix) {
  for (const k of [...memo.keys()]) if (k.startsWith(prefix)) memo.delete(k);
}

// ---------- GitHub ----------
function ghToken(env) {
  return envOf(env, "GITHUB_TOKEN", "GITHUB_TOKEN_NIBRASCODE");
}

async function gh(env, path, { method = "GET", body, raw = false, fetchImpl } = {}) {
  const token = ghToken(env);
  const headers = {
    Accept: raw ? "application/vnd.github.raw" : "application/vnd.github+json",
    "User-Agent": "nibrascode-nx-studio",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body !== undefined) headers["Content-Type"] = "application/json";
  const { res } = await timed(`https://api.github.com${path}`, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) }, fetchImpl, 12000);
  if (!res) return { ok: false, status: 0, data: null, res: null };
  if (!res.ok) return { ok: false, status: res.status, data: null, res };
  if (res.status === 204) return { ok: true, status: 204, data: null, res };
  if (raw) return { ok: true, status: res.status, data: null, res };
  return { ok: true, status: res.status, data: await res.json().catch(() => null), res };
}

async function ghJsonFile(env, repo, path, fetchImpl) {
  const r = await gh(env, `/repos/${repo}/contents/${path}?ref=main`, { fetchImpl });
  if (!r.ok || !r.data || typeof r.data.content !== "string") return { ok: false, status: r.status, sha: "", json: null };
  try {
    const text = Buffer.from(r.data.content, "base64").toString("utf8");
    return { ok: true, status: 200, sha: r.data.sha, json: JSON.parse(text) };
  } catch {
    return { ok: false, status: 422, sha: r.data.sha, json: null };
  }
}

// ---------- Nibras AI söhbətləri ----------
export const PROVIDERS = [
  { id: "gemini", name: "Google Gemini", keys: ["GEMINI_API_KEY"], url: (k) => `https://generativelanguage.googleapis.com/v1beta/models?pageSize=1&key=${encodeURIComponent(k)}`, auth: "none" },
  { id: "groq", name: "Groq", keys: ["GROQ_API_KEY"], url: () => "https://api.groq.com/openai/v1/models" },
  { id: "mistral", name: "Mistral", keys: ["MISTRAL_API_KEY"], url: () => "https://api.mistral.ai/v1/models" },
  { id: "openrouter", name: "OpenRouter", keys: ["OPENROUTER_API_KEY"], url: () => "https://openrouter.ai/api/v1/key" },
  { id: "xai", name: "xAI", keys: ["XAI_API_KEY"], url: () => "https://api.x.ai/v1/models" },
  { id: "deepseek", name: "DeepSeek", keys: ["DEEPSEEK_API_KEY"], url: () => "https://api.deepseek.com/models" },
  { id: "cerebras", name: "Cerebras", keys: ["CEREBRAS_API_KEY"], url: () => "https://api.cerebras.ai/v1/models" },
  { id: "sambanova", name: "SambaNova", keys: ["SAMBANOVA_API_KEY"], url: () => "https://api.sambanova.ai/v1/models" },
  { id: "nvidia", name: "NVIDIA", keys: ["NVIDIA_API_KEY", "NGC_API_KEY"], url: () => "https://integrate.api.nvidia.com/v1/models" },
  { id: "hf", name: "Hugging Face", keys: ["HF_TOKEN"], url: () => "https://huggingface.co/api/whoami-v2" },
  { id: "github", name: "GitHub Models", keys: ["GITHUB_MODELS_TOKEN", "GH_MODELS_TOKEN", "GITHUB_TOKEN"], url: () => "https://models.github.ai/catalog/models" },
  { id: "scaleway", name: "Scaleway", keys: ["SCALEWAY_SECRET_KEY", "SCALEWAY_API_KEY"], url: () => "https://api.scaleway.ai/v1/models" },
  { id: "ollama", name: "Ollama Cloud", keys: ["OLLAMA_API_KEY"], url: () => "https://ollama.com/api/tags" },
  { id: "llm7", name: "LLM7", keys: ["LLM7_API_KEY"], url: () => "https://api.llm7.io/v1/models" },
  { id: "airforce", name: "Airforce", keys: ["AIRFORCE_API_KEY"], url: () => "https://api.airforce/v1/models" },
];

export async function providerHealth({ env = process.env, fetchImpl = globalThis.fetch, fresh = false } = {}) {
  return cached("providers", fresh ? 0 : 120_000, async () => {
    const out = await Promise.all(
      PROVIDERS.map(async (p) => {
        const key = envOf(env, ...p.keys);
        if (!key) return { id: p.id, name: p.name, configured: false, ok: false, status: 0, ms: 0 };
        const headers = { "User-Agent": "nibrascode-nx-studio" };
        if (p.auth !== "none") headers.Authorization = `Bearer ${key}`;
        const { res, ms } = await timed(p.url(key), { headers }, fetchImpl, 7000);
        return { id: p.id, name: p.name, configured: true, ok: Boolean(res && res.ok), status: res ? res.status : 0, ms };
      }),
    );
    return { checkedAt: new Date().toISOString(), providers: out };
  });
}

// ---------- Kitabxana ----------
export async function libraryStats({ env = process.env, fetchImpl = globalThis.fetch, fresh = false } = {}) {
  const base = String(env.LIBRARY_URL || "https://library.nibrascode.com").replace(/\/+$/, "");
  return cached("library", fresh ? 0 : 300_000, async () => {
    const [home, books, commits, repo] = await Promise.all([
      timed(base + "/", {}, fetchImpl),
      timed(base + "/api/books", {}, fetchImpl),
      gh(env, `/repos/${LIBRARY_REPO}/commits?per_page=8`, { fetchImpl }),
      gh(env, `/repos/${LIBRARY_REPO}`, { fetchImpl }),
    ]);
    let catalog = null;
    if (books.res && books.res.ok) {
      const d = await books.res.json().catch(() => null);
      if (d && Array.isArray(d.sections)) {
        const sections = d.sections.map((s) => {
          const list = (s.groups || []).flatMap((g) => g.books || []);
          return {
            id: String(s.id || ""),
            title: typeof s.title === "object" && s.title ? s.title : { az: String(s.title || s.id || "") },
            books: list.length,
            pages: list.reduce((a, b) => a + (Number(b.pages) || 0), 0),
          };
        });
        catalog = {
          books: Number(d.count) || sections.reduce((a, s) => a + s.books, 0),
          pages: Number(d.pages) || sections.reduce((a, s) => a + s.pages, 0),
          sections,
        };
      }
    }
    return {
      url: base,
      up: Boolean(home.res && home.res.ok),
      ms: home.ms,
      catalog,
      repo: repo.ok && repo.data ? { name: LIBRARY_REPO, pushed_at: repo.data.pushed_at, size_kb: repo.data.size, url: repo.data.html_url } : null,
      commits: commits.ok && Array.isArray(commits.data)
        ? commits.data.map((c) => ({ sha: c.sha.slice(0, 7), msg: String(c.commit?.message || "").split("\n")[0].slice(0, 160), date: c.commit?.author?.date, url: c.html_url }))
        : [],
      checkedAt: new Date().toISOString(),
    };
  });
}

// ---------- Tətbiqlər və buraxılışlar ----------
export async function appsData({ env = process.env, fetchImpl = globalThis.fetch, fresh = false } = {}) {
  return cached("apps", fresh ? 0 : 60_000, async () => {
    const [play, sizes, runs, ...releases] = await Promise.all([
      ghJsonFile(env, SITE_REPO, "src/data/play-facts.json", fetchImpl),
      ghJsonFile(env, SITE_REPO, "src/data/app-sizes.json", fetchImpl),
      gh(env, `/repos/${SITE_REPO}/actions/workflows/play-sync.yml/runs?per_page=5`, { fetchImpl }),
      ...RELEASE_REPOS.map((r) => gh(env, `/repos/${r.repo}/releases?per_page=5`, { fetchImpl })),
    ]);
    return {
      play: play.ok ? play.json : null,
      sizes: sizes.ok ? sizes.json : {},
      sync: runs.ok && runs.data
        ? (runs.data.workflow_runs || []).map((w) => ({ status: w.status, conclusion: w.conclusion, at: w.run_started_at || w.created_at, url: w.html_url, event: w.event }))
        : null,
      releases: RELEASE_REPOS.map((r, i) => ({
        repo: r.repo,
        slug: r.slug,
        ok: releases[i].ok,
        items: releases[i].ok && Array.isArray(releases[i].data)
          ? releases[i].data.map((x) => ({
              tag: x.tag_name,
              name: x.name || x.tag_name,
              date: x.published_at || x.created_at,
              draft: Boolean(x.draft),
              pre: Boolean(x.prerelease),
              url: x.html_url,
              assets: (x.assets || []).map((a) => ({ name: a.name, size: a.size, downloads: a.download_count, url: a.browser_download_url })),
            }))
          : [],
      })),
      checkedAt: new Date().toISOString(),
    };
  });
}

/** Bir tətbiqin yükləmə ölçüsünü src/data/app-sizes.json-a yazır (GitHub commit -> Vercel yenidən yerləşdirir). */
export async function setAppSize({ slug, size, sizeVersion }, { env = process.env, fetchImpl = globalThis.fetch } = {}) {
  if (!ghToken(env)) return { status: 503, body: { ok: false, error: "github" } };
  const s = String(slug || "");
  if (!SLUG_RE.test(s)) return { status: 400, body: { ok: false, error: "slug" } };
  const clean = String(size || "").trim();
  if (clean && !/^\d{1,4}([.,]\d{1,2})?\s?(KB|MB|GB)$/i.test(clean)) return { status: 400, body: { ok: false, error: "size" } };
  const ver = String(sizeVersion || "").trim();
  if (ver && !/^[0-9][0-9A-Za-z.+-]{0,30}$/.test(ver)) return { status: 400, body: { ok: false, error: "version" } };
  for (let attempt = 0; attempt < 2; attempt++) {
    const cur = await ghJsonFile(env, SITE_REPO, "src/data/app-sizes.json", fetchImpl);
    if (!cur.ok && cur.status !== 404) return { status: 502, body: { ok: false, error: "read", code: cur.status } };
    const next = { ...(cur.json && typeof cur.json === "object" ? cur.json : {}) };
    if (clean) next[s] = { size: clean.replace(",", ".").replace(/\s*(KB|MB|GB)$/i, (m) => " " + m.trim().toUpperCase()), ...(ver ? { sizeVersion: ver } : {}) };
    else delete next[s];
    const sorted = Object.fromEntries(Object.keys(next).sort().map((k) => [k, next[k]]));
    const put = await gh(env, `/repos/${SITE_REPO}/contents/src/data/app-sizes.json`, {
      method: "PUT",
      fetchImpl,
      body: {
        message: `NX Studio: ${s} ölçüsü ${clean || "silindi"}`,
        content: Buffer.from(JSON.stringify(sorted, null, 2) + "\n", "utf8").toString("base64"),
        branch: "main",
        committer: { name: "Nibras Code", email: "Nibrascode@gmail.com" },
        ...(cur.sha ? { sha: cur.sha } : {}),
      },
    });
    if (put.ok) {
      dropCache("apps");
      return { status: 200, body: { ok: true, sizes: sorted, commit: put.data?.commit?.html_url || "" } };
    }
    if (put.status !== 409 && put.status !== 422) return { status: 502, body: { ok: false, error: "write", code: put.status } };
  }
  return { status: 409, body: { ok: false, error: "conflict" } };
}

/** Play sinxronunu indi işə salır (workflow_dispatch). */
export async function runPlaySync({ env = process.env, fetchImpl = globalThis.fetch } = {}) {
  if (!ghToken(env)) return { status: 503, body: { ok: false, error: "github" } };
  const r = await gh(env, `/repos/${SITE_REPO}/actions/workflows/play-sync.yml/dispatches`, { method: "POST", body: { ref: "main" }, fetchImpl });
  if (r.ok) dropCache("apps");
  return { status: r.ok ? 200 : 502, body: { ok: r.ok, code: r.status } };
}

// ---------- Üz qabıqları (cover-gen) ----------
export async function coverList({ env = process.env, fetchImpl = globalThis.fetch, fresh = false } = {}) {
  return cached("covers", fresh ? 0 : 300_000, async () => {
    const [file, runs] = await Promise.all([
      ghJsonFile(env, COVER_REPO, "covers/approved.json", fetchImpl),
      gh(env, `/repos/${COVER_REPO}/actions/runs?per_page=5`, { fetchImpl }),
    ]);
    if (!file.ok) return { ok: false, code: file.status, covers: [], runs: [] };
    const list = Array.isArray(file.json) ? file.json : Array.isArray(file.json?.covers) ? file.json.covers : [];
    const covers = list
      .filter((c) => c && COVER_RE.test(String(c.file || "")))
      .map((c) => ({
        file: c.file,
        provider: String(c.provider || ""),
        model: String(c.model || ""),
        premium: Number(c.premium) || null,
        judge: String(c.judge || ""),
        w: Array.isArray(c.size) ? Number(c.size[0]) || null : null,
        h: Array.isArray(c.size) ? Number(c.size[1]) || null : null,
        created: c.created_utc || "",
      }))
      .sort((a, b) => String(b.created).localeCompare(String(a.created)));
    return {
      ok: true,
      covers,
      runs: runs.ok && runs.data ? (runs.data.workflow_runs || []).map((w) => ({ name: w.name, status: w.status, conclusion: w.conclusion, at: w.run_started_at || w.created_at, url: w.html_url })) : [],
    };
  });
}

/** Şəkli özəl repodan oxuyub baytlarla qaytarır (yalnız approved.json-dakı adlar). */
export async function coverImage(file, { env = process.env, fetchImpl = globalThis.fetch } = {}) {
  const f = String(file || "");
  if (!COVER_RE.test(f)) return { status: 400 };
  const list = await coverList({ env, fetchImpl });
  if (!list.covers.some((c) => c.file === f)) return { status: 404 };
  const r = await gh(env, `/repos/${COVER_REPO}/contents/covers/${f}?ref=main`, { raw: true, fetchImpl });
  if (!r.ok || !r.res) return { status: r.status === 404 ? 404 : 502 };
  const buf = Buffer.from(await r.res.arrayBuffer());
  const ext = f.split(".").pop().toLowerCase();
  return { status: 200, type: ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg", buf };
}

// ---------- Yerləşdirmələr (Vercel -> GitHub deployments) ----------
export async function deploys({ env = process.env, fetchImpl = globalThis.fetch, fresh = false } = {}) {
  return cached("deploys", fresh ? 0 : 30_000, async () => {
    const list = await gh(env, `/repos/${SITE_REPO}/deployments?per_page=15`, { fetchImpl });
    if (!list.ok || !Array.isArray(list.data)) return { ok: false, code: list.status, items: [] };
    const commits = await gh(env, `/repos/${SITE_REPO}/commits?sha=main&per_page=30`, { fetchImpl });
    const msg = new Map((commits.ok && Array.isArray(commits.data) ? commits.data : []).map((c) => [c.sha, String(c.commit?.message || "").split("\n")[0].slice(0, 140)]));
    const items = await Promise.all(
      list.data.map(async (d) => {
        const st = await gh(env, `/repos/${SITE_REPO}/deployments/${d.id}/statuses?per_page=1`, { fetchImpl });
        const s = st.ok && Array.isArray(st.data) && st.data[0] ? st.data[0] : null;
        return {
          id: d.id,
          env: d.environment,
          sha: String(d.sha || "").slice(0, 7),
          msg: msg.get(d.sha) || "",
          created: d.created_at,
          state: s ? s.state : "pending",
          updated: s ? s.created_at : d.updated_at,
          url: s ? s.target_url || s.log_url || "" : "",
          live: s ? s.environment_url || "" : "",
        };
      }),
    );
    return { ok: true, items, checkedAt: new Date().toISOString() };
  });
}

export const NX_OWNER = OWNER;
