import Link from "next/link";
import { DefaultButtonProps } from "./type";

export function DefaultButton(props: DefaultButtonProps) {
  return (
    <Link href={props.url} className={props.classname}>
      {props.content}
    </Link>
  );
}
