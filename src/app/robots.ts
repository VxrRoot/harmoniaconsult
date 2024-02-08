import { links, siteUrl } from "@/constants";
import { MetadataRoute } from "next";

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", links.privacyPolicy, links.terms],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
