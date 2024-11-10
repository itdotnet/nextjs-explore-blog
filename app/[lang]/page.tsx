import CtaCard from "@/components/elements/cta-card";
import PaddingContainer from "@/components/layout/padding-container";
import PostCard from "@/components/post/post-card";
import PostList from "@/components/post/post-list";
import { DUMMY_POSTS } from "@/DUMMY_DATA";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <PaddingContainer>
      <main className="space-y-10">
        <PostCard locale={params.lang} post={DUMMY_POSTS[0]} />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 0 && index < 3)}
        />
        <CtaCard locale={params.lang} />
        <PostCard locale={params.lang} post={DUMMY_POSTS[3]} reverse />
        <PostList
          posts={DUMMY_POSTS.filter((_post, index) => index > 3 && index < 6)}
        />
      </main>
    </PaddingContainer>
  );
}
