import Copyright from "@/components/global/copyright";
import ProjectsPageHeaderGrp from "@/components/projects/header";
import { Metadata } from "next";

import { ProjectList } from "@/components/projects/list";
import "./page.scss";

const projDescription = `I just have studied Information Technology for three years, \
but luckily have some fun works done.`;
const projTitle = "Projects";
const projThumb = "/seo/projects-tuslipid.webp";
const projPath = "/projects";

export const metadata: Metadata = {
  title: projTitle,
  description: projDescription,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: projTitle,
    description: projDescription,
    url: projPath,
    siteName: "Something from Tusss",
    images: projThumb,
  },
  twitter: {
    title: projTitle,
    description: projDescription,
    images: projThumb,
  },
};

export default function ProjectsPage() {
  return (
    <main id="project">
      <ProjectsPageHeaderGrp />
      <article>
        <div className="container">
          <ProjectList />
        </div>
      </article>
      <Copyright />
    </main>
  );
}
