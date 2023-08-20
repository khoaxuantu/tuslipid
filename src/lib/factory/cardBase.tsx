import ImportMedia from "./importMedia"
import { BsGithub } from "react-icons/bs"
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

interface ICardProps {
    id: number | string,
    content_section: "Projects" | "Blogs",
    title: string
}

export interface IProjCardProps extends ICardProps {
    description: string[],
    tools: string[],
    demoURL?: string,
    githubURL?: string,
    imageURL?: string
}

export interface IBlogCardProps extends ICardProps {
    brief_description: string,
    url: string,
    file: string,
}


const reqImgs = require.context('../../../public/images/projects', true, /\.jpg$|\.svg$|\.webp$/);
export const imgs = new ImportMedia(reqImgs).get();

function ProjectCard(props: IProjCardProps) {
    let image;
    if (props.imageURL !== undefined) {
        image = <img src={props.imageURL} alt={props.title+" image"} />;
    }

    let demo, github;
    if (props.githubURL !== undefined) {
        github = (<li>
            <a href={props.githubURL} target="_blank" rel="noreferrer">
                <BsGithub size={24} color="#000" />
            </a>
        </li>);
    }
    if (props.demoURL !== undefined) {
        demo = (<li className="ps-3">
            <a href={props.demoURL} target="_blank" rel="noreferrer">
                <FiExternalLink size={24} color="#000" />
            </a>
        </li>);
    }

    return (
        <div className="card card-proj mb-5">
            <div className="col-5 proj-image">
                {image}
            </div>
            <div className="col-7 p-3 proj-description">
                <h3 className="header-txt-proj">{props.title}</h3>
                <ul className="pb-4 ps-2 proj-tool-list">{
                    props.tools.map(tool => {
                        return <li className="pe-2" key={tool}>{tool}</li>;
                    })
                }</ul>
                <div className="ps-2">{
                    props.description.map((p, index) => {
                        return <p key={index} className="pb-2 description-txt">{p}</p>;
                    })
                }</div>
                <ul className="proj-href">
                    {github}
                    {demo}
                </ul>
            </div>
        </div>
    );
}

function BlogsCard(props: IBlogCardProps) {
    return (
        <div className="card card-blog mb-5 fade-in-left">
            <h3 className="header-txt-blog p-3">{props.title}</h3>
            <div className="description-txt-blog p-3">{props.brief_description}</div>
            <div className="read-more-btn mb-4">
                <Link className="description-txt-blog" to={"/blogs" + props.url}>Read more -{">"}</Link>
            </div>
        </div>
    );
}

/**
 * A navigation card factory
 * @param props Project Card Interface | Blog Card Interface
 * @returns Card JSX Element
 */
function Card(props: IProjCardProps | IBlogCardProps) {
    let card;
    if (props.content_section === "Projects") {
        card = <ProjectCard {...props as IProjCardProps}/>
    }
    else if (props.content_section === "Blogs") {
        card = <BlogsCard {...props as IBlogCardProps} />
    }

    return (
        <>
            {card}
        </>
    );
}

export default Card;
