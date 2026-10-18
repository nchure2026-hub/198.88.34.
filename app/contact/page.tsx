import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata:Metadata={title:"Contact NCHURE Technologies",description:"Discuss your business workflow, customer management, automation, operations, website, or AI requirements with NCHURE Technologies."};
export default function ContactPage(){return <>
  <section className="page-intro"><div className="container"><span className="eyebrow">Contact / Start a conversation</span><h1>Let's solve a real business problem.</h1><p>Tell us where your business loses time, visibility, or opportunities. We'll explore a practical technology solution around your needs.</p></div></section>
  <section className="section"><div className="container contact-layout"><aside className="contact-aside"><span className="eyebrow">Talk to NCHURE</span><h2>Start with the way work happens today.</h2><p>You do not need a finished specification. A short description of the current process, the tools involved, and the difficulty you want to remove is a useful starting point.</p>
    <div className="contact-method"><span className="contact-method-icon"><Phone size={18}/></span><div><small>Phone</small><a href={siteConfig.phoneHref}>{siteConfig.phone}</a><p>Call or request a time to discuss.</p></div></div>
    <div className="contact-method"><span className="contact-method-icon"><Mail size={18}/></span><div><small>Email</small><a href={"mailto:"+siteConfig.email}>{siteConfig.email}</a><p>Share context or supporting details.</p></div></div>
    <div className="contact-method"><span className="contact-method-icon"><MessageCircle size={18}/></span><div><small>WhatsApp</small><a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Message NCHURE <ArrowUpRight size={13}/></a><p>Start a conversation on WhatsApp.</p></div></div>
  </aside><div className="contact-form-shell"><div className="form-heading"><h2>Tell us what you need.</h2><p>Fields marked with an asterisk are required.</p></div><ContactForm/></div></div></section>
</>;}