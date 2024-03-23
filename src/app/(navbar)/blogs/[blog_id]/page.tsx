import { SingleBlogPageHeaderGrp } from "@/components/blogs/header";
import { SingleBlogContent } from "@/components/blogs/single/skeleton";
import { TableOfContents } from "@/components/blogs/single/toc";
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
      <article className="sl-l-container__content blog-l-wrapper row">
        <TableOfContents />
        <SingleBlogContent id={params.blog_id as string} />
      </article>
    </>
  );
}
