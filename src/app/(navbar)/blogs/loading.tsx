import { BlogsPageHeaderGrp } from "@/components/blogs/header";

export default function BlogsLoading() {
  return (
    <>
      <BlogsPageHeaderGrp />
      <div className="blogs-l-wrapper" style={{ height: 1000 }}>
        <i>Fetching blogs...</i>
      </div>
    </>
  );
}
