import { blogInfoList } from "../../lib/general_info";
import { BlogsList, SingleBlog } from "./blogs";

export function BlogsContent() {
    /* blogInfoList needs sorting first */
    blogInfoList.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA < dateB) return 1;
        else if (dateA > dateB) return -1;
        else return 0;
    });

    return (
        <div className="blog-wrapper">
            <BlogsList blogInfoList={blogInfoList} />
        </div>
    );
}

export function SingleBlogContent(props: {id: string}) {
    return (
        <article className="single-blog-wrapper transition-blog">
            <SingleBlog id={props.id} />
        </article>
    );
}