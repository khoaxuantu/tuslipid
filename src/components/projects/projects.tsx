import { Link } from "react-router-dom";
import Card, { IProjCardProps } from "../../lib/factory/cardBase";
import { projInfoDict } from "../../lib/general_info";


export function AboutProject() {
    const FEATURE_PROJ_NUMBER = 4;
    const featuredProj = getFeaturedProj(FEATURE_PROJ_NUMBER);

    return (
        <section className="mb-5">
            <h3 className="header-txt">
                What I have built
            </h3>
            <div className="menu-proj-wrapper">{
                featuredProj.map(proj => {
                    return (
                        <Card key={proj.id} isFeatured={true} {...proj} />
                    );
                })
            }</div>
            <div className="body-txt pt-3 pe-2 pb-2">
                Above are only my featured projects.
                Let's navigate to my full list here {" "}
                <span>
                    ---{"> "}
                    <Link to="/projects">All Projects</Link>
                </span>
            </div>
        </section>
    );
}

function getFeaturedProj(amount: number) {
    return Object.entries(projInfoDict).sort(compareProj).reduce<IProjCardProps[]>((
        key_list: IProjCardProps[], proj: [string, IProjCardProps]) => {
            if (key_list.length >= amount) return key_list;
            key_list.push(proj[1]);
            return key_list;
        }, []);
}

export function ProjectsList() {
    return (
        <>
            {Object.entries(projInfoDict).sort(compareProj).map(entry => {
                return <Card key={entry[0]} {...projInfoDict[entry[0]]} />;
            })}
        </>
    );
}

function compareProj(a: [string, IProjCardProps], b: [string, IProjCardProps]) {
    return ((a[1].id as number) - (b[1].id as number));
}
