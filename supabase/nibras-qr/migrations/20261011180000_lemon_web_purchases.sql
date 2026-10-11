-- Nibras QR web payments (Lemon Squeezy) merged into public.entitlements.
-- RevenueCat writers (revenuecat-webhook / verify-entitlement via saveProState)
-- keep upserting entitlements unchanged; a trigger keeps their raw state in
-- rc_is_pro / rc_expires_at and merges in active Lemon purchases, so
-- entitlements.is_pro / expires_at = "Pro from RevenueCat OR Lemon".

-- ------------------------------------------------------------ web_purchases
create table if not exists public.web_purchases (
  order_id text primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  provider text not null default 'lemon',
  variant_id text not null,
  plan text not null check (plan in ('1y', 'lifetime')),
  status text not null check (status in ('paid', 'refunded')),
  test_mode boolean not null default false,
  purchased_at timestamptz not null,
  expires_at timestamptz,
  email text,
  total_usd numeric,
  updated_at timestamptz not null default now()
);
create index if not exists web_purchases_user_idx on public.web_purchases (user_id);

alter table public.web_purchases enable row level security;
drop policy if exists "web_purchases: read own" on public.web_purchases;
create policy "web_purchases: read own" on public.web_purchases
  for select to authenticated using ((select auth.uid()) = user_id);
revoke all on public.web_purchases from anon, authenticated;
grant select on public.web_purchases to authenticated;

-- Raw Lemon webhook log (service role only).
create table if not exists public.lemon_events (
  id bigint generated always as identity primary key,
  event_name text,
  order_id text,
  received_at timestamptz not null default now(),
  payload jsonb not null
);
alter table public.lemon_events enable row level security;
revoke all on public.lemon_events from anon, authenticated;

-- --------------------------------------------- entitlements: RC raw columns
alter table public.entitlements
  add column if not exists rc_is_pro boolean not null default false,
  add column if not exists rc_expires_at timestamptz;

update public.entitlements
   set rc_is_pro = is_pro, rc_expires_at = expires_at
 where source <> 'lemon' and rc_is_pro = false and is_pro;

-- Active Lemon state for a user: (active, lifetime, latest expiry).
create or replace function public.lemon_state(uid uuid, out active boolean, out lifetime boolean, out expires_at timestamptz)
language sql
stable
security definer
set search_path = ''
as $$
  select
    coalesce(bool_or(p.expires_at is null or p.expires_at > now()), false),
    coalesce(bool_or(p.expires_at is null), false),
    max(p.expires_at)
  from public.web_purchases p
  where p.user_id = uid and p.status = 'paid';
$$;
revoke all on function public.lemon_state(uuid) from public, anon, authenticated;

create or replace function public.entitlements_merge()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  l record;
  rc_active boolean;
begin
  -- Writers other than refresh_entitlement() carry RevenueCat state.
  if coalesce(current_setting('app.lemon_refresh', true), '') <> '1' then
    new.rc_is_pro := new.is_pro;
    new.rc_expires_at := new.expires_at;
  end if;

  select * into l from public.lemon_state(new.user_id);
  rc_active := new.rc_is_pro and (new.rc_expires_at is null or new.rc_expires_at > now());

  if l.active then
    new.is_pro := true;
    if l.lifetime or (rc_active and new.rc_expires_at is null) then
      new.expires_at := null;
    elsif rc_active then
      new.expires_at := greatest(new.rc_expires_at, l.expires_at);
    else
      new.expires_at := l.expires_at;
    end if;
    if not rc_active then
      new.source := 'lemon';
      new.store := 'lemon';
    end if;
  else
    new.is_pro := new.rc_is_pro;
    new.expires_at := new.rc_expires_at;
    if new.source = 'lemon' then new.source := 'webhook'; end if;
    if new.store = 'lemon' then new.store := null; end if;
  end if;
  return new;
end;
$$;

drop trigger if exists entitlements_merge on public.entitlements;
create trigger entitlements_merge
  before insert or update on public.entitlements
  for each row execute function public.entitlements_merge();

-- Recompute a user's merged entitlement after a Lemon purchase/refund.
create or replace function public.refresh_entitlement(uid uuid)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform set_config('app.lemon_refresh', '1', true);
  insert into public.entitlements (user_id, is_pro, expires_at, source, last_event_type)
  values (uid, false, null, 'lemon', 'lemon_refresh')
  on conflict (user_id) do update
    set updated_at = now(), last_event_type = 'lemon_refresh';
  perform set_config('app.lemon_refresh', '', true);
end;
$$;
revoke all on function public.refresh_entitlement(uuid) from public, anon, authenticated;
grant execute on function public.refresh_entitlement(uuid) to service_role;

-- Allow the Lemon secrets through the Vault reader.
create or replace function public.app_secret(secret_name text)
returns text
language sql
stable
security definer
set search_path = ''
as $$
  select ds.decrypted_secret
  from vault.decrypted_secrets ds
  where ds.name = secret_name
    and secret_name in ('revenuecat_webhook_auth', 'revenuecat_secret_api_key', 'lemonsqueezy_api_key', 'lemon_webhook_secret')
  limit 1;
$$;
revoke all on function public.app_secret(text) from public, anon, authenticated;
grant execute on function public.app_secret(text) to service_role;
