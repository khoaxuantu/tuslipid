"use client";

import {
  DetailedHTMLProps,
  ImgHTMLAttributes,
  MouseEvent,
  useState,
} from "react";
import "./image.scss";

export function CustomMdImg(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
) {
  const [fade, setFade] = useState(false);

  function extendHandler(e: MouseEvent<HTMLImageElement>) {
    setFade(!fade);
    const cell = e.target as HTMLElement;
    cell.dataset.zoom = String(cell.dataset.zoom != "true");
  }

  return (
    <>
      {fade && <span className="overlay"></span>}
      <img
        {...props}
        loading="lazy"
        className="zoomable"
        onClick={(e) => extendHandler(e)}
        title={formatTitle(props.title as string)}
      />
    </>
  );
}

function formatTitle(s: string) {
  return `${s} (click to zoom in/out)`;
}
