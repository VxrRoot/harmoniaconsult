import { links, siteUrl } from "@/constants";
import { ISimplyBlogCard } from "@/lib/interface";
import { getPosts } from "@/lib/query";
import { Metadata, MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: ISimplyBlogCard[] = await getPosts();
  console.log(posts);

  const posteEntries: MetadataRoute.Sitemap = posts.map(
    ({ currentSlug, publishedAt }) => ({
      url: `${siteUrl}${links.blog}/${currentSlug}`,
      lastModified: new Date(publishedAt),
    })
  );

  return [
    {
      url: `${siteUrl}${links.about}`,
      lastModified: new Date(),
    },
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}${links.blog}`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}${links.services}`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}${links.contact}`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}${links.holdDrivingLicence}`,
      lastModified: new Date(),
    },
    ...posteEntries,
  ];
}
