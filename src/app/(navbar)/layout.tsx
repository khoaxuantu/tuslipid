import { Navbar } from "@/lib/components/navbar";
import { NavbarMobile } from "@/lib/components/navbar/mobile";
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
