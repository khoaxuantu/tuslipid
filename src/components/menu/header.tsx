"use client";

import { MouseEvent, useState } from "react";

export default function MenuHeaderGrp() {
  const avaURLs: string[] = ["tuslipid_real.webp", "tuslipid.webp"];
  const [avaIndex, setAvaIndex] = useState(1);

  function avaHandler(e: MouseEvent) {
    setAvaIndex((avaIndex) => (avaIndex + 1) % avaURLs.length);
    e.preventDefault();
  }

  return (
    <header>
      <button className="avatar" onClick={(e) => avaHandler(e)}>
        <img
          src={avaURLs[avaIndex]}
          alt="Tuslipid's avatar"
          width={160}
          height={160}
        />
      </button>
      <hgroup>
        <h2>Xuan Khoa Tu Nguyen</h2>
        <h6>Software Engineer @ FPT Software</h6>
      </hgroup>
    </header>
  );
}
