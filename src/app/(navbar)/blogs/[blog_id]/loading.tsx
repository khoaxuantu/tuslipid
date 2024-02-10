import { BlogsPageHeaderGrp } from "@/components/blogs/header";

export default function BlogLoading() {
  return (
    <>
      <BlogsPageHeaderGrp />
      <div className="blog-l-wrapper" style={{ height: 1000 }}>
        <i>Fetching blog...</i>
      </div>
    </>
  );
}
