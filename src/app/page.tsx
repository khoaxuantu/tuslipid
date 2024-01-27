'use client';

import { NavBtnGroup } from "@/components/button";
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
      <div className="background-overlay"></div>
      <div className={`container menu-wrapper ${orientation} transition-menu`}>
        <MenuHeaderGrp />
        <NavBtnGroup />
        <Copyright copyright_class="menu-copyright mt-5" />
      </div>
    </>
  );
}
