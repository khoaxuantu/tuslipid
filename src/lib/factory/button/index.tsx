import DefaultButton from "./default";
import GoTopButton from "./go_top";
import IconButton from "./icon";
import TagButton from "./tag";
import ThemeButton from "./theme";
import * as T from "./type";

export default function Button(props: T.AllButonProps) {
  switch (props.variant) {
    case "icon":
      return <IconButton {...(props as T.IconButtonProps)} />;
    case "go-top":
      return <GoTopButton />;
    case "tag":
      return <TagButton {...(props as T.TagsButtonProps)} />;
    case "theme":
      return <ThemeButton {...(props as T.ThemeButtonProps)} />;

    default:
      return <DefaultButton {...(props as T.DefaultButtonProps)} />;
  }
}
