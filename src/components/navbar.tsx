'use client';

import { useEffect } from "react";
import { DefaultButton } from "../lib/factory/buttonBase";
import { navBtnInfoList } from "../lib/general_info";

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
      target.className !== "navbar-trigger" &&
      target.className !== "navbar-menu"
    ) {
      navHandler("block", "none");
    }
  }

  function navHandler(navBtnDisplay: string, navBarDisplay: string): void {
    const navbtn = document.getElementsByClassName(
      "navbar-trigger"
    )[0] as HTMLElement;
    navbtn.style.display = navBtnDisplay;
    const navbar = document.getElementsByClassName(
      "navbar-menu"
    )[0] as HTMLElement;
    navbar.style.display = navBarDisplay;
  }

  return (
    <nav className="navbar navbar-wrap">
      <button
        type="button"
        className="navbar-trigger"
        aria-label="navbar"
        onClick={() => navHandler("none", "block")}
      ></button>
      <ul className="navbar-menu navbar-txt menu-animation">
        <li key="Home">
          <DefaultButton url="/" content="Home" />
        </li>
        {navBtnInfoList.map((btnProps) => {
          return (
            <li key={btnProps.content}>
              <DefaultButton url={btnProps.url} content={btnProps.content} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
