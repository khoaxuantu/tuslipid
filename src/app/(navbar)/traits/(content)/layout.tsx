import { PropsWithChildren } from "react";
import "./layout.scss";

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
