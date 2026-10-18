"use client";

import { useMemo, useState } from "react";
import {
  Activity, ArrowDownRight, ArrowUpRight, Bell, CalendarDays, ChevronDown,
  ClipboardCheck, Clock3, Download, Factory, Fingerprint, LayoutDashboard,
  MapPin, Search, Settings2, ShieldCheck, Users, UserRoundCheck, UserRoundX,
  UserCog, Menu, X
} from "lucide-react";

type AttendanceRow = {
  initials: string; name: string; id: string; department: string; shift: string;
  time: string; status: string; source: string; tone: "green" | "amber" | "red";
};

const attendance: AttendanceRow[] = [
  { initials: "RK", name: "R. Karthik", id: "EMP-0248", department: "Production", shift: "Shift A · 06:00–14:00", time: "05:52 AM", status: "On time", source: "Face verified", tone: "green" },
  { initials: "MS", name: "M. Senthil", id: "EMP-0186", department: "Maintenance", shift: "Shift A · 06:00–14:00", time: "06:17 AM", status: "Late · 17m", source: "Web punch", tone: "amber" },
  { initials: "PA", name: "P. Aruna", id: "EMP-0315", department: "Quality Control", shift: "Shift A · 06:00–14:00", time: "05:56 AM", status: "On time", source: "Device synced", tone: "green" },
  { initials: "SJ", name: "S. Joseph", id: "EMP-0112", department: "Warehouse", shift: "Shift B · 14:00–22:00", time: "—", status: "Absent", source: "No punch recorded", tone: "red" },
  { initials: "VN", name: "V. Nithya", id: "EMP-0279", department: "Administration", shift: "General · 09:00–18:00", time: "08:54 AM", status: "On time", source: "Mobile punch", tone: "green" },
];

const metrics = [
  { label: "Total workforce", value: "248", detail: "Across 6 departments", icon: Users, trend: "+4 this month", trendType: "up", tint: "blue" },
  { label: "Present today", value: "216", detail: "87.1% attendance rate", icon: UserRoundCheck, trend: "+2.4% vs yesterday", trendType: "up", tint: "green" },
  { label: "Late arrivals", value: "12", detail: "Needs supervisor review", icon: Clock3, trend: "−3 vs yesterday", trendType: "down", tint: "orange" },
  { label: "Not yet recorded", value: "20", detail: "Pending shift check-in", icon: UserRoundX, trend: "8 shifts in progress", trendType: "neutral", tint: "purple" },
];

const departments = [
  { label: "Production", count: "84 / 92", percent: 91 },
  { label: "Assembly", count: "47 / 54", percent: 87 },
  { label: "Warehouse", count: "31 / 38", percent: 82 },
  { label: "Quality control", count: "22 / 24", percent: 92 },
  { label: "Maintenance", count: "18 / 21", percent: 86 },
];

const menuPrimary = [
  { label: "Overview", href: "#overview", icon: LayoutDashboard },
  { label: "Attendance", href: "#attendance", icon: ClipboardCheck, count: "12" },
  { label: "Employees", href: "#employees", icon: Users },
  { label: "Shift planning", href: "#shifts", icon: CalendarDays },
  { label: "Verification", href: "#verification", icon: Fingerprint },
  { label: "Reports & insights", href: "#reports", icon: Activity },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const filteredRows = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return attendance;
    return attendance.filter((row) =>
      [row.name, row.id, row.department, row.status, row.source].some((v) => v.toLowerCase().includes(q))
    );
  }, [query]);

  function exportDemoCsv() {
    const header = ["Employee", "Employee ID", "Department", "Shift", "Check-in", "Status", "Source"];
    const rows = attendance.map((r) => [r.name, r.id, r.department, r.shift, r.time, r.status, r.source]);
    const csv = [header, ...rows].map((row) => row.map((field) => '"' + field.replaceAll('"', '""') + '"').join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "attendance-demo.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <main className="app-shell">
      <aside className={`sidebar ${mobileNavOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Factory size={22} /></div>
          <div><strong>INDUSTRIAL<span>.</span></strong><small>WORKFORCE SYSTEMS</small></div>
          <button className="mobile-close" onClick={() => setMobileNavOpen(false)} aria-label="Close menu"><X size={20} /></button>
        </div>
        <div className="site-select"><div className="site-icon"><Factory size={17} /></div><div className="site-copy"><span>ACTIVE FACILITY</span><strong>Chennai Plant 01</strong></div><ChevronDown size={15} /></div>
        <div className="nav-label">WORKSPACE</div>
        <nav className="nav-list" aria-label="Main navigation">
          {menuPrimary.map((item, index) => {
            const Icon = item.icon;
            return <a key={item.label} className={`nav-item ${index === 0 ? "active" : ""}`} href={item.href} onClick={() => setMobileNavOpen(false)}><Icon size={18} /><span>{item.label}</span>{("count" in item) && item.count ? <span className="nav-count">{item.count}</span> : null}</a>;
          })}
        </nav>
        <div className="nav-label tools-label">ADMINISTRATION</div>
        <nav className="nav-list" aria-label="Administration navigation">
          <a className="nav-item" href="#team"><UserCog size={18} /><span>Roles & access</span></a>
          <a className="nav-item" href="#settings"><Settings2 size={18} /><span>Settings</span></a>
        </nav>
        <div className="sidebar-bottom">
          <div className="security-note"><div className="security-icon"><ShieldCheck size={17} /></div><div><strong>Demo environment</strong><span>Production security not configured</span></div><span className="pulse-dot" /></div>
          <div className="profile"><div className="avatar avatar-admin">AD</div><div className="profile-copy"><strong>Admin Demo</strong><span>Sample account · no login</span></div><ChevronDown size={15} /></div>
        </div>
      </aside>

      {mobileNavOpen && <button className="mobile-scrim" onClick={() => setMobileNavOpen(false)} aria-label="Close navigation overlay" />}
      <section className="main-area" id="overview">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileNavOpen(true)} aria-label="Open menu"><Menu size={20} /></button>
          <div className="breadcrumb">Workspace <span>/</span> <strong>Overview</strong></div>
          <div className="top-actions"><div className="system-status"><span className="status-dot" /> Demo environment</div><button className="icon-button" aria-label="Search attendance" onClick={() => document.getElementById("employee-search")?.focus()}><Search size={18} /></button><button className="icon-button notification-button" aria-label="Notifications"><Bell size={18} /><i /></button><div className="top-avatar">AD</div></div>
        </header>
        <div className="content-wrap">
          <section className="page-heading">
            <div><div className="eyebrow"><span className="eyebrow-line" /> MONDAY, 19 OCTOBER 2026</div><h1>Workforce overview</h1><p>Here&apos;s what&apos;s happening across your facility today.</p></div>
            <div className="heading-actions"><button className="button button-secondary" onClick={() => window.location.reload()}><CalendarDays size={16} /> Today <ChevronDown size={14} /></button><button className="button button-primary" onClick={exportDemoCsv}><Download size={16} /> Export demo CSV</button></div>
          </section>
          <div className="demo-notice"><div className="notice-mark">i</div><div><strong>Starter preview — sample data only</strong><span>These figures and employee records are fictional. Connect and secure Supabase before handling any real workforce data.</span></div></div>

          <section className="metrics-grid" aria-label="Attendance summary">
            {metrics.map((metric) => { const Icon = metric.icon; return <article className="metric-card" key={metric.label}><div className="metric-top"><span>{metric.label}</span><div className={`metric-icon ${metric.tint}`}><Icon size={18} /></div></div><div className="metric-value">{metric.value}</div><div className="metric-foot"><span className="metric-detail">{metric.detail}</span><span className={`trend ${metric.trendType}`}>{metric.trendType === "up" ? <ArrowUpRight size={13} /> : metric.trendType === "down" ? <ArrowDownRight size={13} /> : <Activity size={13} />} {metric.trend}</span></div></article>; })}
          </section>

          <section className="dashboard-grid">
            <article className="panel attendance-panel" id="attendance">
              <div className="panel-header"><div><div className="panel-kicker">ATTENDANCE REGISTER</div><h2>Recent attendance</h2><p>Latest example check-ins across the facility</p></div><a className="text-button" href="#employees">Employee directory <span>→</span></a></div>
              <div className="table-tools"><label className="search-field"><Search size={16} /><input id="employee-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search employee, ID or department..." /></label><span className="filter-button"><span className="filter-glyph">☷</span> Demo records <span className="filter-count">{filteredRows.length}</span></span></div>
              <div className="attendance-table-wrap"><table className="attendance-table"><thead><tr><th>EMPLOYEE</th><th>DEPARTMENT</th><th>CHECK-IN</th><th>STATUS</th></tr></thead><tbody>{filteredRows.map((person) => <tr key={person.id}><td><div className="person-cell"><div className={`avatar ${person.tone === "red" ? "avatar-red" : person.tone === "amber" ? "avatar-amber" : "avatar-blue"}`}>{person.initials}</div><div className="person-info"><strong>{person.name}</strong><span>{person.id}</span></div></div></td><td><div className="department-cell">{person.department}<span>{person.shift}</span></div></td><td><div className="time-cell">{person.time}<span><Fingerprint size={12} />{person.source}</span></div></td><td><span className={`status-pill ${person.tone}`}><i />{person.status}</span></td></tr>)}</tbody></table>{filteredRows.length === 0 && <div className="empty-state">No demo records match “{query}”.</div>}</div>
              <div className="panel-footer"><span>Showing <strong>{filteredRows.length}</strong> demo records of <strong>248</strong> sample employees</span><span className="pagination-note">Demo register</span></div>
            </article>

            <article className="panel department-panel" id="reports"><div className="panel-header"><div><div className="panel-kicker">ATTENDANCE BY TEAM</div><h2>Department snapshot</h2><p>Illustrative present / scheduled totals</p></div><button className="more-button" aria-label="Department details">•••</button></div><div className="department-list">{departments.map((dept) => <div className="department-row" key={dept.label}><div className="department-row-top"><span>{dept.label}</span><strong>{dept.count}</strong></div><div className="progress-track"><span style={{ width: `${dept.percent}%` }} /></div></div>)}</div><div className="department-footer"><div className="mini-icon"><Activity size={16} /></div><div><strong>Illustrative operational view</strong><span>Live analytics are not connected</span></div></div></article>
          </section>

          <section className="bottom-grid">
            <article className="panel shift-panel" id="shifts"><div className="panel-header"><div><div className="panel-kicker">SHIFT MANAGEMENT</div><h2>Today&apos;s shift coverage</h2><p>Example schedule · local facility time</p></div><CalendarDays size={18} className="muted-icon" /></div><div className="shift-list"><div className="shift-row"><div className="shift-time">06:00 <span>to 14:00</span></div><div className="shift-info"><strong>Shift A · Morning</strong><span>104 scheduled employees</span></div><span className="shift-tag active-shift">In progress</span></div><div className="shift-row"><div className="shift-time">14:00 <span>to 22:00</span></div><div className="shift-info"><strong>Shift B · Evening</strong><span>86 scheduled employees</span></div><span className="shift-tag">Upcoming</span></div><div className="shift-row"><div className="shift-time">22:00 <span>to 06:00</span></div><div className="shift-info"><strong>Shift C · Night</strong><span>58 scheduled employees</span></div><span className="shift-tag">Upcoming</span></div></div></article>
            <article className="panel verification-panel" id="verification"><div className="panel-header"><div><div className="panel-kicker">VERIFICATION</div><h2>Attendance sources</h2><p>Sample source mix — not a device connection</p></div><Fingerprint size={18} className="muted-icon" /></div><div className="verification-content"><div className="verification-stat"><div className="verification-stat-icon"><ShieldCheck size={20} /></div><div><strong>3 source types</strong><span>Displayed in sample records</span></div></div><div className="source-tags"><span><i className="source-dot face" /> Face verified</span><span><i className="source-dot web" /> Web punch</span><span><i className="source-dot device" /> Device synced</span><span><i className="source-dot mobile" /> Mobile punch</span></div><div className="verification-disclaimer">Face matching and attendance-device integrations are not implemented in this starter.</div></div></article>
          </section>

          <footer className="app-footer"><span>© 2026 NCHURE · Industrial Attendance Management</span><span><MapPin size={13} /> Facility timezone: Asia/Kolkata (demo)</span></footer>
        </div>
      </section>
    </main>
  );
}
