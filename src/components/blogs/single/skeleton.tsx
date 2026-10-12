import Copyright from "@/components/global/copyright";
import { BLOG_INFO_DICT } from "@/lib/general_info";

export async function SingleBlogContent(props: { id: string }) {
  const blogInfo = BLOG_INFO_DICT[props.id];
  const { default: Post } = await import(`@/markdown/${blogInfo.file}`);

  return (
    <section>
      <div className="content">
        <Post />
        <Copyright />
      </div>
    </section>
  );
}
