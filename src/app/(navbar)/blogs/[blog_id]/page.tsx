import { SingleBlogPageHeaderGrp } from "@/components/blogs/header";
import { SingleBlogContent } from "@/components/blogs/single/skeleton";
import { blogInfoDict } from "@/lib/general_info";
import { notFound } from "next/navigation";

interface DynamicParams {
  params: {
    blog_id: string;
  };
}

export default function SingleBlogPage({ params }: DynamicParams) {
  if (!blogInfoDict[params.blog_id]) notFound();

  return (
    <>
      <SingleBlogPageHeaderGrp id={params.blog_id as string} />
      <hr></hr>
      <SingleBlogContent id={params.blog_id as string} />
    </>
  );
}
