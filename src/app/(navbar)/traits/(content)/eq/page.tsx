import Header from "@/components/global/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EQ",
  alternates: {
    canonical: "/traits/eq",
  },
  openGraph: {
    title: "EQ",
    url: "/traits/eq",
  },
  twitter: {
    card: "summary_large_image",
    title: "EQ",
  },
};

export default async function Page() {
  const { default: Post } = await import(`@md/traits/eq.mdx`);
  return (
    <>
      <Header title="Tus's Traits - EQ"></Header>
      <hr />
      <article className="single">
        <div className="container">
          <Post />
        </div>
      </article>
    </>
  );
}
