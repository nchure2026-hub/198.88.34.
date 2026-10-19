import {
  ArrowUpRight,
  BookOpen,
  Boxes,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Package,
  Receipt,
  Search,
  Users
} from "lucide-react";

type DemoKind = "billing" | "attendance" | "business" | "school";
type ProjectDemoPreviewProps = {
  type: DemoKind;
  title: string;
};

const previewIcons = {
  billing: Receipt,
  attendance: CalendarCheck,
  business: Boxes,
  school: GraduationCap
};

function MiniRow({ left, middle, right, status = "Review" }: { left: string; middle: string; right: string; status?: string }) {
  return (
    <div className="mini-table-row">
      <span>{left}</span>
      <span>{middle}</span>
      <span>{right}</span>
      <b>{status}</b>
    </div>
  );
}

function BillingScreen() {
  return (
    <>
      <div className="demo-screen-title"><div><span>WORKSPACE / BILLING</span><h3>Invoice workspace</h3></div><div className="demo-screen-action"><FileText size={13} /> New draft</div></div>
      <div className="demo-screen-summary">
        <div><span>DOCUMENTS</span><strong>Drafts & invoices</strong><small>Sample workflow</small></div>
        <div><span>PAYMENT STATE</span><strong>For review</strong><small>Status example</small></div>
        <div><span>RECORD HISTORY</span><strong>Recent activity</strong><small>Illustrative view</small></div>
      </div>
      <div className="demo-table">
        <div className="mini-table-head"><span>REFERENCE</span><span>CUSTOMER</span><span>DOCUMENT</span><span>STATUS</span></div>
        <MiniRow left="INV-DEMO-01" middle="Sample customer" right="Tax invoice" status="Draft" />
        <MiniRow left="QUO-DEMO-02" middle="Example account" right="Quotation" status="Review" />
        <MiniRow left="INV-DEMO-03" middle="Demo client" right="Invoice" status="Pending" />
      </div>
    </>
  );
}

function AttendanceScreen() {
  return (
    <>
      <div className="demo-screen-title"><div><span>WORKSPACE / ATTENDANCE</span><h3>Attendance register</h3></div><div className="demo-screen-action"><CalendarDays size={13} /> Sample day</div></div>
      <div className="demo-screen-summary">
        <div><span>REGISTER</span><strong>Daily entries</strong><small>Illustrative records</small></div>
        <div><span>SHIFT CONTEXT</span><strong>Shift review</strong><small>Example workflow</small></div>
        <div><span>EXCEPTIONS</span><strong>Needs review</strong><small>Supervisor queue</small></div>
      </div>
      <div className="attendance-list">
        <div className="attendance-list-heading"><span>TEAM ACTIVITY</span><span>DEMO DATA</span></div>
        {[
          ["Employee DEMO-01", "Shift A · Check-in", "Recorded"],
          ["Employee DEMO-02", "Shift B · Check-in", "Review"],
          ["Employee DEMO-03", "Shift A · Check-out", "Recorded"]
        ].map((row) => (
          <div className="attendance-row" key={row[0]}>
            <span className="demo-avatar"><Users size={13} /></span>
            <div><strong>{row[0]}</strong><small>{row[1]}</small></div>
            <span className={"demo-row-status" + (row[2] === "Review" ? " review" : "")}>{row[2]}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function BusinessScreen() {
  return (
    <>
      <div className="demo-screen-title"><div><span>WORKSPACE / OPERATIONS</span><h3>Business overview</h3></div><div className="demo-screen-action"><ArrowUpRight size={13} /> Demo view</div></div>
      <div className="business-overview-grid">
        <div><span className="demo-module-icon"><Users size={15} /></span><strong>Customer records</strong><small>Sales & relationships</small><b>Open workspace <ArrowUpRight size={11} /></b></div>
        <div><span className="demo-module-icon"><Package size={15} /></span><strong>Inventory</strong><small>Stock & purchasing</small><b>Review workspace <ArrowUpRight size={11} /></b></div>
        <div><span className="demo-module-icon"><FileText size={15} /></span><strong>Finance</strong><small>Invoices & expenses</small><b>Review workflow <ArrowUpRight size={11} /></b></div>
        <div><span className="demo-module-icon"><CheckCircle2 size={15} /></span><strong>Team tasks</strong><small>Owners & deadlines</small><b>Task workspace <ArrowUpRight size={11} /></b></div>
      </div>
      <div className="business-bottom-bar"><span><Clock3 size={13} /> NEXT ACTIONS</span><strong>Assigned tasks · Pending reviews · Follow-ups</strong></div>
    </>
  );
}

function SchoolScreen() {
  return (
    <>
      <div className="demo-screen-title"><div><span>WORKSPACE / SCHOOL ADMIN</span><h3>School administration</h3></div><div className="demo-screen-action"><BookOpen size={13} /> Demo view</div></div>
      <div className="school-layout">
        <div className="school-sidebar">
          <span><Users size={13} /> Students</span>
          <span><CalendarCheck size={13} /> Attendance</span>
          <span><CalendarDays size={13} /> Timetable</span>
          <span><Receipt size={13} /> Fee records</span>
        </div>
        <div className="school-content">
          <div className="school-content-heading"><strong>Class register</strong><span>Illustrative records</span></div>
          {[
            ["Student DEMO-01", "Class A · Section 1", "Present"],
            ["Student DEMO-02", "Class B · Section 2", "Review"],
            ["Student DEMO-03", "Class A · Section 1", "Present"]
          ].map((row) => (
            <div className="school-student-row" key={row[0]}>
              <span className="school-student-avatar">{row[0].slice(-2)}</span>
              <div><strong>{row[0]}</strong><small>{row[1]}</small></div>
              <span className={"demo-row-status" + (row[2] === "Review" ? " review" : "")}>{row[2]}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function ProjectDemoPreview({ type, title }: ProjectDemoPreviewProps) {
  const Icon = previewIcons[type];
  return (
    <div className={"project-demo-preview demo-" + type} role="img" aria-label={title + " illustrative software interface. Preview only; no live records are connected."}>
      <div className="demo-appbar">
        <div className="demo-appmark"><Icon size={15} /></div>
        <div><strong>NCHURE</strong><span>{title.toUpperCase()}</span></div>
        <span className="demo-illustrative-badge">Preview</span>
      </div>
      <div className="demo-appbody">
        <div className="demo-searchbar"><Search size={13} /><span>Search sample records</span><span className="demo-shortcut">UI DEMO</span></div>
        {type === "billing" && <BillingScreen />}
        {type === "attendance" && <AttendanceScreen />}
        {type === "business" && <BusinessScreen />}
        {type === "school" && <SchoolScreen />}
      </div>
      <div className="demo-preview-foot">ILLUSTRATIVE UI · NO LIVE DATA</div>
    </div>
  );
}
