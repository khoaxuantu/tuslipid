import AboutHeaderGrp from "./header";
import AboutIntro from "./introduction";
import Works from "./works";
import Education from "./edu";
import { AboutProject } from "../projects/projects";
import Copyright from "../copyright";

export default function AboutPage() {
    return (
        <div className="container page-wrapper transition-page">
            <AboutHeaderGrp />
            <div className="content-grp">
                <AboutIntro />
                <Education />
                <Works />
                <AboutProject />
            </div>
            <Copyright copyright_class="page-copyright pb-3" />
        </div>
    );
}
