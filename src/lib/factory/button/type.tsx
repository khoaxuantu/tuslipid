import { SVGProps } from "react";

type ButtonType = "default" | "icon" | "go-top";

export interface IBaseButtonProps {
  id?: string;
  url?: string;
  classname?: string;
  buttonType: ButtonType;
}

export interface DefaultButtonProps extends IBaseButtonProps {
  content: string;
}

export interface IconButtonProps extends IBaseButtonProps {
  icon: ((props: SVGProps<SVGSVGElement>) => JSX.Element) | string;
  name?: string;
  onClick?: any;
}

export type AllButonTypes = IBaseButtonProps | DefaultButtonProps | IconButtonProps;
