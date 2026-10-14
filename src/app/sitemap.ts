import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return [];
  return [
    "",
    "/about",
    "/work",
    "/experience",
    "/contact",
    ...projects.map((p) => "/work/" + p.slug),
  ].map((path) => ({ url: base.replace(/\/$/, "") + path }));
}
