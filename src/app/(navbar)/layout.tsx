import { Navbar } from "@/components/global/navbar";
import { NavbarMobile } from "@/components/global/navbar/mobile";
import React from "react";

export default function NavBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarMobile />
      <Navbar />
      {children}
    </>
  );
}
