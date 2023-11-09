import AboutHeaderGrp from "./header";
import AboutIntro from "./introduction";
import Works from "./works";
import Education from "./edu";
import { AboutProject } from "../projects/projects";
import Copyright from "../copyright";
import GetInTouch from "./get_in_touch";

export default function AboutPage() {
    return (
        <div className="container page-wrapper transition-page">
            <AboutHeaderGrp />
            <div className="content-grp">
                <AboutIntro />
                <Education />
                <Works />
                <AboutProject />
                <GetInTouch />
            </div>
            <Copyright copyright_class="page-copyright pb-3" />
        </div>
    );
}
