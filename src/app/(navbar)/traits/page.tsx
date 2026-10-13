import Header from "@/components/global/header";
import TraitCard from "@/components/traits/card";
import { TRAIT_INFO_LIST } from "@/lib/general_info";
import { metadata } from "./layout";
import "./page.scss";

export default function Page() {
  return (
    <>
      <Header title="Tus's Traits" subtitle={metadata.description}></Header>
      <article className="list">
        <div className="container">
          {TRAIT_INFO_LIST.map((item) => {
            return <TraitCard key={item.title} title={item.title} href={item.href} />;
          })}
        </div>
      </article>
    </>
  );
}
