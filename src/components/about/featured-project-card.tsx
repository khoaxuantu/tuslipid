import ExternalLinkIcon from "../global/icons/ExternalLink";
import GithubIcon from "../global/icons/GithubIcon";
import { ProjectProps } from "../projects/types";

interface FeaturedProjectCardProps extends ProjectProps {}

export default function FeaturedProjectCard(props: FeaturedProjectCardProps) {
  return (
    <div className="card">
      <header>
        <h3>{props.title}</h3>
      </header>
      <div className="body">
        <div className="tools">
          {props.tools.map((tool) => {
            return <span key={tool}>{tool}</span>;
          })}
        </div>
        <div className="description">
          {props.description.map((p, index) => {
            return <p key={index}>{p}</p>;
          })}
        </div>
      </div>
      <footer className="href">
        <a
          href={props.githubURL}
          target="_blank"
          rel="noreferrer"
          aria-label={`project github href - ${props.title}`}
        >
          <GithubIcon width={24} height={24} />
        </a>
        <a
          href={props.demoURL}
          target="_blank"
          rel="noreferrer"
          aria-label={`project demo href - ${props.title}`}
        >
          <ExternalLinkIcon width={24} height={24} />
        </a>
      </footer>
    </div>
  );
}
