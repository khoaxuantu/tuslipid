import { BLOG_INFO_LIST } from "@/lib/general_info";
import { BlogsList } from "./list";

export function BlogsContent() {
  /* BLOG_INFO_LIST needs sorting first */
  BLOG_INFO_LIST.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA < dateB) return 1;
    else if (dateA > dateB) return -1;
    else return 0;
  });

  return (
    <div className="sl-l-container__content row">
      <div className="col-4"></div>
      <div className="col-8 blogs-l-wrapper">
        <BlogsList blogInfoList={BLOG_INFO_LIST} />
      </div>
    </div>
  );
}
