import { BLOG_INFO_DICT } from "@/lib/general_info";

export function BlogsPageHeaderGrp() {
  return (
    <header>
      <h1 className="pt-2 pb-2">Tus's Blogs</h1>
      <blockquote className="mt-2">Some notes, some ideas, some opinions</blockquote>
      <hr />
    </header>
  );
}

export function SingleBlogPageHeaderGrp(props: { id: string }) {
  return (
    <header>
      <h2 id="blog-title" className="pt-2 pb-2">{BLOG_INFO_DICT[props.id].title}</h2>
      <blockquote className="mt-2">{formatDate(BLOG_INFO_DICT[props.id].date)}</blockquote>
    </header>
  );
}

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  };

  return date.toLocaleDateString("en-UK", options);
}
