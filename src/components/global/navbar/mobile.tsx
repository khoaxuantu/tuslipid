"use client";

import { NAV_BTN_INFO_LIST } from "@/lib/general_info";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ButtonTheme from "../../../components/global/button/theme";

import Link from "next/link";
import "./mobile.scss";

export function NavbarMobile() {
  const [showMenu, setShowMenu] = useState(false);

  if (!showMenu) {
    return (
      <nav className="mobile">
        <button
          id="nav"
          type="button"
          className="trigger"
          aria-label="navbar"
          onClick={() => setShowMenu(true)}
        ></button>
      </nav>
    );
  }

  return <NavbarMobileMenu setShowMenu={setShowMenu} />;
}

function NavbarMobileMenu(props: {
  setShowMenu: Dispatch<SetStateAction<boolean>>;
}) {
  // Close navbar event handler, when you click everywhere except the opening navbar,
  // the navber should be closed
  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  function clickHandler(e: MouseEvent) {
    const target = e.target as HTMLInputElement;
    if (target.className !== "trigger" && target.className !== "menu") {
      props.setShowMenu((prev) => !prev);
    }
  }

  return (
    <nav className="mobile">
      <ul className="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        {NAV_BTN_INFO_LIST.map((btnProps) => {
          return (
            <li key={btnProps.content}>
              <Link href={btnProps.url}>{btnProps.content}</Link>
            </li>
          );
        })}
        <li>
          <ButtonTheme />
        </li>
      </ul>
    </nav>
  );
}
