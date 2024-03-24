import { TagsAction } from "@/lib/reducer/tag";
import { Dispatch, SVGProps } from "react";

type ButtonType = "default" | "icon" | "go-top" | "tag";

export interface IBaseButtonProps {
  id?: string;
  url?: string;
  classname?: string;
  buttontype: ButtonType;
}

export interface DefaultButtonProps extends IBaseButtonProps {
  content: string;
}

export interface TagsButtonProps extends DefaultButtonProps {
  dispatchActiveTags: Dispatch<TagsAction>;
}

export interface IconButtonProps extends IBaseButtonProps {
  icon: ((props: SVGProps<SVGSVGElement>) => JSX.Element) | string;
  name?: string;
}

export type AllButonProps =
  | IBaseButtonProps
  | DefaultButtonProps
  | IconButtonProps
  | TagsButtonProps;
