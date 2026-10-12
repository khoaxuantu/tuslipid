import { BlogsContent } from "@/components/blogs/content";
import { BlogsPageHeaderGrp } from "@/components/blogs/header";
import ButtonGoTop from "@/components/global/button/gotop";
import Copyright from "@/components/global/copyright";
import "./page.scss";

export default function BlogsPage() {
  return (
    <main id="blogs">
      <BlogsPageHeaderGrp />
      <BlogsContent />
      <Copyright />
      <ButtonGoTop />
    </main>
  );
}
