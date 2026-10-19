import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { solutions } from "@/lib/content";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="container footer-top">
      <div className="footer-brand-col">
        <Link href="/" className="brand-link footer-brand" aria-label="NCHURE Technologies home"><span className="brand-lockup"><span className="brand-symbol" aria-hidden="true"><svg viewBox="0 0 38 38" fill="none"><path d="M8 29V9h6l10 13V9h6v20h-6L14 16v13H8Z" fill="currentColor" /><path d="M7 6h24" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" /></svg></span><span className="brand-type"><strong>NCHURE</strong><span>TECHNOLOGIES</span></span></span></Link>
        <p>Connected business systems, built around how your business actually works.</p><Link href="/contact" className="footer-text-link">Start a conversation <ArrowUpRight size={15} /></Link>
      </div>
      <div className="footer-links-col"><h2>Solutions</h2>{solutions.slice(0,5).map((solution) => <Link key={solution.slug} href={"/solutions/" + solution.slug}>{solution.title}</Link>)}<Link href="/solutions" className="footer-all-link">All solutions <ArrowUpRight size={14} /></Link></div>
      <div className="footer-links-col"><h2>Explore</h2><Link href="/industries">Industries</Link><Link href="/products">Products</Link><Link href="/projects">Projects & concepts</Link><Link href="/about">About NCHURE</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of service</Link></div>
      <div className="footer-contact-col"><h2>Contact</h2><a href={siteConfig.phoneHref}><Phone size={16} aria-hidden="true" /> {siteConfig.phone}</a><a href={"mailto:" + siteConfig.email}><Mail size={16} aria-hidden="true" /> {siteConfig.email}</a><a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a><p className="footer-contact-note">Share the workflow you want to improve. We’ll discuss a practical next step.</p></div>
    </div>
    <div className="container footer-bottom"><p>© {new Date().getFullYear()} NCHURE Technologies. All rights reserved.</p><p>Business infrastructure, thoughtfully connected.</p></div>
  </footer>;
}