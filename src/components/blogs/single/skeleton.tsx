import Copyright from "@/components/copyright";
import { getMdContent } from "@/lib/factory/markdownBase";
import { BLOG_INFO_DICT } from "@/lib/general_info";
import { SingleBlog } from "./content";

export async function SingleBlogContent(props: {id: string}) {
  const blogInfo = BLOG_INFO_DICT[props.id];
  const txt = await getMdContent(blogInfo.file);

  return (
    <section className="col-8 blog-c-content transition-blog">
      <SingleBlog content={txt} />
      <Copyright className="sl-c-copyright__page mt-5 pt-5 pb-3" />
    </section>
  );
}
