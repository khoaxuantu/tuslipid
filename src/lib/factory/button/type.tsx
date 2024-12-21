import { TagsAction } from "@/lib/reducer/tag";
import { Dispatch, JSX, SVGProps } from "react";

type variant = "default" | "icon" | "go-top" | "tag" | "theme";

export interface IBaseButtonProps {
  id?: string;
  className?: string;
  variant: variant;
}

export interface DefaultButtonProps extends IBaseButtonProps {
  url?: string;
  content: string;
}

export interface TagsButtonProps extends DefaultButtonProps {
  dispatchActiveTags: Dispatch<TagsAction>;
}

export interface IconButtonProps extends IBaseButtonProps {
  icon: ((props: SVGProps<SVGSVGElement>) => JSX.Element) | string;
  url?: string;
  name?: string;
}

export interface ThemeButtonProps extends IBaseButtonProps {}

export type AllButonProps =
  | IBaseButtonProps
  | DefaultButtonProps
  | IconButtonProps
  | TagsButtonProps
  | ThemeButtonProps;
