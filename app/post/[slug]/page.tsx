import { DUMMY_POSTS } from "@/DUMMY_DATA";
import CtaCard from "@/components/elements/cta-card";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostBody from "@/components/post/post-body";
import PostHero from "@/components/post/post-hero";
import { notFound } from "next/navigation";
import React from "react";

export const generateStaticParams = async () => {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = DUMMY_POSTS.find((post) => post.slug === slug);

  if (!post) notFound();

  return (
    <PaddingContainer>
      {/* Container */}
      <div className="space-y-10">
        {/* Post Hero */}
        <PostHero post={post} />
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
        <CtaCard />
      </div>
    </PaddingContainer>
  );
};

export default Page;
