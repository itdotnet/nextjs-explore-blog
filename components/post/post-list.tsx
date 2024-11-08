import { Post } from "@/types/collection";
import React from "react";
import PostCard from "./post-card";

interface PostListProps {
  posts: Post[];
  layout?: "vertical" | "horizontal";
}

const PostList = ({ posts, layout = "vertical" }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {posts.map((post, index) => (
        <PostCard layout={layout} post={post} key={index} />
      ))}
    </div>
  );
};

export default PostList;
