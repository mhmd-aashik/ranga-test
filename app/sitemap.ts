import { fetchSiteMapBlogs } from "@/lib/fetchBlogs";
import { MetadataRoute } from "next";

export const revalidate = 0;

const base_url = "https://www.aashik.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: any = await fetchSiteMapBlogs();

  const postEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, createdAt }: any) => ({
      url: `${base_url}/blog/${slug}`,
      lastModified: new Date(createdAt),
      priority: 1,
    })
  );

  return [
    // {
    //   url: `${base_url}/blogs`,
    // },
    ...postEntries,
  ];
}
