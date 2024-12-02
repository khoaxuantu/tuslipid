import Link from "next/link";
import { IBlogCardProps, IProjCardProps } from "../type/card";
import GithubIcon from "./icons/GithubIcon";
import ExternalLinkIcon from "./icons/ExternalLink";

/**
 * A navigation card factory
 * @param props Project Card Interface | Blog Card Interface
 * @returns Card JSX Element
 */
export default function Card(props: IProjCardProps | IBlogCardProps) {
  let card;
  if (props.content_section === "Projects") {
    card = <ProjectCard {...(props as IProjCardProps)} />;
  } else if (props.content_section === "Blogs") {
    card = <BlogsCard {...(props as IBlogCardProps)} />;
  }

  return <>{card}</>;
}

function ProjectCard(props: IProjCardProps) {
  return (
    <>{!props.isFeatured ? <DefaultProjectCard {...props} /> : <FeaturedProjCard {...props} />}</>
  );
}

function DefaultProjectCard(props: IProjCardProps) {
  let image = ProjImage(props);
  let href = ProjHref(props);

  return (
    <div className="sl-c-card projects-c-card mb-5 p-4">
      <div className="projects-c-img">{image}</div>
      <div className="projects-c-card__description">
        <h3>{props.title + " "}</h3>
        <ul className="projects-c-card__tools pb-3">
          {props.tools.map((tool) => {
            return <li key={tool}>{tool}</li>;
          })}
        </ul>

        <div>
          {props.description.map((p, index) => {
            return <p key={index}>{p}</p>;
          })}
        </div>
      </div>
      <ul className="sl-c-card__href projects-c-card__href">
        {href.github}
        {href.demo}
      </ul>
    </div>
  );
}

function FeaturedProjCard(props: IProjCardProps) {
  let href = ProjHref(props);

  return (
    <div className="sl-c-card about-c-card">
      <div className="about-c-card__description p-3">
        <h3 className="p-2">{props.title}</h3>
        <ul className="about-c-card__tools pb-4 ps-2">
          {props.tools.map((tool) => {
            return (
              <li key={tool}>
                {tool}
              </li>
            );
          })}
        </ul>
        <div className="ps-2 pb-4">
          {props.description.map((p, index) => {
            return <p key={index}>{p}</p>;
          })}
        </div>
        <ul className="sl-c-card__href about-c-card__href">
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
      <li className="pe-3">
        <a
          href={props.githubURL}
          target="_blank"
          rel="noreferrer"
          aria-label={`project github href - ${props.title}`}
        >
          <GithubIcon width={24} height={24} color="var(--md-sys-color-on-surface)" />
        </a>
      </li>
    );
  }
  if (props.demoURL !== undefined) {
    demo = (
      <li>
        <a
          href={props.demoURL}
          target="_blank"
          rel="noreferrer"
          aria-label={`project demo href - ${props.title}`}
        >
          <ExternalLinkIcon width={24} height={24} color="var(--md-sys-color-on-surface)" />
        </a>
      </li>
    );
  }

  return { demo: demo, github: github };
}

function BlogsCard(props: IBlogCardProps) {
  return (
    <div className="sl-c-card blogs-c-card mb-5 fade-in-left p-3">
      <h3>{props.title}</h3>
      <div className="">
        <i>
          <span>{formatDate(props.date)} |</span>{" "}
          <span>{props.tags.map((tag) => `#${tag}`).join(" ")}</span>
        </i>
      </div>
      <div>{props.brief_description}</div>
      <div className="blogs-c-btn__read-more">
        <Link href={"/blogs" + props.url + "/"}>Read more {">>"}</Link>
      </div>
    </div>
  );
}

function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-UK", options);
}
