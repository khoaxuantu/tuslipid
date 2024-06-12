import Navbar from "@/components/navbar";
import React from "react";

export default function NavBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
