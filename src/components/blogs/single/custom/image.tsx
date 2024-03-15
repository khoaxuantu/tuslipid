"use client";

import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  MouseEvent,
  useState,
} from "react";

export function CustomMdImg(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  const [fade, setFade] = useState(false);

  function extendHandler(e: MouseEvent<HTMLImageElement>) {
    setFade(!fade);
    const cell = e.target as HTMLElement;
    cell.classList.toggle("blog-c-img__extend");
    cell.classList.toggle("center");
  }

  return (
    <>
      {fade && <span className="sl-c-overlay"></span>}
      <img {...props} loading="lazy" onClick={(e) => extendHandler(e)} />
    </>
  );
}
