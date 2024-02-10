import ProjectsPageHeaderGrp from "@/components/projects/header";
import { ProjectsList } from "@/components/projects/projects";
import Copyright from "@/components/copyright";
import { Metadata } from "next";

const projDescription = `I just have studied Information Technology for three years, \
but luckily have some fun works done.`;
const projTitle = "Projects";
const projThumb = "/seo/projects-tuslipid.webp";
const projPath = "/projects";

export const metadata: Metadata = {
  title: projTitle,
  description: projDescription,
  alternates: {
    canonical: '/projects'
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
    <>
      <div className="sl-l-container sl-l-wrapper transition-page">
        <ProjectsPageHeaderGrp />
        <div className="project-l-wrapper">
          <ProjectsList />
        </div>
        <Copyright copyright_class="page-copyright pb-3" />
      </div>
    </>
  );
}
