import AboutIntro from "./contents/introduction";
import Works from "./contents/works";
import { AboutProject } from "./contents/projects";

export function AboutContent() {
    return (
        <div className="content-grp">
            <AboutIntro />
            <Works />
            <AboutProject />
        </div>
    );
}