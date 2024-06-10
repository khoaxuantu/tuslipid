'use client';

import { useEffect } from "react";
import { NAV_BTN_INFO_LIST } from "../lib/general_info";
import Button from "@/lib/factory/button";

function Navbar() {
  // Close navbar event handler, when you click everywhere except the opening navbar,
  // the navber should be closed
  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);

  function clickHandler(e: MouseEvent) {
    const target = e.target as HTMLInputElement;
    if (
      target.className !== "sl-js-navbar-trigger" &&
      target.className !== "sl-c-navbar__menu"
    ) {
      navHandler("block", "none");
    }
  }

  function navHandler(navBtnDisplay: string, navBarDisplay: string): void {
    const navbtn = document.getElementsByClassName(
      "sl-js-navbar-trigger"
    )[0] as HTMLElement;
    navbtn.style.display = navBtnDisplay;
    const navbar = document.getElementsByClassName(
      "sl-c-navbar__menu"
    )[0] as HTMLElement;
    navbar.style.display = navBarDisplay;
  }

  return (
    <nav className="sl-c-navbar sl-c-navbar__wrap">
      <button
        type="button"
        className="sl-js-navbar-trigger"
        aria-label="navbar"
        onClick={() => navHandler("none", "block")}
      ></button>
      <ul className="sl-c-navbar__menu sl-c-txt__navbar menu-animation">
        <li key="Home">
          <Button variant="default" url="/" content="Home" />
        </li>
        {NAV_BTN_INFO_LIST.map((btnProps) => {
          return (
            <li key={btnProps.content}>
              <Button variant="default" url={btnProps.url} content={btnProps.content} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
