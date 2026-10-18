import { ArrowUpRight, CalendarClock, CheckCircle2, CircleDot, Filter, Plus, Search, UserRound } from "lucide-react";

type LeadManagementPreviewProps = { compact?: boolean };
const sampleLeads = [
  { title:"Website enquiry", source:"Website form", next:"Confirm requirements", initials:"WE", stage:"New" },
  { title:"Product consultation", source:"Referral", next:"Schedule discovery", initials:"PC", stage:"Contacted" },
  { title:"Service request", source:"Business email", next:"Share scope outline", initials:"SR", stage:"Next step" }
];

export function LeadManagementPreview({ compact = false }: LeadManagementPreviewProps) {
  return <div className={"lead-preview" + (compact ? " lead-preview-compact" : "")}>
    <div className="preview-rail"><div className="preview-rail-mark">N</div><span className="rail-indicator active" aria-hidden="true" /><span className="rail-indicator" aria-hidden="true" /><span className="rail-indicator" aria-hidden="true" /><span className="rail-indicator" aria-hidden="true" /><div className="preview-rail-bottom"><UserRound size={15} /></div></div>
    <div className="preview-main">
      <div className="preview-topbar"><div><span className="preview-kicker">WORKSPACE / LEAD MANAGEMENT</span><h3>Lead overview</h3></div><span className="preview-state"><span /> Preview</span></div>
      <div className="preview-toolbar"><div className="preview-search"><Search size={14} /><span>Search enquiries</span></div><div className="preview-tool"><Filter size={14} /><span>Filter</span></div>{!compact && <div className="preview-tool"><Plus size={14} /><span>New lead</span></div>}</div>
      <div className="preview-summary-row">
        <div className="preview-summary"><span>Ownership</span><strong><UserRound size={14} /> Assigned</strong><small>Clear responsibility</small></div>
        <div className="preview-summary"><span>Next action</span><strong><CalendarClock size={14} /> Scheduled</strong><small>Follow-up visibility</small></div>
        <div className="preview-summary"><span>Pipeline</span><strong><CircleDot size={14} /> In progress</strong><small>Stage by stage</small></div>
      </div>
      <div className="preview-board-heading"><div><strong>Enquiry pipeline</strong><span>Illustrative records</span></div><ArrowUpRight size={16} aria-hidden="true" /></div>
      <div className="preview-lead-list">{sampleLeads.map((lead) => <div className="preview-lead-row" key={lead.title}><span className="preview-lead-avatar">{lead.initials}</span><div className="preview-lead-copy"><strong>{lead.title}</strong><span>{lead.source}</span></div><div className="preview-lead-next"><small>Next action</small><span>{lead.next}</span></div><span className={"lead-status status-" + lead.stage.toLowerCase().replace(" ", "-")}>{lead.stage}</span></div>)}</div>
      <div className="preview-footer-note"><CheckCircle2 size={14} /> Illustrative UI only · No live customer records</div>
    </div>
  </div>;
}