import { DefaultButton } from "./default";
import GoTopButton from "./go_top";
import { IconButton } from "./icon";
import * as T from "./type";

export default function Button(props: T.AllButonTypes) {
  switch (props.buttonType) {
    case "icon":
      return <IconButton {...props as T.IconButtonProps} />;
    case "go-top":
      return <GoTopButton />

    default:
      return <DefaultButton {...props as T.DefaultButtonProps} />;
  }
}
