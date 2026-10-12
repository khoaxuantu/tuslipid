import { NavBtnGroup } from "@/components/button_group";
import Copyright from "@/components/copyright";
import MenuHeaderGrp from "@/components/menu/header";
import Button from "@/lib/factory/button";

import "./page.scss";

export default function TuslipidMenu() {
  return (
    <main id="home">
      <div className="container"></div>
      <MenuHeaderGrp />
      <Button variant="theme" className="p-3" />
      <NavBtnGroup />
      <Copyright className="sl-c-copyright__menu mt-5" />
    </main>
  );
}
