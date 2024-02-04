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
  const blogTitle = `${blogInfo.title} | Tusss Blogs`;
  const blogThumb = "/seo/blogs-tuslipid.webp";

  return {
    title: blogInfo.title,
    description: blogInfo.brief_description,
    openGraph: {
      type: "article",
      title: blogTitle,
      description: blogInfo.brief_description,
      url: blogId,
      images: blogThumb,
      siteName: "Tusss Blogs",
      publishedTime: blogInfo.date.toISOString(),
      authors: "Xuan Khoa Tu Nguyen",
    },
    twitter: {
      title: blogTitle,
      description: blogInfo.brief_description,
      images: blogThumb,
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
    </>);
}
