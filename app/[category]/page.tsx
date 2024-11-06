import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-list";

export async function generateStaticParams() {
  return DUMMY_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    };
  });
}

type Params = Promise<{ category: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { category } = await params;

  const posts = DUMMY_POSTS.filter(
    (post) => post.category.slug!.toLocaleLowerCase() === category
  );

  return (
    <PaddingContainer>
      <PostList posts={posts} />
    </PaddingContainer>
  );
};

export default Page;
