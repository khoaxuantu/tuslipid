import Copyright from "@/components/copyright";
import MenuHeaderGrp from "@/components/menu/header";

import ButtonTheme from "@/lib/components/button/theme";
import { NAV_BTN_INFO_LIST } from "@/lib/general_info";
import Link from "next/link";
import "./page.scss";

export default function TuslipidMenu() {
  return (
    <main id="home">
      <div className="container">
        <MenuHeaderGrp />
        <section id="theme">
          <ButtonTheme />
        </section>
        <nav>
          {NAV_BTN_INFO_LIST.map((btnProp) => {
            return (
              <Link key={btnProp.content} href={btnProp.url}>
                <button>{btnProp.content}</button>
              </Link>
            );
          })}
        </nav>
        <Copyright />
      </div>
    </main>
  );
}
