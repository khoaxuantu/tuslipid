import Link from "next/link";
import { IBlogCardProps, IProjCardProps } from "../type/card";
import GithubIcon from "./icons/GithubIcon";
import ExternalLinkIcon from "./icons/ExternalLink";

function ProjectCard(props: IProjCardProps) {
  return (
    <>
      {!props.isFeatured ? (
        <DefaultProjectCard {...props} />
      ) : (
        <FeaturedProjCard {...props} />
      )}
    </>
  );
}

function DefaultProjectCard(props: IProjCardProps) {
  let image = ProjImage(props);
  let href = ProjHref(props);

  return (
    <div className="sl-c-card projects-c-card mb-5">
      <div className="col-5 projects-c-img">{image}</div>
      <div className="col-7 p-3 sl-c-card__proj-description">
        <h3 className="sl-c-txt__header-proj">{props.title}</h3>
        <ul className="pb-4 ps-2 sl-c-card__proj-tool-list">
          {props.tools.map((tool) => {
            return (
              <li className="pe-2" key={tool}>
                {tool}
              </li>
            );
          })}
        </ul>
        <div className="ps-2">
          {props.description.map((p, index) => {
            return (
              <p key={index} className="pb-2 sl-c-txt__body">
                {p}
              </p>
            );
          })}
        </div>
        <ul className="sl-c-card__proj-href">
          {href.github}
          {href.demo}
        </ul>
      </div>
    </div>
  );
}

function FeaturedProjCard(props: IProjCardProps) {
  let href = ProjHref(props);

  return (
    <div className="sl-c-card about-c-card__featured-proj">
      <div className="p-3 sl-c-card__proj-description">
        <h3 className="sl-c-txt__header-proj">{props.title}</h3>
        <ul className="pb-4 ps-2 sl-c-card__proj-tool-list">
          {props.tools.map((tool) => {
            return (
              <li className="pe-2" key={tool}>
                {tool}
              </li>
            );
          })}
        </ul>
        <div className="ps-2">
          {props.description.map((p, index) => {
            return (
              <p key={index} className="pb-2 sl-c-txt__body">
                {p}
              </p>
            );
          })}
        </div>
        <ul className="sl-c-card__proj-href">
          {href.github}
          {href.demo}
        </ul>
      </div>
    </div>
  );
}

function ProjImage(props: IProjCardProps) {
  if (props.imageURL !== undefined) {
    return <img src={props.imageURL} alt={props.title + " image"} loading="lazy" />;
  }
}

function ProjHref(props: IProjCardProps) {
  let demo, github;
  if (props.githubURL !== undefined) {
    github = (
      <li>
        <a
          href={props.githubURL}
          target="_blank"
          rel="noreferrer"
          aria-label={`project github href - ${props.title}`}
        >
          <GithubIcon width={24} height={24} color="#000" />
        </a>
      </li>
    );
  }
  if (props.demoURL !== undefined) {
    demo = (
      <li className="ps-3">
        <a
          href={props.demoURL}
          target="_blank"
          rel="noreferrer"
          aria-label={`project demo href - ${props.title}`}
        >
          <ExternalLinkIcon width={24} height={24} color="#000" />
        </a>
      </li>
    );
  }

  return { demo: demo, github: github };
}

function BlogsCard(props: IBlogCardProps) {
  return (
    <div className="sl-c-card blogs-c-card mb-5 fade-in-left">
      <h3 className="blogs-c-txt__header p-3">{props.title}</h3>
      <div className="blogs-c-txt__body p-3">{props.brief_description}</div>
      <div className="blogs-c-btn__read-more mb-4">
        <Link className="blogs-c-txt__body" href={"/blogs" + props.url + "/"}>
          Read more {">>"}
        </Link>
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
    card = <ProjectCard {...(props as IProjCardProps)} />;
  } else if (props.content_section === "Blogs") {
    card = <BlogsCard {...(props as IBlogCardProps)} />;
  }

  return <>{card}</>;
}

export default Card;
