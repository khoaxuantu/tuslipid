import { BLOG_INFO_DICT } from "@/lib/general_info";
import DateText from "../global/date";
import Header from "../global/header";

export function BlogsPageHeaderGrp() {
  return <Header title="Tus's Blogs" subtitle="Some notes, some ideas, some opinions"></Header>;
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
