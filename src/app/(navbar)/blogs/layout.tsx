import Copyright from "@/components/copyright";
import Button from "@/lib/factory/button";
import { Metadata } from "next";

const blogsDescription = "Some notes, some ideas, some opinions";
const blogThumb = "/seo/blogs-tuslipid.webp";

export const metadata: Metadata = {
  title: {
    default: "Blogs",
    template: "%s | Tusss Blogs",
  },
  description: blogsDescription,
  alternates: {
    canonical: '/blogs',
  },
  openGraph: {
    images: blogThumb,
    description: blogsDescription,
    title: "Tusss Blogs",
    siteName: "Tusss Blogs",
    url: "/blogs",
  },
  twitter: {
    images: blogThumb,
    description: blogsDescription,
    title: "Tusss Blogs"
  },
};

function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="sl-l-container sl-l-container__blog sl-l-wrapper transistion-page">
        {children}
        <Button buttontype="go-top" />
        <Copyright className="sl-c-copyright__page mt-5 pb-3" />
      </div>
      <div className="fkkk-next-js">
        <link rel="preload stylesheet" href="/css/markdown.css" as="style" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/atom-one-dark.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossOrigin="anonymous" />
      </div>
    </>
  );
}

export default BlogsLayout;
