-- Nibras AI söhbətləri (24 saat saxlanılır).
-- Supabase → SQL Editor-də bütövlükdə yapışdırıb "Run" basın. Təkrar işlətmək zərərsizdir.

create table if not exists public.nibras_chats (
  device_id  text        not null,
  id         text        not null,
  title      text        not null default '',
  messages   jsonb       not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (device_id, id)
);

create index if not exists nibras_chats_device_updated_idx
  on public.nibras_chats (device_id, updated_at desc);
create index if not exists nibras_chats_updated_idx
  on public.nibras_chats (updated_at);

-- Sətir təhlükəsizliyi AÇIQDIR və heç bir açıq siyasət (policy) YOXDUR:
-- brauzerdən (anon/authenticated açarla) heç nə oxunmur, yalnız serverdəki service_role açarı çatır.
alter table public.nibras_chats enable row level security;
revoke all on table public.nibras_chats from anon, authenticated;

-- İstəyə bağlı: 24 saatdan köhnə sətirləri hər saat avtomatik silmək (Database → Extensions → pg_cron açın).
-- API köhnələri özü də gizlədir və hər yazıda silir, ona görə bu mütləq deyil.
-- select cron.schedule('nibras-chats-cleanup', '17 * * * *',
--   $$delete from public.nibras_chats where updated_at < now() - interval '24 hours'$$);
