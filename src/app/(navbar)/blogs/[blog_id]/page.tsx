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
  const id = params.blog_id.replaceAll("-", "_");
  if (!BLOG_INFO_DICT[id]) notFound();

  return (
    <>
      <SingleBlogPageHeaderGrp id={id as string} />
      <hr></hr>
      <main>
        <article className="blog-l-wrapper row">
          <TableOfContents />
          <SingleBlogContent id={id as string} />
        </article>
      </main>
    </>
  );
}
