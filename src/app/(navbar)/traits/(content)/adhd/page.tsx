import Header from "@/components/global/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ADHD",
  alternates: {
    canonical: "/traits/adhd",
  },
  openGraph: {
    title: "ADHD",
    url: "/traits/adhd",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADHD",
  },
};

export default async function Page() {
  const { default: Post } = await import("@/markdown/traits/adhd.mdx");

  return (
    <>
      <Header title="Tus's Traits - ADHD"></Header>
      <hr />
      <article className="single">
        <div className="container">
          <Post />
        </div>
      </article>
    </>
  );
}
