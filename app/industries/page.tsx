import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { industries } from "@/lib/content";

export const metadata:Metadata={title:"Industry Solutions",description:"Explore business workflow and technology considerations for retail, distribution, healthcare, education, construction, professional services, and SMEs."};
export default function IndustriesPage(){return <>
  <section className="page-intro"><div className="container"><span className="eyebrow">Industries / Practical context</span><h1>Different industries. Real operational needs.</h1><p>Useful systems start by understanding the daily work, approvals, records, customer expectations, and constraints of the business using them.</p><div className="page-intro-meta"><span><CheckCircle2 size={15}/> Workflow-led design</span><span><CheckCircle2 size={15}/> No one-size-fits-all stack</span></div></div></section>
  <section className="section"><div className="container"><div className="industry-grid">{industries.map((industry,index)=><Link className="industry-card" href={"/industries/"+industry.slug} key={industry.slug}><div className="industry-card-top"><span className="eyebrow">0{index+1} / INDUSTRY</span><ArrowUpRight className="industry-card-arrow" size={17}/></div><h3>{industry.name}</h3><p>{industry.summary}</p></Link>)}</div></div></section>
  <section className="cta-band"><div className="container cta-band-inner"><div className="cta-band-copy"><span className="eyebrow">Your business is the starting point</span><h2>Let's map the workflow first.</h2><p>Tell us how the work is handled today and where the process needs to become clearer or more consistent.</p></div><Link href="/contact" className="button button-light button-large">Discuss your workflow <ArrowUpRight size={16}/></Link></div></section>
</>;}