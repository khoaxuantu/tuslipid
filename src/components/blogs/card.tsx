import Link from "next/link";
import { BlogProps } from "./types";

import "./card.scss";

interface BlogCardProps extends BlogProps {}

export default function BlogCard(props: BlogCardProps) {
  return (
    <div className="blog-card">
      <header>
        <h3>{props.title}</h3>
        <small>
          <i>
            <span>{formatDate(props.date)} |</span>{" "}
            <span>{props.tags.map((tag) => `#${tag}`).join(" ")}</span>
          </i>
        </small>
      </header>
      <div className="body">{props.brief_description}</div>
      <footer>
        <Link href={"/blogs" + props.url + "/"}>Read more {">>"}</Link>
      </footer>
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
