'use client';

import { NavBtnGroup } from "@/components/button_group";
import Copyright from "@/components/copyright";
import MenuHeaderGrp from "@/components/menu/header";
import addOrientationHandler from "@/components/orientation";
import Button from "@/lib/factory/button";
import { useEffect } from "react";

export default function TuslipidMenu() {
  useEffect(() => {
    addOrientationHandler();
  }, []);

  return (
    <div className="sl-l-container menu-l-wrapper center transition-menu">
      <MenuHeaderGrp />
      <Button variant="theme" className="p-3" />
      <NavBtnGroup />
      <Copyright className="sl-c-copyright__menu mt-5" />
    </div>
  );
}
