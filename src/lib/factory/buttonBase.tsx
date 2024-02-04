import Link from "next/link";
import { SVGProps } from "react";

interface IBaseButtonProps {
  id?: string;
  url: string;
  classname?: string;
}

export interface DefaultButtonProps extends IBaseButtonProps {
  content: string;
}

export interface IconButtonProps extends IBaseButtonProps {
  icon: ((props: SVGProps<SVGSVGElement>) => JSX.Element) | string;
  name?: string;
  onClick?: any;
}

export function DefaultButton(props: DefaultButtonProps) {
  return (
    <Link href={props.url} className={props.classname}>
      {props.content}
    </Link>
  );
}

export function IconButton(props: IconButtonProps) {
  let Icon: any;
  if (typeof props.icon === "string") {
    Icon = (
      <>
        <div className="icon">
          <img
            className="m-1"
            src={props.icon}
            alt={"icon-" + props.id}
            width={32}
          />
        </div>
        <div id="name">{props.id}</div>
      </>
    );
  } else {
    Icon = (
      <props.icon
        className="icon"
        width="1.5rem"
        height="1.5rem"
        color="#000"
        aria-label={props.id}
      />
    );
  }

  return (
    <Link
      id={props.id}
      className={props.classname}
      href={props.url}
      target="_blank"
      key={props.id}
    >
      {Icon}
    </Link>
  );
}
