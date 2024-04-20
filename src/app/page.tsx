'use client';

import { NavBtnGroup } from "@/components/button_group";
import Copyright from "@/components/copyright";
import MenuHeaderGrp from "@/components/menu/header";
import addOrientationHandler from "@/components/orientation";
import { useEffect, useState } from "react";

export default function TuslipidMenu() {
  const [orientation, setOrientation] = useState("center");
  useEffect(() => {
    setOrientation(addOrientationHandler());
  }, []);

  return (
    <>
      <div className="sl-c-overlay"></div>
      <div className={`sl-l-container menu-l-wrapper ${orientation} transition-menu`}>
        <MenuHeaderGrp />
        <NavBtnGroup />
        <Copyright className="sl-c-copyright__menu mt-5" />
      </div>
    </>
  );
}
