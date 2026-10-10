import { BLOG_INFO_DICT } from "@/lib/general_info";
import DateText from "../shared/date";
import Header from "../shared/header";

export function BlogsPageHeaderGrp() {
  return (
    <Header title="Tus's Blogs" subtitle="Some notes, some ideas, some opinions">
      <hr />
    </Header>
  );
}

export function SingleBlogPageHeaderGrp(props: { id: string }) {
  const blog = BLOG_INFO_DICT[props.id];
  return (
    <Header
      title={blog.title}
      titleProps={{ id: "blog-title" }}
      subtitle={
        <>
          <DateText value={blog.date} />
          <br />
          <i>
            <small>
              Updated at: <DateText value={blog.updatedAt} />
            </small>
          </i>
        </>
      }
    ></Header>
  );
}
