import { DUMMY_CATEGORIES, DUMMY_POSTS } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-list";
import { cache } from "react";

export async function generateStaticParams() {
  return DUMMY_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    };
  });
}

export const getCategoryData = cache((categorySlug: string) => {
  const category = DUMMY_CATEGORIES.find((cat) => cat.slug === categorySlug);

  return category;
});

export const generateMetadata = async ({
  params: { category, lang },
}: {
  params: { category: string; lang: string };
}) => {
  const catData = getCategoryData(category);
  return {
    title: catData?.title,
    description: catData?.description,
    openGraph: {
      title: catData?.title,
      description: catData?.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/${category}`,
      siteName: catData?.title,
      /* images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/${category}/opengraph-image.png`,
          width: 1200,
          height: 628,
        },
      ], */
      locale: lang,
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${category}`,
      languages: {
        "en-US": `${process.env.NEXT_PUBLIC_SITE_URL}/en/${category}`,
        "fa-IR": `${process.env.NEXT_PUBLIC_SITE_URL}/fa/${category}`,
      },
    },
  };
};

type Params = Promise<{ category: string; lang: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { category, lang } = await params;

  const cat = getCategoryData(category);

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
