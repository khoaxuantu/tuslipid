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
    canonical: "/blogs",
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
    title: "Tusss Blogs",
  },
};

function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default BlogsLayout;
