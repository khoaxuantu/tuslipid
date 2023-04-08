import { Link } from "react-router-dom";

export function AboutProject() {
    return (
        <section className="mb-5">
            <div className="header-txt">
                <b>What I have built</b>
            </div>
            <div className="description-txt p-2">
                Let's check out some projects that I've done
                ------{"> "}
                <Link to="/projects">Projects</Link>
            </div>
        </section>
    );
}