import { PropsWithChildren, ReactNode } from "react";

interface HeaderProps extends PropsWithChildren {
  title: string;
  titleProps?: { id?: string };
  subtitle?: ReactNode;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <h1 id={props.titleProps?.id}>{props.title}</h1>
      {props.subtitle && <blockquote>{props.subtitle}</blockquote>}
      {props.children}
    </header>
  );
}
