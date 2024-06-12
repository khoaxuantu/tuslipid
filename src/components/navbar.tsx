'use client';

import { useEffect } from "react";
import { NAV_BTN_INFO_LIST } from "../lib/general_info";
import Button from "@/lib/factory/button";

export function NavbarMobile() {
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
      target.className !== "sl-c-navmobile__menu"
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
      "sl-c-navmobile__menu"
    )[0] as HTMLElement;
    navbar.style.display = navBarDisplay;
  }

  return (
    <nav className="sl-c-navmobile sl-c-navmobile__wrap">
      <button
        id="nav"
        type="button"
        className="sl-js-navbar-trigger"
        aria-label="navbar"
        onClick={() => navHandler("none", "block")}
      ></button>
      <ul className="sl-c-navmobile__menu sl-c-txt__navbar menu-animation">
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
        <li>
          <Button variant="theme" className="p-2" />
        </li>
      </ul>
    </nav>
  );
}

export function Navbar() {
  return (
    <nav className="sl-c-nav p-3">
      <ul>
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
        <li style={{ float: "right" }}>
          <Button variant="theme" />
        </li>
      </ul>
    </nav>
  );
}
