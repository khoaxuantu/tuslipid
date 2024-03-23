import { SingleBlog } from "./content";
import { blogInfoDict } from "@/lib/general_info";
import { getMdContent } from "@/lib/factory/markdownBase";

export async function SingleBlogContent(props: {id: string}) {
  const blogInfo = blogInfoDict[props.id];
  const txt = await getMdContent(blogInfo.file);

  return (
    <div className="col-8 blog-c-content transition-blog">
      <SingleBlog content={txt} />
    </div>
  );
}
