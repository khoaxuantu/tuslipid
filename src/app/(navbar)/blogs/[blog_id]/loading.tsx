import { BlogsPageHeaderGrp } from "@/components/blogs/header";
import "./page.scss";

export default function BlogLoading() {
  return (
    <main id="blog">
      <BlogsPageHeaderGrp />
      <article style={{ height: 1000 }}>
        <div className="container" style={{ justifyContent: "center" }}>
          <i>Fetching blog...</i>
        </div>
      </article>
    </main>
  );
}
