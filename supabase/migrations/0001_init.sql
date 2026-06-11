-- Schéma initial (généré par l'assistant)
create table public.profiles (
  id uuid primary key references auth.users,
  email text,
  full_name text,
  stripe_customer_id text
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles,
  total_cents integer,
  status text default 'pending'
);

-- ⚠️ RLS jamais activé sur ces tables : lecture/écriture ouvertes via l'API publique.

-- ⚠️ Et même quand une policy existe, elle est ouverte à tous :
create policy "public read" on public.profiles for select using ( true );
