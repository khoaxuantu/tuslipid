import Link from "next/link";
import { DefaultButtonProps } from "./type";

export default function DefaultButton(props: DefaultButtonProps) {
  return (
    <Link href={props.url as string} className={props.className}>
      {props.content}
    </Link>
  );
}
