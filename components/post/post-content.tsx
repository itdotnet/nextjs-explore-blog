import { getDictionary } from "@/lib/getDictionary";
import {
  convertReadingTimeToPersian,
  convertRelativeDatoToPersian,
  getReadingTime,
  getRelativeDate,
} from "@/lib/helpers";
import { Post } from "@/types/collection";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
  locale: string;
}

const PostContent = async ({
  post,
  isPostPage = false,
  locale,
}: PostContentProps) => {
  const dictionary = await getDictionary(locale);

  return (
    <div className="space-y-2">
      {/* Tags */}
      <div
        className={`flex items-center flex-wrap gap-2 text-neutral-400 ${
          isPostPage ? "text-sm" : "text-xs md:text-sm"
        }`}
      >
        <div
          className={`font-medium ${
            post.category.title === "شهرها"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.category.title}
        </div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getReadingTime(post.body, locale)}</div>
        <div className="w-2 h-2 rounded-full bg-neutral-200" />
        <div>{getRelativeDate(post.date_created, locale)}</div>
      </div>
      {/* Title */}
      <div
        className={`${
          isPostPage
            ? "font-bold xl:text-4xl lg:text-3xl text-2xl"
            : "font-medium xl:text-3xl lg:text-2xl text-xl"
        }`}
      >
        {post.title}
      </div>
      {/* Description */}
      <div className="text-neutral-600 leading-snug text-base xl:text-lg">
        {post.description}
      </div>
      {!isPostPage && (
        <div className="flex items-center gap-2 pt-3">
          {dictionary.buttons.readMore} {locale === "fa" && <ArrowLeft />}{" "}
          {locale === "en" && <ArrowRight />}
        </div>
      )}
    </div>
  );
};

export default PostContent;
