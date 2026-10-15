import Header from "@/components/global/header";
import TraitCard from "@/components/traits/card";
import { TRAIT_INFO_LIST } from "@/lib/general_info";
import { metadata } from "./layout";
import "./page.scss";

export default function Page() {
  return (
    <>
      <Header title="Tus's Traits" subtitle={metadata.description}>
        <div className="container">
          <small>
            <i>
              Honestly, I never affirm either they are legitimate or not. I just only copied them
              via untrustworthy sources on the Internet. But it's fine, I know what is correct to
              me, what is incorrect, and what I don't know about myself. So... Just read it for fun,
              as one more thing about me.
            </i>
          </small>
        </div>
      </Header>
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
