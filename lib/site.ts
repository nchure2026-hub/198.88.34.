const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nchure.tech";

export const siteConfig = {
  name: "NCHURE Technologies",
  shortName: "NCHURE",
  description: "NCHURE Technologies connects customer management, business operations, automation, and information into practical systems built around how your business works.",
  url: configuredUrl.replace(/\/$/, ""),
  email: "nchure2026@gmail.com",
  phone: "+91 9486802205",
  phoneHref: "tel:+919486802205",
  whatsappHref: "https://wa.me/919486802205?text=" + encodeURIComponent("Hello NCHURE Technologies, I would like to discuss a business requirement."),
  nav: [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "Industries", href: "/industries" },
    { label: "Products", href: "/products" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
};