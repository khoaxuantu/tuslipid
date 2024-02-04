import { blogInfoDict } from "@/lib/general_info";
import { Metadata } from "next";

type Props = {
  params: { blog_id: string };
};

const blogBaseURL = process.env.HOST_URL + "/blogs";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogId = params.blog_id;
  const blogInfo = blogInfoDict[blogId];
  if (!blogInfo) return notFoundMetadata();
  const url = blogBaseURL + "/" + blogId;

  return {
    title: blogInfo.title,
    description: blogInfo.brief_description,
    metadataBase: new URL(url),
    openGraph: {
      type: "article",
      title: blogInfo.title,
      description: blogInfo.brief_description,
      url: url,
    },
    twitter: {
      title: blogInfo.title,
      description: blogInfo.brief_description,
    },
  };
}

function notFoundMetadata(): Metadata {
  const notFoundDescription =
    `Oi ~ This URL does not exist, get to my blogs page at ${blogBaseURL}`;

  return {
    title: "404 | Tusss Blogs",
    description: notFoundDescription,
    openGraph: {
      title: "404 | Page not found | Tusss Blogs",
      description: notFoundDescription,
    },
    twitter: {
      title: "404 | Page not found | Tusss Blogs",
      description: notFoundDescription,
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <link rel="stylesheet" href="/css/markdown.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/atom-one-dark.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css" integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossOrigin="anonymous" />
    </>);
}
