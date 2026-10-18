# NCHURE Technologies website

A responsive Next.js website for NCHURE Technologies, positioned around connected business systems, operations, automation, and practical AI.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS for utility support and a custom CSS design system
- Lucide icons
- Server-side contact form endpoint with validation and optional Resend email delivery

## Local development
1. Install Node.js 20.9 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Run `npm run dev` and open http://localhost:3000.

The public site can be previewed without email credentials. The enquiry form intentionally reports that email delivery is not configured until `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` are set; it never claims to send a message when delivery is unavailable.

## Contact form configuration
Configure these as server-only environment variables in local development and your deployment:
- `RESEND_API_KEY`: API key from Resend.
- `CONTACT_TO_EMAIL`: inbox that should receive enquiries.
- `CONTACT_FROM_EMAIL`: a sender identity verified with your email provider.
- `NEXT_PUBLIC_SITE_URL`: canonical URL, e.g. `https://nchure.tech`.

Never prefix secret values with `NEXT_PUBLIC_`. The form uses server-side validation, an anti-spam honeypot, same-origin checks, and best-effort in-memory rate limiting. For production traffic, add a durable rate limiter and Cloudflare Turnstile or equivalent bot verification.

## Deploy to Vercel
1. Import this repository into Vercel.
2. Keep the framework preset as Next.js.
3. Add the environment variables above in Project Settings → Environment Variables.
4. Deploy, then configure `nchure.tech` in Vercel and update `NEXT_PUBLIC_SITE_URL`.
5. Test the enquiry flow end-to-end with a real submission and confirm receipt at `CONTACT_TO_EMAIL`.

## Truthful feature status
- **Implemented in this repository:** responsive marketing site, navigation, solution and industry detail templates, product-preview screens, demonstration-project labels, page metadata, robots/sitemap routes, and contact endpoint validation.
- **Preview only:** NCHURE Lead Management interface shown on the site is an illustrative product preview. It is not connected to a CRM database, real leads, or channel integrations in this marketing website.
- **Requires configuration/testing:** live email delivery and domain deployment.
- **Not claimed:** customer counts, testimonials, case-study metrics, active third-party integrations, or completed proprietary product capabilities.

## Before launch
- Configure and test the email sender with real credentials.
- Add durable rate limiting and a bot-verification provider for production.
- Review legal pages against actual business operations and applicable law.
- Run `npm run lint` and `npm run build`.
- Test keyboard navigation, mobile layouts, links, and the production contact workflow.
