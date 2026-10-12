import Activities from "@/components/about/activities";
import Education from "@/components/about/edu";
import GetInTouch from "@/components/about/get_in_touch";
import AboutHeaderGrp from "@/components/about/header";
import AboutIntro from "@/components/about/introduction";
import { Skills } from "@/components/about/skills";
import Works from "@/components/about/works";
import Copyright from "@/components/copyright";
import { Metadata } from "next";

import "./page.scss";

const aboutDescription = `Here comes my profile - from a mechanical engineering student to \
a computer science student then a full-stack developer`;
const aboutImage = "/seo/about-tuslipid.jpg";

export const metadata: Metadata = {
  title: "About me",
  description: aboutDescription,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Tuslipid",
    description: aboutDescription,
    url: "/about",
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
    <main id="about">
      <AboutHeaderGrp />
      <hr />
      <article>
        <div className="container">
          <AboutIntro />
          <Works />
          <Education />
          <Activities />
          <Skills />
          {/*<AboutProject />*/}
          <GetInTouch />
          <Copyright />
        </div>
      </article>
    </main>
  );
}
