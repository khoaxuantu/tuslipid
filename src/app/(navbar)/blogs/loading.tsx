import { BlogsPageHeaderGrp } from "@/components/blogs/header";

export default function BlogsLoading() {
  return (
    <>
      <BlogsPageHeaderGrp />
      <div className="blog-wrapper" style={{ height: 1000 }}>
        <i>Fetching blogs...</i>
      </div>
    </>
  );
}
