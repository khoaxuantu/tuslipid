import { CustomMdImg } from "@/components/blogs/single/custom/image";
import { CustomMdLink } from "@/components/blogs/single/custom/link";
import { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  img: CustomMdImg,
  a: CustomMdLink,
};

export function useMDXComponents() {
  return components;
}
