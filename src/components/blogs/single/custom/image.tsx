import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export function CustomMdImg(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return <img {...props} loading="lazy" />
}
