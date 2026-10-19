export type Solution = {
  slug: string; number: string; title: string; short: string; intro: string;
  problem: string; approach: string; outcome: string; includes: string[];
  workflow: string[]; dependencies: string[]; idealFor: string;
};

export const solutions: Solution[] = [
  { slug:"digital-foundation", number:"01", title:"Digital Foundation", short:"A clear, credible digital home for your business.",
    intro:"Create the digital foundations customers and teams can rely on, from a professional website to the domain, email, and hosting behind it.",
    problem:"A fragmented online presence can make it difficult for customers to understand what a business does, find the right information, or make an enquiry.",
    approach:"We plan and build the right combination of website, landing pages, domain, professional email, hosting, and company information around your audience and business goals.",
    outcome:"A more coherent business presence with clear information, accessible contact paths, and a foundation that can grow with your needs.",
    includes:["Business websites and landing pages","Domain and hosting setup","Professional email configuration","Company profiles and digital portfolios","Responsive layouts and core SEO setup"],
    workflow:["Clarify audience, offer, and content","Plan pages and conversion paths","Design and implement the experience","Test devices, forms, metadata, and performance"],
    dependencies:["Approved business details and page content","Access to domain and hosting accounts where needed","Brand assets and a nominated review contact"],
    idealFor:"Businesses establishing a stronger online presence or replacing a website that no longer reflects how they operate." },
  { slug:"business-management-systems", number:"02", title:"Business Management Systems", short:"Bring core business records and daily work into one view.",
    intro:"Connect practical workflows for billing, stock, customers, staff, purchasing, sales, quotations, and invoices.",
    problem:"When core records live in notebooks, spreadsheets, and disconnected tools, teams can duplicate work or struggle to find the latest information.",
    approach:"Map the daily operating process first, then select or develop the right management software, permissions, data structure, and reporting views for the agreed scope.",
    outcome:"A more consistent operating process with clearer records, responsibilities, and visibility into day-to-day activity.",
    includes:["Billing and point-of-sale workflows","CRM and customer records","Inventory and purchase/sales tracking","Employee and attendance workflows","Quotations, invoices, and operational reports"],
    workflow:["Map current records and approval steps","Define roles, fields, and reports","Configure or build the agreed system","Migrate sample data, test, train, and refine"],
    dependencies:["Documented operating rules and exception cases","Agreement on existing systems and data sources","Access controls and data ownership decisions"],
    idealFor:"Retailers, distributors, service businesses, and growing teams that need more consistent daily operations." },
  { slug:"automation-workflows", number:"03", title:"Automation & Workflows", short:"Reduce repeated admin with deliberate, reviewable automation.",
    intro:"Connect routine hand-offs, reminders, notifications, and data updates so work moves forward with fewer manual steps.",
    problem:"Repeated follow-ups, status updates, and copy-and-paste tasks consume attention and make important work easy to miss.",
    approach:"Identify high-friction tasks, define triggers and safeguards, then automate only the steps that are sufficiently predictable and supported by available tools.",
    outcome:"More consistent task handling, clearer exceptions, and fewer repetitive actions where automation is appropriate.",
    includes:["Lead assignment and routing","Follow-up and appointment reminders","Invoice and payment notifications","WhatsApp or email workflow integrations","AI-assisted tasks with human review"],
    workflow:["Document trigger, action, and exception paths","Check the source system's integration options","Implement safeguards and audit visibility","Test edge cases and monitor real runs"],
    dependencies:["Supported APIs or approved automation connectors","Permission to access relevant accounts","Message templates, consent rules, and escalation owners"],
    idealFor:"Teams with repeatable administrative work, multiple customer channels, or hand-offs that frequently stall." },
  { slug:"sales-customer-systems", number:"04", title:"Sales & Customer Systems", short:"Give every enquiry an owner and a clear next step.",
    intro:"Organize lead capture, pipeline stages, follow-ups, customer records, booking, and support around a usable workflow.",
    problem:"Enquiries arriving from calls, websites, WhatsApp, and social channels can become scattered without a shared process for ownership and follow-up.",
    approach:"Design a practical pipeline, capture the information your team actually uses, define ownership and next actions, and integrate channels where supported.",
    outcome:"A clearer view of open enquiries, follow-up responsibilities, and the next action expected from the team.",
    includes:["Lead capture forms and source tracking","Sales stages and assignment","Follow-up tasks and activity history","Customer records and segmentation","Booking, appointment, and support workflows"],
    workflow:["Agree on stages and qualification criteria","Define fields and team responsibilities","Configure capture, assignment, and reminders","Review adoption and improve the pipeline"],
    dependencies:["Defined sales process and stage ownership","Existing channel access and consent practices","Agreement on data retention and user permissions"],
    idealFor:"Businesses that receive enquiries across several channels or want a more dependable follow-up process." },
  { slug:"finance-operations", number:"05", title:"Finance & Operations", short:"Make transactions and operational status easier to follow.",
    intro:"Connect billing, expense records, payment follow-ups, reporting, and accounting integrations around the finance process you already use.",
    problem:"Operational and financial records that are scattered or updated late can make reconciliation, collections, and reporting harder than they need to be.",
    approach:"Clarify the source of truth, map key transaction flows, and integrate or configure appropriate systems without replacing professional accounting advice.",
    outcome:"More structured transaction records and reporting paths that support informed operational decisions.",
    includes:["Expense and payment tracking workflows","Invoices and payment reminder processes","Accounting integrations where supported","GST-related billing workflows with suitable tools","Operational dashboards and reporting"],
    workflow:["Map transaction and approval flows","Confirm accounting and compliance requirements","Configure records, roles, and integrations","Reconcile sample cases and validate reports"],
    dependencies:["Chosen accounting or billing platform","Finance-team validation of tax and reporting rules","Secure access to required data sources"],
    idealFor:"Businesses that want a clearer operational picture of invoices, expenses, payments, and related processes." },
  { slug:"marketing-infrastructure", number:"06", title:"Marketing Infrastructure", short:"Connect discovery, enquiries, and follow-through.",
    intro:"Build a useful path from online discovery to customer enquiry with a stronger local presence, search foundations, campaigns, and measurement.",
    problem:"Marketing activity can become difficult to evaluate when channels use inconsistent information or enquiries are not connected to a follow-up process.",
    approach:"Align profile information, website structure, campaign destinations, and lead capture before selecting channels and measures appropriate to the business.",
    outcome:"A more connected marketing setup with clearer enquiry paths and practical reporting, without guarantees of rankings or campaign results.",
    includes:["Google Business Profile setup or improvement","Technical and on-page SEO foundations","Social media publishing support","Lead generation and campaign landing pages","Email, WhatsApp, and digital advertising workflows"],
    workflow:["Review audience, offer, and current assets","Set up profiles, pages, and tracking where appropriate","Prepare campaign structure and content","Review qualified enquiries and refine"],
    dependencies:["Ownership of business listings and ad accounts","Approved budgets, copy, and creative assets","Consent and platform policy compliance"],
    idealFor:"Businesses seeking a consistent digital presence and a better connection between campaigns and enquiry handling." },
  { slug:"security-and-it", number:"07", title:"Security & IT", short:"Build safer access, recovery, and infrastructure practices.",
    intro:"Improve the everyday foundations that keep business systems available and information appropriately protected.",
    problem:"Shared passwords, unclear permissions, missing backups, and undocumented hosting setups can create avoidable operational risk.",
    approach:"Review the current environment, prioritize proportionate controls, and implement agreed account, backup, website, and cloud practices.",
    outcome:"Clearer access ownership, better recovery readiness, and a more maintainable technical environment.",
    includes:["Business email and domain security","Website hardening and updates","Backup and recovery planning","User roles and access permissions","Cloud setup, monitoring, and agreed IT support"],
    workflow:["Inventory assets and access owners","Prioritize risks and recovery needs","Implement controls and document procedures","Test recovery steps and schedule reviews"],
    dependencies:["Authorized access to systems and domain accounts","Named business owner for security decisions","Defined backup retention and support scope"],
    idealFor:"Businesses that depend on websites, cloud applications, business email, or shared digital records." },
  { slug:"ai-solutions", number:"08", title:"AI Solutions", short:"Use AI where it assists a clear business task.",
    intro:"Apply AI to selected support, analysis, content, and internal knowledge workflows with appropriate review and data safeguards.",
    problem:"AI experiments can create extra work when they are not tied to a process, use unsuitable data, or lack review and escalation rules.",
    approach:"Choose a specific use case, assess data and integration constraints, test quality against realistic examples, and define where a person remains responsible.",
    outcome:"A measured path from a small AI use case to a maintainable workflow, with limitations and review requirements made visible.",
    includes:["AI chat and customer-support assistants","Lead qualification assistance","Internal knowledge and staff assistants","AI-supported analytics and summarization","Content workflows and custom AI tools"],
    workflow:["Define intended task and success criteria","Assess data, risks, and integration paths","Prototype with representative examples","Evaluate quality, add review controls, and maintain"],
    dependencies:["Approved data sources and privacy boundaries","Access to suitable model or platform services","Human review and escalation rules"],
    idealFor:"Teams that have a clear, bounded task where AI may improve consistency or reduce manual effort." }
];

export type Industry = { slug:string; name:string; summary:string; workflows:string[]; solutions:string[]; considerations:string; };
export const industries: Industry[] = [
  { slug:"retail-and-distribution", name:"Retail & Distribution", summary:"Connect enquiries, sales, stock, billing, and supplier workflows around daily trading.", workflows:["Stock and purchase visibility","POS, billing, and sales summaries","Customer enquiry and repeat-order tracking","Supplier and distributor follow-ups"], solutions:["Business Management Systems","Finance & Operations","Sales & Customer Systems"], considerations:"The right design depends on product variants, current billing tools, stock locations, offline needs, and the level of accounting integration required." },
  { slug:"b2b-distributors", name:"B2B Distributors & Wholesalers", summary:"Make account-based selling, quotations, fulfilment, and collections easier to coordinate.", workflows:["Customer-specific pricing and quotations","Order status and dispatch hand-offs","Sales rep follow-ups","Invoice and payment reminders"], solutions:["Sales & Customer Systems","Business Management Systems","Automation & Workflows"], considerations:"Pricing rules, credit terms, product catalogues, and existing inventory or accounting systems should be mapped before implementation." },
  { slug:"clinics-and-healthcare", name:"Clinics & Healthcare", summary:"Organize non-clinical business workflows such as enquiries, appointments, billing, and team coordination.", workflows:["Appointment enquiries and reminders","Front-desk task visibility","Billing and payment workflows","Staff schedules and service follow-up"], solutions:["Business Management Systems","Automation & Workflows","Security & IT"], considerations:"Patient information is sensitive. Any implementation must use appropriate access controls, provider-approved systems, retention practices, and applicable healthcare requirements." },
  { slug:"education-and-training", name:"Education & Training", summary:"Bring admissions enquiries, course information, follow-ups, and schedules into a more consistent process.", workflows:["Admission lead capture and status","Course and batch enquiries","Counselling and follow-up tasks","Fee reminders and attendance workflows"], solutions:["Sales & Customer Systems","Automation & Workflows","Digital Foundation"], considerations:"Student data, guardian communication, consent, schedules, and existing learning platforms influence the final design." },
  { slug:"real-estate-and-construction", name:"Real Estate & Construction", summary:"Track enquiries, site visits, project tasks, documents, and client communication more clearly.", workflows:["Property or project enquiry pipelines","Site visit scheduling","Quotation and document coordination","Task, deadline, and client updates"], solutions:["Sales & Customer Systems","Business Management Systems","Digital Foundation"], considerations:"Team structures, project stages, document ownership, and any existing property or project-management software must be reviewed first." },
  { slug:"professional-services", name:"Professional Services", summary:"Connect initial enquiries with discovery, proposals, delivery tasks, and ongoing client communication.", workflows:["Consultation and appointment booking","Proposal and quotation tracking","Project hand-off and task ownership","Client follow-ups and billing"], solutions:["Digital Foundation","Sales & Customer Systems","Automation & Workflows"], considerations:"The setup should reflect the firm's delivery method, confidentiality obligations, approval process, and client relationship model." },
  { slug:"small-and-medium-business", name:"Small & Medium Businesses", summary:"Create a practical operating layer that fits the team's actual process and budget.", workflows:["Centralized customer and supplier records","Task and deadline visibility","Billing, expenses, and business reports","Repeatable follow-up and approval workflows"], solutions:["Business Management Systems","Finance & Operations","AI Solutions"], considerations:"Prioritize the highest-friction workflow first and expand only when the underlying process, ownership, and data are ready." }
];

export type ProjectConcept = { title:string; category:string; summary:string; problem:string; approach:string; stack:string[]; };
export const projectConcepts: ProjectConcept[] = [
  { title:"Retail Operations Workspace", category:"Business systems · Demonstration concept", summary:"An illustrative workspace for connecting sales records, stock visibility, supplier activity, and day-to-day reporting.", problem:"Trading teams may work across separate billing, stock, and spreadsheet records without one shared operational view.", approach:"Concept direction: map core records and show how purchases, sales, stock updates, and reporting could connect.", stack:["Workflow design","Responsive web UI","Integration planning"] },
  { title:"Clinic Front-Desk Workflow", category:"Healthcare operations · Demonstration concept", summary:"A concept for organizing appointment enquiries, front-desk tasks, billing steps, and staff hand-offs.", problem:"Front-desk work can become fragmented when appointments, communication, and administrative tasks are tracked separately.", approach:"Concept direction: make non-clinical tasks, appointment status, and next actions more visible while keeping sensitive information protected.", stack:["Responsive interface","Role design","Privacy-conscious workflows"] },
  { title:"Workforce Attendance Console", category:"Workforce operations · Demonstration concept", summary:"A product direction for presenting attendance events, team status, review queues, and exportable summaries.", problem:"Manual attendance reconciliation can create repeated work for supervisors and administrative teams.", approach:"Concept direction: define event capture, exception review, access permissions, and reporting needs before integrating devices or identity services.", stack:["Workflow mapping","Access controls","Integration discovery"] }
];


export type DemoProject = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  preview: "billing" | "attendance" | "business" | "school";
  workflows: string[];
};

export const demoProjects: DemoProject[] = [
  {
    slug: "billing-system",
    title: "Billing System",
    category: "Billing & invoicing",
    summary: "An illustrative billing workspace for organizing invoice drafts, customer references, payment follow-ups, and document review.",
    preview: "billing",
    workflows: ["Invoices and quotations", "Payment status review", "Customer billing records"]
  },
  {
    slug: "attendance-management-system",
    title: "Attendance Management System",
    category: "Workforce operations",
    summary: "A concept interface for viewing attendance entries, shift context, check-in events, and items that need supervisor review.",
    preview: "attendance",
    workflows: ["Attendance register", "Shift and check-in records", "Exception review"]
  },
  {
    slug: "business-management-system",
    title: "Business Management System",
    category: "Connected business operations",
    summary: "A proposed operational workspace connecting customer records, sales, inventory, purchasing, team tasks, and business reporting.",
    preview: "business",
    workflows: ["Customer and sales records", "Inventory and purchasing", "Tasks and reporting"]
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    category: "Education administration",
    summary: "An illustrative school administration view for student records, class registers, schedules, and fee follow-up workflows.",
    preview: "school",
    workflows: ["Student and class records", "Attendance and timetable", "Fee follow-up"]
  }
];
