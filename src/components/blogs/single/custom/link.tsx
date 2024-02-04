import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export function CustomMdLink(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) {
  return (props.href as string)[0] === "#" ? (
    <a href={props.href}>{props.children}</a>
  ) : (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}
