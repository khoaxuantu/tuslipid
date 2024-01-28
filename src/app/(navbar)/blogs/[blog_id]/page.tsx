import { SingleBlogPageHeaderGrp } from "@/components/blogs/header";
import { SingleBlogContent } from "@/components/blogs/single/skeleton";

interface DynamicParams {
  params: {
    blog_id: string;
  };
}

export default function SingleBlogPage({ params }: DynamicParams) {
  return (
    <>
      <SingleBlogPageHeaderGrp id={params.blog_id as string} />
      <hr></hr>
      <SingleBlogContent id={params.blog_id as string} />
    </>
  );
}
