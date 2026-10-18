import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { solutions } from "@/lib/content";

export const metadata: Metadata = { title:"Business Technology Solutions", description:"Explore NCHURE Technologies capabilities across business systems, workflow automation, customer management, finance operations, marketing infrastructure, security, and AI." };

export default function SolutionsPage() {
  return <><section className="page-intro"><div className="container"><span className="eyebrow">Solutions / Connected capabilities</span><h1>One business. Connected systems.</h1><p>Explore the capability areas NCHURE can bring together. Every engagement begins with your process and the problem to solve—not a fixed package of features.</p><div className="page-intro-meta"><span><CheckCircle2 size={15}/> Scope designed around your workflow</span><span><CheckCircle2 size={15}/> Clear dependencies and approach</span></div></div></section>
    <section className="section"><div className="container"><div className="solution-grid">{solutions.map((solution)=><Link href={"/solutions/"+solution.slug} className="solution-card" key={solution.slug}><div className="solution-card-top"><span className="solution-card-icon"><span style={{fontSize:17,fontWeight:800}}>{solution.number}</span></span><span className="solution-card-number">CAPABILITY</span></div><h3>{solution.title}</h3><p>{solution.intro}</p><div className="solution-card-link"><span>Details & approach</span><ArrowUpRight size={15}/></div></Link>)}</div></div></section>
    <section className="cta-band"><div className="container cta-band-inner"><div className="cta-band-copy"><span className="eyebrow">Start with your workflow</span><h2>Not sure which capability fits?</h2><p>Share what is happening today and the result you need. We can help clarify the appropriate scope and next step.</p></div><Link href="/contact" className="button button-light button-large">Discuss your business <ArrowUpRight size={16}/></Link></div></section></>;
}