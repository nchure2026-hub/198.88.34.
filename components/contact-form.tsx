"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { industries, solutions } from "@/lib/content";

type FormStatus = { kind:"success" | "error"; message:string } | null;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus(null);
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify(payload) });
      const result = (await response.json()) as { message?:string };
      if (!response.ok) {
        setStatus({ kind:"error", message:result.message || "Your enquiry could not be sent. Please use the email or WhatsApp details on this page." });
        return;
      }
      setStatus({ kind:"success", message:result.message || "Your enquiry was sent." });
      form.reset();
    } catch {
      setStatus({ kind:"error", message:"We could not reach the enquiry service. Please email us directly or use WhatsApp." });
    } finally { setIsSubmitting(false); }
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-grid">
      <div className="form-field"><label htmlFor="name">Your name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" minLength={2} maxLength={100} required placeholder="Name" /></div>
      <div className="form-field"><label htmlFor="businessName">Business name</label><input id="businessName" name="businessName" autoComplete="organization" maxLength={120} placeholder="Company or organization" /></div>
      <div className="form-field"><label htmlFor="email">Work email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" autoComplete="email" maxLength={254} required placeholder="you@company.com" /></div>
      <div className="form-field"><label htmlFor="phone">Phone number <span aria-hidden="true">*</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" minLength={7} maxLength={25} required placeholder="+91 ..." /></div>
      <div className="form-field"><label htmlFor="industry">Industry <span aria-hidden="true">*</span></label><select id="industry" name="industry" required defaultValue=""><option value="" disabled>Select an industry</option>{industries.map((industry) => <option key={industry.slug} value={industry.name}>{industry.name}</option>)}<option value="Other">Other</option></select></div>
      <div className="form-field"><label htmlFor="service">What would you like to discuss? <span aria-hidden="true">*</span></label><select id="service" name="service" required defaultValue=""><option value="" disabled>Select a capability</option>{solutions.map((solution) => <option key={solution.slug} value={solution.title}>{solution.title}</option>)}<option value="Not sure yet">Not sure yet</option></select></div>
      <div className="form-field form-field-wide"><label htmlFor="message">Briefly describe the business problem <span aria-hidden="true">*</span></label><textarea id="message" name="message" minLength={10} maxLength={3000} required rows={5} placeholder="What is difficult today, and what would a better process look like?" /><p className="field-hint">Please do not include passwords, payment details, or sensitive personal information.</p></div>
    </div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="form-submit-row"><p>Your details are used to respond to this enquiry. See our <a href="/privacy">Privacy Policy</a>.</p><button className="button button-primary button-large" type="submit" disabled={isSubmitting}>{isSubmitting ? <><LoaderCircle className="spin" size={17} /> Sending…</> : <>Send enquiry <ArrowUpRight size={17} /></>}</button></div>
    {status && <div className={"form-status " + status.kind} role={status.kind === "error" ? "alert" : "status"} aria-live="polite">{status.kind === "success" && <CheckCircle2 size={18} aria-hidden="true" />}<span>{status.message}</span></div>}
  </form>;
}