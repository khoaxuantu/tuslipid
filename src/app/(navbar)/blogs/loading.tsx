import { BlogsPageHeaderGrp } from "@/components/blogs/header";

export default function BlogsLoading() {
  return (
    <>
      <BlogsPageHeaderGrp />
      <main
        className="blog-l-wrapper blog-c-content"
        style={{ height: 1000 }}
      >
        <i>Fetching blogs...</i>
      </main>
    </>
  );
}
