# Project plan

## Phase 1 — Secure foundation
- [ ] Create a Supabase project and review the initial migration.
- [ ] Implement authentication, logout, password reset, and server-side permission checks.
- [ ] Add company membership and role mapping for administrator, HR, supervisor, and employee users.
- [ ] Implement tenant-aware Row Level Security (RLS) policies and automated authorization tests.
- [ ] Add audit events for privileged actions and attendance corrections.

## Phase 2 — Workforce and attendance
- [ ] Employee CRUD, departments, shift assignment, and validated bulk import.
- [ ] Punch-in/out workflows, duplicate-event handling, break handling, and exception review.
- [ ] Define a server-owned accepted source enum aligned with the database constraint.
- [ ] Support overnight shifts, facility timezone, grace periods, holidays, overtime, and corrections.
- [ ] Add CSV exports and report filters backed by authorized database queries.

## Phase 3 — Device and verification integrations
- [ ] Design a signed or otherwise authenticated ingestion endpoint for approved attendance devices.
- [ ] Validate device identity, timestamp drift, idempotency, replay protection, and sync failures.
- [ ] Treat facial verification as a separate integration requiring consent, retention limits, access controls, and a fallback process.
- [ ] Do not store raw face images or biometric templates without an approved privacy and security design.

## Phase 4 — Production readiness
- [ ] Test responsive behavior, keyboard navigation, and accessible status indicators.
- [ ] Add unit, integration, and end-to-end tests.
- [ ] Configure monitoring, backups, incident response, and a privacy/retention policy.
- [ ] Validate employment rules and reports with the organization before operational use.
- [ ] Deploy to Vercel only after environment variables, authentication, RLS, and build checks are verified.

## Current implementation status

The dashboard is a **demo UI with fictional sample records**. The search field filters the sample attendance table and the export button downloads a sample CSV. Authentication, database writes, real attendance decisions, biometric verification, hardware integration, payroll, and production analytics are not implemented.
