import Navbar from "@/components/navbar";
import ThemeProvider from "@/lib/provider/theme.provider";
import React from "react";

export default function NavBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
