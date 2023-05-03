import AboutIntro from "./contents/introduction";
import Works from "./contents/works";
import Education from "./contents/edu";
// import * as Blogs from "./contents/blogs";
import { AboutProject, ProjectsList } from "./contents/projects";
import { blogInfoList } from "../lib/general_info";
import { lazy } from "react";

// const AboutIntro = lazy(() => import("./contents/introduction"));
// const Works = lazy(() => import("./contents/works"));
// const Education = lazy(() => import("./contents/edu"));
// const AboutProject = lazy(() => import("./contents/projects").then(module => {
//     return {default: module.AboutProject};
// }))
// const ProjectsList = lazy(() => import("./contents/projects").then(module => {
//     return {default: module.ProjectsList};
// }))
const BlogsList = lazy(() => import("./contents/blogs").then(module => {
    return {default: module.BlogsList};
}))
const SingleBlog = lazy(() => import("./contents/blogs").then(module => {
    return {default: module.SingleBlog};
}))

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