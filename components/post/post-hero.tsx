import React from "react";
import PostContent from "./post-content";
import { Post } from "@/types/collection";
import Image from "next/image";

interface PostHeroProps {
  post: Post;
  locale: string;
}

const PostHero = ({ post, locale }: PostHeroProps) => {
  return (
    <div>
      <PostContent locale={locale} isPostPage post={post} />
      <Image
        className="rounded-md object-cover object-center h-[300px] md:h-[500px] mt-6"
        alt={post.title}
        src={post.image}
        width={1280}
        height={500}
      />
    </div>
  );
};

export default PostHero;
