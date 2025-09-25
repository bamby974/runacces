-- RUN'Accès initial schema
-- TODO: compléter les colonnes en fonction des besoins métiers (horaires, contacts, etc.)

create extension if not exists "uuid-ossp";

create table if not exists public.places (
    id uuid primary key default uuid_generate_v4(),
    name text not null,
    slug text unique,
    description text,
    category text,
    subcategory text,
    address text,
    latitude double precision,
    longitude double precision,
    accessibility_features text[] default '{}',
    created_at timestamptz not null default timezone('utc'::text, now()),
    updated_at timestamptz not null default timezone('utc'::text, now())
);

create index if not exists places_category_idx on public.places using btree (category, subcategory);
create index if not exists places_created_at_idx on public.places using btree (created_at);
create index if not exists places_accessibility_features_gin on public.places using gin (accessibility_features);

comment on table public.places is 'Lieux référencés dans RUN\'Accès';
comment on column public.places.accessibility_features is 'Liste de caractéristiques d\'accessibilité (ex: rampe, ascenseur, sanitaires adaptés)';
