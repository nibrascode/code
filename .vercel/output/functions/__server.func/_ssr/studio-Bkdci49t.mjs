//#region node_modules/.nitro/vite/services/ssr/assets/studio-Bkdci49t.js
var STUDIO_URL = "https://qvwqqpxrvnrnwvyckwlo.supabase.co";
var STUDIO_KEY = "sb_publishable_IsY7gWUlP8l0_QgsQHXZ-w_2lHGEpc2";
var STUDIO_EMAIL = "nibrascode@gmail.com";
var SESSION_KEY = "nibras_studio_session";
var STUDIO_SQL = `create table if not exists public.studio_privacy (
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
var APP_SELECT = "slug,name,status,summary,play_url,huawei_url,appstore_url,galaxy_url,xiaomi_url,icon_url,sort,visible";
function storeLinks(row) {
	const fields = [
		["play_url", "Play Market"],
		["huawei_url", "Huawei Store"],
		["appstore_url", "App Store"],
		["galaxy_url", "Galaxy Store"],
		["xiaomi_url", "Xiaomi Store"]
	];
	if (!row) return [];
	return fields.flatMap(([key, name]) => {
		const href = (row[key] || "").trim();
		return href ? [{
			id: key,
			name,
			href
		}] : [];
	});
}
async function fetchHits(token) {
	const since = /* @__PURE__ */ new Date();
	since.setUTCDate(since.getUTCDate() - 62);
	const day = since.toISOString().slice(0, 10);
	const response = await fetch(`${STUDIO_URL}/rest/v1/studio_hits?select=day,kind,slug,total&day=gte.${day}&order=day.asc`, { headers: headers(token) });
	if (!response.ok) return null;
	return (await response.json()).map((row) => ({
		...row,
		day: String(row.day).slice(0, 10),
		total: Number(row.total) || 0
	}));
}
function headers(token, prefer) {
	return {
		apikey: STUDIO_KEY,
		Authorization: `Bearer ${token || "sb_publishable_IsY7gWUlP8l0_QgsQHXZ-w_2lHGEpc2"}`,
		"Content-Type": "application/json",
		...prefer ? { Prefer: prefer } : {}
	};
}
function readSession() {
	if (typeof localStorage === "undefined") return null;
	try {
		const raw = localStorage.getItem(SESSION_KEY);
		if (!raw) return null;
		const session = JSON.parse(raw);
		if (!session.access_token || !session.refresh_token) return null;
		return session;
	} catch {
		return null;
	}
}
function writeSession(session) {
	if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
	else localStorage.removeItem(SESSION_KEY);
}
async function refresh(session) {
	const response = await fetch(`${STUDIO_URL}/auth/v1/token?grant_type=refresh_token`, {
		method: "POST",
		headers: headers(),
		body: JSON.stringify({ refresh_token: session.refresh_token })
	});
	const data = await response.json();
	if (!response.ok || !data.access_token || !data.refresh_token) {
		writeSession(null);
		throw new Error("Giriş vaxtı bitib. Yenidən daxil olun.");
	}
	const next = {
		access_token: data.access_token,
		refresh_token: data.refresh_token,
		expires_at: Date.now() + (data.expires_in ?? 3600) * 1e3,
		email: data.user?.email || session.email
	};
	writeSession(next);
	return next;
}
async function validSession() {
	const session = readSession();
	if (!session) return null;
	if (session.expires_at > Date.now() + 3e4) return session;
	try {
		return await refresh(session);
	} catch {
		return null;
	}
}
async function signIn(email, password) {
	const response = await fetch(`${STUDIO_URL}/auth/v1/token?grant_type=password`, {
		method: "POST",
		headers: headers(),
		body: JSON.stringify({
			email,
			password
		})
	});
	const data = await response.json();
	if (!response.ok || !data.access_token || !data.refresh_token) throw new Error("E-poçt və ya şifrə yanlışdır.");
	const emailOut = data.user?.email || email;
	if (emailOut.toLowerCase() !== "nibrascode@gmail.com") throw new Error("Bu panel yalnız Nibras Code hesabı üçündür.");
	const session = {
		access_token: data.access_token,
		refresh_token: data.refresh_token,
		expires_at: Date.now() + (data.expires_in ?? 3600) * 1e3,
		email: emailOut
	};
	writeSession(session);
	return session;
}
async function parse(response) {
	const text = await response.text();
	const data = text ? JSON.parse(text) : {};
	if (!response.ok) {
		const message = data.message || "Saxlanmadı.";
		if (data.code === "PGRST205" || /studio_/.test(message)) throw new Error("Cədvəl hələ yoxdur. Aşağıdakı SQL-i bir dəfə işə salın.");
		throw new Error(message);
	}
	return data;
}
async function studioReady() {
	return (await fetch(`${STUDIO_URL}/rest/v1/studio_apps?select=slug&limit=1`, { headers: headers() })).ok;
}
async function fetchStudioApps() {
	const response = await fetch(`${STUDIO_URL}/rest/v1/studio_apps?select=${APP_SELECT}&order=sort.asc`, { headers: headers() });
	if (!response.ok) return [];
	return await response.json();
}
async function fetchStudioApp(slug) {
	const response = await fetch(`${STUDIO_URL}/rest/v1/studio_apps?slug=eq.${encodeURIComponent(slug)}&select=${APP_SELECT}&limit=1`, { headers: headers() });
	if (!response.ok) return null;
	return (await response.json())[0] ?? null;
}
async function fetchPrivacyAll() {
	const response = await fetch(`${STUDIO_URL}/rest/v1/studio_privacy?select=slug,lang,title,updated_label,body`, { headers: headers() });
	if (!response.ok) return [];
	return await response.json();
}
async function fetchPage(slug, lang) {
	return (await fetchPrivacyAll()).find((row) => row.slug === slug && row.lang === lang) ?? null;
}
async function savePrivacy(row) {
	const session = await validSession();
	if (!session) throw new Error("Yenidən daxil olun.");
	await parse(await fetch(`${STUDIO_URL}/rest/v1/studio_privacy`, {
		method: "POST",
		headers: headers(session.access_token, "resolution=merge-duplicates,return=minimal"),
		body: JSON.stringify(row)
	}));
}
async function saveApp(row) {
	const session = await validSession();
	if (!session) throw new Error("Yenidən daxil olun.");
	await parse(await fetch(`${STUDIO_URL}/rest/v1/studio_apps`, {
		method: "POST",
		headers: headers(session.access_token, "resolution=merge-duplicates,return=minimal"),
		body: JSON.stringify(row)
	}));
}
async function deleteApp(slug) {
	const session = await validSession();
	if (!session) throw new Error("Yenidən daxil olun.");
	await parse(await fetch(`${STUDIO_URL}/rest/v1/studio_apps?slug=eq.${encodeURIComponent(slug)}`, {
		method: "DELETE",
		headers: headers(session.access_token, "return=minimal")
	}));
}
function statusText(code, fallback, labels) {
	if (code === "ready") return null;
	if (code === "soon") return labels.soon;
	if (code === "building") return labels.building;
	return fallback;
}
//#endregion
export { validSession as _, deleteApp as a, fetchPrivacyAll as c, saveApp as d, savePrivacy as f, studioReady as g, storeLinks as h, STUDIO_URL as i, fetchStudioApp as l, statusText as m, STUDIO_KEY as n, fetchHits as o, signIn as p, STUDIO_SQL as r, fetchPage as s, STUDIO_EMAIL as t, fetchStudioApps as u, writeSession as v };
