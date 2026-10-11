import Header from "@/components/shared/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IQ",
  alternates: {
    canonical: "/traits/iq",
  },
  openGraph: {
    title: "IQ",
    url: "/traits/iq",
  },
  twitter: {
    card: "summary_large_image",
    title: "IQ",
  },
};

export default async function Page() {
  const { default: Post } = await import(`@md/traits/iq.mdx`);

  return (
    <>
      <Header title="Tus's Traits - IQ">
        <hr />
      </Header>
      <main>
        <article className="trait-l-article">
          <Post />
        </article>
      </main>
    </>
  );
}
