import { DUMMY_POSTS } from "@/DUMMY_DATA";
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

  return <div>{post?.title}</div>;
};

export default Page;
