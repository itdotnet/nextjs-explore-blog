import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CtaCard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
import siteConfig from "@/config/site";
import { getDictionary } from "@/lib/getDictionary";
import { notFound } from "next/navigation";
import React, { cache } from "react";

export const getPostData = cache((slug: string) => {
  const post = DUMMY_POSTS.find((post) => post.slug === slug);
  return post;
});

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

export const generateMetadata = ({
  params: { slug, lang },
}: {
  params: { slug: string; lang: string };
}) => {
  const post = getPostData(slug);

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}`,
      siteName: post?.title,
      /* images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}/opengraph-image.png`,
          width: 1200,
          height: 628,
        },
      ], */
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en/post/${slug}`,
        "fa-IR": `${process.env.NEXT_PUBLIC_SITE_URL}/fa/post/${slug}`,
      },
    },
  };
};

const Page = async ({ params }: { params: { slug: string; lang: string } }) => {
  //const { slug, lang } = await params;
  const post = getPostData(params.slug);
  const dictionary = await getDictionary(params.lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post?.title,
    image: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.lang}/post/${params.slug}/opengraph-image.png`,
    author: post?.author.first_name + " " + post?.author.last_name,
    genre: post?.category.title,
    publisher: siteConfig.siteName,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${params.slug}`,
    datePublished: new Date(post?.date_created!).toISOString(),
    dateCreated: new Date(post?.date_created!).toISOString(),
    dateModified: new Date(post?.date_updated!).toISOString(),
    description: post?.description,
    articleBody: post?.body,
  };

  if (!post) notFound();

  return (
    <PaddingContainer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Container */}
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero locale={params.lang} post={post} />
        {/* Social Link And Post Body */}
        <div className="flex gap-10 flex-col md:flex-row">
          <div className="relative">
            <div className="sticky top-20 flex md:flex-col gap-5 items-center">
              <div className="font-medium md:hidden">اشتراگذاري:</div>
              <SocialLink
                isShareUrl
                platform="facebook"
                link={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
              />
              <SocialLink
                isShareUrl
                platform="twitter"
                link={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
              />
              <SocialLink
                isShareUrl
                platform="linkedin"
                link={`https://www.linkedin.com/shareArticle?mini=true&url=${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}
              />
            </div>
          </div>
          <PostBody body={post.body} />
        </div>
        {/* CTACard */}
        <CtaCard dictionary={dictionary} />
      </div>
    </PaddingContainer>
  );
};

export default Page;
