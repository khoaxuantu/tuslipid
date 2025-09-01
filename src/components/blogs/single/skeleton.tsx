import Copyright from "@/components/copyright";
import { BLOG_INFO_DICT } from "@/lib/general_info";

export async function SingleBlogContent(props: { id: string }) {
  const blogInfo = BLOG_INFO_DICT[props.id];
  const { default: Post } = await import(`@/markdown/${blogInfo.file}`);

  return (
    <section className="col-8 blog-c-content transition-blog">
      <Post />
      <Copyright className="sl-c-copyright__page mt-5 pt-5 pb-3" />
    </section>
  );
}
