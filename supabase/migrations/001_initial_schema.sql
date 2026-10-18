-- Industrial Attendance Management System initial schema.
-- Review organization membership and policies before production use.

create extension if not exists pgcrypto;

create table if not exists public.companies (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  timezone text not null default 'Asia/Kolkata',
  created_at timestamptz not null default now()
);

create table if not exists public.employees (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  employee_code text not null,
  full_name text not null,
  email text,
  phone text,
  department text,
  designation text,
  employment_status text not null default 'active'
    check (employment_status in ('active', 'inactive', 'on_leave', 'terminated')),
  auth_user_id uuid unique references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(company_id, employee_code)
);

create table if not exists public.shifts (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  name text not null,
  start_time time not null,
  end_time time not null,
  grace_minutes integer not null default 0 check (grace_minutes between 0 and 240),
  is_overnight boolean not null default false,
  created_at timestamptz not null default now(),
  unique(company_id, name)
);

create table if not exists public.attendance_punches (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  employee_id uuid not null references public.employees(id) on delete cascade,
  shift_id uuid references public.shifts(id) on delete set null,
  punched_at timestamptz not null default now(),
  punch_type text not null check (punch_type in ('in', 'out', 'break_start', 'break_end')),
  source text not null default 'web'
    constraint attendance_punches_source_check
    check (source in ('manual', 'web', 'mobile', 'face', 'device', 'import')),
  verification_status text not null default 'not_required'
    check (verification_status in ('not_required', 'pending', 'verified', 'failed', 'review')),
  device_id text,
  location_latitude double precision,
  location_longitude double precision,
  note text,
  recorded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  check ((location_latitude is null and location_longitude is null) or
         (location_latitude between -90 and 90 and location_longitude between -180 and 180))
);

create table if not exists public.leave_requests (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies(id) on delete cascade,
  employee_id uuid not null references public.employees(id) on delete cascade,
  leave_type text not null,
  start_date date not null,
  end_date date not null,
  reason text,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'cancelled')),
  reviewed_by uuid references auth.users(id) on delete set null,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  check (end_date >= start_date)
);

create index if not exists employees_company_idx on public.employees(company_id);
create index if not exists punches_company_punched_at_idx on public.attendance_punches(company_id, punched_at desc);
create index if not exists punches_employee_punched_at_idx on public.attendance_punches(employee_id, punched_at desc);
create index if not exists shifts_company_idx on public.shifts(company_id);
create index if not exists leave_requests_company_dates_idx on public.leave_requests(company_id, start_date, end_date);

-- RLS is enabled but no permissive client policies are added yet.
-- This intentionally blocks client access until company memberships, roles,
-- and tenant-aware policies have been implemented and reviewed.
alter table public.companies enable row level security;
alter table public.employees enable row level security;
alter table public.shifts enable row level security;
alter table public.attendance_punches enable row level security;
alter table public.leave_requests enable row level security;

-- Keep service-role credentials server-side only. Do not expose them in NEXT_PUBLIC_ variables.
