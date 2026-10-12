import { BLOG_INFO_DICT } from "@/lib/general_info";
import DateText from "../global/date";

export function BlogsPageHeaderGrp() {
  return (
    <header>
      <h1>Tus's Blogs</h1>
      <blockquote>Some notes, some ideas, some opinions</blockquote>
    </header>
  );
}

export function SingleBlogPageHeaderGrp(props: { id: string }) {
  return (
    <header>
      <h1>{BLOG_INFO_DICT[props.id].title}</h1>
      <blockquote>
        <DateText value={BLOG_INFO_DICT[props.id].date} />
        <br />
        <i>
          <small>
            Updated at: <DateText value={BLOG_INFO_DICT[props.id].updatedAt} />
          </small>
        </i>
      </blockquote>
    </header>
  );
}
