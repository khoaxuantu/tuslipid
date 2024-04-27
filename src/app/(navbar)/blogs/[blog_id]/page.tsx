import { SingleBlogPageHeaderGrp } from "@/components/blogs/header";
import { SingleBlogContent } from "@/components/blogs/single/skeleton";
import { TableOfContents } from "@/components/blogs/single/toc";
import { BLOG_INFO_DICT } from "@/lib/general_info";
import { notFound } from "next/navigation";

interface DynamicParams {
  params: {
    blog_id: string;
  };
}

export default function SingleBlogPage({ params }: DynamicParams) {
  if (!BLOG_INFO_DICT[params.blog_id]) notFound();

  return (
    <>
      <SingleBlogPageHeaderGrp id={params.blog_id as string} />
      <hr></hr>
      <main>
        <article className="blog-l-wrapper row">
          <TableOfContents />
          <SingleBlogContent id={params.blog_id as string} />
        </article>
      </main>
    </>
  );
}
