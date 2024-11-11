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

type Params = Promise<{ category: string; lang: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { category, lang } = await params;

  const cat = DUMMY_CATEGORIES.find((cat) => cat.slug === category);

  const posts = DUMMY_POSTS.filter(
    (post) => post.category.slug!.toLocaleLowerCase() === category
  );

  return (
    <PaddingContainer>
      <div className="mb-10">
        <div className="font-semibold text-4xl">{cat?.title}</div>
        <p className="text-lg text-neutral-600">{cat?.description}</p>
      </div>
      <PostList locale={lang} posts={posts} />
    </PaddingContainer>
  );
};

export default Page;
