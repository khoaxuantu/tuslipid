import createMdx from "@next/mdx";
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-device-detect"],
  },
  sassOptions: {
    loadPaths: [path.join(import.meta.dirname, "./scss")],
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
};

const withMdx = createMdx({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: ["remark-gfm", "remark-math"],
    rehypePlugins: ["rehype-highlight", "rehype-slug", "rehype-katex"],
  },
});

export default withMdx(nextConfig);
