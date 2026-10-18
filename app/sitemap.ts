import type { MetadataRoute } from "next";
import { industries, solutions } from "@/lib/content";
import { siteConfig } from "@/lib/site";
export default function sitemap():MetadataRoute.Sitemap{
  const staticRoutes=["","/solutions","/industries","/products","/products/lead-management","/projects","/about","/contact","/privacy","/terms"];
  const dynamicRoutes=[...solutions.map((item)=>"/solutions/"+item.slug),...industries.map((item)=>"/industries/"+item.slug)];
  return [...staticRoutes,...dynamicRoutes].map((route)=>({url:siteConfig.url+route,lastModified:new Date(),changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:route==="/contact"?.85:.7}));
}