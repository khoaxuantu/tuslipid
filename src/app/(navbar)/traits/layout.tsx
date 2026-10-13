import Copyright from "@/components/global/copyright";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./layout.scss";

const description =
  "I was built so complicated that it takes me a lot of effort to share about myself. Therefore, I reveal some references of my traits here, hope to help you understand me better.";
const thumb = "/seo/blogs-tuslipid.webp";

export const metadata: Metadata = {
  title: {
    default: "Traits",
    template: "Traits - %s",
  },
  description,
  alternates: {
    canonical: "/trait",
  },
  openGraph: {
    type: "article",
    title: {
      default: "Traits",
      template: "Traits - %s",
    },
    description,
    url: "/trait",
    images: thumb,
  },
  twitter: {
    card: "summary_large_image",
    images: thumb,
    description,
    title: {
      default: "Traits",
      template: "Traits - %s",
    },
  },
};

export default function Layout(props: PropsWithChildren) {
  return (
    <main id="trait">
      {props.children}
      <Copyright />
    </main>
  );
}
