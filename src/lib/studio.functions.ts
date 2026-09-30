import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createServerFn } from "@tanstack/react-start";
import { env } from "@/lib/env.server";
import { STUDIO_EMAIL, STUDIO_KEY, STUDIO_URL, fetchPrivacyAll, fetchStudioApps, studioReady, type StudioAppRow, type StudioPrivacyRow } from "@/lib/studio";

function githubToken() {
  const current = env("GITHUB_TOKEN");
  if (current) return current;
  try {
    const text = readFileSync(join(process.cwd(), ".env"), "utf8");
    const line = text.split("\n").find((item) => item.startsWith("GITHUB_TOKEN="));
    const value = line?.slice("GITHUB_TOKEN=".length).trim();
    return value || undefined;
  } catch {
    return undefined;
  }
}
const GITHUB_OWNER = "nibrascode";
const GITHUB_REPO = "code";
const GITHUB_BRANCH = "main";
const GITHUB_PATH = "site-content/studio.json";

export const loadStudioBundle = createServerFn({ method: "GET" }).handler(async () => {
  const ready = await studioReady();
  if (!ready) return { ready: false, apps: [], privacy: [] };
  const [apps, privacy] = await Promise.all([fetchStudioApps(), fetchPrivacyAll()]);
  return { ready: true, apps, privacy };
});

export const syncStudioToGithub = createServerFn({ method: "POST" })
  .validator((input: { accessToken?: string; privacy?: StudioPrivacyRow | null; dropSlug?: string; app?: StudioAppRow | null; dropApp?: string }) => {
    const accessToken = input.accessToken?.trim() ?? "";
    if (accessToken.length < 20 || accessToken.length > 4000) {
      throw new Error("Sessiya yanlışdır.");
    }
    const privacy = input.privacy?.slug
      ? {
          slug: String(input.privacy.slug).slice(0, 140),
          lang: String(input.privacy.lang || "az").slice(0, 8),
          title: String(input.privacy.title || "").slice(0, 400),
          updated_label: String(input.privacy.updated_label || "").slice(0, 80),
          body: String(input.privacy.body || "").slice(0, 200000),
        }
      : null;
    const app = input.app?.slug
      ? {
          ...input.app,
          slug: String(input.app.slug).slice(0, 80),
          name: String(input.app.name || "").slice(0, 120),
        }
      : null;
    return {
      accessToken,
      privacy,
      dropSlug: input.dropSlug ? String(input.dropSlug).slice(0, 140) : "",
      app,
      dropApp: input.dropApp ? String(input.dropApp).slice(0, 80) : "",
    };
  })
  .handler(async ({ data }) => {
    const token = githubToken();
    if (!token) return { ok: false as const, reason: "Bu serverdə GITHUB_TOKEN yoxdur" };

    const userResponse = await fetch(`${STUDIO_URL}/auth/v1/user`, {
      headers: { apikey: STUDIO_KEY, Authorization: `Bearer ${data.accessToken}` },
    });
    if (!userResponse.ok) return { ok: false as const, reason: "Sessiya bitib" };
    const user = (await userResponse.json()) as { email?: string };
    if (user.email?.toLowerCase() !== STUDIO_EMAIL) return { ok: false as const, reason: "İcazə yoxdur" };

    const [apps, privacy] = await Promise.all([fetchStudioApps(), fetchPrivacyAll()]);
    let nextPrivacy = privacy;
    if (data.dropSlug) nextPrivacy = nextPrivacy.filter((row) => row.slug !== data.dropSlug);
    if (data.privacy) {
      nextPrivacy = nextPrivacy.filter((row) => !(row.slug === data.privacy?.slug && row.lang === data.privacy.lang));
      nextPrivacy.push(data.privacy);
    }
    let nextApps = apps;
    if (data.dropApp) nextApps = nextApps.filter((row) => row.slug !== data.dropApp);
    if (data.app) {
      nextApps = nextApps.filter((row) => row.slug !== data.app?.slug);
      nextApps.push(data.app);
    }
    const json = JSON.stringify({ savedAt: new Date().toISOString(), apps: nextApps, privacy: nextPrivacy }, null, 2);
    return commitStudioFile(token, json);
  });

async function commitStudioFile(token: string, json: string) {
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
    "User-Agent": "nibrascode-site",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  const current = await fetch(
    `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}?ref=${GITHUB_BRANCH}`,
    { headers },
  );
  let sha = "";
  if (current.ok) {
    const file = (await current.json()) as { sha?: string };
    sha = file.sha ?? "";
  } else if (current.status !== 404) {
    return { ok: false as const, reason: `GitHub oxunmadı (${current.status})` };
  }

  const response = await fetch(`https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_PATH}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      message: "Admin paneldən məzmun yeniləndi",
      content: Buffer.from(json, "utf8").toString("base64"),
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!response.ok) return { ok: false as const, reason: `GitHub yazılmadı (${response.status})` };
  const payload = (await response.json()) as { commit?: { html_url?: string } };
  return { ok: true as const, url: payload.commit?.html_url ?? "" };
}

export const recordHit = createServerFn({ method: "POST" })
  .validator((input: { kind: string; slug: string }) => {
    const kind = input.kind === "download" ? "download" : "view";
    const slug = typeof input.slug === "string" ? input.slug.slice(0, 64) : "";
    return { kind, slug };
  })
  .handler(async ({ data }) => {
    try {
      const response = await fetch(`${STUDIO_URL}/rest/v1/rpc/studio_hit`, {
        method: "POST",
        headers: {
          apikey: STUDIO_KEY,
          Authorization: `Bearer ${STUDIO_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ kind: data.kind, slug: data.slug }),
      });
      return { ok: response.ok };
    } catch {
      return { ok: false };
    }
  });
