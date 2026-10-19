"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";

function BrandMark() {
  return <span className="brand-lockup"><span className="brand-symbol" aria-hidden="true"><svg viewBox="0 0 38 38" fill="none"><path d="M8 29V9h6l10 13V9h6v20h-6L14 16v13H8Z" fill="currentColor" /><path d="M7 6h24" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" /></svg></span><span className="brand-type"><strong>NCHURE</strong><span>TECHNOLOGIES</span></span></span>;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return <header className="site-header"><div className="container nav-inner">
    <Link href="/" className="brand-link" aria-label="NCHURE Technologies home" onClick={() => setMenuOpen(false)}><BrandMark /></Link>
    <button type="button" className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    <nav id="primary-navigation" className={"primary-nav" + (menuOpen ? " is-open" : "")} aria-label="Main navigation">
      {siteConfig.nav.map((item) => {
        const isCurrent = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(item.href + "/");
        return <Link href={item.href} key={item.href} className={"nav-link" + (isCurrent ? " is-current" : "")} aria-current={isCurrent ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>;
      })}
      <Link href="/contact" className="button button-primary nav-cta" onClick={() => setMenuOpen(false)}>Discuss Your Business <ArrowUpRight size={16} aria-hidden="true" /></Link>
    </nav>
  </div></header>;
}