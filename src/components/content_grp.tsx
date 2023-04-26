import AboutIntro from "./contents/introduction";
import Works from "./contents/works";
import Education from "./contents/edu";
import * as Blogs from "./contents/blogs";
import { AboutProject, ProjectsList } from "./contents/projects";
import { blogInfoList } from "../lib/general_info";

export function AboutContent() {
    return (
        <div className="content-grp">
            <AboutIntro />
            <Education />
            <Works />
            <AboutProject />
        </div>
    );
}

export function ProjectsContent() {
    return (
        <div className="project-wrapper">
            <ProjectsList />
        </div>
    );
}

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
            <Blogs.BlogsList blogInfoList={blogInfoList} />
        </div>
    );
}

export function SingleBlogContent(props: {id: string}) {
    return (
        <article className="single-blog-wrapper fade-in-left">
            <Blogs.SingleBlog id={props.id} />
        </article>
    );
}