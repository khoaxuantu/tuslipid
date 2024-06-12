import { Navbar, NavbarMobile} from "@/components/navbar";
import React from "react";

export default function NavBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarMobile />
      <Navbar />
      {children}
    </>
  );
}
