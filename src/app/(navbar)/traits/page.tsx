import Copyright from "@/components/copyright";
import TraitCard from "@/components/traits/card";
import { TRAIT_INFO_LIST } from "@/lib/general_info";
import { metadata } from "./layout";

export default function Page() {
  return (
    <>
      <header>
        <h1 className="pt-2 pb-2">My Trait</h1>
        <blockquote className="mt-2">{metadata.description}</blockquote>
      </header>
      <main>
        <article className="trait-l-list">
          {TRAIT_INFO_LIST.map((item) => {
            return <TraitCard key={item.title} title={item.title} href={item.href} />;
          })}
        </article>
      </main>
      <Copyright className="sl-c-copyright__page mt-5 pb-3" />
    </>
  );
}
