import { motion as m } from "framer-motion";
import AboutHeaderGrp from "./header";
import AboutIntro from "./introduction";
import Works from "./works";
import Education from "./edu";
import { AboutProject } from "../projects/projects";
import Copyright from "../copyright";

export default function AboutPage() {
    return (
        <m.div
            initial={{ transform: "translate3d(0, 0, 0)" }}
            transition={{ duration: 0.5 }}
            exit={{ 
                opacity: 0,
                transform: "translate3d(0, -5%, 0)"
            }}
            className="container page-wrapper transition-page">
            <AboutHeaderGrp />
            <div className="content-grp">
                <AboutIntro />
                <Education />
                <Works />
                <AboutProject />
            </div>
            <Copyright copyright_class="page-copyright pb-3" />
        </m.div>
    );
}