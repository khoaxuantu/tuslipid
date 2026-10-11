import Header from "@/components/shared/header";
import TraitCard from "@/components/traits/card";
import { TRAIT_INFO_LIST } from "@/lib/general_info";
import { metadata } from "./layout";

export default function Page() {
  return (
    <>
      <Header title="Tus's Traits" subtitle={metadata.description}></Header>
      <main>
        <article className="trait-l-list">
          {TRAIT_INFO_LIST.map((item) => {
            return <TraitCard key={item.title} title={item.title} href={item.href} />;
          })}
        </article>
      </main>
    </>
  );
}
