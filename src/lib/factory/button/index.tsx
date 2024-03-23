import { DefaultButton } from "./default";
import { IconButton } from "./icon";
import * as T from "./type";

export default function Button(props: T.AllButonTypes) {
  switch (props.buttonType) {
    case "icon":
      return <IconButton {...props as T.IconButtonProps} />;

    default:
      return <DefaultButton {...props as T.DefaultButtonProps} />;
  }
}
