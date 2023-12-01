import ProjectsPageHeaderGrp from "./header";
import { ProjectsList } from "./projects";
import Copyright from "../copyright";
import { getMetadataURL } from "../../lib/utils/Location";
import { useLocation } from "react-router-dom";
import { Metadata } from "../seo/Metadata";
import CustomHead from "../seo";

const projDescription = `I just have studied Information Technology for three years,
but luckily have some fun works done.`;
const projTitle = "Projects";
const projThumb = process.env.PUBLIC_URL + "/seo/projects-tuslipid.webp";

export default function ProjectsPage() {
  const projURL = getMetadataURL(useLocation());

  const metadata: Metadata = {
    title: projTitle,
    description: projDescription,
    image: projThumb,
    canonicalURL: projURL,
    og: {
      title: projTitle,
      description: projDescription,
      url: projURL,
      site_name: "Something from Tusss",
      image: projThumb,
    },
    twitter: {
      title: projTitle,
      description: projDescription,
      url: projURL,
      image: projThumb,
    },
  };

  return (
    <>
      <CustomHead metadata={metadata} />
      <div className="container page-wrapper transition-page">
        <ProjectsPageHeaderGrp />
        <div className="project-wrapper">
          <ProjectsList />
        </div>
        <Copyright copyright_class="page-copyright pb-3" />
      </div>
    </>
  );
}
