import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default:"NCHURE Technologies | Build Smarter. Operate Better.", template:"%s | NCHURE Technologies" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ["business automation solutions","CRM and lead management systems","business website development","WhatsApp Business automation","inventory and billing solutions","AI solutions for businesses","business management systems","workflow automation"],
  openGraph: { type:"website", siteName:siteConfig.name, title:"NCHURE Technologies | Build Smarter. Operate Better.", description:siteConfig.description, url:siteConfig.url, locale:"en_IN" },
  twitter: { card:"summary_large_image", title:"NCHURE Technologies | Build Smarter. Operate Better.", description:siteConfig.description },
  robots: { index:true, follow:true }
};
export const viewport: Viewport = { themeColor:"#F7F5F2", width:"device-width", initialScale:1 };

export default function RootLayout({ children }: Readonly<{ children:React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}