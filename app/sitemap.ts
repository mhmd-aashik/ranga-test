import { fetchSiteMapBlogs } from "@/lib/fetchBlogs";
import { MetadataRoute } from "next";

const base_url = "https://www.aashik.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: any = await fetchSiteMapBlogs();

  const postEntries: MetadataRoute.Sitemap = posts.map((slug: any) => ({
    url: `${base_url}/blog/${slug}`,
  }));

  return [
    {
      url: `${base_url}/blog`,
    },
    ...postEntries,
  ];
}
