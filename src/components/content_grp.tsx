import AboutIntro from "./contents/introduction";
import Works from "./contents/works";
import { AboutProject, ProjectsList } from "./contents/projects";

export function AboutContent() {
    return (
        <div className="content-grp">
            <AboutIntro />
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