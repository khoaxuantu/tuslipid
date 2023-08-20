import ProjectsPageHeaderGrp from "./header";
import { ProjectsList } from "./projects";
import Copyright from "../copyright";

export default function ProjectsPage() {
    return (
        <div className="container page-wrapper transition-page">
            <ProjectsPageHeaderGrp />
            <div className="project-wrapper">
                <ProjectsList />
            </div>
            <Copyright copyright_class="page-copyright pb-3" />
        </div>
    );
}
