-- Shared database table (single JSON row holds all app data)
create table if not exists public.novaos_db (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.novaos_db (id, data)
values ('shared', '{}'::jsonb)
on conflict (id) do nothing;

-- Row Level Security: only signed-in (Google) users can read/write
alter table public.novaos_db enable row level security;

create policy "authenticated can read shared db"
on public.novaos_db for select
to authenticated
using (true);

create policy "authenticated can insert shared db"
on public.novaos_db for insert
to authenticated
with check (true);

create policy "authenticated can update shared db"
on public.novaos_db for update
to authenticated
using (true);

-- Enable realtime so every device gets instant updates
alter publication supabase_realtime add table public.novaos_db;
