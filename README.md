# Industrial Attendance Management System

A responsive starter for industrial workforce attendance management by NCHURE.

**Repository:** `nchure2026-hub/198.88.34.`  
**Status:** Initial scaffold — demo interface only  
**Stack:** Next.js App Router, TypeScript, Supabase, responsive CSS

## Intended scope

- Workforce directory and department/shift management
- Attendance events with source and verification status
- Daily attendance summaries and exception review
- Role-based access for administrators, HR, supervisors, and employees
- Mobile-friendly dashboards for desktop, tablet, and phone
- Future integration points for face verification and supported attendance devices

## Important implementation status

This repository starts as a scaffold. Demo screens and sample records are not a production attendance system. Login, role enforcement, database writes, face verification, device integrations, payroll, notifications, and production reporting must be implemented and tested before operational use.

Do not use the demo UI to make payroll, disciplinary, or employment decisions.

## Getting started

1. Install Node.js (LTS) and npm.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill in the public Supabase project URL and anon/publishable key.
4. Run `npm run dev` and open `http://localhost:3000`.

The UI can be reviewed without Supabase credentials, but persistent database features will remain unavailable until implemented.

## Supabase setup

Review `supabase/migrations/001_initial_schema.sql` before running it in a new Supabase project. Verify all Row Level Security policies and tenant boundaries. Never expose a service-role key in browser code or commit secrets to Git.

## Planned milestones

See `docs/PROJECT_PLAN.md` for security, attendance, device integration, testing, and deployment milestones.

## License

No open-source license has been selected yet. Until one is added, all rights are reserved by default.
