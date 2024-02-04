import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";

interface SingleBlogProps {
  content: string;
}

export async function SingleBlog({ content }: SingleBlogProps) {
  return (
    <>
      <MDXRemote source={content} options={
        {
          mdxOptions: {
            remarkPlugins: [
              remarkGfm, remarkMath
            ],
            rehypePlugins: [
              // @ts-expect-error
              rehypeHighlight, rehypeSlug, rehypeKatex
            ]
          }
        }
      } />
    </>
  );
}
