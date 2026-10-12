import { MouseEventHandler } from "react";

export interface WorkProps {
  id?: string;
  name: string;
  content: {
    content_class?: string;
    title: string;
    time: string;
    location: string;
    description: string[];
    company: string;
  };
  className?: string;
  tabHandler?: MouseEventHandler<HTMLButtonElement>;
}
