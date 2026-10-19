import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ProjectDemoPreview } from "@/components/project-demo-preview";
import { demoProjects, projectConcepts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects & Demo Previews",
  description: "Explore illustrative NCHURE demo previews for billing, attendance management, business management, and school management, alongside demonstration project concepts."
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">Projects / Demonstration previews</span>
          <h1>Explore the systems behind everyday business.</h1>
          <p>Browse illustrative software interface previews for common business and education workflows. These are demo models to communicate product direction, not claims of live deployments, verified clients, or measured results.</p>
          <div className="page-intro-meta">
            <span><CheckCircle2 size={15} /> Preview status shown clearly</span>
            <span><CheckCircle2 size={15} /> Sample labels only</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Software demo models</span>
            <h2>Preview the workflow before defining the build.</h2>
            <p>Each screen sketches a possible structure for the relevant process. Actual features, data, integrations, permissions, and implementation scope must be confirmed separately.</p>
          </div>

          <div className="demo-project-grid">
            {demoProjects.map((project) => (
              <article className="demo-project-card" key={project.slug}>
                <ProjectDemoPreview type={project.preview} title={project.title} />
                <div className="demo-project-content">
                  <span className="demo-project-category">DEMO PROJECT / PREVIEW ONLY</span>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <div className="demo-workflow-tags" aria-label="Illustrated workflow areas">
                    {project.workflows.map((workflow) => <span key={workflow}>{workflow}</span>)}
                  </div>
                  <Link href="/contact" className="text-link">Discuss a similar system <ArrowUpRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div>

          <p className="disclaimer demo-disclaimer">
            All four interfaces are illustrative UI models using sample labels. They are not connected to production databases, live attendance devices, payment gateways, student records, or third-party integrations.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Additional concepts</span>
            <h2>Other connected workflow directions.</h2>
            <p>These concepts show how the same design approach can be adapted to different operational needs. They are not verified client case studies.</p>
          </div>
          <div className="project-grid">
            {projectConcepts.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-visual" aria-hidden="true">
                  <div className="project-wireframe">
                    <div className="wireframe-top"><span /><span /><span /></div>
                    <div className="wireframe-layout">
                      <div className="wireframe-side" />
                      <div className="wireframe-main"><span /><span /></div>
                    </div>
                    <div className="wireframe-bottom" style={{ width: (72 + index * 8) + "%" }} />
                  </div>
                </div>
                <div className="project-card-content">
                  <span className="project-card-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="panel-label">Business problem</div>
                  <p style={{ marginTop: 6 }}>{project.problem}</p>
                  <div className="panel-label">Concept approach</div>
                  <p style={{ marginTop: 6 }}>{project.approach}</p>
                  <div className="project-tech-list">
                    {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <Link href="/contact" className="text-link">Discuss a similar workflow <ArrowUpRight size={15} /></Link>
                </div>
              </article>
            ))}
          </div>
          <p className="disclaimer" style={{ marginTop: 20 }}>A real case study should be published only after the project, client approval, actual implementation details, and any quoted results are verified.</p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div className="cta-band-copy">
            <span className="eyebrow">Bring a real use case</span>
            <h2>Let's discuss the system your team needs.</h2>
            <p>Share the workflow, current tools, and operational gaps. The first step is agreeing on a practical scope for your business.</p>
          </div>
          <Link href="/contact" className="button button-light button-large">Discuss a project <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
