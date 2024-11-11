import { Post } from "@/types/collection";
import React from "react";
import PostCard from "./post-card";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
  locale: string;
}

const PostList = ({ posts, layout = "vertical", locale }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {posts.map((post, index) => (
        <PostCard locale={locale} layout={layout} post={post} key={index} />
      ))}
    </div>
  );
};

export default PostList;
