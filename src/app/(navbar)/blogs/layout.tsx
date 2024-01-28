import Copyright from "@/components/copyright";
import { Metadata } from "next";

const blogsDescription = "Some notes, some ideas, some opinions";
const blogThumb = "/seo/blogs-tuslipid.webp";
const url = process.env.HOST_URL + "/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: blogsDescription,
  metadataBase: new URL(url),
  openGraph: {
    images: blogThumb,
    description: blogsDescription,
    title: "Tusss Blogs",
    siteName: "Tusss Blogs",
  },
  twitter: {
    images: blogThumb,
    description: blogsDescription,
    title: "Tusss Blogs"
  },
};

function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container page-wrapper transistion-page">
      {children}
      <Copyright copyright_class="page-copyright mt-5 pt-5 pb-3" />
    </div>
  );
}

export default BlogsLayout;
