import { motion as m } from "framer-motion";
import ProjectsPageHeaderGrp from "./header";
import { ProjectsList } from "./projects";
import Copyright from "../copyright";

export default function ProjectsPage() {
    return (
        <m.div
            initial={{ transform: "translate3d(0, 0, 0)" }}
            transition={{ duration: 0.5 }}
            exit={{ 
                opacity: 0, 
                transform: "translate3d(0, -5%, 0)" 
            }} 
            className="container page-wrapper transition-page">
            <ProjectsPageHeaderGrp />
            <div className="project-wrapper">
                <ProjectsList />
            </div>
            <Copyright copyright_class="page-copyright pb-3" />
        </m.div>
    );
}