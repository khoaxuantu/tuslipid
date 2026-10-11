import Copyright from "@/components/copyright";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

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
    <div className="sl-l-container sl-l-container__md sl-l-wrapper trait-l-container transition-page">
      <link rel="preload stylesheet" href="/css/markdown.css" as="style" />
      {props.children}
      <Copyright className="sl-c-copyright__page mt-5 pb-3" />
    </div>
  );
}
