//#region node_modules/.nitro/vite/services/ssr/assets/studio-Dz15PtOL.js
var STUDIO_URL = "https://qvwqqpxrvnrnwvyckwlo.supabase.co";
var STUDIO_KEY = "sb_publishable_IsY7gWUlP8l0_QgsQHXZ-w_2lHGEpc2";
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
function lightIcon(row) {
	if (row.icon_url === "/apps/nibras-arabic.jpg" || row.icon_url === "/apps/nibras-arabic.webp") return {
		...row,
		icon_url: "/apps/nibras-arabic-v2.webp"
	};
	return row;
}
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
var StudioLoginError = class extends Error {
	failure;
	constructor(failure) {
		super(failure.kind);
		this.failure = failure;
	}
};
function headers(token, prefer) {
	return {
		apikey: STUDIO_KEY,
		Authorization: `Bearer ${token || "sb_publishable_IsY7gWUlP8l0_QgsQHXZ-w_2lHGEpc2"}`,
		"Content-Type": "application/json",
		...prefer ? { Prefer: prefer } : {}
	};
}
var memory = null;
var pending = null;
var listeners = /* @__PURE__ */ new Set();
function onSessionChange(fn) {
	listeners.add(fn);
	return () => {
		listeners.delete(fn);
	};
}
function writeSession(session) {
	memory = session;
	if (typeof localStorage !== "undefined") localStorage.removeItem(SESSION_KEY);
	listeners.forEach((fn) => fn(session));
}
async function adminPost(op, body, token) {
	return fetch(`/api/admin?op=${op}`, {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
			"x-nxs": "1",
			...token ? { Authorization: `Bearer ${token}` } : {}
		},
		body: JSON.stringify(body ?? {})
	});
}
async function refresh() {
	try {
		const response = await adminPost("refresh");
		if (!response.ok) {
			writeSession(null);
			return null;
		}
		const data = await response.json();
		if (!data.session?.access_token) return null;
		writeSession(data.session);
		return data.session;
	} catch {
		return memory;
	}
}
async function validSession() {
	if (memory && memory.expires_at > Date.now() + 3e4) return memory;
	if (!pending) pending = refresh().finally(() => pending = null);
	return pending;
}
async function signIn(email, password) {
	let response;
	try {
		response = await adminPost("login", {
			email,
			password
		});
	} catch {
		throw new StudioLoginError({ kind: "network" });
	}
	const data = await response.json().catch(() => ({}));
	if (response.status === 429) throw new StudioLoginError({
		kind: "locked",
		retryAfter: Number(data.retryAfter) || 900
	});
	if (!response.ok || !data.session) {
		if (response.status === 401) throw new StudioLoginError({
			kind: "wrong",
			left: Number(data.left ?? 0)
		});
		throw new StudioLoginError({ kind: "network" });
	}
	writeSession(data.session);
	return data.session;
}
async function signOut() {
	const token = memory?.access_token;
	try {
		await adminPost("logout", {}, token);
	} finally {
		writeSession(null);
	}
}
async function fetchOverview(days = 30) {
	const session = await validSession();
	if (!session) throw new Error("auth");
	const response = await fetch(`/api/admin?op=overview&days=${days}`, {
		headers: { Authorization: `Bearer ${session.access_token}` },
		credentials: "same-origin"
	});
	if (!response.ok) throw new Error(String(response.status));
	return await response.json();
}
async function parse(response) {
	const text = await response.text();
	const data = text ? JSON.parse(text) : {};
	if (!response.ok) {
		const message = data.message || "save";
		if (data.code === "PGRST205" || /studio_/.test(message)) throw new Error("table");
		throw new Error(message);
	}
	return data;
}
async function studioReady() {
	return (await fetch(`${STUDIO_URL}/rest/v1/studio_apps?select=slug&limit=1`, { headers: headers() })).ok;
}
async function fetchStudioApps(signal) {
	const response = await fetch(`${STUDIO_URL}/rest/v1/studio_apps?select=${APP_SELECT}&order=sort.asc`, {
		headers: headers(),
		signal
	});
	if (!response.ok) return [];
	return (await response.json()).map(lightIcon);
}
async function fetchStudioApp(slug) {
	const response = await fetch(`${STUDIO_URL}/rest/v1/studio_apps?slug=eq.${encodeURIComponent(slug)}&select=${APP_SELECT}&limit=1`, { headers: headers() });
	if (!response.ok) return null;
	const rows = await response.json();
	return rows[0] ? lightIcon(rows[0]) : null;
}
async function fetchPrivacyAll() {
	const response = await fetch(`${STUDIO_URL}/rest/v1/studio_privacy?select=slug,lang,title,updated_label,body`, { headers: headers() });
	if (!response.ok) return [];
	return await response.json();
}
async function deletePrivacy(slug) {
	const session = await validSession();
	if (!session) throw new Error("auth");
	await parse(await fetch(`${STUDIO_URL}/rest/v1/studio_privacy?slug=eq.${encodeURIComponent(slug)}`, {
		method: "DELETE",
		headers: headers(session.access_token, "return=minimal")
	}));
}
async function savePrivacy(row) {
	const session = await validSession();
	if (!session) throw new Error("auth");
	await parse(await fetch(`${STUDIO_URL}/rest/v1/studio_privacy`, {
		method: "POST",
		headers: headers(session.access_token, "resolution=merge-duplicates,return=minimal"),
		body: JSON.stringify(row)
	}));
}
async function saveApp(row) {
	const session = await validSession();
	if (!session) throw new Error("auth");
	await parse(await fetch(`${STUDIO_URL}/rest/v1/studio_apps`, {
		method: "POST",
		headers: headers(session.access_token, "resolution=merge-duplicates,return=minimal"),
		body: JSON.stringify(row)
	}));
}
async function deleteApp(slug) {
	const session = await validSession();
	if (!session) throw new Error("auth");
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
async function savePrivacyMany(rows) {
	if (!rows.length) return;
	const session = await validSession();
	if (!session) throw new Error("auth");
	await parse(await fetch(`${STUDIO_URL}/rest/v1/studio_privacy`, {
		method: "POST",
		headers: headers(session.access_token, "resolution=merge-duplicates,return=minimal"),
		body: JSON.stringify(rows)
	}));
}
async function saveAppsMany(rows) {
	if (!rows.length) return;
	const session = await validSession();
	if (!session) throw new Error("auth");
	await parse(await fetch(`${STUDIO_URL}/rest/v1/studio_apps`, {
		method: "POST",
		headers: headers(session.access_token, "resolution=merge-duplicates,return=minimal"),
		body: JSON.stringify(rows)
	}));
}
async function deletePrivacyRow(slug, lang) {
	const session = await validSession();
	if (!session) throw new Error("auth");
	await parse(await fetch(`${STUDIO_URL}/rest/v1/studio_privacy?slug=eq.${encodeURIComponent(slug)}&lang=eq.${encodeURIComponent(lang)}`, {
		method: "DELETE",
		headers: headers(session.access_token, "return=minimal")
	}));
}
//#endregion
export { validSession as C, studioReady as S, savePrivacyMany as _, deleteApp as a, statusText as b, fetchHits as c, fetchStudioApp as d, fetchStudioApps as f, savePrivacy as g, saveAppsMany as h, StudioLoginError as i, fetchOverview as l, saveApp as m, STUDIO_SQL as n, deletePrivacy as o, onSessionChange as p, STUDIO_URL as r, deletePrivacyRow as s, STUDIO_KEY as t, fetchPrivacyAll as u, signIn as v, storeLinks as x, signOut as y };
