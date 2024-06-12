import Link from "next/link";
import { IconButtonProps } from "./type";

export default function IconButton(props: IconButtonProps) {
  return (
    <Link
      id={props.id}
      className={props.className}
      href={props.url as string}
      target="_blank"
      key={props.id}
    >
      {typeof props.icon === "string" ? (
        <ImageAndText {...props} />
      ) : (
        <props.icon
          className="sl-c-icon"
          width="1.5rem"
          height="1.5rem"
          color="var(--md-sys-color-on-secondary)"
          aria-label={props.id}
        />
      )}
    </Link>
  );
}

function ImageAndText(props: IconButtonProps) {
  return (
    <>
      <div className="sl-c-icon">
        <img className="p-1" src={props.icon as string} alt={"icon-" + props.name} width={32} />
      </div>
      <div id="name">{props.name}</div>
    </>
  );
}
