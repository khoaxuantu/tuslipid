import { PropsWithChildren, ReactNode } from "react";

interface HeaderProps extends PropsWithChildren {
  title: string;
  titleProps?: { id?: string };
  subtitle?: ReactNode;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <h1 id={props.titleProps?.id} className="pt-2 pb-2">
        {props.title}
      </h1>
      <blockquote className="mt-2">{props.subtitle}</blockquote>
      {props.children}
    </header>
  );
}
