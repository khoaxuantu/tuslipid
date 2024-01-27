import AboutHeaderGrp from "../../components/about/header";
import AboutIntro from "../../components/about/introduction";
import Works from "../../components/about/works";
import Education from "../../components/about/edu";
import { AboutProject } from "../../components/projects/projects";
import Copyright from "../../components/copyright";
import GetInTouch from "../../components/about/get_in_touch";
import { Metadata } from "next";

const aboutDescription = `Here comes my profile - from a mechanical engineering student to \
a computer science student then a full-stack developer`;
const aboutImage = "/seo/about-tuslipid.jpg";
const aboutURL = process.env.HOST_URL + "/about";

export const metadata: Metadata = {
  title: "About me",
  description: aboutDescription,
  metadataBase: new URL(aboutURL),
  openGraph: {
    title: "About Tuslipid",
    description: aboutDescription,
    url: aboutURL,
    type: "profile",
    images: aboutImage,
  },
  twitter: {
    title: "About Tuslipid",
    description: aboutDescription,
    images: aboutImage,
  },
};

export default function AboutPage() {
  return (
    <>
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
