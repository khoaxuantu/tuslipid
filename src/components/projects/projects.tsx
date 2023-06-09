import { Link } from "react-router-dom";
import Card from "../../lib/factory/cardBase";
import { projInfoDict } from "../../lib/general_info";

export function AboutProject() {
    return (
        <section className="mb-5">
            <h3 className="header-txt">
                What I have built
            </h3>
            <div className="description-txt p-2">
                Let's check out some projects that I've done
                ------{"> "}
                <Link to="/projects">Projects</Link>
            </div>
        </section>
    );
}

export function ProjectsList() {
    return (
        <>
            {Object.keys(projInfoDict).map(key => {
                return <Card key={key} {...projInfoDict[key]} />;
            })}
        </>
    );
}