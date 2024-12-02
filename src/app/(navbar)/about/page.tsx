import AboutHeaderGrp from "@/components/about/header";
import AboutIntro from "@/components/about/introduction";
import Works from "@/components/about/works";
import Education from "@/components/about/edu";
import { AboutProject } from "@/components/projects/projects";
import Copyright from "@/components/copyright";
import GetInTouch from "@/components/about/get_in_touch";
import { Metadata } from "next";
import { Skills } from "@/components/about/skills";

const aboutDescription = `Here comes my profile - from a mechanical engineering student to \
a computer science student then a full-stack developer`;
const aboutImage = "/seo/about-tuslipid.jpg";

export const metadata: Metadata = {
  title: "About me",
  description: aboutDescription,
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Tuslipid",
    description: aboutDescription,
    url: '/about',
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
      <div className="sl-l-container sl-l-wrapper about-l-wrapper transition-page">
        <AboutHeaderGrp />
        <main>
          <AboutIntro />
          <Works />
          <Education />
          <Skills />
          <AboutProject />
          <GetInTouch />
        </main>
        <Copyright className="sl-c-copyright__page pb-3" />
      </div>
    </>
  );
}
