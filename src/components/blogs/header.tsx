import { BLOG_INFO_DICT } from "@/lib/general_info";

export function BlogsPageHeaderGrp() {
    return (
      <div className='sl-l-container__header'>
        <div className='blogs-c-txt__header'>
          <b>Tus's Blogs</b>
        </div>
        <div className='blogs-c-txt__body mt-2'>
          Some notes, some ideas, some opinions
        </div>
        <hr />
      </div>
    );
}

export function SingleBlogPageHeaderGrp(props: {id: string}) {
    return (
      <div className='sl-l-container__header'>
        <div className='blog-c-txt__header'>
          <b>{BLOG_INFO_DICT[props.id].title}</b>
        </div>
        <div className='blog-c-txt__body mt-2'>
          {formatDate(BLOG_INFO_DICT[props.id].date)}
        </div>
      </div>
    );
}

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }

  return date.toLocaleDateString("en-UK", options);
}
