import AboutHeaderGrp from "./header";
import AboutIntro from "./introduction";
import Works from "./works";
import Education from "./edu";
import { AboutProject } from "../projects/projects";
import Copyright from "../copyright";
import GetInTouch from "./get_in_touch";
import { Metadata } from "../seo/Metadata";
import SEO from "../seo";
import { useLocation } from "react-router-dom";
import { getMetadataURL } from "../../lib/utils/Location";

const aboutDescription = `Here comes my profile - from a mechanical engineering student to \
a computer science student then a full-stack developer`;
const aboutImage = process.env.PUBLIC_URL + "/seo/about-tuslipid.jpg";

export default function AboutPage() {
  const aboutURL = getMetadataURL(useLocation());

  const metadata: Metadata = {
    title: "About me",
    description: aboutDescription,
    og: {
      title: "About Tuslipid",
      description: aboutDescription,
      url: aboutURL,
      type: "profile",
      image: aboutImage,
    },
    twitter: {
      title: "About Tuslipid",
      description: aboutDescription,
      url: aboutURL,
      image: aboutImage,
    },
  };

  return (
    <>
      <SEO props={metadata} />
      <div className="container page-wrapper transition-page">
        <AboutHeaderGrp />
        <div className="content-grp">
          <AboutIntro />
          <Education />
          <Works />
          <AboutProject />
          <GetInTouch />
        </div>
        <Copyright copyright_class="page-copyright pb-3" />
      </div>
    </>
  );
}
