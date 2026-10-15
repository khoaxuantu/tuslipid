import Header from "@/components/global/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personality",
  alternates: {
    canonical: "/traits/personality",
  },
  openGraph: {
    title: "Personality",
    url: "/traits/personality",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personality",
  },
};

export default async function Page() {
  const { default: Post } = await import("@/markdown/traits/personality.mdx");

  return (
    <>
      <Header title="Tus's Traits - Personality"></Header>
      <hr />
      <article className="single">
        <div className="container">
          <Post />
        </div>
      </article>
    </>
  );
}
