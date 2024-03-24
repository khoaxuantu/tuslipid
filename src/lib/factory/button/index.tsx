import DefaultButton from "./default";
import GoTopButton from "./go_top";
import IconButton from "./icon";
import TagButton from "./tag";
import * as T from "./type";

export default function Button(props: T.AllButonProps) {
  switch (props.buttontype) {
    case "icon":
      return <IconButton {...props as T.IconButtonProps} />;
    case "go-top":
      return <GoTopButton />
    case "tag":
      return <TagButton {...props as T.TagsButtonProps} />

    default:
      return <DefaultButton {...props as T.DefaultButtonProps} />;
  }
}
