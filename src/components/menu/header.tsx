"use client";

import { useState, MouseEvent } from "react";

export default function MenuHeaderGrp() {
  const avaURLs: string[] = ["tuslipid_real.webp", "tuslipid.webp"];
  const [avaIndex, setAvaIndex] = useState(1);

  function avaHandler(e: MouseEvent) {
    setAvaIndex((avaIndex) => (avaIndex + 1) % avaURLs.length);
    e.preventDefault();
  }

  return (
    <header>
      <button className="menu-l-grp__avatar" onClick={(e) => avaHandler(e)}>
        <img
          className="transition-ava menu-c-img__avatar"
          src={avaURLs[avaIndex]}
          alt="Tuslipid's avatar"
          width={160}
        />
      </button>
      <hgroup>
        <h2 className="mt-3">Xuan Khoa Tu Nguyen</h2>
        <h6 className="mt-3">SWE @ Pixta</h6>
      </hgroup>
    </header>
  );
}
