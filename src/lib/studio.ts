export const STUDIO_URL = "https://qvwqqpxrvnrnwvyckwlo.supabase.co";
export const STUDIO_KEY = "sb_publishable_IsY7gWUlP8l0_QgsQHXZ-w_2lHGEpc2";
export const STUDIO_EMAIL = "nibrascode@gmail.com";
const SESSION_KEY = "nibras_studio_session";

export const STUDIO_SQL = `create table if not exists public.studio_privacy (
  slug text not null,
  lang text not null,
  title text not null,
  updated_label text not null,
  body text not null,
  primary key (slug, lang)
);

create table if not exists public.studio_apps (
  slug text primary key,
  name text not null,
  status text not null default '',
  summary text not null default '',
  play_url text not null default '',
  huawei_url text not null default '',
  appstore_url text not null default '',
  galaxy_url text not null default '',
  xiaomi_url text not null default '',
  icon_url text not null default '',
  sort int not null default 100,
  visible boolean not null default true
);

alter table public.studio_apps add column if not exists huawei_url text not null default '';
alter table public.studio_apps add column if not exists appstore_url text not null default '';
alter table public.studio_apps add column if not exists galaxy_url text not null default '';
alter table public.studio_apps add column if not exists xiaomi_url text not null default '';

alter table public.studio_privacy enable row level security;
alter table public.studio_apps enable row level security;

drop policy if exists privacy_read on public.studio_privacy;
drop policy if exists privacy_write on public.studio_privacy;
drop policy if exists apps_read on public.studio_apps;
drop policy if exists apps_write on public.studio_apps;

create policy privacy_read on public.studio_privacy
  for select to anon, authenticated using (true);
create policy privacy_write on public.studio_privacy
  for all to authenticated
  using ((auth.jwt() ->> 'email') = 'nibrascode@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'nibrascode@gmail.com');

create policy apps_read on public.studio_apps
  for select to anon, authenticated using (true);
create policy apps_write on public.studio_apps
  for all to authenticated
  using ((auth.jwt() ->> 'email') = 'nibrascode@gmail.com')
  with check ((auth.jwt() ->> 'email') = 'nibrascode@gmail.com');

grant usage on schema public to anon, authenticated;
grant select on public.studio_privacy, public.studio_apps to anon, authenticated;
grant insert, update, delete on public.studio_privacy, public.studio_apps to authenticated;

create table if not exists public.studio_hits (
  day date not null,
  kind text not null,
  slug text not null default '',
  total integer not null default 0,
  primary key (day, kind, slug)
);

alter table public.studio_hits enable row level security;
drop policy if exists hits_read on public.studio_hits;
create policy hits_read on public.studio_hits
  for select to authenticated
  using ((auth.jwt() ->> 'email') = 'nibrascode@gmail.com');

create or replace function public.studio_hit(kind text, slug text)
returns void
language plpgsql
security definer
set search_path = public
as '
declare
  hit_kind text;
  hit_slug text;
begin
  hit_kind := studio_hit.kind;
  hit_slug := studio_hit.slug;
  if hit_kind not in (''view'', ''download'') then
    return;
  end if;
  if hit_kind = ''download'' and (hit_slug is null or char_length(hit_slug) < 1 or char_length(hit_slug) > 64) then
    return;
  end if;
  if hit_kind = ''view'' then
    hit_slug := '''';
  end if;
  execute format(
    ''insert into public.studio_hits(day, kind, slug, total) values (%L, %L, %L, 1) on conflict (day, kind, slug) do update set total = studio_hits.total + 1'',
    (timezone(''utc'', now()))::date,
    hit_kind,
    hit_slug
  );
end;
';

revoke all on function public.studio_hit(text, text) from public;
grant execute on function public.studio_hit(text, text) to anon, authenticated;
grant select on public.studio_hits to authenticated;`;

export type StudioAppRow = {
  slug: string;
  name: string;
  status: string;
  summary: string;
  play_url: string;
  huawei_url: string;
  appstore_url: string;
  galaxy_url: string;
  xiaomi_url: string;
  icon_url: string;
  sort: number;
  visible: boolean;
};

const APP_SELECT =
  "slug,name,status,summary,play_url,huawei_url,appstore_url,galaxy_url,xiaomi_url,icon_url,sort,visible";

export function storeLinks(row: Partial<StudioAppRow> | null | undefined) {
  const fields = [
    ["play_url", "Play Market"],
    ["huawei_url", "Huawei Store"],
    ["appstore_url", "App Store"],
    ["galaxy_url", "Galaxy Store"],
    ["xiaomi_url", "Xiaomi Store"],
  ] as const;
  if (!row) return [];
  return fields.flatMap(([key, name]) => {
    const href = (row[key] || "").trim();
    return href ? [{ id: key, name, href }] : [];
  });
}

export type StudioHit = {
  day: string;
  kind: string;
  slug: string;
  total: number;
};

export async function fetchHits(token: string): Promise<StudioHit[] | null> {
  const since = new Date();
  since.setUTCDate(since.getUTCDate() - 62);
  const day = since.toISOString().slice(0, 10);
  const response = await fetch(
    `${STUDIO_URL}/rest/v1/studio_hits?select=day,kind,slug,total&day=gte.${day}&order=day.asc`,
    { headers: headers(token) },
  );
  if (!response.ok) return null;
  const data = (await response.json()) as StudioHit[];
  return data.map((row) => ({ ...row, day: String(row.day).slice(0, 10), total: Number(row.total) || 0 }));
}

export type StudioPrivacyRow = {
  slug: string;
  lang: string;
  title: string;
  updated_label: string;
  body: string;
};

export type StudioSession = {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  email: string;
};

type TokenResponse = {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  user?: { email?: string };
  error_description?: string;
  msg?: string;
  error?: string;
};

function headers(token?: string, prefer?: string) {
  return {
    apikey: STUDIO_KEY,
    Authorization: `Bearer ${token || STUDIO_KEY}`,
    "Content-Type": "application/json",
    ...(prefer ? { Prefer: prefer } : {}),
  };
}

export function readSession(): StudioSession | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as StudioSession;
    if (!session.access_token || !session.refresh_token) return null;
    return session;
  } catch {
    return null;
  }
}

export function writeSession(session: StudioSession | null) {
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  else localStorage.removeItem(SESSION_KEY);
}

async function refresh(session: StudioSession): Promise<StudioSession> {
  const response = await fetch(`${STUDIO_URL}/auth/v1/token?grant_type=refresh_token`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ refresh_token: session.refresh_token }),
  });
  const data = (await response.json()) as TokenResponse;
  if (!response.ok || !data.access_token || !data.refresh_token) {
    writeSession(null);
    throw new Error("Giriş vaxtı bitib. Yenidən daxil olun.");
  }
  const next: StudioSession = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Date.now() + (data.expires_in ?? 3600) * 1000,
    email: data.user?.email || session.email,
  };
  writeSession(next);
  return next;
}

export async function validSession(): Promise<StudioSession | null> {
  const session = readSession();
  if (!session) return null;
  if (session.expires_at > Date.now() + 30_000) return session;
  try {
    return await refresh(session);
  } catch {
    return null;
  }
}

export async function signIn(email: string, password: string): Promise<StudioSession> {
  const response = await fetch(`${STUDIO_URL}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({ email, password }),
  });
  const data = (await response.json()) as TokenResponse;
  if (!response.ok || !data.access_token || !data.refresh_token) {
    throw new Error("E-poçt və ya şifrə yanlışdır.");
  }
  const emailOut = data.user?.email || email;
  if (emailOut.toLowerCase() !== STUDIO_EMAIL) {
    throw new Error("Bu panel yalnız Nibras Code hesabı üçündür.");
  }
  const session: StudioSession = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: Date.now() + (data.expires_in ?? 3600) * 1000,
    email: emailOut,
  };
  writeSession(session);
  return session;
}

async function parse<T>(response: Response): Promise<T> {
  const text = await response.text();
  const data = text ? (JSON.parse(text) as T & { message?: string; code?: string }) : ({} as T);
  if (!response.ok) {
    const message = (data as { message?: string }).message || "Saxlanmadı.";
    const code = (data as { code?: string }).code;
    if (code === "PGRST205" || /studio_/.test(message)) {
      throw new Error("Cədvəl hələ yoxdur. Aşağıdakı SQL-i bir dəfə işə salın.");
    }
    throw new Error(message);
  }
  return data;
}

export async function studioReady(): Promise<boolean> {
  const response = await fetch(`${STUDIO_URL}/rest/v1/studio_apps?select=slug&limit=1`, {
    headers: headers(),
  });
  return response.ok;
}

export async function fetchStudioApps(): Promise<StudioAppRow[]> {
  const response = await fetch(
    `${STUDIO_URL}/rest/v1/studio_apps?select=${APP_SELECT}&order=sort.asc`,
    { headers: headers() },
  );
  if (!response.ok) return [];
  const rows = (await response.json()) as StudioAppRow[];
  return rows;
}

export async function fetchStudioApp(slug: string): Promise<StudioAppRow | null> {
  const response = await fetch(
    `${STUDIO_URL}/rest/v1/studio_apps?slug=eq.${encodeURIComponent(slug)}&select=${APP_SELECT}&limit=1`,
    { headers: headers() },
  );
  if (!response.ok) return null;
  const rows = (await response.json()) as StudioAppRow[];
  return rows[0] ?? null;
}

export async function fetchPrivacyAll(): Promise<StudioPrivacyRow[]> {
  const response = await fetch(
    `${STUDIO_URL}/rest/v1/studio_privacy?select=slug,lang,title,updated_label,body`,
    { headers: headers() },
  );
  if (!response.ok) return [];
  return (await response.json()) as StudioPrivacyRow[];
}

export async function fetchPage(slug: string, lang: string): Promise<StudioPrivacyRow | null> {
  const rows = await fetchPrivacyAll();
  return rows.find((row) => row.slug === slug && row.lang === lang) ?? null;
}

export async function deletePrivacy(slug: string) {
  const session = await validSession();
  if (!session) throw new Error("Yenidən daxil olun.");
  const response = await fetch(
    `${STUDIO_URL}/rest/v1/studio_privacy?slug=eq.${encodeURIComponent(slug)}`,
    { method: "DELETE", headers: headers(session.access_token, "return=minimal") },
  );
  await parse(response);
}

export async function savePrivacy(row: StudioPrivacyRow) {
  const session = await validSession();
  if (!session) throw new Error("Yenidən daxil olun.");
  const response = await fetch(`${STUDIO_URL}/rest/v1/studio_privacy`, {
    method: "POST",
    headers: headers(session.access_token, "resolution=merge-duplicates,return=minimal"),
    body: JSON.stringify(row),
  });
  await parse(response);
}

export async function saveApp(row: StudioAppRow) {
  const session = await validSession();
  if (!session) throw new Error("Yenidən daxil olun.");
  const response = await fetch(`${STUDIO_URL}/rest/v1/studio_apps`, {
    method: "POST",
    headers: headers(session.access_token, "resolution=merge-duplicates,return=minimal"),
    body: JSON.stringify(row),
  });
  await parse(response);
}

export async function deleteApp(slug: string) {
  const session = await validSession();
  if (!session) throw new Error("Yenidən daxil olun.");
  const response = await fetch(
    `${STUDIO_URL}/rest/v1/studio_apps?slug=eq.${encodeURIComponent(slug)}`,
    { method: "DELETE", headers: headers(session.access_token, "return=minimal") },
  );
  await parse(response);
}

export function statusText(
  code: string | undefined,
  fallback: string | null,
  labels: { soon: string; building: string },
) {
  if (code === "ready") return null;
  if (code === "soon") return labels.soon;
  if (code === "building") return labels.building;
  return fallback;
}
