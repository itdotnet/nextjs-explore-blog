import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PostContent from "./post-content";

interface PostProps {
  post: Post;
  layout?: "horizontal" | "vertical";
  reverse?: boolean;
}

const PostCard = ({
  post,
  layout = "horizontal",
  reverse = false,
}: PostProps) => {
  return (
    <Link
      href={`/post/${post.slug}`}
      className={`container ${
        layout === "horizontal"
          ? "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          : "grid grid-cols-1 gap-10"
      }`}
    >
      {/* Post Image */}
      <Image
        alt={post.title}
        src={post.image}
        width={600}
        height={300}
        className={`rounded-md w-full max-h-[300px] object-cover object-center ${
          reverse ? "md:order-last" : ""
        }`}
      />
      {/* Post Content */}
      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
