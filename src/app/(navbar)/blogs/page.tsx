import { BlogsContent } from "@/components/blogs/content";
import { BlogsPageHeaderGrp } from "@/components/blogs/header";
import Copyright from "@/components/copyright";

export default function BlogsPage() {
  return (
    <>
      <BlogsPageHeaderGrp />
      <BlogsContent />
      <Copyright className="sl-c-copyright__page mt-5 pb-3" />
    </>
  );
}
