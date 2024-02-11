'use client';

import { useState, MouseEvent } from "react";

export default function MenuHeaderGrp() {
  const avaURLs: string[] = ["tuslipid_real.webp", "tuslipid.webp"];
  const [avaIndex, setAvaIndex] = useState(1);

  function avaHandler(e: MouseEvent) {
    setAvaIndex((avaIndex) => (avaIndex + 1) % avaURLs.length);
    e.preventDefault();
  }

  return (
    <div className="header-grp">
      <button className="menu-l-grp__avatar" onClick={(e) => avaHandler(e)}>
        <img
          className="transition-ava menu-c-img__avatar"
          src={avaURLs[avaIndex]}
          alt="Tuslipid's avatar"
          height={160}
          width={160}
        />
      </button>
      <div className="menu-c-txt__header mt-3">
        <b>Xuan Khoa Tu Nguyen</b>
      </div>
      <div className="menu-c-txt__body mt-3">
        <b>SWE @ Pixta</b>
      </div>
    </div>
  );
}
