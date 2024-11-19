import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL as string;

  // Get Posts
  const posts = DUMMY_POSTS;

  const postLinks = posts?.map((post) => {
    return [
      {
        url: `${baseURL}/en/blog/${post.slug}`,
        lastModified: new Date(post.date_updated),
      },
      {
        url: `${baseURL}/fa/blog/${post.slug}`,
        lastModified: new Date(post.date_updated),
      },
      {
        url: `${baseURL}/blog/${post.slug}`,
        lastModified: new Date(post.date_updated),
      },
    ];
  });
  //Get Categories
  const categories = DUMMY_CATEGORIES.flat();

  const categoryLinks = categories.map((category) => {
    return [
      {
        url: `${baseURL}/en/${category.slug}`,
        lastModified: new Date(),
      },
      {
        url: `${baseURL}/fa/${category.slug}`,
        lastModified: new Date(),
      },
      {
        url: `${baseURL}/${category.slug}`,
        lastModified: new Date(),
      },
    ];
  });

  const dynamicLinks = postLinks.concat(categoryLinks ?? []).flat() ?? [];

  return [
    {
      url: baseURL,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseURL}/fa`,
      lastModified: new Date(),
    },
    ...dynamicLinks,
  ];
}
