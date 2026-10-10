import { Metadata } from "next";
import { PropsWithChildren } from "react";

const description =
  "I was built so complicated that it takes me a lot of effort to share about myself. Therefore, I reveal some references of my traits here, hope to help you understand me better.";
const thumb = "/seo/blogs-tuslipid.webp";

export const metadata: Metadata = {
  title: {
    default: "My trait",
    template: "My trait - %s",
  },
  description,
  alternates: {
    canonical: "/trait",
  },
  openGraph: {
    type: "article",
    title: {
      default: "My trait",
      template: "My trait - %s",
    },
    description,
    url: "/trait",
    images: thumb,
  },
  twitter: {
    images: thumb,
    description,
    title: {
      default: "My trait",
      template: "My trait - %s",
    },
  },
};

export default function Layout(props: PropsWithChildren) {
  return (
    <div className="sl-l-container sl-l-container__md sl-l-wrapper trait-l-container transition-page">
      {props.children}
    </div>
  );
}
